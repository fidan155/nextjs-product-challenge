'use client'; // Zwingend erforderlich für Interaktivität (useState, onSubmit)

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Wird gesendet...');

    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      setStatus('Erfolgreich angemeldet! (In der Mock-DB gespeichert)');
      setEmail('');
    } else {
      setStatus('Fehler beim Speichern.');
    }
  };

  return (
    <div className="mt-12 max-w-md mx-auto bg-slate-800/30 p-6 rounded-2xl border border-slate-800">
      <h3 className="text-lg font-semibold mb-3 text-center">
        Jetzt exklusiven Beta-Zugang sichern
      </h3>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          placeholder="Deine Entwickler-E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 flex-grow"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-medium text-sm transition"
        >
          Beitreten
        </button>
      </form>
      {status && (
        <p className="text-xs text-slate-400 mt-3 text-center">{status}</p>
      )}
    </div>
  );
}

export { NewsletterForm };
