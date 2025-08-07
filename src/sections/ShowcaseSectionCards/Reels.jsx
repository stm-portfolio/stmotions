import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Shorts = () => {
    const videos = [
        {
            title: "Short – ST Motions",
            url: "https://drive.google.com/file/d/1MqSICCwNT3dORT7xv8bd-3otA5l_lZ7z/preview",
        },
        {
            title: "Person's Introduction",
            url: "https://drive.google.com/file/d/1gTAbSctjm0d00Usp9fF0SQ78BY5e0B40/preview",
        },
        {
            title: "Comparison Random Edits",
            url: "https://drive.google.com/file/d/1FqkSjP7lGoj70zwJMgZqKUS9JSfRbejP/preview",
        },

    ];

    const [current, setCurrent] = useState(0);
    const total = videos.length;

    const cardRefs = useRef([]);

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

    const prevSlide = () => {
        if (current > 0) setCurrent((prev) => prev - 1);
    };

    const nextSlide = () => {
        if (current < total - 1) setCurrent((prev) => prev + 1);
    };

    return (
        <div className="section-padding text-white">
            <h1 className="text-3xl font-bold mb-10">🎬 Insta Reels</h1>

            {/* MOBILE SLIDER */}
            <div className="sm:hidden relative w-full max-w-[90vw] mx-auto">
                <div className="relative w-full h-[70vh] overflow-hidden rounded-xl">
                    <iframe
                        key={current}
                        src={videos[current].url}
                        title={videos[current].title}
                        allow="autoplay"
                        className="w-full h-full rounded-xl animate-fade-in transition-all duration-500 ease-in-out"
                    ></iframe>
                </div>

                <p className="text-center text-sm mt-2">{videos[current].title}</p>

                {current > 0 && (
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 left-0 -translate-y-1/2 text-3xl px-3 py-1 bg-black/60 rounded-r-md"
                    >
                        ❮
                    </button>
                )}
                {current < total - 1 && (
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 right-0 -translate-y-1/2 text-3xl px-3 py-1 bg-black/60 rounded-l-md"
                    >
                        ❯
                    </button>
                )}
            </div>

            {/* DESKTOP GRID VIEW */}
            <div className="hidden sm:flex flex-wrap justify-center gap-x-4 gap-y-6">
                {videos.map((video, idx) => (
                    <div
                        key={idx}
                        ref={(el) => (cardRefs.current[idx] = el)}
                        className="flex flex-col items-center"
                    >
                        <div className="w-[180px] h-[320px] overflow-hidden rounded-lg">
                            <iframe
                                src={video.url}
                                title={video.title}
                                allow="autoplay"
                                className="w-full h-full"
                            ></iframe>
                        </div>
                        <p className="text-white-50 text-sm text-center mt-2">
                            {video.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shorts;
