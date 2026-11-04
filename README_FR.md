# Print Cost & Profit

**Une solution complète pour calculer les coûts, surveiller la production et gérer une activité d’impression 3D.**

Print Cost & Profit aide les créateurs et les petites entreprises à connaître le coût réel de chaque impression, définir des prix viables, surveiller les imprimantes compatibles, gérer le filament et organiser les opérations quotidiennes.

> **Version stable Windows : v1.4**  
> **Paquet Linux : v1.4**  
> Consultez [GitHub Releases](https://github.com/nilose2014/PrintCostProfit/releases) pour les versions publiées et les téléchargements disponibles.

## Téléchargements, dépôts et installation

| Plateforme | Téléchargement | Installation |
|---|---|---|
| **Windows** | [Dernières versions](https://github.com/nilose2014/PrintCostProfit/releases/latest) : téléchargez l’installateur `.exe` ou le paquet Windows disponible. | Exécutez l’installateur et suivez l’assistant. |
| **Linux** | [Branche Linux](https://github.com/nilose2014/PrintCostProfit/tree/linux) ou [Releases](https://github.com/nilose2014/PrintCostProfit/releases/latest) : téléchargez le paquet Linux v1.4 lorsqu’il est publié. | Extrayez le paquet et exécutez le script de démarrage. |

### Liens officiels
- **Dépôt principal :** https://github.com/nilose2014/PrintCostProfit
- **Code Linux :** https://github.com/nilose2014/PrintCostProfit/tree/linux
- **Toutes les versions :** https://github.com/nilose2014/PrintCostProfit/releases
- **Dernière version :** https://github.com/nilose2014/PrintCostProfit/releases/latest
- **Problèmes :** https://github.com/nilose2014/PrintCostProfit/issues

La page Releases est la référence officielle pour les installateurs et paquets disponibles. Les fichiers peuvent changer ; n’utilisez pas d’anciens liens directs.

### Installation Windows
1. Ouvrez [Releases](https://github.com/nilose2014/PrintCostProfit/releases).
2. Téléchargez l’installateur `.exe` le plus récent ou le ZIP disponible.
3. Exécutez l’installateur ou extrayez le ZIP complet dans un dossier accessible en écriture.
4. Lancez l’application depuis le raccourci ou le script fourni.
5. Si le navigateur ne s’ouvre pas, visitez `http://127.0.0.1:8700/`.
6. Conservez ensemble les fichiers HTML, JavaScript, CSS et serveur.

**Notes :** le serveur local doit rester actif. Après une mise à jour, arrêtez l’ancien serveur, démarrez celui du dossier mis à jour et rechargez avec `Ctrl + F5`. Sauvegardez les données avant de remplacer les fichiers. Ne supprimez pas le dossier de données.

### Installation Linux (Ubuntu, Debian et dérivées)
1. Téléchargez le paquet depuis la [branche Linux](https://github.com/nilose2014/PrintCostProfit/tree/linux) ou [Releases](https://github.com/nilose2014/PrintCostProfit/releases).
2. Extrayez le paquet complet et ouvrez un terminal à sa racine.
3. Exécutez :
   ```bash
   chmod +x linux/iniciar_linux.sh
   ./linux/iniciar_linux.sh
   ```
4. Ouvrez `http://127.0.0.1:8700/`.

**Notes :** exécutez ces commandes dans Linux ou dans le terminal Ubuntu de WSL, jamais dans PowerShell. Python 3 et SQLite sont requis. Conservez la structure des dossiers. Les données sont stockées dans le répertoire utilisateur, séparément du programme. En cas d’échec d’un test de démarrage, conservez le résultat et ne l’ignorez pas.

### Premier démarrage et connexion de l’imprimante
Démarrez le serveur avant d’ouvrir le site. L’ordinateur et l’imprimante doivent être accessibles sur le réseau local. Configurez Moonraker avec l’adresse IP LAN et le port de l’imprimante. Les paramètres peuvent être enregistrés lorsque l’imprimante est éteinte, mais le suivi en direct nécessite une connexion. L’intégration Snapmaker Orca utilise le flux local et le script de post-traitement du paquet correspondant.

---

## Qu’est-ce que Print Cost & Profit ?

L’application réunit les aspects techniques et commerciaux de l’impression 3D. Un trancheur estime la matière et le temps, mais une activité doit aussi prendre en compte l’électricité, l’usure de la machine, la maintenance, la main-d’œuvre, les finitions, les échecs, le stock et le prix final.

Flux de travail :
1. Importer les données depuis un G-code compatible ou les saisir manuellement.
2. Calculer le coût réel de production.
3. Définir un objectif de bénéfice et obtenir un prix recommandé.
4. Vérifier les matériaux disponibles et les informations de l’imprimante.
5. Enregistrer les estimations et les documents commerciaux.
6. Suivre la production, le stock, la maintenance et les finances.

## Fonctionnalités principales

### 1. Calculatrice des coûts
Calcule les coûts et les prix à partir de la consommation de filament en grammes, du prix au kilogramme, de la durée, de l’électricité, de l’amortissement, de la maintenance, de la main-d’œuvre, de la préparation, des frais supplémentaires, de la peinture et des finitions par unité, ainsi que d’une réserve pour les impressions ratées. Elle fournit le bénéfice cible, le prix recommandé, le coût et le bénéfice par unité et la marge.

Elle distingue **coût de production**, **prix de vente**, **bénéfice** et **marge** : le filament n’est pas le seul coût.

#### G-code et trancheur
L’intégration Orca compatible peut importer le nom du fichier, les matériaux, les couleurs et codes HEX, la consommation estimée, la durée et les miniatures disponibles. Vérifiez les données avant le calcul et confirmez les correspondances, notamment pour les travaux multicolores ou multimatériaux.

#### Comparaison et estimations enregistrées
Comparez plusieurs scénarios de prix et l’effet d’un objectif de bénéfice différent ou d’un supplément. Les estimations peuvent être enregistrées.

### 2. Tableau de bord
Vue d’ensemble des ventes, coûts, bénéfices, graphiques financiers, stock, état des imprimantes, production et activité récente. Les détails se trouvent dans les sections correspondantes.

### 3. Moniteur d’imprimantes — Snapmaker U1 / Moonraker
Connexion aux imprimantes compatibles sur le réseau local via Moonraker. Fonctions : découverte et IP manuelle, sauvegarde de la connexion, état en ligne/hors ligne, état et progression d’impression, informations sur le travail actif, nom de fichier et consommation disponibles, liste de fichiers, miniatures G-code, sélection entre plusieurs imprimantes et transfert du travail actif vers la calculatrice.

L’ordinateur doit accéder à l’imprimante sur le réseau local. Pare-feu, isolation réseau, IP incorrecte ou Moonraker indisponible peuvent empêcher la connexion. Vérifiez les données importées avant un devis.

### 4. Inventaire de filaments
Enregistre marque, matériau (PLA, PETG et autres), nom et code HEX de couleur, poids initial et restant, prix au kilogramme et stock. Compare les matériaux/couleurs du G-code aux bobines enregistrées. Les correspondances incertaines doivent être vérifiées. Les alertes de stock dépendent de la mise à jour des poids.

### 5. Imprimantes et profils
Configure les imprimantes et connexions, permet leur découverte réseau lorsqu’elle est disponible, conserve leurs données, affiche leur état et associe les informations de production et de comptabilité. Le flux est orienté Snapmaker U1 ; d’autres appareils et firmwares peuvent nécessiter des API Moonraker compatibles et ne sont pas nécessairement validés.

### 6. Centre de maintenance
Organise les tâches préventives et correctives : nettoyage, lubrification des axes, contrôle des courroies et guides, hotend, buses, extrudeur, alimentation du filament, ventilateurs, refroidissement, plateau, câbles et connecteurs. Les actions et leur état peuvent être enregistrés. Suivez toujours le manuel et les consignes de sécurité du fabricant.

### 7. Devis, commandes et factures
Crée et enregistre des devis, gère les commandes et les factures, associe les clients, affiche les détails et totaux, génère des PDF et convertit un devis en facture lorsque le flux le permet. Vérifiez numérotation, taxes, devise, client et PDF avant l’envoi.

### 8. Clients
Enregistre les clients et les associe aux documents commerciaux afin d’éviter les saisies répétées et d’organiser devis, commandes et factures.

### 9. Comptabilité
Enregistre les mouvements et permet d’examiner revenus, coûts et bénéfices, avec une ventilation par imprimante si configurée. Vérifiez les données avec votre comptabilité officielle et vos obligations fiscales. L’application ne fournit pas de conseil comptable ou fiscal.

### 10. Catalogue de produits
Organise les produits fabriqués ou vendus. Lorsque disponibles, la présentation des produits et les fonctions QR relient le produit physique aux informations du catalogue.

### 11. Journal et diagnostic
Le journal local aide à diagnostiquer les problèmes du serveur, de connexion, d’API, d’importation, d’intégration, de sauvegarde et de stockage. Pour signaler un problème, indiquez la version, le système, les étapes et des journaux expurgés des données privées.

### 12. Sauvegarde et restauration
Stockage local avec sauvegarde et restauration dans les versions compatibles. Le serveur Linux propose via API les snapshots, le contrôle des révisions, les sauvegardes et les journaux. Windows dispose de son propre serveur et stockage. Sauvegardez avant une mise à jour, conservez les copies hors du dossier du programme et ne modifiez pas la base pendant l’exécution.

### 13. Options et interface
Regroupe la configuration. Selon la version, permet d’organiser les sections, masquer des champs et modifier l’ordre des panneaux.

### 14. Huit langues
Les textes sont centralisés dans `js/traducciones.js` : espagnol, anglais, français, allemand, italien, polonais, arabe avec prise en charge RTL et chinois simplifié. Tout nouveau champ, dialogue, bouton, avertissement ou message d’erreur doit être centralisé et traduit.

---

## Captures d’écran

Les images sont incluses dans `assets/screenshots/`.

### Tableau de bord
![Tableau de bord](assets/screenshots/screenshot-02.jpg)

### Calculatrice et données d’impression
![Calculatrice](assets/screenshots/screenshot-03.jpg)
![Données d’impression](assets/screenshots/screenshot-01.jpg)

### Production et gestion commerciale
![Gestion commerciale](assets/screenshots/screenshot-05.jpg)
![Coûts et prix](assets/screenshots/screenshot-06.jpg)
![Configuration et documents](assets/screenshots/screenshot-07.jpg)

### Paramètres et mises à jour
![Configuration](assets/screenshots/screenshot-08.jpg)
![Options](assets/screenshots/screenshot-09.jpg)
![Version et mises à jour](assets/screenshots/screenshot-10.jpg)

### Clients, commandes et factures
![Clients](assets/screenshots/screenshot-12.jpg)
![Clients et documents](assets/screenshots/screenshot-13.jpg)
![Documents](assets/screenshots/screenshot-14.jpg)
![Commandes et devis](assets/screenshots/screenshot-15.jpg)
![Factures](assets/screenshots/screenshot-16.jpg)
![Ventes](assets/screenshots/screenshot-17.jpg)

### Filaments et imprimantes
![Stock de filaments](assets/screenshots/screenshot-18.jpg)
![Inventaire](assets/screenshots/screenshot-19.jpg)
![Imprimante et matériaux](assets/screenshots/screenshot-20.jpg)

### Rentabilité et rapports
![Rentabilité](assets/screenshots/screenshot-21.jpg)
![Synthèse financière](assets/screenshots/screenshot-22.jpg)
![Facture PDF](assets/screenshots/screenshot-23.jpg)

### Maintenance
![Centre de maintenance](assets/screenshots/screenshot-24.jpg)
![Tâches de maintenance](assets/screenshots/screenshot-25.jpg)

### Autres écrans
![Écran supplémentaire](assets/screenshots/screenshot-04.jpg)
![Écran supplémentaire](assets/screenshots/screenshot-11.jpg)
![Écran supplémentaire](assets/screenshots/screenshot-26.jpg)

---

## Flux de travail type
1. Préparez le travail dans le trancheur et générez le G-code.
2. Importez les données via Orca ou saisissez-les manuellement.
3. Vérifiez les matériaux et couleurs et associez-les à l’inventaire.
4. Vérifiez l’imprimante et le filament disponible.
5. Calculez matière, temps, électricité, machine, main-d’œuvre et finitions.
6. Définissez le prix et vérifiez la marge.
7. Enregistrez le devis et associez le client.
8. Surveillez l’impression.
9. Enregistrez la vente ou la facture et vérifiez l’activité financière.
10. Mettez à jour stock et maintenance.

## Configuration requise
**Windows :** Windows 64 bits compatible, droits d’exécution et d’écriture dans les données, accès réseau local à l’imprimante et Internet pour GitHub.

**Linux :** Ubuntu, Debian ou dérivées compatibles, Python 3, SQLite, droit d’exécution du script et accès réseau local.

**Imprimante :** connexion compatible, API Moonraker locale accessible, IP correcte et intégration Orca configurée selon le paquet.

## Versions et mises à jour
La version stable Windows et le paquet Linux décrits sont **v1.4**. Avant toute mise à jour, sauvegardez les données, téléchargez le bon paquet, arrêtez le serveur, mettez à jour les fichiers, démarrez le serveur depuis le nouveau dossier et vérifiez la version. Ne lancez pas deux serveurs sur le même port. Adresse par défaut : `127.0.0.1:8700`.

## Dépannage
- **L’application ne s’ouvre pas :** vérifiez le serveur, le terminal/PowerShell, ouvrez `http://127.0.0.1:8700/` et vérifiez le port 8700.
- **Version incorrecte :** arrêtez l’ancien serveur, démarrez celui du bon dossier, consultez `http://127.0.0.1:8700/api/version`, vérifiez `VERSION` et rechargez avec `Ctrl + F5`.
- **Imprimante hors ligne :** vérifiez alimentation, réseau, IP, Moonraker et pare-feu ; essayez l’IP manuelle.
- **Métadonnées ou miniatures absentes :** vérifiez le G-code et les données exportées par le trancheur ; contrôlez matière, couleur, poids et durée.
- **Tests Linux en échec :** lancez le script à la racine, vérifiez Python 3 et SQLite et conservez l’erreur complète.

## Structure du projet
- `Print_Cost_Profit.html` — interface.
- `js/` — modules, intégrations et traductions.
- `css/` — styles.
- `VERSION` — version lue par le serveur.
- `Servidor_Panel_U1.ps1` — serveur Windows.
- `linux/` — serveur Linux, démarrage et tests.
- Données locales — base, journaux et sauvegardes séparés des fichiers du programme selon la plateforme.

Le contenu peut varier entre les paquets Windows et Linux.

## Assistance et contributions
- Bugs : https://github.com/nilose2014/PrintCostProfit/issues
- Code source : https://github.com/nilose2014/PrintCostProfit
- Code Linux : https://github.com/nilose2014/PrintCostProfit/tree/linux
- Versions : https://github.com/nilose2014/PrintCostProfit/releases

Incluez la version, le système, le paquet, l’imprimante et sa connexion, les étapes de reproduction, les erreurs/journaux expurgés et des captures. Ne publiez jamais de mots de passe, jetons, identifiants privés, données clients ou bases privées.

## Informations importantes
Print Cost & Profit aide à calculer les coûts de production et gérer une activité d’impression 3D. Les résultats dépendent des données, métadonnées du trancheur, configuration, tarifs électriques, prix des matériaux et paramètres. Vérifiez calculs, stock, devis et factures. Le suivi dépend de services réseau locaux compatibles et du firmware/API ; les fonctions peuvent varier selon la plateforme et la version.

**Print Cost & Profit — maîtrisez vos coûts, fixez le prix de vos impressions et gérez votre flux 3D.**
