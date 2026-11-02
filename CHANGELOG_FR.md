## Historique des versions

### v1.3 — Traductions du système de licences et prise en charge des langues
- Les traductions manquantes sont ajoutées à `js/traducciones.js` pour les parcours de connexion, d’authentification et de consultation des licences en espagnol, anglais, français, allemand, italien et polonais.
- Les libellés fixes de la boîte de dialogue globale (« Avis » et « Accepter ») utilisent le système central de traduction, sans dictionnaire indépendant.
- Les textes de l’application sont intégrés et maintenus dans les huit langues disponibles : espagnol, anglais, français, allemand, italien, polonais, arabe et chinois simplifié.
- Les nouveaux textes et dialogues sont centralisés dans `js/traducciones.js` afin d’éviter les chaînes isolées dans les fichiers de l’application.

### v1.2 — Modifications du 31 octobre : reconnexion automatique de l’imprimante au démarrage
- À l’ouverture de l’application, l’adresse IP enregistrée de l’imprimante sélectionnée est réappliquée au pont local avant la consultation de son état.
- La connexion est vérifiée après la synchronisation de la configuration, évitant d’afficher hors ligne une imprimante connectée lorsque le pont conserve une ancienne adresse IP.
- La sélection et l’adresse IP enregistrée sont conservées lorsque l’imprimante est réellement hors ligne ; aucune recherche réseau n’est forcée et l’imprimante n’est pas remplacée.

#### Modifications du 30 octobre : moniteur U1, miniatures et SQLite
- L’imprimante configurée et son adresse IP sont conservées même si elle est éteinte ou ne répond pas ; elle est indiquée « HORS LIGNE » et les anciennes données du moniteur sont effacées.
- Le lecteur du G-code actif extrait la miniature de résolution maximale et la conserve lors de l’envoi du travail vers la calculatrice.
- Les écritures SQLite en double sont réduites : sélection de l’imprimante avec une clé canonique et sauvegarde groupée du brouillon de la calculatrice (350 ms), avec vidage à la fermeture.
- Les anciennes clés restent compatibles et les nouveaux textes sont centralisés dans `js/traducciones.js` pour les six langues.

### v1.1 — Première version publique et historique des fonctions antérieures
- Première version publique : calcul des coûts, estimations, intégration Orca/G-code, moniteur U1, inventaire, comptabilité, clients, devis, commandes, factures, SQLite et six langues.
- Les améliorations publiées avant v1.2 sont regroupées ici afin de conserver une numérotation commerciale cohérente, sans afficher les numéros internes de développement.
