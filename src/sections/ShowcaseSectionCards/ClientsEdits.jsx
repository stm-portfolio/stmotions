import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const videos = [
    {
        title: 'Portrait – Makeup Studio',
        url: 'https://drive.google.com/file/d/FILE_ID_1/preview',
        type: 'portrait'
    },
    {
        title: 'Landscape – Product Edit',
        url: 'https://drive.google.com/file/d/FILE_ID_2/preview',
        type: 'landscape'
    },
    {
        title: 'Landscape – Interview Clip',
        url: 'https://drive.google.com/file/d/FILE_ID_3/preview',
        type: 'landscape'
    },
    {
        title: 'Portrait – Instagram Ad',
        url: 'https://drive.google.com/file/d/FILE_ID_4/preview',
        type: 'portrait'
    },
    {
        title: 'Portrait – Testimonial',
        url: 'https://drive.google.com/file/d/FILE_ID_5/preview',
        type: 'portrait'
    },
    {
        title: 'Portrait – Behind the Scenes',
        url: 'https://drive.google.com/file/d/FILE_ID_6/preview',
        type: 'portrait'
    }
];

const Clients = () => {
    const cardRefs = useRef([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useGSAP(() => {
        cardRefs.current.forEach((card, i) => {
            gsap.fromTo(
                card,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.15 * i,
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100',
                    },
                }
            );
        });
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev < videos.length - 1 ? prev + 1 : prev));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
    };

    return (
        <div className="min-h-screen bg-black text-white px-4 py-10">
            <h1 className="text-2xl sm:text-3xl font-bold mb-8 flex items-center">
                <span className="text-blue-400 mr-2">🎞️</span> Client Edits
            </h1>

            {/* Desktop Grid Layout - centered */}
            <div className="hidden sm:flex gap-6 max-w-[900px] mx-auto">
                {/* Left Portrait */}
                <div
                    className="flex flex-col items-center w-[180px]"
                    ref={(el) => (cardRefs.current[0] = el)}
                >
                    <div className="w-full h-[320px] overflow-hidden rounded-lg border border-gray-700">
                        <iframe
                            src={videos[0].url}
                            title={videos[0].title}
                            allow="autoplay"
                            className="w-full h-full border-none overflow-hidden"
                        ></iframe>
                    </div>
                    <p className="mt-2 text-center text-sm text-gray-300">{videos[0].title}</p>
                </div>

                {/* Middle stacked landscape videos */}
                <div className="flex flex-col gap-4" style={{ minWidth: '320px' }}>
                    {[1, 2].map((index) => (
                        <div
                            key={index}
                            ref={(el) => (cardRefs.current[index] = el)}
                            className="flex flex-col items-center"
                        >
                            <div className="w-[320px] h-[180px] overflow-hidden rounded-lg border border-gray-700">
                                <iframe
                                    src={videos[index].url}
                                    title={videos[index].title}
                                    allow="autoplay"
                                    className="w-full h-full border-none overflow-hidden"
                                ></iframe>
                            </div>
                            <p className="mt-2 text-center text-sm text-gray-300">{videos[index].title}</p>
                        </div>
                    ))}
                </div>

                {/* Right two portraits side by side */}
                <div className="flex gap-4 w-[360px]">
                    {[3, 4].map((index) => (
                        <div
                            key={index}
                            ref={(el) => (cardRefs.current[index] = el)}
                            className="flex flex-col items-center w-1/2"
                        >
                            <div className="w-full h-[320px] overflow-hidden rounded-lg border border-gray-700">
                                <iframe
                                    src={videos[index].url}
                                    title={videos[index].title}
                                    allow="autoplay"
                                    className="w-full h-full border-none overflow-hidden"
                                ></iframe>
                            </div>
                            <p className="mt-2 text-center text-sm text-gray-300">{videos[index].title}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile Slider */}
            <div className="sm:hidden relative">
                <div className="w-full h-[400px] overflow-hidden rounded-xl transition-all duration-500 ease-in-out">
                    <iframe
                        src={videos[currentIndex].url}
                        title={videos[currentIndex].title}
                        allow="autoplay"
                        className="w-full h-full border-none overflow-hidden"
                    ></iframe>
                </div>
                <p className="mt-2 text-center text-sm text-gray-300">{videos[currentIndex].title}</p>

                {/* Navigation Arrows */}
                <div className="flex justify-between mt-4 px-4">
                    {currentIndex > 0 && (
                        <button onClick={prevSlide} className="text-white bg-gray-700 px-3 py-1 rounded-full">
                            ◀
                        </button>
                    )}
                    {currentIndex < videos.length - 1 && (
                        <button onClick={nextSlide} className="text-white bg-gray-700 px-3 py-1 rounded-full ml-auto">
                            ▶
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Clients;
