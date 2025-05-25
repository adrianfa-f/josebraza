export default function Section({ children, className }) {
    return (
        <section className={`py-16 ${className}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {children}
            </div>
        </section>
    );
}