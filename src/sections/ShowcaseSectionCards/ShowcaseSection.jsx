import React, { useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const introRef = useRef(null);
    const portraitRefs = useRef([]);
    const landscapeRefs = useRef([]);

    useGSAP(() => {
        const all = [introRef.current, ...portraitRefs.current, ...landscapeRefs.current];
        all.forEach((card, index) => {
            gsap.fromTo(
                card,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.2 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100',
                    },
                }
            );
        });
    }, []);

    const portraitCards = [
        {
            title: "🎬 YouTube Shorts",
            to: "/shorts",
            img: "/stmotions/images/yt-shorts.png",
        },
        {
            title: "📱 TikTok / Insta Reels",
            to: "/reels",
            img: "/stmotions/images/insta-reels.png",
        },
    ];

    const landscapeCards = [
        {
            title: "📽️ Youtube / Long Videos",
            to: "/youtube-long-videos",
            img: "/stmotions/images/yt-long.png",
        },
        {
            title: "🎞️ AD /  Course Videos",
            to: "/ad-course-videos",
            img: "/stmotions/images/ad-course-videos.png",
        },
    ];

    return (
        <section id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout xl:flex-row flex-col justify-between gap-10 xl:min-h-screen">

                    {/* LEFT SIDE */}
                    <div className="xl:w-[60%] w-full flex flex-col gap-10">
                        {/* Intro video */}
                        <div
                            ref={introRef}
                            className="relative w-full rounded-xl overflow-hidden"
                            style={{ height: "60vh" }}
                        >
                            <iframe
                                src="https://www.youtube.com/embed/hiJEuoWqaFg?rel=0"
                                title="Intro Video"
                                allowFullScreen
                                className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
                            ></iframe>
                        </div>

                        {/* Two portrait cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {portraitCards.map((item, i) => (
                                <Link
                                    to={item.to}
                                    key={i}
                                    ref={(el) => (portraitRefs.current[i] = el)}
                                    className="card-border rounded-xl overflow-hidden bg-black-200"
                                >
                                    <div
                                        className="h-[380px] bg-black-200"
                                        style={{ backgroundColor: item.bg }}
                                    >
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="w-full h-full object-cover rounded-xl"
                                        />
                                    </div>
                                    <h2 className="text-white font-semibold text-lg mt-3 px-3 pb-3">
                                        {item.title}
                                    </h2>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="xl:w-[40%] w-full flex flex-col gap-6 xl:h-auto xl:max-h-[calc(60vh+380px+2.5rem)]">
                        {landscapeCards.map((item, i) => (
                            <Link
                                to={item.to}
                                key={i}
                                ref={(el) => (landscapeRefs.current[i] = el)}
                                className="card-border rounded-xl overflow-hidden bg-black-200 flex-1 flex flex-col"
                            >
                                {/* Image Section */}
                                <div
                                    className="flex-grow bg-black-200"
                                    style={{ backgroundColor: item.bg }}
                                >
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover rounded-xl"
                                    />
                                </div>

                                {/* Title Section */}
                                <h2 className="text-white font-semibold text-lg mt-3 px-3 pb-3">
                                    {item.title}
                                </h2>
                            </Link>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ShowcaseSection;
