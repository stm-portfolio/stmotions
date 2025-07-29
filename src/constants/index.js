const navLinks = [
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
    {
        name: "Testimonials",
        link: "#testimonials",
    },
];

const words = [
    { text: "Stories", imgPath: "/stmotions/images/ideas.svg" },
    { text: "Visions", imgPath: "/stmotions/images/concepts.svg" },
    { text: "Frames", imgPath: "/stmotions/images/designs.svg" },
    { text: "Edits", imgPath: "/stmotions/images/code.svg" },
    { text: "Ideas", imgPath: "/stmotions/images/ideas.svg" },
    { text: "Concepts", imgPath: "/stmotions/images/concepts.svg" },
    { text: "Designs", imgPath: "/stmotions/images/designs.svg" },
    { text: "Thoughts", imgPath: "/stmotions/images/concepts.svg" },
];

const counterItems = [
    { value:  4, suffix: "+", label: "Years of Experience" },
    { value: 130, suffix: "+", label: "Satisfied Clients" },
    { value: 200, suffix: "+", label: "Completed Projects" },
    { value: 85, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
    {
        imgPath: "/stmotions/images/logos/company-logo-1.png",
    },
    {
        imgPath: "/stmotions/images/logos/company-logo-2.png",
    },
    {
        imgPath: "/stmotions/images/logos/company-logo-3.png",
    },
    {
        imgPath: "/stmotions/images/logos/company-logo-4.png",
    },
    {
        imgPath: "/stmotions/images/logos/company-logo-5.png",
    },
    {
        imgPath: "/stmotions/images/logos/company-logo-6.png",
    },
    {
        imgPath: "/stmotions/images/logos/company-logo-7.png",
    },
    {
        imgPath: "/stmotions/images/logos/company-logo-8.png",
    },
    {
        imgPath: "/stmotions/images/logos/company-logo-9.png",
    },
    {
        imgPath: "/stmotions/images/logos/company-logo-10.png",
    },
    {
        imgPath: "/stmotions/images/logos/company-logo-11.png",
    },
];

const abilities = [
    {
        imgPath: "/stmotions/images/seo.png",
        title: "Quality Focus",
        desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
        imgPath: "/stmotions/images/chat.png",
        title: "Reliable Communication",
        desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
        imgPath: "/stmotions/images/time.png",
        title: "On-Time Delivery",
        desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
];

const techStackImgs = [
    {
        name: "Video Editing",
        imgPath: "/stmotions/images/logos/videoedit.png",
    },
    {
        name: "Motion Graphics",
        imgPath: "/stmotions/images/logos/motiongrp.png",
    },
    {
        name: "Sound Design",
        imgPath: "/stmotions/images/logos/soundgn.png",
    },
    {
        name: "Fast Delivery",
        imgPath: "/stmotions/images/logos/fastdlv.png",
    },
    {
        name: "SEO",
        imgPath: "/stmotions/images/logos/seo.png",
    },
];

// const techStackIcons = [
//     {
//         name: "React Developer",
//         modelPath: "/stmotions/models/react_logo-transformed.glb",
//         scale: 1,
//         rotation: [0, 0, 0],
//     },
//     {
//         name: "Python Developer",
//         modelPath: "/stmotions/models/python-transformed.glb",
//         scale: 0.8,
//         rotation: [0, 0, 0],
//     },
//     {
//         name: "Backend Developer",
//         modelPath: "/stmotions/models/node-transformed.glb",
//         scale: 5,
//         rotation: [0, -Math.PI / 2, 0],
//     },
//     {
//         name: "Interactive Developer",
//         modelPath: "/stmotions/models/three.js-transformed.glb",
//         scale: 0.05,
//         rotation: [0, 0, 0],
//     },
//     {
//         name: "Project Manager",
//         modelPath: "/stmotions/models/git-svg-transformed.glb",
//         scale: 0.05,
//         rotation: [0, -Math.PI / 4, 0],
//     },
// ];

const expCards = [
    {
        review:
            "ST Motions brought creativity and storytelling finesse to our brand’s content. Their edits elevated our video marketing, improving viewer retention and engagement.",
        imgPath: "/stmotions/images/exp1.png",
        logoPath: "/stmotions/images/logo1.png",
        title: "Senior Video Editor",
        date: "January 2023 - Present",
        responsibilities: [
            "Edited high-impact promotional and documentary-style videos for global clients.",
            "Collaborated with marketing teams to craft compelling narratives.",
            "Used advanced editing techniques in Adobe Premiere Pro and After Effects to boost engagement rates.",
        ],
    },
    {
        review:
            "ST Motions’ contributions to our YouTube channel were game-changing. Their sharp cuts and creative transitions helped us grow from 10k to 100k subscribers.",
        imgPath: "/stmotions/images/exp2.png",
        logoPath: "/stmotions/images/logo2.png",
        title: "YouTube Video Editor",
        date: "June 2020 - December 2022",
        responsibilities: [
            "Delivered weekly edited videos for top-tier YouTube influencers across lifestyle and tech niches.",
            "Applied motion graphics and sound design to enhance viewer experience.",
            "Managed tight deadlines and ensured brand consistency across all videos.",
        ],
    },
    {
        review:
            "ST Motions worked magic on our client ads. Their attention to pacing and emotion made our video campaigns stand out and drive real conversions.",
        imgPath: "/stmotions/images/exp3.png",
        logoPath: "/stmotions/images/logo3.png",
        title: "Ad Creative Specialist",
        date: "March 2019 - May 2020",
        responsibilities: [
            "Produced ad creatives for Facebook, Instagram, and TikTok campaigns.",
            "Executed A/B edits to test different visual approaches for better performance.",
            "Coordinated with media buyers to understand campaign goals and adapt edits accordingly.",
        ],
    },
];

const expLogos = [
    {
        name: "logo1",
        imgPath: "/stmotions/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/stmotions/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/stmotions/images/logo3.png",
    },
];

const testimonials = [
    {
        name: "John Primo",
        mentions: "@_johnprimo_",
        review:
            "ST Motions was a pleasure to work with. They transformed our old promo video with sharp edits and dynamic transitions, delivering a modern and engaging final cut perfectly aligned with our brand.",
        imgPath: "/stmotions/images/client1.png",
    },
    {
        name: "Joachim (Jack) Bosch",
        mentions: "@jack.bosch",
        review:
            "ST Motions did a fantastic job editing our land selling videos. Smoothly detects places by Camera Tracking with clean cuts, great pacing, and exactly what we needed to connect with our audience.",
        imgPath: "/stmotions/images/client3.png",
    },
    {
        name: "TRISTAN BARNES",
        mentions: "@ttristbarnes",
        review:
            "ST Motions nailed it. They turned my raw workout footage into powerful, high-energy videos that really reflect my brand.",
        imgPath: "/stmotions/images/client2.png",
    },
    {
        name: "Mithun Adhikary",
        mentions: "@mithunbolchi",
        review:
            "ST Motions consistently delivers top-tier edits for my history channels. Their attention to detail and storytelling style bring more views.",
        imgPath: "/stmotions/images/client5.png",
    },
    {
        name: "Sazid",
        mentions: "@red1_hmm",
        review:
            "As a traveler and fellow agency owner, I value quality—and ST Motions delivers it every time. Their edits capture the essence of every journey perfectly.",
        imgPath: "/stmotions/images/client4.png",
    },
    {
        name: "𝑪𝒆𝒏𝒕𝒖𝒓𝒚 21 𝑼𝒏𝒊𝒐𝒏 𝑹𝒆𝒂𝒍𝒕𝒚 𝑪𝒐.",
        mentions: "@c21union",
        review:
            "ST Motions brought a fresh, professional touch to our real estate videos. Their editing made our listings stand out and feel more engaging to clients.",
        imgPath: "/stmotions/images/client6.png",
    },
];

const socialImgs = [
    {
        name: "insta",
        url: "https://www.instagram.com/st.motions/",
        imgPath: "/stmotions/images/insta.png",
    },
    {
        name: "fb",
        url: "https://www.facebook.com/",
        imgPath: "/stmotions/images/fb.png",
    },
    {
        name: "x",
        url: "https://www.x.com/",
        imgPath: "/stmotions/images/x.png",
    },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/",
        imgPath: "/stmotions/images/linkedin.png",
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    //techStackIcons,
    techStackImgs,
    navLinks,
};