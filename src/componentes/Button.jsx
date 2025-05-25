export default function Button({ 
    children, 
    variant = 'primary', 
    className, 
    ...props 
}) {
    const variants = {
        primary: 'bg-amber-600 text-white hover:bg-amber-700',
        outline: 'border-2 border-amber-600 text-amber-600 hover:bg-amber-50',
        link: 'hover:underline underline-offset-4'
    };

    return (
        <button
            className={`px-8 py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}