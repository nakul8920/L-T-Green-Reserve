import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Lead submission to Google Apps Script Web App
export async function submitLeadToAppsScript(params: { name: string; number: string; email?: string; source?: string }) {
  const { name, number, email, source } = params;
  const url = import.meta.env.VITE_APPS_SCRIPT_URL as string | undefined;

  if (!url) {
    console.warn('VITE_APPS_SCRIPT_URL is not set. Skipping network call.');
    return { ok: false, skipped: true } as const;
  }

  const payload = {
    name,
    phone: number,
    email: email ?? '',
    source: source ?? 'website',
    timestamp: new Date().toISOString(),
  };

  // Build a form-encoded body to make a CORS "simple request" (reduces preflight 403s)
  const formBody = new URLSearchParams(payload as Record<string, string>);

  try {
    // 1) Try a simple request using application/x-www-form-urlencoded
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
      body: formBody,
    });

    if (res.ok) return { ok: true } as const;

    // 2) Fall back to no-cors simple request
    await fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      body: formBody,
    });
    return { ok: true, opaque: true } as const;
  } catch (error) {
    try {
      // 3) Last resort: no-cors with JSON body
      await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(payload),
      });
      return { ok: true, opaque: true } as const;
    } catch (e) {
      console.error('Lead submission failed:', e);
      return { ok: false, error: String(e) } as const;
    }
  }
}
