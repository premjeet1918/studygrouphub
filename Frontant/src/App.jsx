import Footer from "./components/Layout/Footer";
import Navbar from "./components/Layout/Navbar";
import AppRoutes from "./route/AppRoutes";


export default function App() {
return (
<div className="flex flex-col min-h-screen">
<Navbar />
<main className="flex-grow">
<AppRoutes />
</main>
<Footer />
</div>
);
}