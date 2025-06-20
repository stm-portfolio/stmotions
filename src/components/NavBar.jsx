import { navLinks } from "../constants/index.js";
import { useEffect, useState } from "react";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScrolled = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        window.addEventListener("scroll", handleScrolled);
        return () => window.removeEventListener("scroll", handleScrolled);
    }, []);

    return (
        <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
            <div className="inner mx-auto flex items-center relative lg:justify-between justify-center w-full h-16 px-5 md:px-10">

            {/* Mobile Menu Toggle Button */}
                {!mobileMenuOpen && (
                    <button
                        className="lg:hidden fixed top-6 left-5 z-[300] text-white text-3xl"
                        onClick={() => setMobileMenuOpen(true)}
                        aria-label="Open menu"
                    >
                        &#9776;
                    </button>

                )}

                {/* Dimmed background (click to close) */}
                {mobileMenuOpen && (
                    <div
                        className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm z-[150]"
                        onClick={() => setMobileMenuOpen(false)}
                    />
                )}



                {/* Logo */}
                <a
                    href="#hero"
                    className="logo absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 lg:static lg:translate-x-0 lg:translate-y-0 z-[250]
  text-white-50 text-xl md:text-2xl font-semibold transition-transform duration-300 hover:scale-105"
                >
                    NIVSEN
                </a>



                {/* Desktop nav */}
                <nav className="desktop">
                    <ul>
                        {navLinks.map(({ link, name }) => (
                            <li key={name} className="group">
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className="underline" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Contact button */}
                <a
                    href="#contact"
                    className="contact-btn group absolute right-0.5 top-7 -translate-y-1/2 lg:static lg:translate-y-0"
                >
                    <div className="inner">
                        <span>Contact me</span>
                    </div>
                </a>


            </div>

            {/* Mobile Slide-in Menu */}
            <div
                className={`fixed top-0 left-0 h-screen w-3/4 bg-black/90 backdrop-blur-md z-[200]
    transform transition-transform duration-500 ease-in-out
    ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                {/* Close button inside */}
                <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="absolute top-6 left-6 text-white text-3xl z-[210]"
                    aria-label="Close menu"
                >
                    ✕
                </button>

                {/* Nav items */}
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
