# Upcomer - CLAUDE.md

## Project Overview
Upcomer is a minimalist React Native mobile app that shows the user their upcoming social obligations pulled from Google Calendar. The goal is to give the user an instant, glanceable view of their next social events in under 5 seconds.

The app has two modes:
- **Upcomer Mode** (default): Chronological list of events with title and relative time
- **Day Mode**: Visual calendar showing which days have events and which are free

## Core Principles
- **Fast**: The app must feel instant. Show cached data immediately.
- **Foolproof**: Minimize cognitive load. Make the most important information obvious.
- **Flexible**: Code must be easy to extend, especially for adding new modes later.

## Key Product Rules
- Only show events whose title contains `social:`
- Show all social events in the next 30 days
- Never display time of day or location
- Events are shown using only title + relative time in Upcomer Mode
- Always show cached data instantly, then refresh in background
- Support exactly one Google account for MVP
- Use segmented control for mode switching to allow future modes

## Technical Architecture
- React Native + Expo
- TypeScript (strict)
- Redux Toolkit + RTK Query for state management
- NativeWind (Tailwind) for styling
- Day.js for all date handling
- All dates stored as strings (no native Date objects in models)
- React Navigation for routing

## Code & Architecture Rules
- Prefer functional style and small, composable functions
- Keep components small and focused
- Prefer integration tests over unit tests
- All tests must be black-box (test input → output)
- Use existing types from `src/types/` — do not create duplicate types
- Keep business logic out of components when possible
- Follow the established folder structure

## Data & Models
- Always use the types defined in `src/types/` (`SocialEvent`, `SocialData`, `CalendarDay`, etc.)
- Keep `SocialEvent` minimal. Only add new fields when they serve multiple parts of the application.
- All date calculations must be done with Day.js at the time of need

## UI & Styling Rules
- Use NativeWind for all styling
- Keep the UI extremely minimal and calm
- Use a very limited color palette
- Cards should be clean with generous whitespace
- Prioritize readability and glanceability

## Important References
- See `GLOSSARY.md` for all domain terminology and definitions
- See `src/types/index.ts` for all TypeScript definitions
