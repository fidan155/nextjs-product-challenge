// src/app/admin/page.js
'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Terminal, ShieldAlert, PlusCircle } from 'lucide-react';

export default function AdminPage() {
  const [antraegeListe, setAntraegeListe] = useState([]);
  const [titel, setTitel] = useState('');
  const [beschreibung, setBeschreibung] = useState('');

  const ladeAntraege = async () => {
    const res = await fetch('/api/antraege');
    const data = await res.json();
    setAntraegeListe(data);
  };

  useEffect(() => {
    ladeAntraege();
  }, []);

  const handleAntragSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/antraege', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ titel, beschreibung }),
    });
    setTitel('');
    setBeschreibung('');
    ladeAntraege();
  };

  return (
    <div className="bg-[#020204] text-slate-100 min-h-screen font-sans selection:bg-cyan-500/30 overflow-x-hidden relative p-6 md:p-12">
      
      {/* --- AURORA GLOW EFFECTS --- */}
      <div className="absolute top-[-10%] left-[-20%] w-[600px] h-[600px] rounded-full bg-purple-500/5 blur-[160px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[5%] right-[-10%] w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[150px] pointer-events-none mix-blend-screen" />

      <div className="max-w-5xl mx-auto space-y-10 relative z-10">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/5 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 via-cyan-500 to-purple-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <Terminal className="w-4 h-4 text-black font-bold" />
            </div>
            <span className="font-bold tracking-tight text-lg bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              AURA.AI // Admin Control
            </span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-mono text-red-400">
            <ShieldAlert className="w-3.5 h-3.5" /> SECURE NODE ACTIVE
          </div>
        </div>

        {/* Grid-Layout: Links Formular, Rechts die Tabelle */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Formular-Spalte */}
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-xl p-6 h-fit space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <PlusCircle className="w-4 h-4 text-cyan-400" /> Neuer DB-Antrag
            </h3>
            
            <form onSubmit={handleAntragSubmit} className="space-y-4">
              <Input 
                type="text" 
                placeholder="Antrag Titel" 
                value={titel} 
                onChange={(e) => setTitel(e.target.value)} 
                required 
                className="bg-black/60 border-white/10 text-slate-200 placeholder:text-slate-600 focus-visible:ring-cyan-500"
              />
              <textarea 
                placeholder="Beschreibung..." 
                value={beschreibung} 
                onChange={(e) => setBeschreibung(e.target.value)} 
                className="flex min-h-[100px] w-full rounded-md border border-white/10 bg-black/60 px-3 py-2 text-sm text-slate-200 placeholder:text-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
              />
              <Button type="submit" className="w-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 text-black font-bold hover:opacity-90 transition shadow-lg shadow-cyan-500/10">
                Antrag absenden
              </Button>
            </form>
          </div>

          {/* Tabellen-Spalte */}
          <div className="lg:col-span-2 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">Bestehende Anträge in der Datenbank</h3>
            
            <div className="rounded-md border border-white/5 bg-black/40">
              <Table>
                <TableHeader className="border-white/5 bg-white/[0.02]">
                  <TableRow className="border-white/5 hover:bg-transparent">
                    <TableHead className="w-[80px] font-mono text-slate-400">ID</TableHead>
                    <TableHead className="font-bold text-white">Titel</TableHead>
                    <TableHead className="text-slate-400">Beschreibung</TableHead>
                    <TableHead className="text-right font-mono text-cyan-400">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {antraegeListe.length === 0 ? (
                    <TableRow className="border-white/5">
                      <TableCell colSpan={4} className="text-center text-slate-600 py-8 font-mono">
                        Keine Anträge gefunden.
                      </TableCell>
                    </TableRow>
                  ) : (
                    antraegeListe.map((antrag) => (
                      <TableRow key={antrag.id} className="border-white/5 hover:bg-white/[0.01]">
                        <TableCell className="font-mono text-slate-500">{antrag.id}</TableCell>
                        <TableCell className="font-medium text-slate-200">{antrag.titel}</TableCell>
                        <TableCell className="text-slate-400">{antrag.beschreibung || '-'}</TableCell>
                        <TableCell className="text-right font-semibold text-emerald-400 font-mono">
                          {antrag.status ? antrag.status.toUpperCase() : 'OFFEN'}
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}