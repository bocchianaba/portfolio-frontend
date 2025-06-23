"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactClientPage() {
    const form = useRef<HTMLFormElement>(null);
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
  
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);
      setError("");
      if (!form.current) return;
      emailjs
        .sendForm(
          "service_y95m3od",
          "template_854dtzm",
          form.current,
          "vcy12S5Zt5hI62Y3t"
        )
        .then(
          () => {
            setSent(true);
            setLoading(false);
          },
          (err) => {
            setError("Une erreur s'est produite. Veuillez réessayer.");
            setLoading(false);
          }
        );
    };
  
    return (
      <div className="relative flex flex-col items-center justify-center pb-8 min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-blue-500 overflow-hidden">
        <h1 className="page_title mt-32">Contactez-moi</h1>
        <div className="mx-4 w-full max-w-lg bg-background/80 dark:bg-background/60 rounded-2xl shadow-xl p-8 mt-8">
          {sent ? (
            <div className="text-green-600 text-center font-bold text-lg">Merci ! Votre message a été envoyé.</div>
          ) : (
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
              <input
                type="text"
                name="user_name"
                placeholder="Votre nom"
                required
                className="px-4 py-2 rounded bg-white/80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Votre email"
                required
                className="px-4 py-2 rounded bg-white/80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="text"
                name="subject"
                placeholder="Sujet"
                required
                className="px-4 py-2 rounded bg-white/80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <textarea
                name="message"
                placeholder="Votre message"
                required
                rows={5}
                className="px-4 py-2 rounded bg-white/80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {error && <div className="text-red-600 text-center">{error}</div>}
              <button
                type="submit"
                disabled={loading}
                className="bg-primary text-primary-foreground font-bold rounded-full shadow-lg hover:bg-primary/80 transition-colors px-6 py-3 mt-2 disabled:opacity-60"
              >
                {loading ? "Envoi..." : "Envoyer le message"}
              </button>
            </form>
          )}
        </div>
      </div>
    );
} 