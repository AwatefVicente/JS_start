function factorialize(number){
  if (number < 0) 
    return -1;
  else if (number == 0) 
    return 1;
  else {
    return (number * factorialize(number - 1));
  }
}

// Un prompt s'affiche avec la question suivante
let number = prompt("De quel nombre veux-tu calculer la factorielle ?");
// Utilisateur rentre un nombre (par ex 4)

// Dans la console le résultat suivant est affiché
console.log("Le résultat est : " + factorialize(number));