export default function SectionTitle({ 
    title, 
    subtitle, 
    className = '',
    align = 'left',
    titleSize = 'text-4xl',
    accentColor = 'text-amber-600'
}) {
    const alignmentStyles = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right'
    };

    return (
        <div className={`mb-12 ${alignmentStyles[align]} ${className}`}>
            {subtitle && (
                <p className={`${accentColor} font-semibold uppercase tracking-wide mb-3`}>
                    {subtitle}
                </p>
            )}
          
            <h2 className={`${titleSize} font-bold text-gray-900 leading-tight mb-4`}>
                {title}
            </h2>
          
            {(align === 'left' || align === 'center') && (
                <div className={`${alignmentStyles[align]} w-20 h-1 bg-amber-500`} />
            )}
        </div>
    );
}