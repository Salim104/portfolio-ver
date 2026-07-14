import DentalBackground from "../../Components/dental/DentalBackground";
import DentalHeader from "../../Components/dental/DentalHeader";
import DentalHero from "../../Components/dental/DentalHero";
import DentalProblem from "../../Components/dental/DentalProblem";
import DentalHowItWorks from "../../Components/dental/DentalHowItWorks";
import DentalAbout from "../../Components/dental/DentalAbout";
import DentalFinalCta from "../../Components/dental/DentalFinalCta";

export const metadata = {
  title: "AI Receptionist for Dental Practices | Never Miss a Patient Call",
};

export default function DentalPage() {
  return (
    <div className="w-full relative overflow-x-hidden">
      <DentalBackground />
      <DentalHeader />
      <DentalAbout />
      <DentalHero />
      <DentalProblem />
      <DentalHowItWorks />
      <DentalFinalCta />
    </div>
  );
}
