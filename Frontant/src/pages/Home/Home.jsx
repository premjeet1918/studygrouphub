import Hero from "../../components/Hero/Hero"

import Community from "../../components/HOMEDASHBOARD/Community";
import AdmitCards from "../../components/HOMEDASHBOARD/AdmitCards";
import NoticesFormsUpdates from "../../components/HOMEDASHBOARD/NoticesFormsUpdates";
import CoursesCategories from "../../components/HOMEDASHBOARD/CoursesCategories";
import EngineeringTeaching from "../../components/HOMEDASHBOARD/EngineeringTeaching";
import MedicalHealth from "../../components/HOMEDASHBOARD/MedicalHealth";

import CompetitiveExam from "../../components/HOMEDASHBOARD/CompetitiveExam";

export default function Home() {
  return (
    <>
      <Hero/>
      <Community />
      <AdmitCards />
      <NoticesFormsUpdates />

      <CoursesCategories />
      <EngineeringTeaching />
      <MedicalHealth />
      <CompetitiveExam/>
     
    </>
  );
}
