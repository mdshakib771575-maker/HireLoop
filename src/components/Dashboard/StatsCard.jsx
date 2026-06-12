export default function StatsCard({title,value,icon,
}) {
  return (
    <div className="rounded-2xl border border-default-200 bg-content1 p-6 min-h-[140px] transition-all hover:border-primary/30 hover:shadow-md">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-default-100 text-default-600">
        {icon}
      </div>

      <div className="mt-6">
        <p className="text-sm text-default-500">
          {title}
        </p>

        <h3 className="mt-2 text-3xl font-bold tracking-tight">
          {value}
        </h3>
      </div>
    </div>
  );
}