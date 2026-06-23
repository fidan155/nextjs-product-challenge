import { NextResponse } from 'next/server';

// Das ist unsere serverinterne "Datenbank" im Arbeitsspeicher
let databaseMock = [];

export async function POST(request) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validierung: Wenn keine E-Mail geschickt wurde
    if (!email) {
      return NextResponse.json({ error: 'E-Mail fehlt' }, { status: 400 });
    }

    // In den Mock-Speicher "schreiben"
    databaseMock.push({
      id: databaseMock.length + 1,
      email: email,
      subscribedAt: new Date()
    });

    // Konsolen-Log im VS Code Terminal
    console.log('--- NEUER DATENBANKEINTRAG ---');
    console.log('Aktuelle Nutzer in der DB:', databaseMock);

    // Erfolgreiche Antwort ans Frontend senden
    return NextResponse.json({ success: true, message: 'Gespeichert!' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Server-Fehler' }, { status: 500 });
  }
}