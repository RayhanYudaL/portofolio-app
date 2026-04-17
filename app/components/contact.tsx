"use client";

import { type FormEvent, useEffect, useRef, useState } from "react";

type SubmitState = "idle" | "submitting" | "success";

const CONTACT_EMAIL = "rayhanyudalesmana@gmail.com";
const SUBMIT_DELAY_MS = 1200;
const RESET_DELAY_MS = 3000;

type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

function createMailtoUrl(payload: ContactPayload) {
  const subject = encodeURIComponent(`Kolaborasi Proyek - ${payload.name}`);
  const body = encodeURIComponent(
    [
      "Halo Rayhan,",
      "",
      `Nama: ${payload.name}`,
      `Email: ${payload.email}`,
      "",
      "Pesan:",
      payload.message,
      "",
      "Terima kasih.",
    ].join("\n"),
  );

  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

function openMailClient(payload: ContactPayload) {
  try {
    const openedWindow = window.open(createMailtoUrl(payload), "_self");
    return openedWindow !== null;
  } catch {
    return false;
  }
}

export function Contact() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [intentFailed, setIntentFailed] = useState(false);
  const submitTimeoutRef = useRef<number | undefined>(undefined);
  const resetTimeoutRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    return () => {
      if (typeof submitTimeoutRef.current === "number") {
        window.clearTimeout(submitTimeoutRef.current);
      }
      if (typeof resetTimeoutRef.current === "number") {
        window.clearTimeout(resetTimeoutRef.current);
      }
    };
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (submitState !== "idle") {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload: ContactPayload = {
      name: String(formData.get("nama") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      message: String(formData.get("pesan") ?? "").trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      return;
    }

    const intentOpened = openMailClient(payload);
    setSubmitState("submitting");
    setIntentFailed(false);

    submitTimeoutRef.current = window.setTimeout(() => {
      if (intentOpened) {
        setSubmitState("success");
        form.reset();

        resetTimeoutRef.current = window.setTimeout(() => {
          setSubmitState("idle");
        }, RESET_DELAY_MS);
        return;
      }

      setIntentFailed(true);
      setSubmitState("idle");
    }, SUBMIT_DELAY_MS);
  };

  const buttonLabel =
    submitState === "submitting"
      ? "Mengirim..."
      : submitState === "success"
        ? "Pesan Terkirim ✓"
        : "Kirim Pesan";

  return (
    <section id="contact" className="py-20">
      <div className="grid gap-10 rounded-3xl border border-border bg-card p-6 md:grid-cols-2 md:p-8">
        <div>
          <span className="rounded-full border border-border bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-foreground">
            Sapa Saya
          </span>
          <h2 className="mt-5 text-3xl font-bold leading-tight md:text-4xl">
            Mari ngobrol &amp; bekerja sama.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Punya ide proyek, tawaran pekerjaan, atau sekadar ingin diskusi santai
            seputar teknologi? Kirimkan pesan Anda lewat formulir di samping.
          </p>

          <ul className="mt-6 space-y-2 text-sm text-muted">
            <li>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-medium text-foreground transition hover:text-muted"
              >
                {CONTACT_EMAIL}
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/rayhanyl"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-foreground transition hover:text-muted"
              >
                linkedin.com/in/rayhanyl
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Rayhanyl"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-foreground transition hover:text-muted"
              >
                github.com/Rayhanyl
              </a>
            </li>
          </ul>
        </div>

        <form className="space-y-4" aria-label="Form kontak" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="contact-name" className="text-sm font-semibold text-foreground">
              Nama
            </label>
            <input
              id="contact-name"
              name="nama"
              type="text"
              required
              placeholder="Nama lengkapmu"
              className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="contact-email" className="text-sm font-semibold text-foreground">
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              placeholder="kamu@email.com"
              className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="contact-message"
              className="text-sm font-semibold text-foreground"
            >
              Pesan
            </label>
            <textarea
              id="contact-message"
              name="pesan"
              required
              rows={5}
              placeholder="Ceritakan proyekmu..."
              className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>

          <button
            type="submit"
            disabled={submitState !== "idle"}
            className="inline-flex items-center rounded-md bg-foreground px-5 py-3 text-sm font-semibold text-background transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {buttonLabel}
          </button>

          <p role="status" aria-live="polite" className="min-h-5 text-sm text-muted">
            {submitState === "success"
              ? "Terima kasih! Pesan Anda siap dikirim lewat email."
              : intentFailed
                ? "Browser memblokir pembukaan email. Silakan kirim manual ke rayhanyudalesmana@gmail.com."
              : ""}
          </p>
        </form>
      </div>
    </section>
  );
}