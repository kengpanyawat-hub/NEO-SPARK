// components/cards/ServiceCard.tsx
type Props = {
  title: string;
  desc: string;
  features?: string[];
  icon?: React.ReactNode;
};
export function ServiceCard({ title, desc, features = [], icon }: Props) {
  return (
    <article className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:bg-white/10 shadow-glow">
      <div className="flex items-start gap-4">
        {icon && <div className="mt-1 text-neo-pink">{icon}</div>}
        <div>
          <h3 className="text-lg font-semibold group-hover:text-neo-pink">{title}</h3>
          <p className="mt-1 text-white/70">{desc}</p>
        </div>
      </div>
      {!!features.length && (
        <ul className="mt-4 grid gap-2 text-white/80">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-neo-violet" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
