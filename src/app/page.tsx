import Advantage from "@/components/Advantage";
import Education from "@/components/Education";
import GamingExperience from "@/components/GamingExperience";
import Hero from "@/components/Hero";
import ProgrammingExperience from "@/components/ProgrammingExperience";
import Reveal from "@/components/Reveal";
import Services from "@/components/Services";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />
      <Hero />
      <Advantage />
      <Services />
      <Reveal>
        <Education />
      </Reveal>
      <Reveal>
        <ProgrammingExperience />
      </Reveal>
      <Reveal>
        <GamingExperience />
      </Reveal>
      <Reveal>
        <SiteFooter />
      </Reveal>
    </div>
  );
}
