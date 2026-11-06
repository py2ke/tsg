import { brl, type Group } from "@/lib/menu";

export function GroupList({ group, compact = false }: { group: Group; compact?: boolean }) {
  return (
    <div className={compact ? "" : "break-inside-avoid"}>
      <h3
        className={
          compact
            ? "mb-1 font-sans text-[8pt] font-semibold uppercase tracking-[0.2em] text-ocean"
            : "mb-3 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-ocean"
        }
      >
        {group.title}
      </h3>
      <ul className={compact ? "space-y-[3px]" : "space-y-3"}>
        {group.items.map((it) => (
          <li key={it.name} className="break-inside-avoid">
            <div className={`flex items-baseline gap-2 ${compact ? "text-[8.6pt] leading-tight" : "text-[15px]"}`}>
              <span className="font-medium">{it.name}</span>
              <span className="dots-leader" />
              <span className="font-display font-semibold tabular-nums">{brl(it.price)}</span>
            </div>
            {it.desc && (
              <p className={compact ? "text-[7pt] leading-tight text-muted-foreground" : "text-[13px] text-muted-foreground"}>
                {it.desc}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
