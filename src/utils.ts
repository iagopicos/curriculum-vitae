
export function formatPeriod(start: number, end: number | undefined, present: string): string {
    if (start === end) return `${start}`;
    return `${start} — ${end ?? present}`;
}


