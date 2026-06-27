// src/app/api/antraege/route.js
import { db } from '@/db';
import { antraege } from '@/db/schema.js';

// 1. Alle Anträge aus der DB holen (für die Admin-Liste)
export async function GET() {
  const alleAntraege = await db.select().from(antraege);
  return Response.json(alleAntraege);
}

// 2. Einen neuen Antrag in der DB speichern
export async function POST(request) {
  const { titel, beschreibung } = await request.json();
  
  await db.insert(antraege).values({
    titel,
    beschreibung,
  });

  return Response.json({ success: true });
}