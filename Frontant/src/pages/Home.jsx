import Hero from "../components/Hero";
import Card from "../components/Card";


export default function Home() {
return (
<div>
<Hero />
<div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
<Card title="React Group" desc="Learn React together" />
<Card title="CSS Group" desc="Master CSS" />
<Card title="JS Group" desc="JavaScript Logic" />
</div>
</div>
);
}