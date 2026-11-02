# Installation rapide

Choisissez le paquet correspondant à votre système d’exploitation :

### Windows 10 / 11 — version stable v1.2

- **[Télécharger l’installateur Windows v1.2](https://github.com/nilose2014/PrintCostProfit/releases/download/v1.2/PrintCostProfit-Windows-Installer-v1.2.zip)**.
- Extrayez le fichier ZIP et exécutez `PrintCostProfit-Setup-1.2.exe`.
- Suivez les étapes de l’installation. Lancez ensuite Print Cost & Profit à l’aide du raccourci créé.
- L’installateur comprend les composants nécessaires au stockage local SQLite ; vous n’avez pas besoin d’installer Python manuellement.

**Dépôt Windows :** [PrintCostProfit — branche principale](https://github.com/nilose2014/PrintCostProfit). Si vous préférez installer le programme à partir du code source, ouvrez **Code → Download ZIP**, extrayez tous les fichiers dans un dossier permanent et exécutez `Integracion_Orca_Postprocesado.bat`.

### Linux / Ubuntu — version stable

- **[Télécharger la version stable pour Linux](https://github.com/nilose2014/PrintCostProfit/releases/tag/linux-preview-0.1)**.
- Extrayez le fichier ZIP téléchargé.
- Suivez les instructions d’installation et de démarrage incluses dans le paquet.

**Dépôt / version Linux :** [PrintCostPrint — Linux](https://github.com/nilose2014/PrintCostProfit/tree/linux).

---

# Print Cost & Profit v1.2

## Calculateur de coûts, de production et de gestion pour l’impression 3D

Print Cost & Profit est une application conçue pour aider les utilisateurs de l’impression 3D à calculer les coûts réels de fabrication, à suivre la consommation de filament, à gérer les matériaux et à organiser l’activité commerciale liée à leurs impressions.

L’application associe un calculateur de coûts à des outils de gestion, à un stockage local et à une intégration avec les trancheurs basés sur OrcaSlicer, notamment Snapmaker Orca, OrcaSlicer et Creality Print. Elle comprend également un moniteur pour les imprimantes compatibles, avec différents niveaux de compatibilité selon le modèle et la connexion disponible.

## Captures d’écran de l’application

Les images suivantes présentent quelques écrans de Print Cost & Profit. Elles illustrent différentes parties de l’interface ; les fonctions disponibles dépendent de la version et de la configuration installées.

![Calculateur de coûts](galeria/es/01-calculadora-de-costes.jpg)

![Résultat et bénéfice](galeria/es/02-resultado-y-beneficio.jpg)

![Panneau flottant d’impression](galeria/es/03-panel-flotante-de-impresion.jpg)

**Auteur :** Beatriz Toro Martin

**Version publiée :** v1.2

**Système d’exploitation de référence :** Windows 10 et Windows 11

**Dépôt officiel :** https://github.com/nilose2014/PrintCostProfit

---

# 1. Fonctionnalités principales

## 1.1. Calculateur des coûts d’impression 3D

Le calculateur permet d’estimer le coût de fabrication d’une pièce à partir des paramètres d’impression et des coûts associés.

Selon la configuration disponible, les postes de coût utilisables comprennent :

- La consommation de filament.
- Le prix du matériau utilisé.
- Le temps d’impression.
- Les coûts de fonctionnement et d’usure de l’imprimante.
- L’amortissement de l’équipement.
- Les autres dépenses liées à la fabrication.
- La marge bénéficiaire souhaitée.
- Les taxes et la devise sélectionnées.

L’objectif est de connaître le coût de fabrication d’une pièce avant de décider de son prix de vente.

## 1.2. Prix de vente, bénéfice et marge

Le calculateur permet d’étudier le résultat économique estimé d’une impression.

Les calculs aident à distinguer :

- **Coût de fabrication :** montant estimé des ressources utilisées.
- **Prix de vente :** montant que vous envisagez de facturer pour la pièce.
- **Bénéfice estimé :** différence calculée entre les recettes et les coûts pris en compte.
- **Marge :** rapport entre le bénéfice et le prix de vente, selon la définition utilisée par le calcul.
- **Prix recommandé :** prix proposé à partir des paramètres configurés.

Les résultats dépendent des prix, pourcentages, durées et autres valeurs saisies. Pour obtenir des estimations utiles, maintenez à jour les coûts du filament, de l’imprimante et les dépenses supplémentaires.

![Inventaire des produits](galeria/es/04-inventario-de-productos.jpg)

## 1.3. Profils d’imprimante

Les profils permettent de configurer les paramètres économiques associés aux équipements utilisés.

Ils peuvent prendre en compte des données telles que le coût d’achat, la durée de vie estimée et les coûts de fonctionnement, lorsque ces éléments sont prévus dans le profil.

Si vous utilisez plusieurs imprimantes, sélectionnez le profil approprié afin que les estimations reflètent les différences entre les machines.

![Profils et moniteur des imprimantes](galeria/es/06-perfiles-y-monitor-de-impresoras.jpg)

## 1.4. Compatibilité avec les trancheurs

L’intégration est conçue pour les trancheurs basés sur OrcaSlicer, notamment **Snapmaker Orca, OrcaSlicer et Creality Print**. La compatibilité avec ces trancheurs est d’environ **90 %** ; le comportement peut encore varier selon la version et la configuration. Il ne faut donc pas la présenter comme une compatibilité à 100 %.

L’intégration au moyen de scripts de post-traitement permet de traiter les fichiers G-code générés par le trancheur et d’utiliser les données disponibles dans le flux de travail de Print Cost & Profit. Les informations récupérables dépendent du fichier, de la configuration et de la version du trancheur.

![Devis](galeria/es/08-presupuestos.jpg)

## 1.5. Moniteur et compatibilité des imprimantes

L’imprimante dont la compatibilité est confirmée à **100 %** est la **Snapmaker U1**. Le moniteur fonctionne également avec d’autres imprimantes accessibles via **Fluidd** ou **Mainsail/Moonraker** (selon la configuration), mais la compatibilité de ces modèles est encore en cours d’ajustement. Certaines fonctions peuvent être indisponibles ou fonctionner différemment pendant la poursuite des tests.

## 1.6. Stockage local SQLite

L’application comprend des composants de stockage local basés sur SQLite.

L’objectif est de conserver les données dans une base de données sur l’ordinateur plutôt que de les répartir entre le PC et le navigateur.

Si le stockage local ne peut pas démarrer, l’application doit afficher l’erreur correspondante au lieu de basculer silencieusement vers un autre système de stockage.

## 1.7. Outils de diagnostic

Le projet comprend des scripts permettant de vérifier le démarrage de l’application, le fonctionnement du pont local et certains problèmes d’intégration.

Ces outils fournissent des informations utiles lorsqu’un composant ne démarre pas ou qu’une opération ne se termine pas correctement.

---

# 2. Prérequis

Avant de lancer le programme, il est recommandé de disposer des éléments suivants :

- Un ordinateur sous Windows 10, Windows 11 ou Linux.
- Un dossier local permanent pour installer le projet.
- Un trancheur basé sur OrcaSlicer — notamment Snapmaker Orca, OrcaSlicer ou Creality Print — si vous souhaitez utiliser l’intégration.
- Tous les fichiers de la distribution téléchargée.
- Les composants de stockage et de configuration inclus dans le paquet de distribution.

La distribution doit inclure l’exécutable SQLite préparé pour Windows afin que l’utilisateur final n’ait pas à installer Python manuellement.

Ne lancez pas l’application directement depuis le fichier ZIP. Extrayez d’abord tous les fichiers.

---

# 3. Télécharger et installer Print Cost & Profit

## Étape 1. Télécharger le programme

1. Ouvrez le dépôt officiel :

   https://github.com/nilose2014/PrintCostProfit pour Windows et https://github.com/nilose2014/PrintCostProfit/releases/tag/linux-preview-0.1 pour Linux

2. Cliquez sur **Code**.
3. Sélectionnez **Download ZIP**.
4. Attendez la fin du téléchargement.
5. Extrayez le contenu du ZIP.

## Étape 2. Choisir le dossier

Vous pouvez utiliser un dossier tel que :

`C:\PrintCostProfit`

Vous pouvez également choisir un autre emplacement permanent. Évitez les dossiers temporaires et ne déplacez pas le programme après avoir configuré les chemins dans OrcaSlicer, sauf si vous mettez également ces chemins à jour.

## Étape 3. Démarrer le programme

Ouvrez le dossier dans lequel vous avez extrait les fichiers et double-cliquez sur :

**`Integracion_Orca_Postprocesado.bat`**

Ce fichier sert à la fois au démarrage manuel et à l’intégration avec OrcaSlicer.

Lorsqu’il est exécuté manuellement, il vérifie si le service local est disponible. S’il ne répond pas, il tente de le démarrer et attend qu’il soit prêt avant d’ouvrir l’interface dans le navigateur.

Il n’est pas nécessaire d’ouvrir d’abord le fichier HTML ni de démarrer séparément le pont local lorsque le lanceur peut s’en charger.

**Important :** pour utiliser les fonctions qui nécessitent le stockage local, démarrez l’application à l’aide de ce fichier plutôt qu’en ouvrant directement `Print_Cost_Profit.html`.

---

# 4. Configurer un trancheur basé sur OrcaSlicer

L’intégration est destinée aux trancheurs basés sur OrcaSlicer, notamment Snapmaker Orca, OrcaSlicer et Creality Print. Les noms des menus et certains détails peuvent varier. La compatibilité globale est d’environ 90 % ; il est donc recommandé d’effectuer un essai avec la version installée.

L’intégration utilise le script de post-traitement pour traiter le G-code lorsque le trancheur a terminé le tranchage.

## Étape 1. Repérer le fichier d’intégration

Dans le dossier du programme, repérez :

`Integracion_Orca_Postprocesado.bat`

Copiez son chemin complet. Si vous avez utilisé le dossier d’exemple, il sera :

`C:\PrintCostProfit\Integracion_Orca_Postprocesado.bat`

Si le programme est installé ailleurs, utilisez le chemin réel.

## Étape 2. Ouvrir les paramètres d’impression

1. Ouvrez OrcaSlicer.
2. Sélectionnez le profil d’imprimante souhaité.
3. Ouvrez les paramètres d’impression.
4. Activez le mode avancé ou expert si nécessaire.
5. Ouvrez la section **Autres**.
6. Repérez **Scripts de post-traitement**.

Les noms et la disposition des menus peuvent varier selon le trancheur, sa version et la langue sélectionnée.

## Étape 3. Ajouter le script

Saisissez le chemin complet de :

`Integracion_Orca_Postprocesado.bat`

Enregistrez les paramètres du profil.

Si votre trancheur exige une syntaxe particulière pour les chemins ou les arguments, utilisez le format correspondant à cette version.

## Étape 4. Effectuer un essai

1. Chargez un modèle simple.
2. Sélectionnez l’imprimante et le profil d’impression.
3. Configurez le matériau.
4. Tranchez le modèle.
5. Exportez le G-code.
6. Vérifiez que le post-traitement s’exécute sans erreur.

Le script traite le fichier G-code lorsque OrcaSlicer l’appelle avec le chemin du fichier. Dans ce cas, son comportement diffère du démarrage manuel : il traite le fichier puis se termine sans ouvrir une deuxième fenêtre de l’application.

---

# 5. Traitement des fichiers G-code

Le G-code contient les instructions générées par le trancheur pour l’imprimante 3D.

L’intégration de Print Cost & Profit peut traiter ces fichiers afin de récupérer les données disponibles utiles aux calculs et à l’enregistrement des travaux.

Selon les informations présentes dans le fichier et les fonctions disponibles, les données pertinentes peuvent inclure :

- Le nom ou le chemin du fichier.
- Les informations d’impression générées par le trancheur.
- Le temps estimé et la consommation de matériau.
- Les informations sur les filaments, lorsqu’elles sont disponibles.

Les valeurs provenant du G-code sont des estimations issues du tranchage. Elles ne doivent pas être automatiquement considérées comme une consommation réelle confirmée par l’imprimante.

## Essai manuel avec un fichier G-code

Le projet comprend :

`Probar_Integracion_con_Gcode.bat`

Pour effectuer un essai :

1. Repérez un fichier G-code généré par le trancheur compatible utilisé.
2. Faites glisser le fichier sur `Probar_Integracion_con_Gcode.bat`.
3. Attendez la fin du processus.
4. Vérifiez le résultat et les éventuels messages d’erreur.

Cet essai permet de distinguer un problème de traitement du fichier d’un problème du service local.

---

# 6. Gestion des coûts et de la rentabilité ![Résumé des coûts](galeria/es/14-resumen-de-costes.jpg)

Pour obtenir des résultats utiles, configurez les données financières avant de calculer le prix d’une pièce.

## Filament

Maintenez à jour le prix de chaque matériau utilisé. Une variation du prix au kilogramme peut modifier considérablement le coût des pièces fabriquées.

## Imprimante

Utilisez le profil de la machine qui fabriquera la pièce. Les paramètres d’amortissement et d’usure doivent reposer sur des estimations raisonnables du coût et de la durée de vie.

## Temps de fabrication

Le temps estimé par le trancheur permet d’évaluer le coût lié à l’utilisation de la machine. Le résultat réel peut varier en raison des pauses, des changements de matériau, des échecs ou des différences entre le temps estimé et le temps effectif.

## Dépenses supplémentaires

Incluez les dépenses applicables au travail et prévues dans la configuration du calculateur.

## Prix de vente

Examinez le prix recommandé avec le coût, le bénéfice et la marge. La fiabilité d’un prix calculé dépend de la qualité des données saisies.

---

# 7. Stockage et conservation des données

Print Cost & Profit utilise un service local et une base de données SQLite pour les fonctions qui dépendent de ce stockage.

L’emplacement utilisé par l’installation peut se trouver dans le profil utilisateur local de Windows.

## Recommandations

- Ne supprimez pas la base de données lorsque le service fonctionne.
- Ne déplacez pas manuellement le dossier de données.
- Effectuez une sauvegarde de vos données avant de mettre le programme à jour.
- Vérifiez que le service local démarre correctement après une mise à jour.
- Vérifiez que les données sont conservées après la fermeture et la réouverture de l’application.

## En cas d’erreur de stockage

Si l’application indique qu’elle ne peut pas démarrer le stockage du PC, ne continuez pas à saisir des données comme si elles étaient correctement enregistrées.

Vérifiez le service local et utilisez les outils de diagnostic. Ne supprimez pas la base de données pour tenter de résoudre le problème.

La protection contre le basculement silencieux vers le stockage du navigateur vise à éviter que les données soient réparties entre deux emplacements différents.

---

# 8. Scripts et outils inclus ![Documentation et aide](galeria/es/19-documentacion-y-ayuda.jpg)

Le dépôt contient différents fichiers auxiliaires. Ils ne doivent pas tous être exécutés manuellement lors d’une utilisation normale.

| Fichier | Fonction |
|---|---|
| `Integracion_Orca_Postprocesado.bat` | Démarrage manuel de l’application et point d’entrée du post-traitement pour les trancheurs compatibles basés sur OrcaSlicer. |
| `Iniciar_Puente_Orca.ps1` | Démarrage ou vérification du pont d’intégration. |
| `Iniciar_Puente_Orca_Independiente.cmd` | Lanceur autonome du pont local. |
| `Integracion_Print_Cost_Profit.ps1` | Traitement de l’intégration avec le fichier G-code. |
| `Probar_Integracion_con_Gcode.bat` | Essai manuel du traitement d’un G-code. |
| `Comprobar_Puente_U1.bat` | Vérification du pont lié à la Snapmaker U1. |
| `Diagnostico_Arranque.bat` | Aide à l’analyse des problèmes de démarrage. |
| `Diagnostico_Print_Cost_Profit.bat` | Outil de diagnostic de l’application. |
| `Diagnostico_Version.bat` | Vérification des informations de version. |
| `pcp_sqlite_api.py` | Code du service de stockage SQLite. |
| `pcp_sqlite_store.py` | Composant d’accès et de gestion du stockage SQLite. |
| `storage-client.js` | Client utilisé par l’interface pour communiquer avec le stockage. |
| `VERSION` | Informations sur la version du projet. |
| `LICENSE.txt` | Conditions d’utilisation et avis de droits d’auteur. |

La disponibilité et le comportement exact de chaque fonction dépendent des fichiers inclus dans la distribution et de leur configuration.

---

# 9. Dépannage

## L’application ne s’ouvre pas

1. Vérifiez que tous les fichiers ont été extraits.
2. Exécutez `Integracion_Orca_Postprocesado.bat`.
3. Attendez que le service local réponde.
4. S’il ne s’ouvre pas, exécutez `Diagnostico_Arranque.bat`.
5. Conservez le message d’erreur complet.

## Le stockage du PC ne démarre pas

Vérifiez que le paquet comprend l’exécutable SQLite pour Windows et qu’il se trouve à l’emplacement attendu par le serveur.

Si une erreur HTTP 500 apparaît, vérifiez l’état du service et les messages de diagnostic avant de tenter de modifier les données.

Ne basculez pas vers le stockage du navigateur et ne supprimez pas la base de données comme solution improvisée.

## Le trancheur n’exécute pas l’intégration

1. Vérifiez le chemin du fichier `.bat`.
2. Assurez-vous que le fichier existe.
3. Vérifiez la configuration du profil d’impression.
4. Faites un essai avec `Probar_Integracion_con_Gcode.bat`.
5. Conservez l’erreur et le chemin du G-code utilisé.

## Les données ne sont pas conservées

Vérifiez que vous avez démarré l’application à l’aide du lanceur et que le service local fonctionne.

Effectuez ensuite un essai avec une donnée non critique et vérifiez qu’elle est conservée après le redémarrage de l’application.

Ne supprimez pas les données existantes pour tenter de réparer le stockage.

---

# 10. Sécurité et bonnes pratiques

- Téléchargez le programme depuis le dépôt officiel.
- Ne partagez pas de mots de passe, de clés privées ou d’identifiants.
- N’exécutez pas de scripts provenant de sources inconnues.
- N’exposez pas le service local à Internet sans configuration de sécurité appropriée.
- Conservez des sauvegardes des données importantes.
- Vérifiez les dépendances et le fonctionnement du programme avant de remplacer des fichiers lors d’une mise à jour.

---

# 11. Droits d’auteur et conditions d’utilisation

Print Cost & Profit est soumis aux conditions indiquées dans `LICENSE.txt`.

La publication du code sur GitHub n’accorde pas, à elle seule, l’autorisation de commercialiser, revendre, concéder en sous-licence, redistribuer ou exploiter commercialement le logiciel, ses versions modifiées ou ses produits dérivés lorsque ces activités sont interdites par la licence applicable.

Toute demande d’autorisation doit être formulée par écrit et acceptée expressément par le titulaire des droits.

---

# 12. Aide et signalement de problèmes

Lorsque vous signalez un problème, indiquez :

- La version de Print Cost & Profit.
- La version de Windows.
- Le nom et la version du trancheur (Snapmaker Orca, OrcaSlicer, Creality Print ou autre).
- L’imprimante utilisée, le cas échéant.
- L’opération effectuée.
- Le message d’erreur complet.
- Les étapes permettant de reproduire le problème.

N’incluez pas de mots de passe, de clés privées ni de données personnelles inutiles.

---

**Print Cost & Profit v1.2**

Développé par Beatriz Toro Martin.

Calculez vos coûts, suivez vos travaux et améliorez votre gestion financière.
