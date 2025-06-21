import { navLinks } from "../constants/index.js";
import { useEffect, useState } from "react";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScrolled = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScrolled);
        return () => window.removeEventListener("scroll", handleScrolled);
    }, []);

    return (
        <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
            <div className="inner mx-auto flex items-center justify-between w-full h-20 px-1 md:px-2 relative">
                {/* LOGO - left for all devices */}
                <a href="#hero" className="z-[250]">
                    <img
                        src="/stmotions/images/stmotionslogo/stmlogo.png"
                        alt="Logo"
                        className="h-16 md:h-24 w-auto object-contain"
                    />
                </a>

                {/* CONTACT BUTTON - center for mobile */}
                {!mobileMenuOpen && (
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:hidden z-[260]">
                        <a
                            href="#contact"
                            className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium shadow-sm"
                        >
                            Contact Us
                        </a>
                    </div>
                )}

                {/* TOGGLE BUTTON - right for mobile */}
                {!mobileMenuOpen && (
                    <button
                        className="lg:hidden z-[300] text-white text-3xl"
                        onClick={() => setMobileMenuOpen(true)}
                        aria-label="Open menu"
                    >
                        &#9776;
                    </button>
                )}

                {/* CONTACT BUTTON - right for desktop */}
                <a
                    href="#contact"
                    className="hidden lg:flex contact-btn group z-[250]"
                >
                    <div className="inner">
                        <span>Contact Us</span>
                    </div>
                </a>

                {/* DESKTOP NAV - center */}
                <nav className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[200]">
                    <ul className="flex space-x-8 text-white">
                        {navLinks.map(({ link, name }) => (
                            <li key={name} className="group relative">
                                <a href={link} className="relative inline-block">
                                    <span className="relative z-10">{name}</span>
                                    <span
                                        className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Dimmed background for mobile menu */}
            {mobileMenuOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm z-[150]"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}

            {/* Slide-in mobile menu from right */}
            <div
                className={`fixed top-0 right-0 h-screen w-3/4 bg-black/90 backdrop-blur-md z-[200] transform transition-transform duration-500 ease-in-out ${
                    mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* Close button */}
                <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="absolute top-2 right-2 text-white text-3xl z-[210]"
                    aria-label="Close menu"
                >
                    ✕
                </button>

                {/* Mobile nav items */}
                <ul className="flex flex-col space-y-6 text-white text-xl pt-24 px-6">
                    {navLinks.map(({ link, name }) => (
                        <li key={name} onClick={() => setMobileMenuOpen(false)}>
                            <a href={link}>{name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default NavBar;
