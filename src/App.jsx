// src/App.jsx
import { Routes, Route } from "react-router-dom";

import Layout from './components/Layout.jsx';

import Hero from './sections/Hero.jsx';
import ShowcaseSection from "./sections/ShowcaseSectionCards/ShowcaseSection.jsx";
import LogoSection from "./sections/LogoSection.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import TechStack from "./sections/TechStack.jsx";
import Testimonials from "./sections/Testimonials.jsx";

import Reels from './sections/ShowcaseSectionCards/Reels.jsx';
import Shorts from './sections/ShowcaseSectionCards/Shorts.jsx';
import Broll from "./sections/ShowcaseSectionCards/Broll.jsx";
import ClientsEdits from "./sections/ShowcaseSectionCards/ClientsEdits.jsx";
import ComercialAds from "./sections/ShowcaseSectionCards/ComercialAds.jsx";
import Contact from "./sections/Contact.jsx";

const HomePage = () => (
    <>
            <Hero />
            <ShowcaseSection />
            <LogoSection />
            <FeatureCards />
            <ExperienceSection />
            <TechStack />
            <Testimonials />
    </>
);

const App = () => {
        return (
            <Routes>
                    <Route element={<Layout />}>
                            <Route path="/hero" element={<HomePage />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/experience" element={<ExperienceSection />} />
                            <Route path="/testimonials" element={<Testimonials />} />
                            <Route path="/skills" element={<TechStack />} />
                            <Route path="/work" element={<ShowcaseSection />} />
                            <Route path="/reels" element={<Reels />} />
                            <Route path="/shorts" element={<Shorts />} />
                            <Route path="/b-roll" element={<Broll />} />
                            <Route path="/featurecards" element={<FeatureCards />} />
                            <Route path="/works" element={<ExperienceSection />} />
                            <Route path="/clients-edits" element={<ClientsEdits />} />
                            <Route path="/comercial-ads" element={<ComercialAds />} />
                    </Route>
            </Routes>
        );
};

export default App;
