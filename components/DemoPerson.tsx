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
 * The mockups are illustrative, so instead of a hardcoded name we fetch a
 * realistic, region-appropriate name from a public web API (randomuser.me,
 * `nat=in` to suit the "Healthy India" theme). This makes the demo feel alive
 * while staying fully synthetic — it is NOT the visitor's real identity, which
 * a static marketing page has no way to know.
 *
 * Resilience:
 *  - One shared fetch per page load (cached module-level promise).
 *  - Server renders the FALLBACK name; the fetched name swaps in on mount,
 *    so there is no hydration mismatch and it degrades gracefully offline.
 */

export interface DemoPerson {
  first: string;
  full: string;
  email: string;
}

export const FALLBACK_PERSON: DemoPerson = {
  first: "Aarav",
  full: "Aarav Sharma",
  email: "aarav.sharma@gmail.com",
};

function toEmail(full: string): string {
  return `${full.toLowerCase().replace(/\s+/g, ".")}@gmail.com`;
}

let cachedPromise: Promise<DemoPerson> | null = null;

/** Fetch a random realistic name once; reuse the same promise thereafter. */
export function fetchDemoPerson(): Promise<DemoPerson> {
  if (cachedPromise) return cachedPromise;

  cachedPromise = (async () => {
    try {
      const res = await fetch(
        "https://randomuser.me/api/?nat=in&inc=name&noinfo",
        { cache: "force-cache" }
      );
      if (!res.ok) throw new Error(`status ${res.status}`);
      const data = await res.json();
      const name = data?.results?.[0]?.name;
      if (!name?.first || !name?.last) throw new Error("malformed response");

      const first = String(name.first);
      const full = `${first} ${name.last}`;
      return { first, full, email: toEmail(full) };
    } catch {
      // Any failure (offline, blocked, rate-limited) → safe fallback.
      return FALLBACK_PERSON;
    }
  })();

  return cachedPromise;
}

const DemoPersonContext = createContext<DemoPerson>(FALLBACK_PERSON);

/** Wrap the screens so they all share ONE fetched name. */
export function DemoPersonProvider({ children }: { children: ReactNode }) {
  const [person, setPerson] = useState<DemoPerson>(FALLBACK_PERSON);

  useEffect(() => {
    let active = true;
    fetchDemoPerson().then((p) => {
      if (active) setPerson(p);
    });
    return () => {
      active = false;
    };
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
