test for clock screen
it should end the game and navigate to the configuration screen when the quit game button is pressed
# Upcomer

A minimalist React Native mobile app that shows your upcoming social obligations from Google Calendar at a glance.

Stop opening Google Calendar and trying to figure out what's coming up. Open Upcomer and immediately see what social events you have in the next 30 days.

## Core Purpose

Quickly answer the question: **"What are my next few social obligations?"**

## Features

- Two modes: **Upcomer Mode** (simple list) and **Day Mode** (visual calendar)
- Instant loading using cached data
- Only shows events marked with `social:` in the title
- Clean, minimal interface with relative timing ("in 2 days", "tomorrow", etc.)

## Tech Stack

- React Native + Expo
- TypeScript
- Redux Toolkit + RTK Query
- NativeWind (Tailwind)
- Day.js

## Important Documents

- ** (CLAUDE.md)** - Rules for AI coding assistants
- ** (PROJECT_STATUS.md)** - Current project progress
- ** (GLOSSARY.md)** - Domain terminology
- ** (src/types/index.ts)** - Core TypeScript definitions

## Development

```bash
# Install dependencies
npm install

# Start development server
npx expo start
