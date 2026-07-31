import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/hero/Hero";
import { PartnersClients } from "@/components/sections/PartnersClients";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { AboutStatement } from "@/components/sections/AboutStatement";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { SetupProcess } from "@/components/sections/SetupProcess";
import { BlogGateway } from "@/components/sections/BlogGateway";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col justify-between">
            <div>
                {/* Navigation Bar */}
                <Navbar />

                {/* Hero Section */}
                <Hero />

                {/* Section 2: Partners & Recent Clients */}
                <PartnersClients />

                {/* Section 3: Your Protection, Our Promise */}
                <ValueProposition />

                {/* Section 4: About Statement & Residential Coverage Stats */}
                <AboutStatement />

                {/* Section 5: Providing Security Services That Work for You */}
                <ServicesOverview />

                {/* Section 6: Fast and Simple Security Setup */}
                <SetupProcess />

                {/* Section 7: Sample Blog Gateway */}
                <BlogGateway />

                {/* Section 8: FAQ Accordion */}
                <FaqSection />

                {/* Section 9: Contact Form */}
                <ContactForm />
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}
