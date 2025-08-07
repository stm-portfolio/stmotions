// src/App.jsx
import { Routes, Route } from "react-router-dom";

import Layout from './components/Layout.jsx';

import Hero from './sections/Hero.jsx';
import ShowcaseSection from "./sections/ShowcaseSectionCards/ShowcaseSection.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import Testimonials from "./sections/Testimonials.jsx";

import Reels from './sections/ShowcaseSectionCards/Reels.jsx';
import Shorts from './sections/ShowcaseSectionCards/Shorts.jsx';
import YtLongVideos from "./sections/ShowcaseSectionCards/YtLongVideos.jsx";
import Adcoursevideos from "./sections/ShowcaseSectionCards/Adcoursevideos.jsx";
import Contact from "./sections/Contact.jsx";

const HomePage = () => (
    <>
            <Hero />
            <ShowcaseSection />
            <FeatureCards />
            <ExperienceSection />
            <Testimonials />
            <Contact />
    </>
);

const App = () => {
        return (
            <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<HomePage />} />
                            <Route path="/hero" element={<HomePage />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/experience" element={<ExperienceSection />} />
                            <Route path="/testimonials" element={<Testimonials />} />
                            <Route path="/work" element={<ShowcaseSection />} />
                            <Route path="/reels" element={<Reels />} />
                            <Route path="/shorts" element={<Shorts />} />
                            <Route path="/youtube-long-videos" element={<YtLongVideos />} />
                            <Route path="/featurecards" element={<FeatureCards />} />
                            <Route path="/works" element={<ExperienceSection />} />
                            <Route path="/ad-course-videos" element={<Adcoursevideos />} />
                    </Route>
            </Routes>
        );
};

export default App;
