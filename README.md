# AquaConseil 💧

Application **mono-fichier** (HTML/CSS/JS, sans dépendance ni build) qui donne des
**conseils d'entretien de l'eau** de piscine ou de spa/jacuzzi à partir d'une
**photo de bandelette de test** et des caractéristiques du bassin. Conçue pour un
usage **hors-ligne** : il suffit d'ouvrir `index.html` dans un navigateur
(double-clic, `file://`) — aucune donnée n'est envoyée sur un serveur.

## Fonctions

- **Mon bassin & équipement** : type (piscine / spa-jacuzzi), désinfectant
  (chlore / brome / sel-électrolyse / oxygène actif), filtration (sable /
  cartouche / diatomée), emplacement, volume (calcul possible depuis les
  dimensions) et température de l'eau.
- **Photo de bandelette** :
  - **Calibrage du blanc** — on tape une zone blanche de la bandelette pour
    neutraliser la dominante de couleur de la photo (correction de l'éclairage)
    avant l'analyse.
  - **Pipette** — on clique sur chaque pastille ; la couleur est échantillonnée
    et appariée au barème colorimétrique (distance Lab/ΔE, **valeur interpolée**
    entre deux cases).
  - **Saisie manuelle** de secours (curseur + valeur) pour chaque paramètre.
- **Préréglages de bandelette** en un clic : AquaChek 4-en-1, 6-en-1 complète,
  spa au brome.
- **Paramètres** : pH, chlore libre, brome, alcalinité totale (TAC), dureté (TH),
  stabilisant (acide cyanurique), sel ; cibles adaptées au contexte.
- **Diagnostic & plan d'action** : statut par paramètre, actions **ordonnées**
  (TAC → pH → désinfection → stabilisant → dureté) avec **dosages estimés**
  calculés selon le volume, temps de filtration conseillé, conseils spécifiques
  au type de filtre, et avertissements de sécurité.

## Utilisation

Ouvrir `index.html`. Pour une lecture photo plus juste : lumière du jour
indirecte, bandelette bien à plat, **calibrer le blanc** avant de pipeter.

## Avertissement

Les dosages sont des **estimations** : ils dépendent de la concentration réelle
de vos produits. Suivez toujours la notice du fabricant, ajoutez par petites
quantités et re-testez l'eau après traitement. La lecture de couleur par photo
est approximative (éclairage, marque de bandelette) : vérifiez visuellement et
corrigez si besoin. En cas de doute (eau verte, trouble persistante, problème de
santé), demandez conseil à un professionnel.

---

Outil d'aide — aucune garantie. Données traitées localement dans le navigateur.
