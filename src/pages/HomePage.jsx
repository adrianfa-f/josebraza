import Header from '../componentes/Header';
import HeroSection from '../componentes/HeroSection';
import FeaturesSection from '../componentes/FeaturesSection';
import AboutPreview from '../componentes/AboutPreview';
import EnvironmentalSection from '../componentes/EnvironmentalSection';
import WriteUsSection from '../componentes/WriteUsSection';
import Footer from '../componentes/Footer';
import RevealOnScroll from '../componentes/RevealOnScroll';

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow">
                <RevealOnScroll>
                    <HeroSection />
                </RevealOnScroll>
                <FeaturesSection />
                <RevealOnScroll>
                    <AboutPreview />
                </RevealOnScroll>
                <RevealOnScroll>
                    <EnvironmentalSection />
                </RevealOnScroll>
                <RevealOnScroll>
                    <WriteUsSection />
                </RevealOnScroll>
            </main>

            <Footer />
        </div>
    );
}