import { NavLink } from 'react-router-dom';

export default function ButtonLink({
    to,
    children,
    variant = 'primary',
    className = '',
    ...props
}) {
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all gap-2';
    
    const variants = {
        primary: `bg-amber-600 text-white hover:bg-amber-700 px-8 py-3`,
        outline: `border-2 border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-3`,
        link: `hover:underline underline-offset-4 text-amber-600 hover:text-amber-700`
    };

    const variantClasses = variants[variant] || variants.primary;

    return variant === 'link' ? (
        <NavLink
            to={to}
            className={`${baseStyles} ${variantClasses} ${className}`}
            {...props}
        >
            {children}
        </NavLink>
    ) : (
        <NavLink
            to={to}
            className={`${baseStyles} ${variantClasses} ${className}`}
            {...props}
        >
            {children}
        </NavLink>
    );
}