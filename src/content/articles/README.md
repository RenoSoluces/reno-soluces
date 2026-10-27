# Ajouter ou modifier un article du blog

Chaque article est composé de deux éléments :

1. **Sa fiche**, dans `src/data/articles/<thème>.ts` : adresse (`slug`), titre, titre court pour Google (`seoTitle`, 60 caractères maximum), résumé (`excerpt`, environ 150 caractères), thème, dates, image, mots-clés et page liée.
2. **Son texte**, dans ce dossier : `src/content/articles/<slug>.md`.

## Mise en forme du texte

```
## Intertitre
### Sous-intertitre
Un paragraphe, avec du **gras** et un [lien interne](/panneaux-photovoltaiques).

- élément de liste
1. élément de liste numérotée

> Encadré d'avertissement
```

## Règles à respecter

- **Ne jamais modifier le `slug`** d'un article publié : c'est son adresse. Pour fusionner ou remplacer un article, ajoutez une redirection dans `ARTICLE_REDIRECTS` (`src/data/blogArticles.ts`) **et** dans `vercel.json` ; le build vérifie que les deux concordent.
- Mettre à jour le champ `updated` (JJ/MM/AAAA) à chaque révision du contenu.
- Viser au moins 600 mots : le build signale les articles de moins de 300 mots.
- Toute information réglementaire (aides, tarifs, obligations) doit être vérifiée sur une source officielle à la date de mise à jour.

Le titre, la description, le sitemap, les données structurées et la page HTML de l'article sont générés automatiquement au build (`npm run build`).
