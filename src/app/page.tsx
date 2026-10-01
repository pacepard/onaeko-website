import { Background } from '@/components/background';
import PPHeroSection from '@/components/onaeko/pp-hero';
import PPCTA from '@/components/onaeko/pp-cta';


import ClTestimonials from '@/components/collective/cl-testimonials';
import PPFeatureShowcase from '@/components/onaeko/pp-feature-showcase';
import Testimonials from '@/components/onaeko/testimonials';
import PPApprenticeshipIntro from '@/components/onaeko/pp-apprenticship-intro';

export default function Home() {
    return (
        <>
            <PPHeroSection />

            {/* <PPPersona /> */}
            <Testimonials />
            {/* <Background> */}
            <PPApprenticeshipIntro />
            {/* * <PPCollective />  */}

            <ClTestimonials />

            {/* <PPDivider /> */}

            <PPFeatureShowcase />

            {/* <PPGo /> */}
            {/* <Testimonials dashedLineClassName="hidden" /> */}

            <PPCTA />

        </>
    );
}

//
