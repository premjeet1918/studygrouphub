export default function Card({ title, desc }) {
    return (
    <div className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm mb-4">{desc}</p>
    <button className="text-blue-600 text-sm font-medium">
    View Group →
    </button>
    </div>
    );
    }