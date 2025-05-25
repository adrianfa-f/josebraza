import { FaMountain, FaPhone, FaWhatsapp } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from 'react';
import { FiMenu, FiX } from "react-icons/fi";
import { useClickOutside } from '../hooks/useClickOutside';
import RevealOnScroll from "./RevealOnScroll";


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const menuRef = useRef();
    useClickOutside(menuRef, () => setIsMenuOpen(false));

    useEffect(() => {
        console.log("Location: ", location)
        setIsMenuOpen(false);
    }, [location]);

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <FaMountain className="text-3xl hidden md:block text-amber-600" />
                        <span className="text-2xl font-bold tracking-tight text-gray-900">Jose Braza e hijos S.A</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <NavLink 
                            to="/"
                            className={({isActive}) => 
                                `hover:text-amber-600 transition-colors ${
                                    isActive ? 'text-amber-600' : 'text-gray-700'
                                }`
                            }
                        >
                            Inicio
                        </NavLink>
                        <NavLink to="/productos" className="hover:text-amber-600 transition-colors text-gray-700">
                            Productos
                        </NavLink>
                        <NavLink to="/proyectos" className="hover:text-amber-600 transition-colors text-gray-700">
                            Proyectos
                        </NavLink>
                        <NavLink to="/contacto" className="hover:text-amber-600 transition-colors text-gray-700">
                            Contacto
                        </NavLink>
                        <NavLink to="/sostenibilidad" className="hover:text-amber-600 transition-colors text-gray-700">
                            Sostenibilidad
                        </NavLink>
                        <NavLink to="/nosotros" className="hover:text-amber-600 transition-colors text-gray-700">
                            About Us
                        </NavLink>
                    </nav>
                    
                    {/* Contact Info - Desktop */}
                    <div className="hidden md:flex items-center gap-4">
                        <a href="tel:+34956237910" className="flex items-center gap-2 text-gray-700 hover:text-amber-600">
                            <FaPhone className="text-lg" />
                            <a href="https://wa.me/34956237910" target="_blank" rel="noopener noreferrer">
                                <span>+34 956237910</span>
                            </a>
                        </a>
                    </div>
                    
                    {/* Mobile Menu Trigger */}
                    <button 
                    className="md:hidden text-gray-700"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                    </button>

                    {/* Menú Desplegable Mobile */}
                    {isMenuOpen && (
                        <div ref={menuRef} className="fixed top-16 inset-x-0 bg-white shadow-xl md:hidden z-50">
                            <div className="p-4 space-y-2">
                                <RevealOnScroll delay={100}>
                                    <Link to="/" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 rounded-lg transition-colors">
                                        Inicio
                                    </Link>
                                </RevealOnScroll>
                                <RevealOnScroll delay={200}>
                                    <Link to="/productos" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 rounded-lg transition-colors">
                                        Productos
                                    </Link>
                                </RevealOnScroll>
                                <RevealOnScroll delay={300}>
                                    <Link to="/contacto" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 rounded-lg transition-colors">
                                        Contacto
                                    </Link>
                                </RevealOnScroll>
                                <RevealOnScroll delay={400}>
                                    <Link to="/sostenibilidad" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 rounded-lg transition-colors">
                                        Sostenibilidad
                                    </Link>
                                </RevealOnScroll>
                                <RevealOnScroll delay={500}>
                                    <Link to="/nosotros" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 rounded-lg transition-colors">
                                        About Us
                                    </Link>
                                </RevealOnScroll>
                                <RevealOnScroll delay={600}>
                                    <a
                                        href="https://wa.me/34956237910"
                                        className="block mx-4 mt-4 bg-green-500 text-white text-center py-3 px-6 rounded-full hover:bg-green-600 transition-colors"
                                        onClick={() => setIsMenuOpen(false)} // Solo necesario para enlaces externos
                                    >
                                        <FaWhatsapp className="inline mr-2" />
                                        Contactanos
                                    </a>
                                </RevealOnScroll>                             

                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}