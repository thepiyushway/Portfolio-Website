import { forwardRef, type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ReactNode, type Ref } from 'react';
import { cn } from '@/lib/cn';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'md' | 'lg';

type CommonProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'border border-brand-primary bg-brand-primary text-white shadow-soft hover:bg-brand-hover hover:shadow-elevated focus-visible:ring-brand-primary/30',
  secondary:
    'border border-brand-primary/30 bg-surface-base text-brand-primary hover:bg-brand-primary/10 hover:text-brand-hover focus-visible:ring-brand-primary/20',
  ghost: 'border border-transparent bg-transparent text-text-secondary hover:bg-surface-subtle focus-visible:ring-slate-200'
};

const sizeClasses: Record<ButtonSize, string> = {
  md: 'h-11 px-5 text-sm font-semibold',
  lg: 'h-12 px-6 text-sm font-semibold'
};

const baseClass =
  'inline-flex items-center justify-center gap-2 rounded-xl transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2';

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ children, className, variant = 'primary', size = 'md', ...props }, ref) => {
    const classes = cn(baseClass, variantClasses[variant], sizeClasses[size], className);

    if ('href' in props && props.href) {
      const { href, target, rel, ...anchorProps } = props;
      return (
        <a
          ref={ref as Ref<HTMLAnchorElement>}
          href={href}
          target={target}
          rel={rel}
          className={classes}
          {...anchorProps}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref as Ref<HTMLButtonElement>}
        type={(props as ButtonAsButton).type ?? 'button'}
        className={classes}
        {...(props as ButtonAsButton)}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
