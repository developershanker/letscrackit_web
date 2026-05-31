"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

/**
 * Demo names for the app-screen mockups.
 *
 * The mockups are illustrative, so instead of a single hardcoded name we pick a
 * realistic, region-appropriate name from a built-in list (suited to the
 * "Healthy India" theme). This makes the demo feel alive while staying fully
 * synthetic and self-contained — no external API calls, so it always works
 * regardless of network policy. It is NOT the visitor's real identity, which a
 * static marketing page has no way to know.
 *
 * Resilience:
 *  - Server renders the FALLBACK name; a randomly-picked name swaps in on
 *    mount, so there is no hydration mismatch.
 *  - One name is chosen per page load and shared across every screen.
 */

export interface DemoPerson {
  first: string;
  full: string;
  email: string;
}

function toEmail(full: string): string {
  return `${full.toLowerCase().replace(/\s+/g, ".")}@gmail.com`;
}

function makePerson(first: string, last: string): DemoPerson {
  const full = `${first} ${last}`;
  return { first, full, email: toEmail(full) };
}

/** Curated, region-appropriate demo names. */
const FIRST_NAMES = [
  "Aarav", "Priya", "Vihaan", "Ananya", "Arjun", "Diya", "Ishaan", "Saanvi",
  "Kabir", "Aditi", "Reyansh", "Meera", "Vivaan", "Riya", "Aryan", "Kavya",
  "Rohan", "Neha", "Dhruv", "Pooja",
];

const LAST_NAMES = [
  "Sharma", "Patel", "Reddy", "Iyer", "Nair", "Singh", "Gupta", "Mehta",
  "Kapoor", "Rao", "Verma", "Joshi", "Desai", "Banerjee", "Chopra",
];

export const FALLBACK_PERSON: DemoPerson = makePerson("Aarav", "Sharma");

/** Pick one random realistic name from the built-in lists. */
export function pickDemoPerson(): DemoPerson {
  const first = FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)];
  const last = LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)];
  return makePerson(first, last);
}

const DemoPersonContext = createContext<DemoPerson>(FALLBACK_PERSON);

/** Wrap the screens so they all share ONE randomly-picked name. */
export function DemoPersonProvider({ children }: { children: ReactNode }) {
  const [person, setPerson] = useState<DemoPerson>(FALLBACK_PERSON);

  useEffect(() => {
    // Pick after mount so server and first client render match (no mismatch).
    setPerson(pickDemoPerson());
  }, []);

  return (
    <DemoPersonContext.Provider value={person}>
      {children}
    </DemoPersonContext.Provider>
  );
}

export function useDemoPerson(): DemoPerson {
  return useContext(DemoPersonContext);
}

/* Tiny display helpers so server-rendered screens can show the shared name. */
export function DemoFirstName() {
  return <>{useDemoPerson().first}</>;
}

export function DemoFullName() {
  return <>{useDemoPerson().full}</>;
}

export function DemoEmail() {
  return <>{useDemoPerson().email}</>;
}
