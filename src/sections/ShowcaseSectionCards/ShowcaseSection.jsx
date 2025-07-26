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

    // Portrait (tall) cards: go under intro (left side)
    const portraitCards = [
        {
            title: "🎬 YouTube Shorts",
            to: "/shorts",
            bg: "#ffefdb",
            img: "/stmotions/images/shorts.png",
        },
        {
            title: "📱 TikTok / Insta Reels",
            to: "/reels",
            bg: "#fef5e4",
            img: "/stmotions/images/reels.png",
        },
    ];

    // Landscape cards: right side
    const landscapeCards = [
        {
            title: "📽️ Cinematic B-roll",
            to: "/b-roll",
            bg: "#ffe7eb",
            img: "/stmotions/images/broll.png",
        },
        {
            title: "🎞️ Client Edits",
            to: "/clients-edits",
            bg: "#eef4ff",
            img: "/stmotions/images/clients.png",
        },
        {
            title: "📢 Commercial Ads",
            to: "/comercial-ads",
            bg: "#ddf7f2",
            img: "/stmotions/images/ads.png",
        },
    ];

    return (
        <section id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout xl:flex-row flex-col justify-between gap-10">

                    {/* LEFT SIDE */}
                    <div className="xl:w-[60%] w-full flex flex-col gap-10">
                        {/* Intro video */}
                        <div
                            ref={introRef}
                            className="relative w-full rounded-xl overflow-hidden"
                            style={{ height: "60vh" }}
                        >
                            <iframe
                                src="https://www.youtube.com/embed/Af7zQgfkMso?si=HmkYroOL6JHK-ilc"
                                title="Intro Video"
                                allowFullScreen
                                className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
                            ></iframe>
                        </div>

                        {/* Two portrait cards side-by-side */}
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
                    <div className="xl:w-[40%] w-full flex flex-col gap-6">
                        {landscapeCards.map((item, i) => (
                            <Link
                                to={item.to}
                                key={i}
                                ref={(el) => (landscapeRefs.current[i] = el)}
                                className="card-border rounded-xl overflow-hidden bg-black-200"
                            >
                                <div
                                    className="h-[192px] bg-black-200"
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
            </div>
        </section>
    );
};

export default ShowcaseSection;
