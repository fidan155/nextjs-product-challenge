// src/app/api/login/route.js
import { db } from '@/db';
import { users } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // 1. Suche den User in der PostgreSQL-Datenbank
    const gefundenerUser = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);

    // 2. Wenn User nicht existiert
    if (gefundenerUser.length === 0) {
      return Response.json({ error: 'User nicht gefunden!' }, { status: 401 });
    }

    const user = gefundenerUser[0];

    // 3. Fake-Passwortabgleich (Im PK später mit bcrypt hashen!)
    if (user.password !== password) {
      return Response.json({ error: 'Passwort falsch!' }, { status: 401 });
    }

    // 4. Erfolg: Schicke User-Daten (inklusive Rolle) zurück
    return Response.json({
      success: true,
      user: {
        email: user.email,
        role: user.role, // Hier steht dann 'admin' oder 'user'
      },
    });

  } catch (error) {
    return Response.json({ error: 'Server-Fehler' }, { status: 500 });
  }
}