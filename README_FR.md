# Print Cost & Profit
## Calculateur de coûts d’impression 3D, inventaire et gestion des imprimantes

**Windows Desktop : 2.0 | Linux : 1.4**  
Développeuse : Beatriz Toro Martin

Dépôt officiel : https://github.com/nilose2014/PrintCostProfit  
Toutes les versions : https://github.com/nilose2014/PrintCostProfit/releases

## 1. Téléchargements

Téléchargez toujours depuis les publications officielles GitHub.

### Windows 10 / 11 — Version 2.0

**ZIP de l’installateur :** `PrintCostProfit-Setup-v2.0.zip`  
[Publication Windows 2.0](https://github.com/nilose2014/PrintCostProfit/releases/tag/v2.0)

1. Téléchargez le ZIP et choisissez **Extraire tout**.
2. Ouvrez le dossier extrait.
3. Lancez `PrintCostProfit-Setup.exe` et suivez l’assistant.

**ZIP portable :** `PrintCostProfit-Portable-v2.0.zip`  
[Publication Windows 2.0](https://github.com/nilose2014/PrintCostProfit/releases/tag/v2.0)

1. Téléchargez et extrayez le ZIP dans un dossier permanent.
2. Lancez `PrintCostProfit-Portable.exe` depuis le dossier extrait.

Ne lancez pas de fichier depuis le ZIP. Conservez ensemble tous les fichiers extraits.

### Linux — Version 1.4

[Publication Linux 1.4](https://github.com/nilose2014/PrintCostProfit/releases/tag/linux-v1.4)

**Debian / Ubuntu :** `printcostprofit_1.4.1_amd64.deb`  
[Télécharger le .deb](https://github.com/nilose2014/PrintCostProfit/releases/download/linux-v1.4/printcostprofit_1.4.1_amd64.deb)

```bash
sudo apt install ./printcostprofit_1.4.1_amd64.deb
```

Vous pouvez aussi double-cliquer sur le `.deb` et utiliser le gestionnaire de paquets.

**AppImage :** `PrintCostProfit-Linux-x86_64.AppImage`  
[Télécharger AppImage](https://github.com/nilose2014/PrintCostProfit/releases/download/linux-v1.4/PrintCostProfit-Linux-x86_64.AppImage)

```bash
chmod +x PrintCostProfit-Linux-x86_64.AppImage
./PrintCostProfit-Linux-x86_64.AppImage
```

Les paquets Linux ciblent les systèmes AMD64 64 bits. **Windows est en version 2.0 et la publication Linux disponible est en version 1.4. Il s’agit de lignes de publication distinctes.**

## 2. Sécurité Windows

Les exécutables Windows sont actuellement distribués sans certificat commercial de signature de code. SmartScreen ou un autre logiciel de sécurité peut afficher un avertissement. Vérifiez que le téléchargement provient du dépôt officiel. N’ignorez pas une détection antivirus réelle et ne contournez pas un avertissement si l’origine du fichier n’est pas vérifiée.

## 3. Fonctionnalités principales

- **Calculateur de coûts 3D :** estime les coûts avec la consommation de filament, le prix du matériau, le temps d’impression, le fonctionnement de la machine, l’amortissement, la maintenance et les autres dépenses configurées.
- **Prix et rentabilité :** examine le coût estimé, le prix de vente, le bénéfice, la marge et le prix conseillé. Les résultats dépendent des valeurs saisies.
- **Inventaire des filaments :** gère marques, matériaux, couleurs, quantités de bobines et prix.
- **Profils d’imprimante :** enregistre les paramètres des équipements utilisés dans les calculs.
- **Surveillance :** la Snapmaker U1 bénéficie d’une compatibilité complète confirmée. D’autres imprimantes Moonraker, Fluidd ou Mainsail peuvent fonctionner selon leur configuration et les fonctions prises en charge.
- **Intégration des trancheurs :** conçue pour Snapmaker Orca, OrcaSlicer et Creality Print. La compatibilité est d’environ 90 % et varie selon la version et la configuration ; elle n’est pas garantie à 100 %.
- **Traitement G-code :** lit les informations disponibles, le temps estimé, la consommation estimée et les métadonnées des filaments. Les estimations du trancheur ne correspondent pas nécessairement à la consommation réelle.
- **Devis, factures et comptabilité :** outils d’organisation des documents commerciaux et de l’activité financière.
- **SQLite local :** Windows 2.0 stocke les données localement avec SQLite et Electron IPC.

## 4. Architecture Windows — Version 2.0

Windows 2.0 charge l’interface depuis les fichiers locaux Electron et n’utilise plus l’ancienne passerelle HTTP PowerShell. L’interface communique avec SQLite via IPC. Les imprimantes compatibles sont accessibles sur le réseau avec Moonraker. La réception du G-code Orca utilise une surveillance locale des fichiers gérée par Electron. Les anciennes instructions relatives au serveur HTTP ou à la passerelle PowerShell ne décrivent pas Windows 2.0.

## 5. Intégration du trancheur

L’intégration vise les applications basées sur OrcaSlicer, notamment Snapmaker Orca, OrcaSlicer et Creality Print. Les menus varient selon l’application et la version.

1. Ouvrez le trancheur et sélectionnez le profil d’imprimante.
2. Ouvrez les paramètres d’impression et activez le mode avancé si nécessaire.
3. Recherchez **Autres** et le réglage des scripts de post-traitement.
4. Suivez les instructions fournies avec le paquet correspondant.
5. Enregistrez le profil, générez un G-code de test et vérifiez la réception des informations disponibles.

Windows 2.0 utilise une surveillance locale des fichiers gérée par Electron. N’utilisez pas les anciennes instructions exigeant la passerelle HTTP PowerShell.

## 6. Réseau de l’imprimante

Pour les imprimantes Moonraker compatibles, vérifiez la communication réseau entre l’ordinateur et l’imprimante, relevez l’adresse IP, vérifiez l’accès à Moonraker et configurez la connexion dans l’application. Les fonctions dépendent de l’imprimante, du micrologiciel et du réseau. La Snapmaker U1 est le modèle dont la compatibilité complète est confirmée.

## 7. Données et sauvegardes

Windows utilise une base SQLite locale. Effectuez des sauvegardes régulières, notamment avant les mises à jour. Ne supprimez ni ne déplacez la base pendant que l’application fonctionne. En cas d’échec de l’initialisation, conservez la base et examinez l’erreur avant de saisir des données importantes.

## 8. Configuration requise

- **Windows :** Windows 10 ou 11, 64 bits et espace disque suffisant. Le réseau est nécessaire pour surveiller les imprimantes. Les paquets utilisateurs ne nécessitent pas l’installation manuelle de Node.js ou Python.
- **Linux :** AMD64 64 bits. Utilisez le paquet Debian sur les systèmes Debian/Ubuntu compatibles ou l’AppImage.
- Intégrations facultatives : Snapmaker Orca, OrcaSlicer, Creality Print et imprimantes compatibles en réseau.

## 9. Mise à jour

1. Ouvrez les publications officielles.
2. Lisez les notes et vérifiez le système et la version.
3. Téléchargez le paquet adapté.
4. Sauvegardez les données importantes.
5. Installez ou extrayez le nouveau paquet selon les instructions.

Ne supprimez pas les données existantes. Windows et Linux ont des lignes de publication distinctes ; vérifiez la version.

## 10. Dépannage

- **Windows ne démarre pas :** vérifiez que le ZIP est entièrement extrait et que les fichiers restent ensemble. Notez l’erreur.
- **Avertissement de sécurité :** vérifiez la source et les détections antivirus. La version Windows n’est pas signée par un certificat commercial.
- **Surveillance en panne :** vérifiez alimentation, réseau, IP, accès Moonraker et paramètres.
- **Intégration en panne :** vérifiez version du trancheur, post-traitement, G-code et réception locale.
- **Données non enregistrées :** conservez la base, vérifiez SQLite et notez l’erreur. Ne supprimez pas les données comme solution improvisée.
- **AppImage ne démarre pas :** exécutez `chmod +x`, lancez depuis un terminal et examinez les erreurs. Pour `.deb`, vérifiez installation et dépendances.

## 11. Code source et développement

Code source : https://github.com/nilose2014/PrintCostProfit

```bash
npm install
npm start
```

Pour générer Windows :

```bash
npm run dist:win
```

Ces commandes sont destinées aux développeurs. Les utilisateurs doivent télécharger les paquets prêts à l’emploi depuis GitHub Releases.

## 12. Licence, droits d’auteur et assistance

Print Cost & Profit est distribué selon les conditions de `LICENSE.txt` du dépôt. Lisez la licence avant toute redistribution ou modification.

Pour signaler un problème, indiquez la version, le système, les modèles/versions d’imprimante et de trancheur si nécessaire, la description, le message complet et les étapes de reproduction. N’incluez pas de mots de passe, de clés privées ni de données personnelles inutiles.

**Print Cost & Profit — Windows 2.0 / Linux 1.4**  
Développé par Beatriz Toro Martin.
