/** Raw event shape from Google Calendar API v3 */
export type GoogleCalendarEvent = {
  id: string;
  summary?: string;
  start?: {
    date?: string;      // All-day event (YYYY-MM-DD)
    dateTime?: string;  // Timed event (ISO datetime)
    timeZone?: string;
  };
  end?: {
    date?: string;
    dateTime?: string;
    timeZone?: string;
  };
};
