import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const YtLongVideos = () => {
    const videos = [
        {
            title: "Cinematic B-roll – Nature",
            url: "https://drive.google.com/file/d/1KyPzsRRzlsp1tYlQlntovdC3c1iGa8nC/preview",
        },
        {
            title: "Slow Motion Urban Shot",
            url: "https://drive.google.com/file/d/1Kz59NOhYcEC2UIoM8RtRWIpjMK1fMoZm/preview",
        },
        {
            title: "Product B-roll – Coffee",
            url: "https://drive.google.com/file/d/1CatCAKw-x3TkET-C1ov0AnSgMKaIILDz/preview",
        },
        {
            title: "Lifestyle B-roll Sequence",
            url: "https://drive.google.com/file/d/1pmxwl7qprGr9xcmtvcedmDMSg8CiSr1H/preview",
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
            <h1 className="text-3xl font-bold mb-10">📽️ Youtube Long Videos</h1>

            {/* MOBILE SLIDER */}
            <div className="sm:hidden relative w-full max-w-[90vw] mx-auto">
                <div className="relative w-full h-[220px] overflow-hidden rounded-xl">
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
            <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
                {videos.map((video, idx) => (
                    <div
                        key={idx}
                        ref={(el) => (cardRefs.current[idx] = el)}
                        className="flex flex-col items-center"
                    >
                        <div className="w-[100%] h-[220px] overflow-hidden rounded-lg">
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

export default YtLongVideos;
