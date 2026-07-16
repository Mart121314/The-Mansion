import Advantage from "@/components/Advantage";
import Education from "@/components/Education";
import GamingExperience from "@/components/GamingExperience";
import Hero from "@/components/Hero";
import ProgrammingExperience from "@/components/ProgrammingExperience";
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
      <Education />
      <ProgrammingExperience />
      <GamingExperience />
      <SiteFooter />
    </div>
  );
}
