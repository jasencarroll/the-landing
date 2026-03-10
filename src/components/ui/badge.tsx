import { cva, type VariantProps } from 'class-variance-authority';
import type * as React from 'react';
import { cn } from '@/lib/utils';

const badgeVariants = cva('inline-flex items-center font-mono text-xs tracking-wider border', {
	variants: {
		variant: {
			default: 'border-border text-muted px-2 py-0.5',
			primary: 'border-primary/40 text-primary bg-primary/10 px-2 py-0.5'
		}
	},
	defaultVariants: { variant: 'default' }
});

export interface BadgeProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
	return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
