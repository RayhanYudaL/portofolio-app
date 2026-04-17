import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { Contact } from "@/app/components/contact";

describe("contact form", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("shows loading and success state, then triggers mailto intent", async () => {
    const openSpy = vi
      .spyOn(window, "open")
      .mockImplementation(() => window as unknown as Window);

    render(<Contact />);

    fireEvent.change(screen.getByLabelText(/nama/i), {
      target: { value: "Budi" },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "budi@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/pesan/i), {
      target: { value: "Halo, saya ingin berdiskusi proyek." },
    });

    const submitButton = screen.getByRole("button", { name: /kirim pesan/i });
    fireEvent.click(submitButton);

    expect(openSpy).toHaveBeenCalledTimes(1);
    expect(openSpy).toHaveBeenCalledWith(
      expect.stringContaining("mailto:rayhanyudalesmana@gmail.com"),
      "_self",
    );

    expect(submitButton).toHaveTextContent(/mengirim/i);
    expect(submitButton).toBeDisabled();

    await waitFor(
      () => {
        expect(submitButton).toHaveTextContent(/pesan terkirim/i);
      },
      { timeout: 2500 },
    );

    expect(
      screen.getByText(/terima kasih! pesan anda siap dikirim lewat email./i),
    ).toBeInTheDocument();
  });

  it("shows fallback message when browser blocks mailto intent", async () => {
    vi.spyOn(window, "open").mockImplementation(() => null);

    render(<Contact />);

    fireEvent.change(screen.getByLabelText(/nama/i), {
      target: { value: "Budi" },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "budi@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/pesan/i), {
      target: { value: "Halo, saya ingin berdiskusi proyek." },
    });

    fireEvent.click(screen.getByRole("button", { name: /kirim pesan/i }));

    await waitFor(
      () => {
        expect(
          screen.getByText(/browser memblokir pembukaan email/i),
        ).toBeInTheDocument();
      },
      { timeout: 2500 },
    );

    expect(screen.getByRole("button", { name: /kirim pesan/i })).toBeEnabled();
  });
});
