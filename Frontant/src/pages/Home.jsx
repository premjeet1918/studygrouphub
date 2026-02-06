import Hero from "../components/Hero";
import Card from "../components/Card";
import Community from "../components/Community";
import AdmitCards from "../components/AdmitCards";
import NoticesFormsUpdates from "../components/NoticesFormsUpdates";
import CoursesCategories from "../components/CoursesCategories";
import EngineeringTeaching from "../components/EngineeringTeaching";
import MedicalHealth from "../components/MedicalHealth";


export default function Home() {
return (
<>
<Hero />
<Community/>
<AdmitCards/>
<NoticesFormsUpdates/>

<CoursesCategories/>
<EngineeringTeaching/>
<MedicalHealth/>


</>
);
}