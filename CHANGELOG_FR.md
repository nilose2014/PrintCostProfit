### v1.4 — Informations de version et vérification manuelle des mises à jour
- Ajout dans Options d’une section affichant la version installée.
- Ajout du bouton « Vérifier les mises à jour » pour consulter manuellement les versions stables publiées sur GitHub.
- Lorsqu’une version plus récente est disponible, son numéro est affiché et le ZIP de l’installateur Windows est proposé s’il est joint ; sinon, la page officielle de la publication est ouverte.
- Si aucune version plus récente n’est disponible, l’application l’indique. Les notifications automatiques au démarrage et les vérifications périodiques sont conservées.
- Tous les nouveaux textes sont centralisés dans `js/traducciones.js` et traduits en espagnol, anglais, français, allemand, italien, polonais, arabe et chinois simplifié.
- Nouvelle version publique basée sur la compilation 5.58 : centre de maintenance réorganisé, conseils séparés des tâches, alertes corrigées et prise en charge Unicode/RTL des PDF améliorée. Mise à jour depuis v1.3 préparée via l’installateur GitHub Releases, avec conservation des données locales.

- Première adaptation Linux basée sur l’application Windows v1.4 : serveur Python natif, API de stockage SQLite, sauvegardes, journaux et services Snapmaker U1. Le code de l’interface et les traductions en huit langues sont conservés. L’intégration du post-traitement Orca et les essais avec une imprimante réelle restent à valider.

- Centre de maintenance réorganisé : tâches compactes en cartes pleine largeur, conseils repliables en dessous et formulaire de création pleine largeur. Mise en page adaptative pour les mobiles.

- PDF des factures et devis : remplacement de l’encodage limité à Helvetica/WinAnsi par un rendu Unicode haute résolution avec les polices Noto locales pour l’arabe et le chinois. La génération des PDF reste locale et ne dépend ni du navigateur par défaut ni des polices installées.

- Correction du panneau d’alertes : les alertes de filament et de maintenance ne se remplacent plus et ne disparaissent plus lors de l’actualisation de l’accueil.

- Serveur U1 : correction de la syntaxe PowerShell lors de la construction des requêtes Moonraker avec des séparateurs `&` ; le caractère est désormais généré de manière sûre. Script enregistré avec BOM UTF-8 pour Windows PowerShell 5.1 et affichage correct des caractères polonais.

- Moniteur U1 : délai d’attente de la requête d’état porté à 8 secondes et délai d’attente du navigateur à 10 secondes. Évite de signaler l’imprimante comme déconnectée lorsqu’elle répond aux requêtes G-code mais met plus de temps à renvoyer son état.
- Refonte du panneau de maintenance avec des cartes, indicateurs, formulaires et historique plus clairs et adaptatifs.
- Extension des contrôles préventifs du hotend, des buses, du chauffage/thermistor, de l’extrudeur, des courroies, ventilateurs, plateau, capteurs et câblage.
- Correction de la détection des familles Snapmaker J1/Artisan, Anycubic Kobra 2 Pro, ELEGOO Neptune 4 Pro et Bambu Lab.
- Les nouvelles tâches préventives sont également ajoutées aux imprimantes déjà enregistrées sans supprimer les heures, tâches personnalisées ni l’historique. Les fréquences courantes sont indicatives et modifiables.
- Traductions centralisées des huit langues mises à jour.
- Les grammes restants de chaque bobine sont affichés avec deux décimales maximum et le champ modifiable utilise des incréments de 0,01 g. La valeur enregistrée ne change pas tant que l’utilisateur ne modifie pas le champ.
- Refonte des Devis, Commandes et Factures avec des en-têtes visuels, des formulaires organisés, des champs sombres et des tableaux plus lisibles, tout en conservant les actions et flux existants.
- Présentation de l’inventaire de filament améliorée : formulaire plus clair, cartes de bobines, indicateurs de matière restante et commandes d’édition.
- Apparence de la Comptabilité harmonisée avec le tableau de bord Accueil, avec cartes de rentabilité et panneaux de mouvements.
- Onglet Clients repensé avec un en-tête visuel, un formulaire mieux organisé, des champs sombres cohérents avec Accueil et une meilleure hiérarchie des commandes.
- Le champ Observations n’apparaît plus comme une zone blanche native ; il conserve désormais le thème sombre et le style des autres champs.
- L’agenda présente des cartes compactes, des informations plus lisibles et moins d’espace vide. La recherche, la modification, l’enregistrement et la suppression des clients sont conservés, ainsi que leur réutilisation dans les devis, commandes et factures.

- Onglet Options repensé avec des cartes compactes sur deux colonnes, une hiérarchie visuelle plus claire et un style cohérent avec Accueil ; imprimante, sauvegardes, profils et journal conservent toute la largeur lorsque nécessaire.
- Correction des boutons « Afficher les champs » et « Masquer les champs » : ils déploient et replient désormais le contenu et reflètent l’état via l’attribut accessible `aria-expanded`.
- Les champs, commandes, préférences d’ordre et de repli, traductions existantes et données enregistrées sont conservés. La base SQLite n’est pas modifiée.

- Documentation des Options corrigée : les huit fichiers README deviennent des pages HTML indépendantes et localisées.
- Chaque langue ouvre son propre manuel HTML depuis l’application ; le chemin erroné vers des fichiers inexistants est supprimé.
- Le manuel arabe utilise le sens RTL et tous les manuels adoptent le thème sombre de l’application.

- Remplacement des icônes décoratives de la barre supérieure par des boutons fonctionnels au style néon : alertes, documentation et options.
- La cloche ouvre la section des alertes et affiche le nombre réel d’avertissements.
- Le point d’interrogation ouvre le manuel correspondant à la langue sélectionnée ; les chemins utilisent désormais les README localisés inclus.
- L’engrenage ouvre directement l’onglet Options.

- Connexion du bloc « Moniteur des imprimantes » de l’accueil au véritable endpoint `/api/u1/status` du pont local, au lieu de lire le texte d’un panneau susceptible d’être masqué.
- Affiche la connexion, l’état, le fichier actif et la progression de l’impression ; indique la déconnexion si le pont ou l’imprimante ne répond pas.
- Le bouton « Ouvrir le moniteur » actualise l’état avant d’ouvrir le moniteur complet.

- Correction du calcul des indicateurs de l’accueil afin qu’ils utilisent la même normalisation et les mêmes règles que la Comptabilité.
- Exclusion des estimations non comptabilisées et prévention des doublons de revenus associés aux anciennes commandes.
- Revenus, coûts, bénéfice, marge et montant encaissé sont calculés selon les mêmes critères que la Rentabilité avancée.
- Refonte complète de l’accueil avec tableau de bord, indicateurs, graphiques, travaux récents, stock, raccourcis et alertes.
- Les données sont lues dans l’historique, la comptabilité et les bobines locales ; les fonctions existantes sont conservées.
- Nouveaux textes centralisés et traduits dans les huit langues.

- Ajout d’un journal local persistant pour les erreurs JavaScript, les promesses non gérées, les incidents SQLite et l’activité des principaux contrôles.
- Ajout dans Options d’un visualiseur avec filtres par niveau et recherche, ainsi que l’export JSON et la suppression manuelle.
- Les journaux sont enregistrés hors du dossier d’installation, dans les données locales de l’utilisateur, avec rotation automatique et un maximum de 50 entrées visibles.
- Le journal évite de capturer les valeurs des formulaires et les données sensibles. Les fichiers de logs générés ne sont jamais inclus dans les ZIP de distribution.
- Tous les nouveaux textes sont centralisés et traduits dans les huit langues.

### v1.3 — Traductions du système de licences et extension des langues
- Ajout dans `js/traducciones.js` des traductions manquantes pour les parcours de connexion, d’authentification et de consultation des licences en espagnol, anglais, français, allemand, italien et polonais.
- Les textes fixes de la boîte de dialogue globale (« Avis » et « Accepter ») utilisent le système central de traduction, sans dictionnaire indépendant.
- Les textes de l’application sont intégrés et maintenus dans les huit langues disponibles : espagnol, anglais, français, allemand, italien, polonais, arabe et chinois simplifié.
- Les nouveaux textes et dialogues sont centralisés dans `js/traducciones.js` afin d’éviter les chaînes isolées dans les fichiers de l’application.
- Ajout de deux langues, l’arabe et le chinois simplifié, portant l’application à huit langues : espagnol, anglais, français, allemand, italien, polonais, arabe et chinois simplifié.
- Correction des miniatures des fichiers G-code : extraction de la miniature disponible en plus haute résolution et conservation de l’image lors de l’envoi du travail du moniteur vers la calculatrice.
- Correction de problèmes mineurs de fonctionnement, d’initialisation, de traduction et d’alias de couleurs.

### v1.2 — Changements du 31 octobre : reconnexion automatique de l’imprimante au démarrage
- À l’ouverture de l’application, l’adresse IP enregistrée de l’imprimante sélectionnée est réappliquée au pont local avant la consultation de son état.
- La vérification de connexion intervient après la synchronisation de la configuration, évitant d’afficher hors ligne une imprimante connectée lorsque le pont conserve une ancienne adresse IP.
- La sélection et l’adresse IP enregistrée sont conservées lorsque l’imprimante est réellement hors ligne ; aucune recherche réseau n’est forcée et l’imprimante sélectionnée n’est pas changée.

#### Changements du 30 octobre : moniteur U1, miniatures et SQLite
- L’imprimante configurée et son adresse IP sont conservées même si elle est éteinte ou ne répond pas ; elle est identifiée comme « HORS LIGNE » et les anciennes données du moniteur sont effacées.
- Le lecteur du G-code actif extrait la miniature de plus haute résolution et la conserve lors de l’envoi du travail à la calculatrice.
- Réduction des écritures SQLite en double : sélection de l’imprimante avec une clé canonique et sauvegarde groupée du brouillon de la calculatrice (350 ms), avec vidage à la fermeture.
- Les clés historiques sont conservées pour la compatibilité et les nouveaux textes sont centralisés dans `js/traducciones.js` pour les six langues.

### v1.1 — Première version publique et historique des fonctions précédentes
- Version publique initiale : calculateur de coûts, estimations, intégration Orca/G-code, moniteur U1, inventaire, comptabilité, clients, devis, commandes, factures, SQLite et six langues.
- Les améliorations publiées avant v1.2 sont regroupées ici afin de conserver une numérotation commerciale cohérente, sans afficher les numéros internes de développement.
