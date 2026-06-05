/** Clean social event in our domain */
export type SocialEvent = {
  id: string;
  title: string;
  startDate: string; // YYYY-MM-DD string (normalized via Day.js)
};

/** One day in the Day Mode calendar view */
export type CalendarDay = {
  date: string; // YYYY-MM-DD string
  events: SocialEvent[];
};

/** Aggregated social data */
export type SocialData = {
  events: SocialEvent[]; // Chronologically sorted for Upcomer Mode
  days: CalendarDay[];   // For Day Mode
  lastUpdated: string;   // ISO timestamp
};
