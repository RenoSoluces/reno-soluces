import { useState } from 'react';

/**
 * Protection légère contre les envois automatiques, invisible pour les visiteurs :
 *  - un champ « piège » masqué que seuls les robots remplissent ;
 *  - le temps passé sur le formulaire (un envoi en quelques secondes n'est pas humain).
 * Le serveur (api/submitLead.js) ignore silencieusement ces envois.
 */
export function useAntiSpam() {
  const [trap, setTrap] = useState('');
  const [startedAt] = useState(() => Date.now());

  const trapField = (
    <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}>
      <label>
        Ne pas remplir ce champ
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={trap}
          onChange={(event) => setTrap(event.target.value)}
        />
      </label>
    </div>
  );

  const payload = () => ({ website: trap, elapsedMs: Date.now() - startedAt });

  return { trapField, payload };
}
