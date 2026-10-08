import React, { useState } from 'react';
import { ArrowRight, Check, Loader2, MapPin } from 'lucide-react';

type FormData = {
  project: string;
  postalCode: string;
  city: string;
  housing: string;
  timeline: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  consent: boolean;
};

const initialForm: FormData = {
  project: '', postalCode: '', city: '', housing: '', timeline: '',
  firstName: '', lastName: '', phone: '', email: '', consent: false,
};

export default function ProjectLeadForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const update = (key: keyof FormData, value: string | boolean) =>
    setForm((current) => ({ ...current, [key]: value }));

  const next = () => {
    if (step === 1 && !form.project) return;
    if (step === 2 && (!form.postalCode || form.postalCode.length < 5)) return;
    setStep((value) => Math.min(3, value + 1));
  };

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.firstName || !form.lastName || !form.phone || !form.email || !form.consent) return;
    setStatus('loading');
    setError('');
    try {
      const response = await fetch('/api/submitLead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'site-reno-soluces', createdAt: new Date().toISOString() }),
      });
      if (!response.ok) throw new Error('Votre demande n’a pas pu être envoyée.');
      setStatus('success');
    } catch (err) {
      console.error(err);
      setStatus('error');
      setError('Une erreur est survenue. Vous pouvez réessayer dans quelques instants.');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-[2rem] bg-[#f4f0e7] p-8 sm:p-10 text-center border border-black/5">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#173b32] text-white"><Check /></div>
        <h3 className="font-display text-3xl text-[#173b32]">Votre projet est bien enregistré.</h3>
        <p className="mt-3 text-[#5c625e]">Nous allons pouvoir étudier votre demande et vous orienter vers un professionnel partenaire adapté à votre projet.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-[2rem] bg-white p-6 sm:p-8 shadow-[0_20px_70px_rgba(23,59,50,.12)] border border-black/5">
      <div className="flex items-center justify-between mb-7">
        <div>
          <span className="text-xs uppercase tracking-[.18em] text-[#a75c39] font-semibold">Votre projet</span>
          <h3 className="font-display text-2xl sm:text-3xl text-[#173b32] mt-1">Parlons de vos travaux.</h3>
        </div>
        <span className="text-sm text-[#777]">{step}/3</span>
      </div>

      <div className="mb-7 h-1 rounded-full bg-[#ebe8df]"><div className="h-full rounded-full bg-[#a75c39] transition-all" style={{ width: `${step * 33.333}%` }} /></div>

      {step === 1 && (
        <div className="space-y-5">
          <label className="block"><span className="label">Quel est votre projet ?</span>
            <select className="field" value={form.project} onChange={(e) => update('project', e.target.value)} required>
              <option value="">Sélectionnez une solution</option>
              <option>Pompe à chaleur air/eau</option><option>Pompe à chaleur air/air</option>
              <option>Panneaux photovoltaïques</option><option>Isolation</option>
              <option>Chauffe-eau thermodynamique</option><option>Climatisation réversible</option><option>Autre projet</option>
            </select>
          </label>
          <div className="grid sm:grid-cols-2 gap-4">
            <label><span className="label">Votre logement</span><select className="field" value={form.housing} onChange={(e) => update('housing', e.target.value)}><option value="">Type de logement</option><option>Maison</option><option>Appartement</option><option>Autre</option></select></label>
            <label><span className="label">Quand souhaitez-vous avancer ?</span><select className="field" value={form.timeline} onChange={(e) => update('timeline', e.target.value)}><option value="">Votre échéance</option><option>Au plus vite</option><option>Dans les prochaines semaines</option><option>Dans les prochains mois</option><option>Je me renseigne</option></select></label>
          </div>
          <button type="button" onClick={next} className="primary w-full">Continuer <ArrowRight size={17} /></button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-5">
          <div className="rounded-2xl bg-[#f7f5ef] p-4 flex gap-3 text-sm text-[#555b57]"><MapPin size={18} className="text-[#a75c39] shrink-0" /> Nous travaillons avec des professionnels partenaires selon les zones où ils interviennent. Indiquez simplement votre secteur.</div>
          <div className="grid sm:grid-cols-2 gap-4">
            <label><span className="label">Code postal</span><input className="field" inputMode="numeric" maxLength={5} value={form.postalCode} onChange={(e) => update('postalCode', e.target.value.replace(/\D/g, ''))} placeholder="66000" required /></label>
            <label><span className="label">Ville</span><input className="field" value={form.city} onChange={(e) => update('city', e.target.value)} placeholder="Perpignan" /></label>
          </div>
          <div className="flex gap-3"><button type="button" onClick={() => setStep(1)} className="secondary flex-1">Retour</button><button type="button" onClick={next} className="primary flex-1">Continuer <ArrowRight size={17} /></button></div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4"><label><span className="label">Prénom</span><input className="field" value={form.firstName} onChange={(e) => update('firstName', e.target.value)} required /></label><label><span className="label">Nom</span><input className="field" value={form.lastName} onChange={(e) => update('lastName', e.target.value)} required /></label></div>
          <div className="grid sm:grid-cols-2 gap-4"><label><span className="label">Téléphone</span><input className="field" type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} required /></label><label><span className="label">E-mail</span><input className="field" type="email" value={form.email} onChange={(e) => update('email', e.target.value)} required /></label></div>
          <label className="flex gap-3 text-xs leading-5 text-[#656a66] pt-2"><input type="checkbox" checked={form.consent} onChange={(e) => update('consent', e.target.checked)} required className="mt-1" /> J’accepte d’être recontacté au sujet de mon projet et confirme avoir pris connaissance de la politique de confidentialité.</label>
          {status === 'error' && <p className="text-sm text-red-600">{error}</p>}
          <div className="flex gap-3 pt-2"><button type="button" onClick={() => setStep(2)} className="secondary flex-1">Retour</button><button type="submit" disabled={status === 'loading'} className="primary flex-1">{status === 'loading' ? <Loader2 className="animate-spin" size={18} /> : <>Envoyer ma demande <ArrowRight size={17} /></>}</button></div>
        </div>
      )}
    </form>
  );
}
