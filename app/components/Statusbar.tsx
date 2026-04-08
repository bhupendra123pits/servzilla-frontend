const STATS = [
  { value: "500+", label: "Stores served globally" },
  { value: "4-hr", label: "Response SLA" },
  { value: "98%",  label: "Client retention" },
  { value: "Free", label: "Trial — no card required" },
];

export default function StatsBar() {
  return (
    <section className="py-12 bg-[#f0f3ff]" aria-label="Key metrics">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="text-4xl font-extrabold font-headline text-[#191f2a] tracking-tighter">
                {s.value}
              </div>
              <div className="text-xs uppercase tracking-widest font-bold text-[#76777c] mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
