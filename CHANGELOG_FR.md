## v2.0.224

- v2.0.224 : les requêtes vers U1, I7 et K2 PRO passent directement du processus principal Electron à Moonraker via l’adresse IP de chaque machine. L’état, les informations de l’imprimante et la lecture de l’en-tête G-code ne passent plus par les points d’accès PowerShell locaux. Les cartes et le moniteur utilisent le même transport IPC restreint, avec un cache par IP. Le serveur local reste nécessaire pour les fichiers de l’application, l’intégration Orca et les services qui en dépendent encore.

## v2.0.222

- v2.0.222 : le téléchargement complet du G-code n’est plus nécessaire pour lire les filaments. Le serveur ne demande que l’en-tête (8 Mio maximum), qui contient les métadonnées et la miniature. Le moniteur et le panneau réutilisent la même tâche pour une IP et un nom de fichier donnés, évitant les téléchargements en double ; tous deux interrogent également l’état de la même IP sélectionnée.

- v2.0.221 : l’onglet Imprimantes et le moniteur partagent désormais le même processus persistant d’état par adresse IP. Chaque imprimante possède sa propre connexion Moonraker et son cache ; changer la sélection ne redémarre ni ne modifie le processus d’une autre machine. Les cartes n’utilisent plus un endpoint distinct pour l’état en direct. La télémétrie partagée inclut désormais le maillage, les capteurs et les couches.

## v2.0.220

- v2.0.220 : l’analyse du G-code est désormais liée à l’adresse IP exacte de l’imprimante sélectionnée. Le changement d’imprimante annule également la lecture en arrière-plan côté serveur, et pas seulement l’interrogation du navigateur. Une ancienne lecture ne peut ainsi plus consommer de ressources ni perturber la nouvelle sélection.

## v2.0.219

- v2.0.219 : unifie le parcours incrémental des traductions afin d’éviter les analyses complètes du document en double. Les appels répétés à refresh sont regroupés et une seule analyse complète peut être en attente. Le changement d’imprimante interrompt immédiatement la requête précédente, donne la priorité au dernier choix et ne signale pas les annulations attendues comme des erreurs.

## v2.0.219

- v2.0.219 : corrige l’interrogation de la progression du G-code afin que les états transitoires de lecture/écriture du fichier de tâche ne soient plus renvoyés en HTTP 400 ; seul un identifiant invalide reçoit ce statut. La traduction incrémentale est répartie en petites tâches de 4 nœuds ou 5 ms maximum par image, et les changements de langue parcourent progressivement le document.

## v2.0.217

- v2.0.217 : correction de la coordination des sondages lors du changement d’imprimante. Si la requête précédente libère encore son contrôleur, le nouveau sondage est mis en attente puis lancé automatiquement ; les anciennes données sont effacées pendant la connexion. Les annulations attendues ne sont plus affichées comme des erreurs de connexion.

## v2.0.216

- v2.0.216 : réduction du travail du traducteur dynamique par image afin d’éviter les blocages de l’interface. Le parcours initial traite au maximum 60 nœuds par image et les mises à jour de l’observateur 35 ; la traduction incrémentale est conservée, sans modifier les clés ni les données du dictionnaire.

## v2.0.216

- v2.0.216 : la sélection de l’imprimante est unifiée entre les cartes, la liste déroulante et le moniteur. Le choix d’une carte propage immédiatement l’adresse IP sélectionnée à tous les contrôles ; les erreurs ou annulations de configuration ne rétablissent plus l’imprimante précédente. Les réponses des anciennes demandes sont ignorées.


- v2.0.214 : corrige la sélection depuis les cartes des imprimantes. La carte sélectionnée se met à jour immédiatement et les réponses obsolètes des sondages sont ignorées afin d’éviter le retour à l’imprimante précédente.

- v2.0.213 : l’application de bureau effectue les lectures d’instantané SQLite et les lots d’écriture via IPC Electron, sans passer par HTTP. Les révisions optimistes et le même fichier SQLite partagé avec le serveur local sont conservés. Les sauvegardes et les intégrations Orca/U1 continuent d’utiliser le serveur local.

## v2.0.212
- Réduction des écritures répétées et prévention des boucles de nouvelle tentative rapides lorsque SQLite ou le pont ne confirme pas une opération. La file conserve la dernière modification en attente et applique un délai progressif ; la synchronisation reprend après le réveil de Windows.

﻿- v2.0.212 : ajout d’un processus SQLite persistant afin d’éviter de démarrer un nouveau processus pour chaque requête ; les écritures, révisions, conflits, sauvegardes et restaurations sont conservés.
- v2.0.210 : correction de la déclaration et de la gestion de `pendingSelectedIp` dans le panneau des imprimantes.
- v2.0.209 : correction de l’erreur `pendingSelectedIp` non défini et mise en attente des changements d’imprimante pendant les actualisations.
## v2.0.208
- Correction du changement d’imprimante : l’IP demandée est prioritaire et les actualisations en attente ne l’annulent plus.
- Le sélecteur restaure l’imprimante précédente si le pont ne confirme pas la nouvelle IP.
- Fréquence d’enregistrement de l’historique thermique réduite pour limiter les écritures SQLite.

﻿- v2.0.207 : Correction du changement d’imprimante dans l’onglet Imprimantes : après confirmation de la connexion par le pont, la nouvelle adresse IP est immédiatement synchronisée avec la sélection des détails avant l’actualisation des cartes et des informations. L’ancienne adresse ne peut donc plus rester prioritaire. Aucune modification de SQLite ni de ses chemins.
- v2.0.207 : Restauration de Servidor_Panel_U1.ps1 à l’identique depuis la version 2.0.204 afin d’annuler le seul changement PowerShell introduit en 2.0.205 ; les autres corrections sont conservées. Suppression d’un fichier .pyc accidentel du ZIP.
- v2.0.205 : Réduction des écritures de télémétrie du moniteur U1 : le temps écoulé est enregistré toutes les cinq minutes et les changements d’état immédiatement. Correction de la détection de première télémétrie pour éviter un enregistrement à chaque interrogation. La sélection d’une carte crée l’option manquante dans le sélecteur U1 et déclenche le changement réel de connexion. Aucun changement du schéma ou des chemins SQLite.
- v2.0.203 : Le moniteur U1 ne considère une impression comme terminée qu’après réception d’un état explicite complete/completed/finished ; standby, ready et idle ne déclenchent plus de déduction de filament ni la clôture du mouvement provisoire. La transition canceling/cancelling n’est plus considérée comme une annulation confirmée. La fenêtre récapitulative d’annulation est rétablie. Le message d’attente au démarrage devient « Démarrage du programme, veuillez patienter… ». Aucun changement SQLite.
- v2.0.202 : Le serveur local traite désormais les déconnexions du navigateur pendant l’envoi des réponses comme des connexions annulées, et non comme des erreurs générales du serveur. La conversion de l’ancienneté du cache U1 utilise désormais Int64 afin d’éviter le dépassement de capacité Int32. La base de données, son schéma, ses données et ses chemins restent inchangés.
- v2.0.201 : Remplacement des écritures individuelles en file par des lots pouvant contenir jusqu’à 25 clés dans une seule requête et transaction SQLite. Chaque clé conserve sa propre révision ; les conflits sont signalés par clé et réessayés sans annuler les modifications valides du lot. La synchronisation entre fenêtres consulte désormais le snapshot toutes les 15 secondes au lieu de 5. Aucun changement du schéma, de l’emplacement ou des données SQLite. L’adaptateur Python est toujours lancé une fois par lot ; cela réduit les démarrages sans introduire encore de processus persistant.
- v2.0.200 : L’adresse IP manuelle n’est enregistrée qu’après confirmation de la sélection par le pont ; un échec de /api/u1/config ne met donc plus en file une adresse non appliquée. L’actualisation du tableau de bord déclenchée par la maintenance ne s’exécute que lorsque l’onglet d’accueil est visible et est différée au temps d’inactivité ; l’intervalle passe de 30 à 60 secondes. Aucune modification de SQLite, de son schéma ou de ses chemins.
- v2.0.200 : Suppression du double rafraîchissement lors du choix d’une imprimante depuis une carte : le changement du sélecteur enregistre déjà l’adresse IP et déclenche l’événement qui actualise le panneau. /api/u1/config distingue désormais l’enregistrement de l’adresse IP du démarrage du processus de suivi ; les détails sont consignés dans printcostprofit_app.log. Les véritables erreurs d’enregistrement renvoient toujours 502 et sont désormais consignées. SQLite et ses chemins restent inchangés.
- v2.0.198 : Optimisation de l’initialisation des traductions : les demandes d’actualisation du dictionnaire sont regroupées afin de reconstruire les index une seule fois, et la première traduction du DOM est exécutée par lots pour éviter de bloquer le démarrage. La traduction dynamique des éléments ajoutés et le changement de langue sont conservés. Aucune donnée ni aucun chemin SQLite n’est modifié.
- v2.0.197 : Amélioration de la file d’écriture SQLite et de la résolution des conflits entre fenêtres. Le pont renvoie désormais la révision et la valeur actuelles de la clé en conflit, afin que le client puisse réconcilier cette écriture sans télécharger tout le snapshot. Le contrôle des révisions et les nouvelles tentatives de la dernière valeur en attente sont conservés. Aucun changement du schéma, de l’emplacement ou des données SQLite.
- v2.0.196 : Correction de l’erreur qui empêchait l’actualisation du moniteur U1 : le contrôleur AbortController du sondage est désormais déclaré dans la bonne portée. Lors du changement d’imprimante, la requête précédente est explicitement annulée avant le démarrage du nouveau cycle, évitant les références à une variable inexistante et les réponses tardives de l’ancienne imprimante. La base de données et les données enregistrées ne sont pas modifiées.
- v2.0.195 : Correction de l’enregistrement du travail U1 actif : l’enregistrement de miniature par fichier est désormais correctement défini et comparé, supprimant l’erreur `thumbnailRecord is not defined`. Le changement d’imprimante annule l’interrogation précédente, affiche immédiatement le dernier travail enregistré pour l’imprimante sélectionnée et lance une nouvelle interrogation. La sélection IP n’attend plus une seconde requête Moonraker synchrone ; le travailleur met à jour la connexion en arrière-plan. Nouveaux messages traduits dans les huit langues.
- v2.0.194 : Optimisation du stockage du moniteur U1 : la miniature du travail actif est séparée des données de progression et enregistrée uniquement en cas de changement ; reprise de la file d’écriture et priorité des opérations interactives améliorées. SQLite n’exécute plus le DDL ni ne renégocie WAL à chaque requête lorsque le schéma est à jour. La lecture du cache d’état U1 est réessayée et renvoie un état transitoire sûr en cas d’échec.
- v2.0.193 : Réduction de la charge de stockage du moniteur U1 : la miniature du travail actif est enregistrée dans une clé séparée uniquement lorsqu’elle change ; les mises à jour périodiques ne renvoient donc plus l’image base64. Amélioration de la reprise et de la priorité de la file d’écriture. Évite de renégocier WAL à chaque processus SQLite. Le point d’accès d’état U1 réessaie la lecture du cache et renvoie un état transitoire plutôt qu’une erreur HTTP 502 en cas d’échec de lecture.
- v2.0.193 : Correction de la gestion des fichiers temporaires du cache des imprimantes. En cas d’échec de l’écriture ou du remplacement du cache U1, le fichier temporaire est supprimé dans un bloc finally. Au démarrage du serveur, seuls les fichiers temporaires connus de plus de 24 heures sont nettoyés ; la base SQLite, les sauvegardes et les fichiers de cache définitifs ne sont pas modifiés.
- v2.0.191 : Reconstruction de la liste des alertes de l’accueil avec un conteneur flex vertical et des cartes à hauteur automatique minimale, en supprimant la grille qui provoquait encore des chevauchements. Le flux et les dimensions de l’icône, du titre et de la description sont définis explicitement ; la feuille corrective est chargée en dernier pour remplacer les styles hérités.
- v2.0.190 : Correction de la mise en page des alertes de l’accueil : suppression du pseudo-icône hérité qui occupait une cellule supplémentaire de la grille et décalait le texte en l’empilant verticalement. Le retour à la ligne normal est rétabli dans chaque carte.
- v2.0.190 : Refonte des alertes du tableau de bord sous forme de cartes sombres, avec des icônes plus visibles, des titres et descriptions séparés, un espacement et un contraste améliorés. L’aperçu est limité à quatre alertes pour éviter le texte comprimé. Ajout d’une icône dédiée aux problèmes d’imprimante.
- v2.0.190 : Ajout d’alertes dans la cloche de notification pour les erreurs et problèmes détectés sur l’imprimante sélectionnée, y compris les états de panne et les déconnexions. Les alertes sont mises à jour puis résolues lorsque le problème disparaît. Ajout d’une case dans Options pour activer ou désactiver ces alertes. Traductions centralisées dans les huit langues.
- v2.0.190 : Orca : le point de détection du contrôle de la molette est déplacé à 85 % de la hauteur de la fenêtre native, dans la partie inférieure des réglages, afin de ne pas dépendre de la disposition variable de la section « Imprimante » ouverte ou repliée.
- v2.0.190 : Orca : le défilement ne dépend plus de WindowFromPoint, qui pouvait renvoyer la surface superposée de PCP. Les contrôles enfants visibles de la fenêtre Orca sont énumérés et le contrôle du processus Orca couvrant le point inférieur du panneau est sélectionné ; à défaut, l’action est annulée sans interagir avec une autre fenêtre.
- v2.0.190 : Orca : déplacement des flèches à 62 % de la zone du slicer et du point cible de la molette à 68 %, dans la partie inférieure visible des réglages. La vérification du processus reste active pour empêcher toute interaction hors d’Orca.
- v2.0.184 : Correction de l’encodage de `package.json` : suppression du BOM UTF-8 qui empêchait `@electron/rebuild` d’analyser le fichier JSON lors de la compilation de l’installateur Windows.
- v2.0.184 : Les alertes de maintenance prennent désormais en compte les heures réelles d’impression, comme l’écran Maintenance, et sont réévaluées périodiquement ainsi qu’après toute modification des tâches. Orca : suppression de SendInput et du déplacement physique du curseur ; les flèches envoient la molette uniquement au contrôle détecté appartenant au processus Orca, sinon l’action est annulée.
- v2.0.182 : Correction de la conversion du delta négatif de la molette en UInt32 pour SendInput. PowerShell ne convertit plus directement -120 en UInt32 ; sa représentation binaire est conservée avec BitConverter. Cela évite l’erreur qui bloquait ScrollOptions.
- v2.0.181 : Correction du véritable script ScrollOptions : il utilise maintenant SendInput avec MOUSEEVENTF_WHEEL au-dessus de la zone gauche des réglages et restaure la position du curseur. L’envoi de WM_MOUSEWHEEL au HWND principal, qui ne faisait pas défiler le panneau, est supprimé.
- v2.0.180 : Remplacement des messages de molette envoyés à des HWND supposés par une véritable entrée de molette Windows (SendInput), positionnée sur les réglages d’Orca. La position initiale du curseur est restaurée après l’injection.
- v2.0.179 : Le défilement est de nouveau envoyé à un véritable contrôle enfant d’Orca, localisé à un point fixe dans le contenu du panneau gauche. L’événement n’est plus envoyé au cadre principal que Qt ne traitait pas. Le PID de la cible est vérifié pour éviter toute autre application ; la hauteur des flèches n’intervient plus.
- v2.0.178 : Remplacement du ciblage WindowFromPoint par l’envoi de WM_MOUSEWHEEL directement à la fenêtre principale d’Orca, avec des coordonnées situées dans le panneau gauche des réglages. Le défilement ne dépend plus de la hauteur des flèches ni de leur alignement avec la barre.
- v2.0.177 : Le défilement des réglages Orca utilise désormais la position verticale réelle du clic sur les flèches. L’événement de molette est envoyé à la zone du panneau gauche à cette hauteur, même lorsque des sections comme Imprimante ou Filaments sont repliées/dépliées et que la barre change de position.
- v2.0.176 : Ajout des déclarations Win32 manquantes dans PCPWin32Overlay pour WindowFromPoint et SendMessageTimeout. Le défilement des réglages natifs d’Orca peut désormais localiser le contrôle gauche et envoyer WM_MOUSEWHEEL sans erreur de méthode inexistante.
- v2.0.175 : Correction de la taille de la zone Orca intégrée : le conteneur occupe à nouveau toute la hauteur disponible. Les commandes de défilement restent dans une colonne latérale fixe sans réduire la hauteur du slicer. La v2.0.174 avait créé une ligne flex sans croissance, limitant Orca à une bande supérieure.
- v2.0.174 : Ajout du défilement ciblé du panneau natif gauche des réglages de Snapmaker Orca. Les boutons compacts haut/bas envoient WM_MOUSEWHEEL au contrôle réel dans la zone des réglages (22 % de la largeur), et non au bord de la fenêtre ou au plateau 3D. La cible est vérifiée comme appartenant à Orca et les erreurs sont signalées. Traductions ajoutées dans les huit langues.
- v2.0.173 : Suppression complète de la barre de défilement externe des options Orca introduite en v2.0.172, car elle ne fonctionnait pas avec le panneau natif. Restauration de la zone d’hébergement d’origine et suppression du code IPC et PowerShell associé. L’intégration native de la v2.0.171 est conservée.
- v2.0.172 : Ajout d’une commande latérale compacte pour faire défiler les paramètres d’impression de Snapmaker Orca depuis PCP, avec boutons, molette et glissement. Elle transmet le défilement au panneau natif de gauche sans modifier les profils ni superposer du HTML à Orca. Cinq nouveaux textes traduits dans huit langues dans traducciones.js.
- v2.0.171 : Correction de la correspondance des bobines alternatives : seules les nuances chromatiquement proches d’une même famille sont proposées (par exemple rouge et rouge orangé) ; le noir, le blanc, le beige et les familles différentes sont exclus. Les alternatives utilisent désormais un sélecteur compact afin de préserver la mise en page du moniteur.
- v2.0.170 : La sélection des bobines alternatives dans le moniteur U1 et le panneau des imprimantes reconnaît désormais les variantes d’une même famille de couleurs. Par exemple, rouge ↔ rouge orangé et différentes nuances de vert sont autorisés, tout en conservant la compatibilité du matériau et la disponibilité du stock. Les familles de couleurs différentes sont exclues.
- v2.0.169 : Orca s’affiche sans barre de titre ni bordure dans le rectangle attribué par PCP. Elle reste une fenêtre Qt de premier niveau appartenant à PCP pour préserver les dialogues modaux ; la séparation restaure ses bordures et commandes normales.
- v2.0.168 : Agrandissement de l’espace vertical du slicer intégré en réduisant l’en-tête, les boutons et la ligne d’état. La zone native Orca occupe tout l’espace restant et ses dimensions sont limitées à la zone cliente disponible de PCP, même lorsque la fenêtre est réduite.
- v2.0.167 : Agrandissement de la zone utile de Snapmaker Orca. L’en-tête, les boutons et le message d’état sont plus compacts ; les éléments descriptifs secondaires sont masqués sur les écrans de hauteur courante afin de gagner de l’espace vertical pour les commandes et le défilement Orca.
- v2.0.166 : Correction de l’intégration des boîtes de dialogue modales de Snapmaker Orca. La fenêtre Qt redevient une fenêtre de premier niveau appartenant à PCP, au lieu d’une fenêtre WS_CHILD ; les dialogues Nouveau projet, Ouvrir et Enregistrer peuvent ainsi s’afficher correctement. Synchronisation lors du déplacement, du redimensionnement, du maximiser et de la restauration de PCP, avec limitation de la fenêtre Orca à la zone de l’application.
- v2.0.165 : Optimisation de la traduction incrémentale du DOM. L’observateur ne parcourt plus des sous-arbres entiers et ne compare plus chaque nœud à tous les autres ; il traite de petits lots et ignore les mutations générées par la traduction afin d’éviter les blocages prolongés.
- v2.0.164 : Orca devient une fenêtre enfant native de PCP, découpée par Windows dans la zone cliente afin de rester dans l’application lors du redimensionnement. Le panneau utilise l’espace disponible sans hauteur minimale imposée ; la taille minimale de la fenêtre principale est réduite.
- v2.0.163 : Agrandissement de la zone visible du slicer Orca et réduction des commandes supérieures pour offrir plus de hauteur à la fenêtre native.
- v2.0.162 : L’intégration Orca ignore les fenêtres de démarrage sans titre et attend la fenêtre principale Snapmaker/Orca, en validant son titre, son handle et son PID avant l’ancrage.
- v2.0.161 : Orca attend désormais la stabilisation de la fenêtre principale Qt avant l’intégration, récupère les identifiants HWND remplacés et rejette les coordonnées invalides lorsque l’application est réduite.
- 2.0.160 : Orca s’affiche comme une fenêtre Qt native sans bordure, appartenant à PCP et positionnée sur la zone du slicer ; SetParent est supprimé pour éviter les problèmes de rendu entre Qt et Electron. La position suit les déplacements, redimensionnements, minimisations et restaurations de PCP.
- 2.0.159 : intégration native révisée : Orca est intégré directement comme fenêtre enfant de la fenêtre principale PCP, évitant la fenêtre hôte Electron opaque qui masquait le contenu Qt. Correction d’un séparateur manquant dans traducciones.js qui empêchait le chargement des langues.
- 2.0.158 : panneau Orca intégré restauré depuis la base 2.0.148. La fenêtre hôte ne reçoit plus de coordonnées fixes lors des déplacements/redimensionnements ; sa géométrie provient de la zone réelle mesurée par l’interface. Synchronisation également au défilement et au changement d’onglet.
- 2.0.157 : nouvelle stratégie du trancheur : Snapmaker Orca s’ouvre dans une fenêtre indépendante, sans SetParent ni fenêtre hôte superposée. Les écritures SQLite interactives sont prioritaires sur l’historique thermique de télémétrie.
- 2.0.156 : restauration de main.cjs et orca-window.ps1 depuis la base 2.0.148, dernière référence où l’intégration d’Orca était visible. Annulation des changements ultérieurs de visibilité, de positionnement et de sélection de fenêtre.
- 2.0.155 : rétablissement de la détection des fenêtres Qt de la base 2.0.148. Les fenêtres principales de l’arbre de processus sont acceptées même avant l’attribution d’un titre par Snapmaker Orca ; les améliorations ultérieures de l’hôte et du redimensionnement sont conservées.
- 2.0.154 : correction de la sélection de la fenêtre Snapmaker Orca. Les fenêtres Qt auxiliaires ou sans titre ne sont plus intégrées ; l’application attend l’identification de la fenêtre principale afin d’éviter un panneau vide.
- 2.0.153 : correction de l’ordre d’affichage de la fenêtre hôte Orca ; la surface hôte est affichée avant l’intégration, puis la fenêtre Qt est redimensionnée afin que Chromium ne la recouvre pas. Suppression d’un écouteur dupliqué qui rétablissait des coordonnées fixes.
- 2.0.152 : correction de la taille et de la position du panneau natif Orca ; le redimensionnement et les changements d’onglet conservent les dimensions réelles de la zone visible.
## v2.0.151
- Orca intégré : sélection stable de la fenêtre Qt principale, en privilégiant les titres Snapmaker/Orca et en évitant les fenêtres temporaires sans titre au démarrage.
- Orca intégré : redimensionnements regroupés et sérialisés ; si Windows perd le rattachement, la fenêtre Qt est recherchée puis rattachée à nouveau.

## v2.0.150
- Orca intégré : empêche l’affichage de la fenêtre hôte vide pendant le démarrage de Snapmaker Orca ou la recherche de sa fenêtre Qt.
- Orca intégré : la fenêtre native ne s’affiche qu’après confirmation d’un identifiant de fenêtre valide ; si l’utilisateur change d’onglet pendant le démarrage, la fenêtre hôte reste masquée.
- Orca intégré : si le processus est déjà lancé mais que le premier rattachement n’a pas abouti, le bouton permet de réessayer au lieu d’indiquer à tort que le slicer est prêt.

## v2.0.149
- Stabilité : la synchronisation SQLite ne réveille l’interface qu’en cas de changement réel.
- Accueil : suppression des rafraîchissements complets périodiques ; mise à jour lors des changements et de la navigation, avec découverte des imprimantes limitée.
- Notifications : suppression du scan complet toutes les 5 secondes ; scan au démarrage et lors des changements de données.

## 2.0.148
- Orca : correction de l’erreur PowerShell qui empêchait l’intégration de la fenêtre Qt ; l’identifiant de processus renvoyé par `GetWindowThreadProcessId` n’utilise plus la variable automatique réservée `$PID`.

## 2.0.147
- Orca : la fenêtre native intégrée suit désormais la zone réelle du panneau, y compris lors du changement d’onglet et du redimensionnement.

### v2.0.147
- Correction de l’affectation manuelle des bobines alternatives dans le moniteur U1 : le choix explicite est conservé et affiché comme affecté même si la couleur HEX est approximative.
- Ajout du message d’affectation dans les huit langues.

## v2.0.143
- Moniteur U1 : la consultation de la progression du G-code passe de 500 ms à un intervalle adaptatif de 1,5 à 2,5 s, avec délai maximal et expiration par requête. Les détails des erreurs HTTP du serveur sont conservés.

## v2.0.136
- Trancheur Orca : ajout d’un lancement de diagnostic dans une fenêtre indépendante, sans rattacher la fenêtre Qt à Electron. Cela permet de tester la sélection des objets séparément et de distinguer les problèmes d’hébergement de fenêtre des problèmes du moteur Orca.

## v2.0.134
- Serveur Windows : `Servidor_Panel_U1.ps1` est enregistré en UTF-8 avec BOM et fins de ligne Windows afin que PowerShell 5.1 interprète correctement les caractères polonais sans corrompre les chaînes ni les guillemets au démarrage.

## v2.0.133
- Maintenance : le sélecteur ne mélange plus les profils tarifaires enregistrés dans Options avec les imprimantes réelles. Il affiche les imprimantes détectées avec leurs alias associés à l’adresse IP et conserve les machines ajoutées manuellement.

## v2.0.133
- Orca : la recherche de la fenêtre principale est limitée aux processus descendants de l’exécutable sélectionné ou à son dossier d’installation exact, afin d’éviter de rattacher une autre instance déjà ouverte.

## v2.0.129
- Intégration Snapmaker Orca : vérifie que le script d’intégration renvoie un identifiant de fenêtre et un PID avant d’afficher le panneau ; évite de présenter une zone vide comme un slicer correctement intégré.
- Diagnostic : enregistre le chemin de l’exécutable, le PID du lanceur, le résultat de l’intégration et les arrêts inattendus des processus secondaires d’Electron afin de distinguer les problèmes d’interface des arrêts d’Orca.

## v2.0.128
- Maillage du plateau : les maillages denses utilisent mieux l’espace disponible sans devenir une grille minuscule. Les valeurs superposées sont masquées, cinq repères restent visibles sur chaque axe et le survol affiche X/Y et la hauteur Z.
- Snapmaker Orca : la recherche de la fenêtre native passe à 90 secondes et reconnaît les processus OrcaSlicer/Snapmaker délégués dans le dossier d’installation. Le délai d’Electron est adapté pour éviter une annulation prématurée.

## v2.0.127
Empêche les lectures G-code asynchrones obsolètes de remplacer l’impression active lors d’un changement d’imprimante ou de fichier. Les réponses de sondage périmées sont ignorées et les caches de télémétrie sont isolés par adresse IP.

- Snapmaker Orca : corrige le délai d’attente du processus d’intégration native. Le script Windows pouvait attendre 35 secondes pour trouver la vraie fenêtre, tandis qu’Electron l’arrêtait après 25 secondes, laissant le panneau bloqué sur « Préparation de Snapmaker Orca ». Le délai dépasse désormais l’attente maximale du script.
- Maillage du plateau : remplace la surface 3D déformée par une carte thermique vue de dessus, avec les valeurs Z à chaque point, les axes X/Y en millimètres et une échelle de couleurs lisible. Supprime la perspective et les commandes de rotation responsables de la déformation.

- Communication U1 : un seul processus persistant interroge Moonraker en arrière-plan et partage son cache entre les onglets ; changer de section ne relance plus la connexion. La sélection ou la détection d’une autre imprimante redémarre uniquement ce processus.
## v2.0.124
- Corrige une erreur de portée JavaScript lors de l’affectation d’une bobine créée depuis le moniteur U1. L’action utilise désormais l’API de traduction centralisée et ne s’interrompt plus après la création et l’affectation.

## v2.0.123
- Corrige la lecture des montants de la calculatrice avec virgule ou point décimal lors de l’enregistrement depuis le moniteur U1, afin d’éviter que la main-d’œuvre, les extras et d’autres composants deviennent zéro selon le format régional.
- Enregistre la main-d’œuvre et les extras avec les clés compatibles (`laborAndExtras`, `labor`, `extras`) et permet à la comptabilité de lire les nouveaux mouvements et les anciens.
- Renforce l’intégration native de Snapmaker Orca : détecte aussi les fenêtres principales dont le processus s’est détaché du lanceur, privilégie les titres Snapmaker/Orca, restaure la fenêtre intégrée et repositionne le panneau lorsque l’application se déplace ou change de taille.
- Renvoie le titre de la fenêtre hébergée pour faciliter la vérification de l’intégration.

## v2.0.122
- Modifie l’intégration de Snapmaker Orca : la fenêtre native du trancheur est intégrée directement comme fenêtre enfant de la fenêtre principale de Print Cost & Profit ; aucune fenêtre hôte séparée et superposée n’est créée.
- Positionne la zone native dans l’espace de travail de l’application et la redimensionne lorsque la fenêtre principale change de taille.
- L’affichage/masquage repositionne la fenêtre native dans la zone intégrée ; le détachement d’Orca reste une action explicite.
- Supprime l’ancien mécanisme qui pouvait afficher Orca dans une fenêtre indépendante.

## v2.0.121
- Corrige l’intégration de la fenêtre native Snapmaker Orca en recherchant également les processus enfants créés par le lanceur et en attendant la fenêtre principale visible.
- Vérifie que Windows a réellement défini la fenêtre Orca comme enfant du panneau avant de l’afficher ; en cas d’échec, masque le panneau vide et affiche une erreur.
- Suit le processus Orca réel même si le lanceur initial se termine et redimensionne la fenêtre intégrée lorsque l’application change de taille.
- La fermeture du slicer termine le processus Orca hébergé.

## v2.0.120
- Ajoute une section Snapmaker Orca à l’application de bureau. Sélection de l’exécutable et intégration de sa fenêtre native dans un panneau sous Windows.
- Ajoute des commandes pour détacher et fermer le trancheur ; les profils Orca ne sont pas modifiés.

## v2.0.120
- Ajoute une section Snapmaker Orca à l’application de bureau, avec sélection de l’exécutable et intégration de sa fenêtre native dans un panneau sous Windows.
- Ajoute des commandes pour détacher et fermer le trancheur. Les profils Orca restent inchangés.

## v2.0.119
- Reprise après veille/hibernation : les écritures SQLite en attente sont relancées, les requêtes obsolètes sont annulées et l’état est resynchronisé au retour.
- Moniteur U1 : évite les interrogations simultanées et actualise l’imprimante à la reprise du PC ou au retour de la fenêtre.

## v2.0.118
- Les statistiques des têtes utilisent désormais les compteurs persistants Snapmaker de `extruder_switch_recorder.json`, consultés via Moonraker.
- Utilise `switch_count`, `error_count`, `retry_count` et, si le fichier est accessible, `fan_error_count`.
- Supprime les déductions trompeuses à partir des journaux ; le troisième indicateur affiche les tentatives réelles.

## v2.0.116
- Maillage du plateau : ajoute des repères numériques X/Y et cinq graduations Z à partir des dimensions physiques fournies par l’imprimante.
- Statistiques des têtes : supprime le comptage fondé sur les mentions T0/T1 ou des mots isolés ; seules les activations explicites et les erreurs liées au nom exact de l’extrudeur sont comptées.
- Les anciennes statistiques sont invalidées ; en l’absence de preuve, « — » est affiché.

## v2.0.115
- Le maillage 3D occupe toute la largeur et affiche tous les points sans découpe, avec repères X/Y.

## v2.0.114
- Ajoute réellement la visualisation 3D du maillage du plateau dans le détail de chaque imprimante, à partir de la matrice publiée par Klipper/Moonraker.
- Affiche les dimensions, l’échelle des hauteurs, le minimum, le maximum et la plage ; signale clairement l’absence de matrice valide.

## v2.0.113
- Les statistiques des têtes ne comptent plus les commandes T0/T1 comme des changements physiques ; les chiffres ne s’affichent qu’en présence d’événements explicites. Les erreurs générales ne sont plus attribuées à chaque tête.
- Le nivellement affiche désormais une représentation 3D de la matrice réelle du plateau, avec échelle de hauteur, plage et valeurs minimale/maximale.

## v2.0.112
- Inventaire des filaments : chaque bobine regroupée peut enregistrer individuellement ses grammes restants, sans modifier la présentation compacte des cartes.
- Moniteur U1 : additionne le stock des bobines compatibles par matériau et couleur et répartit la consommation en respectant les poids individuels.

## v2.0.111
- Les commandes créées depuis la comptabilité préremplissent désormais le formulaire avec le client, la description, les travaux sélectionnés et le montant ; rien n’est enregistré avant de cliquer sur « Enregistrer la commande ».
- Empêche l’enregistrement de commandes vides ou à montant nul dans ce flux.

## v2.0.111
- Le tableau de comptabilité s’adapte à la largeur disponible sans défilement horizontal.
- La sélection multiple est conservée lors de l’actualisation ou de la synchronisation.

## v2.0.109
- Comptabilité : sélection multiple des mouvements, y compris les dépenses personnelles, avec envoi au calculateur et création de devis, factures ou commandes. Les dépenses personnelles restent des coûts internes et ne sont pas facturées automatiquement.

## v2.0.108
- Corrige la sélection des documents dans les commandes : le choix d’un devis chargé reprend son produit, son client et son montant réels ; le total est recalculé lors du changement de quantité et vérifié à l’enregistrement. La facture issue de la commande conserve les lignes et montants du devis.
- Évite les doublons de clients lors de l’enregistrement depuis les clients, commandes ou factures grâce à la correspondance de l’e-mail, du téléphone, de l’identifiant fiscal ou de l’identité complète ; les doublons exacts sont regroupés en conservant les champs existants.
- Les nouvelles commandes conservent une copie de l’estimation ou du devis sélectionné et la facture créée depuis une commande utilise cette copie, son client et ses lignes d’origine. Les anciennes commandes sans copie ne créent pas de facture avec des données sans rapport.

## v2.0.106
- Corrige les statistiques des têtes : les erreurs globales et mentions indirectes ne sont plus attribuées à chaque extrudeur. Seules les activations et commandes de sélection explicites sont comptées ; si les journaux ne permettent pas d’identifier une tête, l’interface affiche « — » au lieu d’un zéro trompeur.

## v2.0.105
- Corrige le contrôle du stock du moniteur lorsque l’inventaire regroupe plusieurs bobines identiques : calcule le stock total (reste par bobine × quantité) et répartit la consommation entre les unités sans double déduction.

## v2.0.103
- Corrige la boîte de dialogue d’enregistrement d’une dépense personnelle/commande du moniteur ouverte depuis Comptabilité : `app-10.css` est chargé dans l’en-tête global du document.

## v2.0.103
- Réduit les écritures répétées de `pcp_active_job_by_printer` : le moniteur n’enregistre plus le travail complet dans SQLite à chaque interrogation. Les changements réels d’état/fichier sont enregistrés immédiatement ; les mises à jour du seul temps écoulé sont limitées à une toutes les 30 secondes.

## v2.0.103
- Évite le clignotement des cartes : les échecs temporaires conservent le dernier état valide pendant 90 secondes pendant la reconnexion.
- Seules l’identité et la configuration stables des imprimantes sont enregistrées ; l’état en ligne/hors ligne n’est plus écrit à chaque interrogation.
- La liste enregistrée est lue une seule fois par session.
- L’historique thermique est enregistré au maximum toutes les cinq minutes afin de réduire la charge SQLite.

### v2.0.103
- Conservation des statistiques de tête par imprimante entre les actualisations et les sélections.
- Association plus précise des événements aux extrudeurs pour éviter les compteurs gonflés.
- Réduction des écritures répétées afin d’alléger la file SQLite.
- Les statistiques enregistrées restent visibles si la lecture des journaux échoue.

## v2.0.99
- Les statistiques des têtes se chargent automatiquement à l’affichage des détails de l’imprimante.
- La lecture des journaux utilise un endpoint séparé qui ne relance pas les requêtes d’état, de capteurs ou d’historique, afin de ne pas perturber le Moniteur.
- Ajout d’une fenêtre de progression pendant la découverte et le chargement initial des imprimantes.
- Suppression d’une seconde requête redondante pour l’imprimante sélectionnée.

## v2.0.99
- Le stockage compatible avec localStorage met désormais les écritures SQLite en file via XHR asynchrone, sans bloquer l’interface.
- Les mises à jour successives d’une même clé sont regroupées et les opérations sérialisées afin de réduire les conflits de révision.
- Les conflits 409 actualisent les valeurs et révisions de façon asynchrone avant une nouvelle tentative contrôlée.
- La synchronisation externe n’écrase plus les valeurs en attente d’enregistrement.

## v2.0.99
- Correction de la synchronisation des révisions du stockage : les valeurs et leurs révisions sont mises à jour ensemble, évitant les conflits 409 dus à des révisions obsolètes.
- Ajout d’une nouvelle tentative unique et contrôlée pour les écritures/suppressions en cas de modification depuis une autre fenêtre.
- Réduction des écritures de télémétrie du Moniteur : seules les modifications d’état ou les avancées d’une minute sont enregistrées.
- Historique thermique enregistré toutes les 30 secondes au lieu de 9.
- Ajustement du délai de lecture des journaux et limitation de l’attente par fichier.

## v2.0.96
- Remplacement de la liste brute des journaux par des cartes statistiques visuelles pour chaque tête détectée : changements, activations et erreurs associées.
- Les statistiques sont chargées à la demande, sans alourdir l’actualisation périodique.

## v2.0.95
- Correction de la fermeture accidentelle de la fenêtre Créer une bobine lors d’un clic droit sur les champs numériques.
- Détection élargie des données de couche dans les objets Moonraker de différentes imprimantes.
- Ajout de la consultation manuelle des journaux Klipper pour repérer les changements de tête, avertissements et erreurs ; les journaux ne sont chargés qu’à la demande.

## v2.0.94
- Suppression du panneau de diagnostic « Données reçues de l’imprimante » et de son export JSON.
- Suppression de la sérialisation périodique et de l’actualisation de ces données de diagnostic dans l’interface.
- L’API du panneau n’envoie plus la liste des objets découverts utilisée uniquement par ce diagnostic.

## v2.0.93
- Nouvelle palette thermique à contraste élevé avec des couleurs nettement distinctes.
- Attribution persistante d’une couleur à chaque capteur entre les sessions et les actualisations.
- Normalisation des libellés de l’historique pour éviter les anciens noms dans la légende.

## v2.0.92
- Détection dynamique des capteurs thermiques et des objets publiés par Moonraker, sans liste fixe par modèle.
- Interrogation par lots pour prendre en charge les imprimantes avec de nombreux capteurs.
- Graphique et fiches thermiques fondés sur les températures réellement disponibles ; les ventilateurs sans mesure thermique ne sont pas tracés.
- Détection et affichage de la vitesse des ventilateurs lorsque Moonraker la fournit.
- Traduction des noms de capteurs connus et conservation des noms du firmware pour les autres.

## v2.0.89 — Correction des statistiques Moonraker et du graphique thermique
- Lecture des cumuls dans `result.job_totals`, structure renvoyée par `/server/history/totals`, avec compatibilité pour les réponses plates.
- Affichage des travaux, du temps d’impression, du temps total et du filament lorsque Moonraker les fournit ; le filament cumulé est affiché en mètres.
- Amélioration de la largeur, de l’échelle du graphique thermique et de la présentation des statistiques.

## v2.0.88 — Correction des statistiques et graphiques des imprimantes
- Le temps total et le nombre de travaux utilisent uniquement les totaux officiels de Moonraker ; la liste partielle des 20 derniers travaux n’est plus présentée comme un historique complet.
- Les barres utilisent la durée totale, la durée d’impression ou les heures de début/fin disponibles.
- Le graphique thermique utilise une échelle SVG fixe, des libellés lisibles et des proportions correctes.

## v2.0.85

### v2.0.87 — Refonte du tableau des imprimantes et des statistiques
- La grille affiche toutes les imprimantes détectées, y compris la principale, avec quatre cartes maximum par ligne et une disposition adaptative.
- Les cartes des machines, les détails techniques et les statistiques de production sont séparés visuellement.
- Le graphique thermique dispose d’une échelle en °C, d’une grille et d’un axe temporel ; les durées des derniers travaux sont représentées lorsque l’historique existe.
- Les nouveaux textes sont centralisés dans `js/traducciones.js` et traduits dans les huit langues.

- Imprimantes : grille de quatre cartes maximum par ligne ; l’imprimante principale reste également dans la grille.
- Sélectionnez une carte pour changer de machine active et afficher sa fiche complète dans une zone séparée.
- Les détails ne sont plus mélangés aux cartes. Mise en page adaptative.
## v2.0.82
- Correction du démarrage de la découverte des imprimantes : le paramètre et l’état interne sont désormais déclarés correctement.
- Correction du message d’erreur de lecture G-code qui appelait une fonction de traduction inexistante.
- Suppression de deux anciens blocs accédant hors portée à l’index privé des traductions ; reconstruction via PCP_I18N.refresh().
## v2.0.81
- Imprimantes : cartes en direct pour toutes les machines découvertes ou enregistrées, avec état en ligne/hors ligne, fichier actif et barre de progression.
- Imprimantes : le nom personnalisé associé à l’adresse IP est prioritaire ; sinon, le nom/hostname signalé par la machine est affiché.
- Imprimantes : lecture du modèle, des couches et des durées lorsque Moonraker les publie, sans supposer un nombre fixe d’extrudeurs.
## v2.0.80
- Comptabilité : conserver la page sélectionnée lors du nouveau rendu afin d’éviter le retour automatique de la page 2 à la page 1.
- Comptabilité : trier les mouvements par date et heure décroissantes, du plus récent au plus ancien.
## v2.0.80
- Comptabilité : les nouvelles entrées enregistrent un horodatage réel et affichent l’heure locale du PC ; les anciens enregistrements sans heure n’affichent plus l’heure erronée 01:00.
- Moniteur : le bouton alterne entre Afficher et Masquer selon l’état du panneau et conserve le bon libellé lors du changement de langue.
## v2.0.80
- Imprimantes : le message inférieur sélectionne désormais directement le texte selon la langue active et s’actualise lorsque la langue du document change.
- Calculatrice : nouvelle disposition de bureau avec quatre blocs supérieurs, panneaux fiscaux et de détail sur la deuxième ligne, total mis en évidence et comparateur/actions sur la troisième. Les identifiants et la logique de calcul sont conservés.
## v2.0.80
- Correction du message informatif inférieur de la page Imprimantes : il est actualisé explicitement lors du changement de langue à partir de la clé du dictionnaire central.
## v2.0.80
- Correction du chargement des traductions de la section Imprimantes : les chaînes sont ajoutées au dictionnaire central avant la création des index de langue, y compris pour les éléments dynamiques. Aucun changement à Moonraker ni aux données des extrudeurs.
## v2.0.80
- Audit et correction des traductions de toute la section Imprimantes : en-tête, état, identification, travail en cours, températures, extrudeurs, plateau chauffant, mouvement, logiciel, messages et données reçues. Tous les textes sont centralisés dans traducciones.js pour les huit langues.
## v2.0.80
- Refonte visuelle de la page Imprimantes : résumé supérieur avec indicateur circulaire de progression, fichier actif et durées clés.
- Panneau thermique avec cartes indépendantes et barres visuelles pour chaque extrudeur et le plateau chauffant ; adapté aux imprimantes à un ou plusieurs extrudeurs.
- Nouvelles chaînes centralisées dans les huit langues.
## v2.0.80
- Les requêtes Moonraker détectent désormais les objets disponibles sur chaque machine et récupèrent les données de tous les extrudeurs indépendants, du plateau, du mouvement et des capteurs compatibles.
- La page Imprimantes affiche chaque extrudeur séparément : un pour les machines à un extrudeur et quatre pour la Snapmaker U1 si son micrologiciel les expose.
## v2.0.80
- La section Imprimantes réutilise les points de terminaison du moniteur Moonraker (/api/u1/printer et /api/u1/status) et affiche l’état, la progression, les couches, les durées, les températures et les positions des axes disponibles.
- L’état de connexion est actualisé après chaque requête et les données sont rafraîchies toutes les 3 secondes lorsque la section est visible.
## v2.0.80
- Rétablissement des drapeaux SVG dans le sélecteur de langue, comme dans la version stable. Le sélecteur unique et les traductions centralisées sont conservés.
- Les scripts PowerShell sont enregistrés avec un BOM UTF-8 afin que Windows PowerShell 5.1 lise correctement les caractères accentués et que le pont démarre sans erreur d’encodage.

## v2.0.80
- Suppression de la création en double du sélecteur : un seul module en est désormais responsable.
- Le sélecteur est monté après les scripts de l’application et rétabli si la barre est reconstruite.
- Les traductions centralisées et les huit langues sont conservées.

## v2.0.61
- Ajout d’un sélecteur de langue visible et persistant dans la barre supérieure, indépendant de l’ancien mécanisme de montage.
- Les huit langues et le moteur centralisé de traduction sont conservés.

## v2.0.60
- Correction du changement de langue : la traduction ne remplace plus le contenu des contrôles et ne supprime plus leurs éléments enfants avec événements.
- Application de la langue en un seul passage et mémorisation du choix.
- Le diagnostic du rendu et DevTools (Ctrl+Maj+I / F12) sont conservés.

## v2.0.59
- Journalisation persistante des erreurs JavaScript et du processus de rendu Electron.
- Outils de développement activés dans l’application installée avec Ctrl+Maj+I ou F12.
- Le système de licences reste désactivé.

## v2.0.38
- Restaure la disposition de bureau de la calculatrice de la v2.0.26 et empêche le chevauchement des indicateurs et du détail des dépenses en modes Personnel et Vente.

## v2.0.36
- Retour arrière sûr sur les changements d’interface de la v2.0.35 ; restauration de la page et du comportement de la v2.0.34.
- Restauration des règles de disposition précédentes de la calculatrice. Aucun module fonctionnel ni aucune donnée utilisateur ne sont modifiés.

## v2.0.34
- Corrige le chevauchement des cartes de résultats en modes Personnel et Ventes avec une disposition verticale stable.
- Les listes d’imprimantes affichent le nom personnalisé enregistré, sans état hors ligne ni identifiant du micrologiciel.
- Normalise les anciennes notifications comptables enregistrées en chinois et les réaffiche avec des textes espagnols traduisibles.
- Centralise le sous-titre des alertes dans les huit langues.

## v2.0.33
- Corrige la grille de la calculatrice personnelle en rétablissant la disposition originale à 12 colonnes et en évitant le chevauchement des indicateurs et du détail.
- L’icône d’actualisation recharge maintenant la page au lieu de rechercher une mise à jour de version.
- Sépare visuellement le titre et le message des notifications.
- Le détail des mouvements personnels affiche le filament, l’électricité, l’amortissement, la maintenance, les grammes et la durée lorsqu’ils sont enregistrés.
- Ajoute les traductions centralisées dans les huit langues.

## v2.0.32
- Corrige la référence à la feuille CSS afin de charger les styles de l’en-tête fixe et du mode Personnel.
- Restaure la grille du calculateur et supprime `display: contents`, qui déplaçait les panneaux et provoquait des chevauchements.
- Améliore la disposition adaptative des indicateurs et du détail des coûts.

## v2.0.31
- Le mode Personnel affiche le détail du filament, de l’électricité, de l’amortissement et de la maintenance, sans les lignes commerciales ni les suppléments.
- L’en-tête reste fixé à l’écran dans tous les onglets.
- Les quantités de filament sont limitées à deux décimales.
- La suppression d’un mouvement ayant déduit du filament le restitue au stock et crée une notification.
- Ajoute un raccourci d’en-tête pour rechercher les mises à jour et ouvrir le téléchargement disponible.

## v2.0.30
- Corrige la disposition des colonnes de la calculatrice en mode Personnel ; le panneau latéral conserve `display: contents`.
- Met à jour la version affichée dans l’en-tête en 2.0.30.

## v2.0.29
- Comptabilité : évite les doublons de dépenses personnelles issus d’une même estimation marquée dans la calculatrice.
- L’en-tête supérieur reste fixe pendant le défilement.

## v2.0.28
- Le mode Personnel conserve le panneau des résultats visible et affiche le coût total et unitaire après le calcul.
- Corrige le masquage accidentel de la colonne des résultats.

## v2.0.27
- En mode Personnel, le calcul affiche désormais le coût réel par unité sans appliquer un prix de vente nul.
- Le comparateur de prix est masqué en mode Personnel.

## v2.0.26
- Le mode Personnel ne calcule que les coûts des blocs 1, 2 et 3 ; exclut la main-d’œuvre, les extras, l’emballage, le bénéfice minimum, la marge et les taxes.
- L’en-tête supérieur reste fixe pendant le défilement.

﻿## v2.0.25
- Correction de l’ouverture des PDF générés dans Electron : autorisation sécurisée de la fenêtre locale `about:blank` qui charge ensuite le PDF.
- Message d’erreur de secours mis à jour et traduit dans les huit langues.

## v2.0.24
- Arrêt propre du serveur local lancé par l’application à la fermeture et avant une mise à jour. Seul le PID enregistré et vérifié est arrêté ; les serveurs externes restent actifs.

## v2.0.23
- Le tableau de bord affiche le pourcentage réel d’impression de l’imprimante U1 sélectionnée. Aucun progrès fictif n’est affiché pour les autres imprimantes.
- Le progrès utilise l’état mis en cache du pont local sans lancer de recherche supplémentaire.
- Conserve le démarrage stable de la version 2.0.22.

## v2.0.22
- Correction du démarrage automatique : Electron supervise Iniciar_Puente_Orca.ps1, qui crée le serveur persistant avec Start-Process.
- Les sorties stdout/stderr du lanceur sont journalisées séparément ; évite de lancer directement le serveur comme processus détaché d’Electron qui se terminait immédiatement.
- Attente du superviseur limitée à 25 secondes sans arrêter le serveur indépendant.
- Renforcement des nouvelles tentatives de suppression des fichiers du programme par l’installateur ; les données, SQLite, licences et sauvegardes sont conservées.

## v2.0.21 — Démarrage direct du serveur local depuis Electron

- Lorsque `/api/version` ne répond pas, Electron lance directement `Servidor_Panel_U1.ps1` comme processus indépendant et conserve les journaux stdout/stderr pour le diagnostic.
- Si le port répond avec une autre version, le lanceur de maintenance et ses contrôles de sécurité restent utilisés.
- L’interface ne s’ouvre qu’après confirmation de la version installée par `/api/version`. SQLite et les données utilisateur ne sont pas modifiés.

## v2.0.17 — Écran de chargement au démarrage
- Affiche immédiatement une fenêtre de chargement au lancement de Print Cost & Profit, avant la vérification ou le démarrage du serveur local.
- Indique la préparation, la vérification du serveur local et l’ouverture de l’application ; l’écran se ferme lorsque la fenêtre principale est prête à s’afficher.
- En cas d’échec du démarrage, l’écran de chargement se ferme et l’écran d’erreur existant est conservé.
- Les textes sont centralisés dans `js/traducciones.js` et traduits dans les huit langues prises en charge.
- Ne modifie ni SQLite, ni les licences, ni les sauvegardes, ni les chemins de données, ni le fonctionnement du serveur local.

## v2.0.16 — Détection correcte de l’installation précédente
- Corrige la détection sur Windows 64 bits en vérifiant explicitement `$PROGRAMFILES64` ainsi que `$PROGRAMFILES`.
- La boîte de dialogue précédente ne s’affichait pas car la vérification pouvait viser `Program Files (x86)` au lieu de `C:\\Program Files`.
- Si l’exécutable est trouvé à l’emplacement connu, l’installation demande confirmation, supprime uniquement ce dossier de programme et nettoie les anciennes clés de registre.
- Ne modifie pas AppData, SQLite, les licences, les sauvegardes ni le serveur local.

## v2.0.15 — Correction de la compilation de l’installateur
- Corrige l’inclusion NSIS de la suppression préalable : retire `customHeader` et les variables personnalisées non développées qui provoquaient l’avertissement NSIS 6001.
- `customInit` utilise directement le chemin hérité exact `C:\\Program Files\\print-cost-profit-desktop`, vérifie l’exécutable, demande confirmation et annule si le dossier ne peut pas être supprimé.
- Supprime les anciennes clés de registre d’installation/désinstallation pour empêcher le lancement de l’ancien désinstalleur défaillant.
- Ne modifie ni le serveur local ni les chemins des données utilisateur/SQLite.

## v2.0.14 — Suppression contrôlée de l’installation précédente
- Ajoute une routine NSIS `customInit` qui détecte l’installation précédente enregistrée et, uniquement si elle correspond à `C:\\Program Files\\print-cost-profit-desktop` et contient l’exécutable attendu, demande confirmation puis supprime les fichiers du programme avant l’installation.
- Si le dossier ne peut pas être supprimé, l’installation est annulée afin d’éviter de mélanger les versions.
- N’exécute pas l’ancien désinstalleur qui affichait à tort un avertissement indiquant que l’application était ouverte.
- Ne supprime pas AppData/LocalAppData et ne modifie ni SQLite, ni les licences, ni les sauvegardes, ni le serveur local.

## v2.0.13 — Installation avec élévation dans Program Files
- Configure NSIS en installation pour tous les utilisateurs (`perMachine`) avec élévation (`allowElevation`), afin que les mises à jour dans `C:\\Program Files` disposent des autorisations nécessaires.
- Supprime le script NSIS personnalisé de v2.0.12 : ses macros de suppression directe ne résolvaient pas le blocage et pouvaient effacer tout le dossier de destination.
- Ne modifie ni le serveur local, ni la base SQLite, ni l’emplacement des données utilisateur.

## v2.0.12 — Correction de l’installeur NSIS
- `builder-debug.yml` confirme que `customCheckAppRunning` est absent du script NSIS généré : la correction v2.0.11 ne s’exécutait donc pas.
- Remplacement par les hooks reconnus `customUnInstallCheck` et `customRemoveFiles` pour éviter la suppression atomique défectueuse de l’installation précédente, susceptible de provoquer un faux avertissement d’application ouverte.
- La suppression est limitée à `$INSTDIR` ; les données utilisateur restent hors de ce dossier.

## v2.0.11 — Correction de fermeture pendant la mise à jour
- Utilise le hook NSIS `customCheckAppRunning` ; le précédent `customInit` ne traitait pas l’avertissement.
- L’installeur arrête uniquement l’exécutable Print Cost & Profit avant le remplacement des fichiers.

## v2.0.9 — Correction du démarrage du pont local

- La disponibilité du pont est désormais vérifiée avec `/api/version` ; un journal d’activité lent ne provoque plus de faux négatif.
- Le délai de vérification est augmenté pour éviter de lancer un second serveur HTTP.sys.
- Si HTTP.sys conserve l’URL enregistrée sans permettre de vérifier la version, le lanceur s’arrête en sécurité et consigne un diagnostic ; aucun processus inconnu n’est arrêté.
- La base de données et l’emplacement des données restent inchangés.

## v2.0.8 — Correction de compilation Windows
- Suppression du BOM UTF-8 de `package.json` et des fichiers JSON pour permettre leur lecture par `@electron/rebuild` et `JSON.parse`.
- Conservation du BOM UTF-8 dans `Servidor_Panel_U1.ps1`, nécessaire à Windows PowerShell 5.1 pour les caractères internationaux.
- Syntaxe JSON vérifiée et version mise à jour vers v2.0.8.

## v2.0.7
- Ajout des modes Ventes (par défaut) et Personnel (dépenses uniquement), avec une notification flottante explicative.
- Le mode Personnel exclut TVA, ventes, commissions, main-d’œuvre, réserve d’échec et calcul du bénéfice.
- Les écritures comptables utilisent l’alias Snapmaker actif et une identité stable pour éviter les imprimantes U1 génériques en double.
- Documentation adaptée aux fenêtres larges avec illustrations locales de remplacement si les captures facultatives sont absentes.
- Nouveaux textes centralisés dans js/traducciones.js pour les huit langues.

### v2.0.6 — Heures réelles d’impression, compteur des alertes non lues et documentation locale
- La maintenance cumule les heures réelles signalées par `print_stats` du moniteur U1, pendant les travaux et après leur achèvement ou annulation.
- Les estimations et les évaluations ne sont pas comptées comme des heures machine réelles.
- Le badge rouge de l’accueil compte uniquement les alertes non lues ; les alertes récentes déjà lues restent visibles.
- Ajout de manuels HTML locaux dans les huit langues et correction des liens Documentation et Aide.
- Toutes les nouvelles chaînes sont centralisées dans `js/traducciones.js` pour les huit langues prises en charge.

### v2.0.5 — Correction de l’encodage du serveur PowerShell
- Ajout d’un BOM UTF-8 à `Servidor_Panel_U1.ps1` pour Windows PowerShell 5.1.
- Correction de l’erreur d’analyse qui empêchait le démarrage du serveur local.
- Mise à jour de la version visible et des références de cache en v2.0.5.

### v2.0.4 — Correction du démarrage et de l’installateur
- Le lanceur du serveur local utilise Start-Process si WMI/CIM est indisponible.
- Les sorties stdout et stderr du serveur sont enregistrées dans le dossier local des journaux.
- L’installateur NSIS active explicitement le choix de langue, conserve la licence et permet de choisir le dossier d’installation.
- Version visible mise à jour en v2.0.4.

### v2.0.3 — Corrections des alertes, de la comptabilité et du stock
- Le panneau Alertes de l’accueil utilise les mêmes notifications actives que la cloche.
- L’enregistrement d’une estimation avec comptabilité active crée le mouvement et déduit le filament G-code des bobines affectées, avec contrôle du stock et prévention des doublons.
- Le moniteur U1 réutilise la fenêtre de création de bobine de la calculatrice.
- Tri des tâches de maintenance par priorité, intervalle croissant/décroissant ou nom.
- L’installateur NSIS inclut le contrat de licence, le choix de langue et du dossier d’installation.

### v2.0.3 — Notifications d’échec des sauvegardes

- Signale également tout problème détecté par le contrôle d’intégrité SQLite ; l’alerte est résolue lorsque le contrôle redevient correct.
- Précise que le réglage de comptabilité couvre les mouvements d’impression avec déduction de filament confirmée.
- Ajoute une préférence indépendante pour être averti en cas d’échec de création ou de restauration manuelle d’une sauvegarde.
- Les alertes sont dédupliquées par opération et marquées comme résolues après une opération ultérieure réussie.
- La détection des impressions U1 terminées utilise désormais l’état comptable confirmé (`provisional=false`), et non le texte localisé du mouvement.
- Conserve les préférences et l’historique locaux, les seuils de stock et les traductions centralisées dans les huit langues.

### v2.0.1 — Centre de notifications et préférences

- La cloche ouvre un centre unique avec compteur de notifications non lues, historique, marquage individuel ou global comme lu et suppression des notifications lues.
- Alertes de maintenance à venir et échues, activées par défaut.
- Alertes de stock de filament par bobine et couleur : 200 g par défaut, seuil configurable en grammes, en nombre de bobines ou selon les deux critères.
- Notifications comptables pour les impressions U1 terminées ou annulées uniquement si le mouvement confirme une déduction réelle de filament.
- Alertes de nouvelles versions et préférences indépendantes par catégorie. Les préférences et l’historique sont conservés localement.

### v2.0.0 — Application de bureau Windows

- Ajout d’une fenêtre de bureau dédiée : Print Cost & Profit s’ouvre sans onglet ni barre d’adresse du navigateur.
- Conservation de l’interface existante, du serveur local, de la base SQLite, du chemin des données et de l’intégration Orca/U1.
- Vérification de la version du pont local avant la connexion ; l’interface refuse un serveur d’une autre version.
- Ajout des messages de démarrage et d’erreur du bureau dans `js/traducciones.js` pour les huit langues.
- Ajout du processus de création de l’installateur Windows. L’exécutable doit encore être compilé et validé sous Windows.

### v5.58
- Réorganisation du centre de maintenance : tâches en cartes compactes pleine largeur, conseils repliables en dessous et formulaire pleine largeur. Mise en page adaptative.

### v5.57
- PDF RTL : correction du miroir horizontal des éléments graphiques asymétriques (séparateur des totaux et bandeau vert) afin que les libellés et montants arabes soient correctement placés. Le libellé de taxe utilise désormais la clé de traduction centralisée dans les huit langues.

### v5.56
- PDF des factures et devis : remplacement de l’encodage limité Helvetica/WinAnsi par un rendu Unicode haute résolution avec les polices Noto intégrées pour l’arabe et le chinois. La génération reste locale et indépendante du navigateur par défaut et des polices installées.

### v5.55
- Correction du panneau d’alertes : les alertes de filament et de maintenance ne s’écrasent plus et ne disparaissent plus lors de l’actualisation du tableau de bord.

### v5.53
- Serveur U1 : correction de l’analyse PowerShell des requêtes Moonraker contenant `&`, avec construction sûre des séparateurs. Script enregistré avec BOM UTF-8 pour Windows PowerShell 5.1 et affichage correct du polonais.

- Moniteur U1 : délai d’attente de la requête d’état porté à 8 secondes et délai du navigateur à 10 secondes, afin d’éviter de signaler une imprimante hors ligne lorsque la lecture du G-code fonctionne mais que l’état répond plus lentement.

### v5.51
- Maintenance : suppression de l’étiquette PRO et déplacement de l’onglet juste sous Comptabilité.
- Refonte visuelle du tableau de maintenance, des cartes, indicateurs, formulaires et historique, avec adaptation mobile.
- Ajout de contrôles préventifs du hotend, de l’usure de la buse, du chauffage/thermistor, de l’extrudeur, des courroies, ventilateurs, plateau, capteurs et câblage.
- Correction de la reconnaissance des familles Snapmaker J1/Artisan, Anycubic Kobra 2 Pro, ELEGOO Neptune 4 Pro et Bambu Lab.
- Les nouvelles tâches sont ajoutées aux imprimantes existantes sans supprimer les heures, tâches personnalisées ni historique. Les intervalles communs sont indicatifs et modifiables.
- Traductions centralisées mises à jour dans les huit langues.

### v5.50
- Ajout d’un onglet Maintenance PRO avec sélection d’imprimantes, suivi des heures, tâches selon les heures/le calendrier, alertes d’échéance, tâches personnalisées et historique.
- Calendriers de départ documentés pour Snapmaker U1/J1/Artisan, Creality K2 Pro, Prusa MK4S, Flashforge Adventurer 5M Pro, Anycubic Kobra 2 Pro/Kobra 3 et ELEGOO Neptune 4 Pro. Bambu Lab et les autres modèles utilisent une base générale modifiable. Les autres modèles utilisent une base générique modifiable à vérifier dans leur manuel.
- Traductions de la nouvelle interface, des dialogues et des tâches dans les huit langues.

### v5.49
- Accueil : le moniteur affiche désormais le nom personnalisé enregistré pour chaque adresse IP au lieu du nom réseau lorsqu’un alias existe.

### v5.48
- Calculatrice : le bloc « 01 · Données de la pièce » occupe désormais toute la hauteur de la ligne, comme les blocs de filament et de coûts.

### v5.47
- Calculatrice : la colonne « Filament par couleur/matériau » est élargie et « Coûts supplémentaires » est réduite sur les grands écrans, tout en conservant les autres colonnes et la mise en page adaptative.

### v5.46
- Accueil : le panneau des imprimantes conserve une hauteur fixe et ajoute un défilement vertical si nécessaire. « Ouvrir le moniteur » mène aux Options, directement à la connexion des imprimantes et à « Rechercher automatiquement ».

### v5.45
- Accueil : le panneau affiche les imprimantes reconnues et distingue les états connectée, hors ligne et non vérifié. « Ouvrir le moniteur » restaure et affiche le véritable moniteur.

### v5.44
- Comptabilité : réduction de la largeur de la colonne « Montant/coût » et légère augmentation de la taille du texte du tableau.

### v5.43
- Comptabilité : réduction des colonnes « Encaissé » et « Bénéfice » et rééquilibrage des neuf colonnes de l’historique. Contraste, alignement et détails améliorés.

### v5.42
- Comptabilité : les en-têtes du tableau deviennent « Encaissé » et « Bénéfice », tout en conservant les neuf colonnes.

### v5.41
- Comptabilité : agrandissement des textes de l’historique, des filtres et des boutons. Le détail de référence reste ouvert lorsque le tableau est actualisé.

### v5.40
- Refonte visuelle de la comptabilité alignée sur le tableau de bord Accueil : cartes, indicateurs, filtres, formulaire et historique avec une hiérarchie visuelle plus claire. Les opérations et la pagination existantes sont conservées.
### v5.39 — Refonte visuelle de la comptabilité
- Aligne la comptabilité sur le style du tableau de bord Accueil : fonds en profondeur, accents lumineux et cartes cohérentes.
- Renforce la hiérarchie des indicateurs et des panneaux d’analyse.
- Améliore le formulaire de mouvements et l’historique sans modifier les commandes ni la logique comptable.
- Améliore l’adaptation aux différentes largeurs d’écran.

### v5.38 — Refonte de la comptabilité
- Nouvelle hiérarchie visuelle pour la rentabilité, les indicateurs et les graphiques.
- Formulaire de mouvements plus compact et mieux organisé.
- Historique comptable avec colonnes équilibrées, montants mis en évidence, références dépliables et recherche plus claire.
- La logique de calcul, de stockage, de modification, de suppression et d’exportation est conservée. Aucun nouveau champ ni dialogue.

### v5.37 — Correction de la pagination des bobines
- Les cartes hors de la page active sont masquées même si les styles du thème tentent de les afficher.
- Le stock affiche exactement 8 bobines par page (4 colonnes × 2 lignes sur ordinateur).
- La recherche, les filtres et la modification du stock sont conservés.

### v5.36 — Pagination du stock de filaments
- Correction de la pagination des cartes : 8 bobines exactement sont désormais affichées par page, au lieu de tout le stock.
- Réparation des boutons Précédent/Suivant et de l’indicateur de page, tout en conservant la grille de quatre colonnes et la recherche.
- Les données, la modification des grammes et les autres opérations du stock sont conservées.

### v5.35 — Précision des grammes dans le stock
- Les grammes restants par bobine sont affichés avec deux décimales maximum et le champ modifiable utilise un incrément de 0,01 g. La valeur enregistrée ne change pas tant que l’utilisateur ne modifie pas le champ.

### v5.23 — Refonte professionnelle des ventes, du stock et de la comptabilité
- Modernisation des Devis, Commandes et Factures avec des en-têtes visuels, des formulaires organisés, des champs sombres et des tableaux plus lisibles, sans modifier les actions existantes.
- Amélioration de l’inventaire des filaments : formulaire plus clair, cartes de bobines, indicateurs de matière restante et commandes d’édition.
- Harmonisation de la Comptabilité avec le tableau de bord Accueil, notamment les cartes de rentabilité et les panneaux de mouvements.
- Adaptation aux écrans étroits. Aucune donnée, structure SQLite ou logique métier n’a été modifiée. Aucun nouveau texte d’interface n’a été ajouté.

### v5.22 — Refonte professionnelle de l’onglet Clients
- Refonte de l’onglet Clients avec un en-tête visuel, un formulaire mieux organisé, des champs sombres cohérents avec l’accueil et des commandes mieux hiérarchisées.
- Le champ Observations n’apparaît plus comme une zone blanche native : il reprend le thème sombre et le style des autres champs.
- Le répertoire des clients utilise des cartes compactes, plus lisibles et sans hauteur vide inutile. La recherche, la modification, l’enregistrement et la suppression restent inchangés, tout comme la réutilisation des clients dans les devis, commandes et factures.
- Aucune modification des données ou du schéma SQLite. Aucun nouveau texte d’interface.

### v5.21 — Alignement uniforme de la page Options
- Toutes les sections d’Options utilisent désormais la même pleine largeur avec un alignement et des espacements cohérents ; les grands espaces vides à côté de Monnaie et Apparence sont supprimés.
- Les formulaires conservent deux colonnes pour utiliser l’espace disponible ; les champs larges et les sections complètes occupent toute la largeur. Sur petit écran, l’affichage passe à une colonne.
- Les commandes, données enregistrées et traductions restent inchangées ; la base SQLite n’est pas modifiée.

### v5.20 — Refonte professionnelle des options et correction des sections repliables
- Refonte de l’onglet Options avec des cartes compactes sur deux colonnes, une hiérarchie plus claire et un style cohérent avec l’accueil ; les sections imprimante, sauvegardes, profils et journal conservent toute la largeur nécessaire.
- Correction des boutons « Afficher les champs » et « Masquer les champs » : ils replient et déplient désormais réellement le contenu et indiquent correctement leur état accessible.
- Les champs, commandes, préférences d’ordre et de repli, traductions et données enregistrées sont conservés. La base SQLite n’est pas modifiée.

### v5.19 — Correction de l’isolation des onglets
- Correction de la règle CSS d’Options qui annulait le masquage des onglets inactifs.
- Options ne s’affiche que lorsqu’elle est sélectionnée ; Accueil, Calculatrice, Estimations et les autres sections restent correctement isolés.
- La présentation, les commandes et les données existantes sont conservées.

### v5.18 — Correction de la disposition des options
- Suppression de la grille imbriquée qui créait de grands espaces vides entre les sections. Les options utilisent désormais une disposition continue sur toute la largeur.
- Les paramètres de devise et de taxes ainsi que les profils d’imprimante utilisent toute la largeur disponible, avec des champs et des cartes alignés.
- Les commandes, les données, le repli et le réordonnancement des sections sont conservés.

### v5.17 — Refonte des options
- Réorganise les options en une grille compacte de cartes, avec une hiérarchie visuelle plus claire et un style cohérent avec l’accueil.
- Supprime le conteneur en double des données du vendeur.
- Conserve les sections, commandes, fonctions de réduction et de réorganisation. Le journal affiche toujours les 50 entrées les plus récentes sans supprimer l’historique.

## v5.16
- Refonte des Options avec des cartes et des commandes assorties au tableau de bord Accueil. Le journal affiche les 50 événements les plus récents ; l’historique complet reste stocké localement.
- Suppression également du petit texte dupliqué sous le titre Calculatrice ; le titre et l’icône sont conservés.
- Les drapeaux du sélecteur de langue utilisent désormais des images SVG intégrées, sans dépendre des polices emoji de Windows.
- Suppression du petit texte dupliqué sous le titre de l’onglet Estimations. Sa propre description est conservée.
- Correction du sélecteur de langue : un drapeau visible apparaît désormais à côté de la langue choisie et se met à jour lors du changement.
- Refonte visuelle de l’onglet Estimations avec un en-tête mis en valeur, des filtres regroupés et un historique assorti au tableau de bord.
- Le sélecteur de langue affiche désormais le drapeau correspondant à côté de chaque langue.
- Remplace le raccourci « Estimations » par « Commandes ». Le bloc « Dernières estimations » de l’accueil et l’onglet Estimations sont conservés.
- La lueur extérieure des icônes des blocs de la calculatrice est encore réduite, tout en conservant couleurs, taille et traits.
- Ajout de « Devis » aux accès rapides de l’accueil, avec une icône néon et un accès direct à l’historique complet.

## v5.6
- Rétablissement de l’icône vectorielle de la calculatrice dans l’en-tête de l’onglet. Réduction de l’éclat lumineux des icônes des blocs pour un meilleur confort visuel, sans modifier leur taille, leurs traits ni leurs couleurs.

## v5.5
- Rétablit sur l’accueil le bloc « Dernières estimations » avec les quatre estimations enregistrées les plus récentes et un accès à l’historique complet de l’onglet Estimations.

## v5.4
- Réduction de la lueur des icônes des blocs de la calculatrice pour améliorer le confort visuel, tout en conservant leur taille et leur style néon.

## v5.3
- Ajoute un onglet « Estimations » sous « Calculatrice », avec une icône vectorielle néon assortie à l’application.
- Déplace l’historique complet des estimations dans cet onglet et retire de l’accueil le bloc des dernières estimations et son raccourci.
- Préserve le stockage, les enregistrements et les fonctions de recherche, tri, comparaison, chargement et suppression.
- Ajoute les nouveaux libellés à `js/traducciones.js` dans les huit langues.
- Réduit légèrement la luminosité des icônes néon de la calculatrice tout en conservant leur effet lumineux et en améliorant la lisibilité.

## v5.1
- Corrige le chevauchement des icônes en supprimant le masque hérité qui affichait un second pictogramme sous l’icône néon.
- Augmente légèrement la taille du cadre et de l’icône tout en conservant le style cyan, bleu et violet.
- Ne modifie ni les calculs, ni les champs, ni la disposition, ni le fonctionnement de la calculatrice.

## v5.0
- Remplace les symboles typographiques de la calculatrice par des icônes vectorielles en ligne, encadrées et avec une lueur néon cyan, bleue et violette, assorties à l’écran d’accueil.
- Harmonise les icônes de l’en-tête et des panneaux pièce, filament, coûts, taxes, résultats et comparaison, sans modifier les commandes ni les calculs.

## v4.9
- Déplace les paramètres d’impression (durée, quantité, réserve d’échec, profil et notes) dans le panneau de détail des taxes ; la carte de la pièce conserve le nom, le G-code et l’image.

## v4.8
- Empêche la carte « Données de la pièce » de s’allonger excessivement lors de l’importation d’un G-code comportant plusieurs couleurs : le rapport de détection et de stock défile dans sa propre zone.
- Ajoute des icônes néon plus grandes aux sections du calculateur, avec des halos cyan, violet et vert assortis à l’écran d’accueil.
- Conserve les calculs, les identifiants des champs, l’affectation des bobines et l’importation G-code.

## v4.7
- Ajuste la calculatrice pour mieux correspondre à la maquette approuvée : proportions des cartes, hiérarchie des résultats et comparateur à côté des actions.
- Réorganise le résultat estimé pour mettre en évidence le prix total et supprimer l’espace vide qui déplaçait les indicateurs.
- Corrige l’alignement du titre et améliore la disposition des champs sur les grands et petits écrans.
- Ne modifie ni les calculs, ni les identifiants des champs, ni l’importation G-code.

## v4.5
## v4.6
- Refonte du calculateur : cartes réorganisées sur deux rangées, comparateur et actions côte à côte, barre d’outils sans superposition.
- Séparation visuelle des coûts d’impression et des coûts supplémentaires, sans modifier les identifiants ni les calculs.

- Redessine l’onglet Calculatrice avec des cartes, une hiérarchie visuelle plus claire et des icônes plus visibles, dans le style néon professionnel de l’accueil.
- Réorganise les panneaux de pièce, filament, coûts, taxes et résultats dans une grille adaptative.
- Modernise les actions et le comparateur de prix.
- Conserve les champs, identifiants, calculs, importation G-code, enregistrement et commandes existants.

## v4.4
- Précise le message de confirmation afin d’identifier clairement la base de données SQLite de l’ordinateur.
- Ajoute une gestion du cache pour que le navigateur charge les versions à jour des scripts de traduction et de calculatrice.

## v4.3
- Corrige la navigation après l’envoi d’un G-code depuis le moniteur U1 : l’onglet Calculatrice s’ouvre désormais au lieu de l’Accueil.
- Les données importées restent chargées et le champ de la pièce devient visible dans la calculatrice.

## v4.2
- Corrige le message après l’enregistrement d’une estimation : il confirme désormais l’enregistrement dans la base SQLite de ce PC.
- Clarifie également la confirmation lors de la suppression de l’historique.
- L’enregistrement continue d’utiliser l’adaptateur SQLite intégré compatible avec localStorage ; le format des données ne change pas.

## v4.1
- Déplace la calculatrice complète dans un onglet indépendant « Calculatrice ».
- Le comparateur de prix, le simulateur d’échecs, les résultats et les champs de calcul se trouvent désormais dans cet onglet.
- L’accueil conserve le tableau de bord et ses indicateurs ; « Nouveau calcul » et « Charger G-code » ouvrent d’abord la calculatrice.
- Les identifiants et la logique des champs sont conservés afin de préserver les calculs et les fonctions existantes.

## v4.0
- Corrige la documentation des Options : les huit fichiers README sont convertis en pages HTML indépendantes et localisées.
- Chaque langue ouvre désormais son propre manuel HTML depuis l’application ; le chemin erroné vers des fichiers inexistants est supprimé.
- Le manuel arabe utilise le sens RTL et tous les manuels reprennent le thème sombre de l’application.

## v3.9
- Remplace les symboles décoratifs de la barre supérieure par des boutons néon fonctionnels : alertes, documentation et options.
- La cloche mène au panneau des alertes et affiche le nombre réel d’avis.
- Le point d’interrogation ouvre le manuel dans la langue sélectionnée ; les chemins utilisent les fichiers README localisés inclus.
- L’engrenage ouvre directement l’onglet Options.

## v3.8
- Connecte le moniteur de l’accueil au point de terminaison réel `/api/u1/status` du pont local, au lieu de lire le texte d’un panneau potentiellement masqué.
- Affiche la connexion, l’état, le fichier actif et la progression ; signale la déconnexion si le pont ou l’imprimante ne répond pas.
- Le bouton d’ouverture actualise l’état avant d’ouvrir le moniteur complet.
- Aucun nouveau texte n’est ajouté ; les chaînes existantes de traducciones.js sont réutilisées.

## v3.7
- Corrige les indicateurs de l’accueil afin qu’ils utilisent les mêmes règles et la même normalisation que la comptabilité.
- Exclut les estimations non comptabilisées et évite les doublons de revenus liés aux anciennes commandes.
- Les revenus, coûts, bénéfices, marges et montants encaissés suivent désormais les critères de la rentabilité avancée.
- Aucun nouveau texte d’interface n’a été ajouté.

## v3.6
- Agrandit légèrement les icônes des actions principales, des indicateurs KPI, de la navigation latérale et des raccourcis pour mieux les distinguer.
- Les icônes sont séparées des libellés afin d’ajuster leur taille sans modifier la typographie ni les traductions.
- Aucun nouveau texte d’interface n’a été ajouté.

## v3.5
- Aligne l’en-tête de l’accueil sur la référence fournie : « VOTRE ATELIER 3D », titre et description à gauche, imprimante à droite et cinq actions en bas.
- Corrige les proportions et les espacements afin que l’imprimante ne chevauche ni le texte ni les boutons.
- Conserve les cinq indicateurs, les graphiques, la rentabilité, l’historique, les raccourcis et la colonne latérale avec leurs données et fonctions.
- Aucun nouveau texte d’interface n’a été ajouté ; les traductions restent centralisées dans js/traducciones.js pour les huit langues.

## v3.4
- Supprime la marque « Snapmaker U1 » au centre de l’en-tête et la remplace par un bandeau consacré aux fonctions du logiciel : calcul, production et rentabilité.
- Redessine les boutons d’action et les indicateurs pour mieux correspondre à la maquette approuvée en matière de dimensions, de hiérarchie, d’icônes et de couleurs néon.
- Remplace les barres de répartition des coûts par un graphique en anneau avec légende, montants et pourcentages calculés à partir des données enregistrées.
- Conserve les actions et les données existantes ; le nouveau texte de l’en-tête est centralisé dans traducciones.js pour les huit langues.

- Reconstruit la grille de l’accueil en deux zones indépendantes : contenu principal et colonne latérale, afin d’éviter les grands espaces causés par la hauteur du stock.
- Réorganise les cartes selon la maquette approuvée : cinq indicateurs, graphiques et rentabilité sur une ligne, historique et raccourcis en dessous, moniteur/stock/alertes empilés à droite.
- Intègre le détourage transparent de la vraie photo de la Snapmaker U1, supprime le cadre blanc et ajoute des halos néon sans masquer l’imprimante.
- Ajoute la marque Snapmaker U1 dans l’en-tête. Les commandes et sources de données existantes sont conservées ; aucun nouveau texte à traduire.

## v3.1
- Remplace l’illustration générique par la véritable photo de la Snapmaker U1 fournie pour le projet.
- Supprime le fond blanc de la photo et l’intègre avec des halos néon cyan et violet dans l’en-tête et la barre latérale.
- Conserve les panneaux, graphiques, données et raccourcis fonctionnels ; aucun nouveau texte ni clé de traduction.

## v3.0
- Refonte de l’accueil selon le concept approuvé : imprimante 3D en visuel principal, barre latérale illustrée, indicateurs alignés et disposition en trois zones.
- Ajout d’un indicateur de rentabilité globale relié aux revenus et coûts locaux.
- Nouveaux textes centralisés dans `js/traducciones.js` et traduits dans les huit langues.
- Calculatrice, données, intégration Orca et moniteur U1 conservés.

## v2.9
- Ajoute des illustrations vectorielles d’imprimante 3D dans la barre latérale et l’en-tête du tableau de bord.
- Équilibre les indicateurs et réorganise les panneaux avec une grille à 12 colonnes et des hauteurs cohérentes.
- Améliore l’affichage sur petits écrans sans gêner les commandes.

## v2.8
- Refonte de l’accueil avec indicateurs, graphiques, travaux récents, stock de filament, raccourcis et alertes.
- Lecture des données locales sans modifier les fonctions existantes.
- Nouveaux textes centralisés et traduits dans les huit langues.

### v2.7 — Simplification de la comptabilité et refonte de l’historique
- Suppression du récapitulatif redondant des dépenses personnelles et des commandes, déjà couvert par la rentabilité avancée.
- Suppression du récapitulatif redondant par imprimante.
- Conservation du formulaire d’ajout et de l’historique complet des mouvements.
- Refonte du tableau : colonnes équilibrées, montants alignés, types identifiables et références longues dépliables.
- Aucun nouveau texte : « Voir le détail » réutilise sa traduction existante dans les huit langues.

### v2.6 — Correction des titres et textes visibles de la rentabilité avancée
- Corrige les traductions des titres contenant des icônes décoratives, qui empêchaient la correspondance exacte dans le dictionnaire.

### v2.5 — Audit et correction des traductions de la rentabilité avancée
- Complète les textes manquants du tableau de rentabilité avancée : état de la marge, sous-titres, légendes et explications.
- Centralise les nouvelles traductions dans `js/traducciones.js` pour les huit langues prises en charge.
- Évite l’ajout de clés en double au dictionnaire.

### v2.4 — Correction des montants encaissés des commandes U1
- Les commandes confirmées depuis le moniteur U1 enregistrent également le montant saisi par l’utilisateur comme paiement reçu, séparément du chiffre d’affaires estimé.
- Les montants encaissés sont récupérés depuis les commandes U1 enregistrées dans les versions précédentes, sans recréer les commandes ni modifier les mouvements existants.
- Évite de compter deux fois les paiements associés à une même commande.

### v2.3 — Cartes de conclusion sur une seule ligne
- Place les quatre cartes (imprimante la plus rentable, coût principal, meilleure marge et période analysée) sur une seule ligne sur les grands écrans.
- Conserve les conclusions de période dans une carte distincte et adapte la grille aux tablettes et mobiles.

### v2.2 — Tableau visuel de rentabilité avancée
- Transforme la rentabilité avancée en tableau de bord avec indicateurs, graphique sur six mois, répartition des coûts, jauge de marge et comparaison des imprimantes.
- Les graphiques sont calculés à partir des écritures enregistrées ; les filtres de période et d’imprimante actualisent les résultats sans dupliquer les données.
- Ajoute les conclusions de la période et améliore l’affichage adaptatif et RTL.
- Tous les nouveaux textes sont centralisés dans `js/traducciones.js` et traduits dans les huit langues.

### v2.1 — Tableau de rentabilité avancée
- Ajoute une analyse filtrable par période et imprimante des revenus estimés, coûts, bénéfices, marges et encaissements enregistrés.
- Ajoute la comparaison par imprimante et le détail des coûts à partir des données existantes, sans doublons.
- Clarifie la différence entre estimations et encaissements confirmés.

## Historique des versions

### v2.0 — Traduction complète du journal d’activité
- Les modules, messages et niveaux du journal suivent désormais la langue sélectionnée, et pas seulement les titres et boutons.
- Les détails JSON affichent des libellés traduits tout en conservant les valeurs techniques utiles au diagnostic.
- Corrige l’ancienne version affichée dans le pied de page et les détails du journal.
- Centralise les nouvelles chaînes dans `js/traducciones.js` pour les huit langues prises en charge.


### v1.9 — Détection et redémarrage de l’ancien serveur local
- Le lanceur vérifie désormais `/api/logs` en plus de `/api/version`.
- Si le port 8700 est occupé par une ancienne instance du serveur Print Cost & Profit, il redémarre uniquement ce processus du projet pour charger les nouvelles routes.
- Si une autre application utilise le port, elle n’est pas arrêtée et une erreur explicite est affichée.
- Le démarrage manuel et le post-traitement Orca utilisent la même vérification.


### v1.8 — Correction de création du journal d’activité
- Corrige l’initialisation et l’écriture UTF-8 du fichier afin qu’il soit créé au démarrage du serveur local.
- Prend en charge `localhost` et `127.0.0.1`.
- Le visualiseur affiche le chemin réel du fichier journal.


### v1.7 — Journal centralisé des activités et des erreurs
- Ajout d’un journal local persistant pour les erreurs JavaScript, les promesses rejetées non gérées, les incidents SQLite et l’activité des principaux contrôles.
- Ajout dans Options d’un visualiseur avec filtres par niveau et recherche, ainsi que l’exportation JSON et l’effacement manuel.
- Les journaux sont stockés hors du dossier d’installation, dans les données locales de l’utilisateur, avec rotation automatique et 500 entrées visibles au maximum.
- Le journal évite de collecter les valeurs des formulaires et les données sensibles. Les fichiers de journal générés ne sont jamais inclus dans les ZIP de distribution.
- Tous les nouveaux textes sont centralisés dans `js/traducciones.js` et traduits dans les huit langues.


### v1.3 — Traductions du système de licences et prise en charge des langues
- Les traductions manquantes sont ajoutées à `js/traducciones.js` pour les parcours de connexion, d’authentification et de consultation des licences en espagnol, anglais, français, allemand, italien et polonais.
- Les libellés fixes de la boîte de dialogue globale (« Avis » et « Accepter ») utilisent le système central de traduction, sans dictionnaire indépendant.
- Les textes de l’application sont intégrés et maintenus dans les huit langues disponibles : espagnol, anglais, français, allemand, italien, polonais, arabe et chinois simplifié.
- Les nouveaux textes et dialogues sont centralisés dans `js/traducciones.js` afin d’éviter les chaînes isolées dans les fichiers de l’application.
- Deux nouvelles langues sont ajoutées, l’arabe et le chinois simplifié, portant l’application à huit langues : espagnol, anglais, français, allemand, italien, polonais, arabe et chinois simplifié.
- Les problèmes de miniatures des fichiers G-code sont corrigés : extraction de la miniature disponible de plus haute résolution et conservation de l’image lors de l’envoi du travail du moniteur vers la calculatrice.
- Des erreurs mineures de fonctionnement, d’initialisation, de traduction et d’alias de couleurs sont corrigées.

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

## v5.24
- Refonte premium de l’espace clients, harmonisée avec le tableau de bord Accueil.
- Amélioration visuelle de l’en-tête, du formulaire, de la recherche, des boutons et des fiches clients.
- Les identifiants, les données et les flux existants sont conservés.

## v5.25
- Refonte visuelle premium des devis, harmonisée avec le tableau de bord Accueil.
- Amélioration de l’en-tête, des données client, de l’éditeur des articles, des conditions, de la recherche et du tableau des devis enregistrés.
- Les identifiants et la logique fonctionnelle existants sont conservés.

## v5.26
- Amélioration de la liste des devis enregistrés : hiérarchie visuelle plus claire, totaux mis en évidence et actions réparties sur plusieurs lignes.
- Contraste, survol, numérotation et affichage sur petits écrans améliorés.

## v5.27
- Refonte de la page Clients : en-tête plus visuel, recherche mise en valeur, formulaire mieux structuré et fiches clients plus élégantes, dans le style de l’accueil.
- Les champs et actions existants sont conservés ; seules les présentations visuelles changent.

## v5.28
- Refonte premium des commandes : en-tête, formulaire, recherche et tableau avec une hiérarchie plus claire et des accents turquoise/violet assortis à l’accueil.
- Les champs, identifiants, statuts et actions existants sont conservés.

## v5.29
- Refonte premium des factures : panneau de création, paramètres de numérotation et de taxes, sélection du client et archive des factures, avec une présentation cohérente avec l’accueil.
- Les identifiants, la numérotation, les données, l’impression et les actions existants sont conservés. Aucun nouveau champ ni dialogue.

## v5.30
- Correction globale du contraste des menus déroulants pour rendre les options lisibles sous Windows et Edge.

## v5.31
- Refonte visuelle premium du stock de filament : formulaire, filtres, recherche et cartes de bobines avec une hiérarchie plus claire.

## v5.32
- Deuxième amélioration visuelle du stock de filament : cartes plus larges sur trois colonnes, formulaire sur quatre colonnes et meilleure lisibilité.

## v5.34
- Stock de filament : 8 cartes par page, en 4 colonnes et 2 lignes sur ordinateur.
- Sépare le nettoyage courant de la maintenance planifiée : il apparaît désormais comme conseil informatif et ne génère aucune alerte. Migre et supprime les anciennes entrées de nettoyage des tâches et de l’historique. Corrige le message vide des notifications.

## 2.0.118
- Maillage du plateau interactif : rotation à la souris ou au toucher, zoom à la molette, réinitialisation et affichage plein écran.

## v2.0.136
- Protège l’initialisation du calculateur lorsque les sélecteurs de marque/modèle sont absents d’une vue.

## v2.0.138
- Initialise les sélecteurs de marque et de modèle après le chargement du HTML, évitant addEventListener sur null. Réduit les écritures SQLite redondantes du moniteur U1 et évite de réenregistrer une adresse IP inchangée.

## 2.0.143
- Les sauvegardes automatiques ne bloquent plus les écritures SQLite interactives ; elles utilisent une requête asynchrone séparée.
- Les listes d’imprimantes et les alias utilisent la file centrale de stockage.
- Nouvelles tentatives temporisées en cas de conflit 409.

- v2.0.147 : correction de l’affectation manuelle des bobines U1 ; le choix est enregistré immédiatement et identifié par un ID stable afin qu’une actualisation ou un réordonnancement ne l’annule pas.
