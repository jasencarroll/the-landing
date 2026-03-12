from unittest.mock import patch

from app.routes import contact as contact_mod


def test_contact_success(client):
    contact_mod._rate_limits.clear()
    with patch("app.routes.contact.resend") as mock_resend:
        r = client.post(
            "/api/contact",
            json={"name": "Jane", "email": "jane@example.com", "message": "Hello"},
        )
    assert r.status_code == 200
    assert r.json()["message"] == "Message sent. I'll be in touch."
    mock_resend.Emails.send.assert_called_once()
    call_args = mock_resend.Emails.send.call_args[0][0]
    assert call_args["reply_to"] == "jane@example.com"
    assert "Jane" in call_args["subject"]


def test_contact_missing_name(client):
    r = client.post(
        "/api/contact",
        json={"name": "", "email": "a@b.com", "message": "Hi"},
    )
    assert r.status_code == 400


def test_contact_invalid_email(client):
    r = client.post(
        "/api/contact",
        json={"name": "Jane", "email": "notanemail", "message": "Hi"},
    )
    assert r.status_code == 400


def test_contact_empty_message(client):
    r = client.post(
        "/api/contact",
        json={"name": "Jane", "email": "a@b.com", "message": "   "},
    )
    assert r.status_code == 400


def test_contact_name_too_long(client):
    r = client.post(
        "/api/contact",
        json={"name": "x" * 101, "email": "a@b.com", "message": "Hi"},
    )
    assert r.status_code == 422


def test_contact_message_too_long(client):
    r = client.post(
        "/api/contact",
        json={"name": "Jane", "email": "a@b.com", "message": "x" * 2001},
    )
    assert r.status_code == 422


def test_contact_rate_limit(client):
    contact_mod._rate_limits.clear()
    with patch("app.routes.contact.resend"):
        client.post(
            "/api/contact",
            json={"name": "A", "email": "a@b.com", "message": "1"},
        )
        client.post(
            "/api/contact",
            json={"name": "B", "email": "b@b.com", "message": "2"},
        )
        r = client.post(
            "/api/contact",
            json={"name": "C", "email": "c@b.com", "message": "3"},
        )
    assert r.status_code == 429
