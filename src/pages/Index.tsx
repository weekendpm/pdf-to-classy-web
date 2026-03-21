import { useState } from "react";
import Navbar from "@/components/Navbar";
import GrainOverlay from "@/components/GrainOverlay";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import MeetRuhiSection from "@/components/MeetRuhiSection";
import ProcessSection from "@/components/ProcessSection";
import PackagesSection from "@/components/PackagesSection";
import CollaborateSection from "@/components/CollaborateSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import LeadFormDialog from "@/components/LeadFormDialog";

const Index = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <GrainOverlay />
      <Navbar onOpenForm={() => setFormOpen(true)} />
      <main>
        <HeroSection onOpenForm={() => setFormOpen(true)} />
        <ProblemSection />
        <MeetRuhiSection />
        <ProcessSection />
        <PackagesSection />
        <CollaborateSection />
        <HowWeWorkSection />
        <FinalCtaSection onOpenBrideForm={() => setFormOpen(true)} />
      </main>
      <LeadFormDialog open={formOpen} onOpenChange={setFormOpen} />
    </div>
  );
};

export default Index;
