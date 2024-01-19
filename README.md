# L3 Miage - TP signaux

## Configuration de votre github

Nous allons configurer votre github pour lui faire générer le site correspondant à votre projet.
Pour cela, nous nous appuierons sur les github pages et les github actions. 
A chaque fois que vous pousserez une nouvelle version de votre code sur le dépôt, il sera compilé via une github action et le résultat de la compilation sera mis en ligne sur github pages.

Rendez-vous à l'adresse de votre dépôt github, puis cliquez sur le bouton `Settings` en haut à droite.
Dans le menu à gauche, cliquez sur `Pages`, puis configurer comme suit :

* Source : `Deploy from a branch`
* Branch : `gh-pages`  /  `root`
* Puis cliquez sur `Save`

## Configuration du fichier package.json

Modifier le script associé à la commande `build`, remplacez `l3m-tp-signals-2023-2024` par le nom de votre dépôt (devrait être de la forme `l3m-tp-signals-2023-2024-GITHUBID` avec `GITHUBID` votre identifiant github).

Cette configuration est nécessaire pour que l'application puisse fonctionner une fois déployer sur votre github pages.

## Le sujet

Vous allez mettre en oeuvre des signaux dans le cadre d'une application Angular.
Il n'est pas nécessaire de connaitre Angular pour faire ce TP, cependant vous verrez un peu de syntaxe Angular, ne vous affolez pas, vous n'en avez pas besoin pour réaliser ce TP.

Vous devrez éditer un seul fichier : **`src/app/app.component.ts`**.

Dans ce fichier, vous trouverez une classe `AppComponent` qui contient des méthodes `question01`, `question02`, etc.
Ce sont ces méthodes qu'il vous faudra compléter. Chaque méthode est précédé par un commentaire qui explique ce qui est attendu.

### Important

Lorsque vous modifierez des signaux primaires dans le code, faite le en passant par la méthode `this.ds.process`.
En effet, afin de laisser le temps aux signaux de se propager, nous avons mis en place cette méthode qui temporise l'exécution des modifications. Sans cela, toutes les modifications seraient prises en compte instantanément et la valeur des signaux ne serait liée qu'aux dernières valeurs affectées aux signaux primaires.

Par exemple, si vous avez un signal primaire a qui produit des nombres, alors vous pourrez le modifier comme suit :

```typescript
this.ds.process(
    () => a.set(2) , // Une première demande de modification
    () => a.set(10), // Une deuxième demande de modification
    () => a.set(20)  // etc.
);
```
