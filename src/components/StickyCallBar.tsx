import { Phone, ArrowRight } from 'lucide-react';
import { PHONE_HREF } from '../lib/contact';
import { trackPhoneClick } from '../lib/tracking';

interface Props {
  onPageChange: (page: string) => void;
  /** Masquée sur la page de contact, où le formulaire est déjà à l'écran. */
  hidden?: boolean;
}

/** Barre fixe en bas de l'écran sur mobile : un appel ou une demande en un geste. */
export default function StickyCallBar({ hidden = false }: Props) {
  if (hidden) return null;

  return (
    <div
      className="md:hidden fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-black/10 bg-white/95 px-3 pt-2 backdrop-blur"
      style={{ paddingBottom: 'calc(0.5rem + env(safe-area-inset-bottom))' }}
    >
      <a
        href={PHONE_HREF}
        onClick={() => trackPhoneClick('barre_mobile')}
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#173b32] px-4 py-3 text-sm font-bold text-white"
      >
        <Phone size={17} /> Appeler
      </a>
      <a href="/contact"
        className="flex flex-1 items-center justify-center gap-2 rounded-full border border-[#173b32] px-4 py-3 text-sm font-bold text-[#173b32]">
        Décrire mon projet <ArrowRight size={16} />
      </a>
    </div>
  );
}
