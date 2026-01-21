import { format } from "date-fns";

export function formatIso(date: string | Date | undefined | null): string {
  if (!date) return "N/A";
  const d = typeof date === "string" ? new Date(date) : date;
  // Check if date is valid
  if (isNaN(d.getTime())) return "Invalid Date";
  return format(d, "MMMM d, yyyy");
}
