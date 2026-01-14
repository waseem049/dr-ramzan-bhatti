import { format } from "date-fns";

export function formatIso(isoString: Date): string {
  return format(isoString, "MMMM d, yyyy");
}
