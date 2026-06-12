import StatsCard from "./StatsCard";

export default function StatsGrid({ stats }) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((item) => (
        <StatsCard key={item.title} title={item.title} value={item.value} icon={item.icon}/>
      ))}
    </div>
  );
}