window.onload = function () {

  $('body').append("<div class='bigDiv'></div><div class='divRules'></div>");

  // Affichage des régles

  $(".divRules").append("<h2 class='rules'>Les régles</h2><p class='pRules'>Pour ceux qui ignorent les règles de ce jeu, elles sont simples et reprennent en partie celles du morpion. <br><br>" +
    "Il s’agit d’un jeu à deux joueurs (traditionnellement les <strong>rouges</strong> contre les <strong>jaunes</strong>)<br><br>" +
    "La surface du jeu est une grille de dimensions variables. " +
    "Tour à tour les deux joueurs placent un pion dans la colonne de leur choix, le pion coulisse alors dans la position " +
    "la plus basse possible dans la dite colonne. C’est ensuite à l’adversaire de jouer. <br><br>" +
    "Une pièce ne peut pas se poser en dehors des dimensions de la grille. " +
    "Quand un joueur aligne à la suite au moins 4 de ses pièces horizontalement, verticalement, ou en diagonal, il " +
    "remporte la partie. <br><br> " +
    "Il n’est pas possible de gagner plusieurs fois dans une même partie. " +
    "S’il n’y a plus de case de la grille disponible, <br> la partie est déclarée nulle</p>");

  // Affichage des options

  $(".bigDiv").append("<div class='setValues'><h2 class='options'>OPTIONS</h2><p class='setSize sizeText'>La taille du plateau : " +
    "</p><select><option value='0'> 5 x 5 </option>" + 
    "<option value='1'>6 x 6</option> <option value='2'> 7 x 7 </option>" +
    "<option value='3'>8 x 8</option> <option value='4'> 9 x 9 </option>" + 
    "<option value='5'>10 x 10</option> <option value='6'> 11 x 11 </option>" +
    "<option value='7'>12 x 12</option>" +
    "</select></div>");
 
  $(".bigDiv").append("<div class='setValues'><p class='setSize token2Text'>Le joueur 1 se nomme : " +
    "</p><input class='p1Name' type='text'></div>");

  $(".bigDiv").append("<div class='setValues'><p class='setSize token1Text'>Le joueur 1 jouera en : " +
    "</p><select><option value='red'> Rouge </option>" + 
    "<option value='white'> Blanc </option> <option value='blue'> Bleu </option>" +
    "<option value='yellow'> Jaune </option> <option value='black'> Noir </option>" + 
    "<option value='orange'> Orange </option> <option value='green'> Vert </option>" +
    "<option value='purple'> Violet </option> <option value='random'> Random </option>" +
    "</select></div>");

  $(".bigDiv").append("<div class='setValues'><p class='setSize token2Text'>Le joueur 2 se nomme : " +
   "</p><input class='p2Name' type='text'></div>");

  $(".bigDiv").append("<div class='setValues'><p class='setSize token2Text'>Le joueur 2 jouera en : " +
    "</p><select><option value='yellow'> Jaune </option>" + 
    "<option value='white'> Blanc </option> <option value='blue'> Bleu </option>" +
    "<option value='black'> Noir </option> <option value='orange'> Orange </option>" +
    "<option value='red'> Rouge </option>  <option value='green'> Vert </option>" +
    "<option value='purple'> Violet </option> <option value='random'> Random </option>" +
    "</select></div>");
 
  $(".bigDiv").append("<input class='setValues submitButton' type='submit' value='Pret à jouer !'> ")

  $("body").after("<p class='footer'>© Copyright @Michel !</p>")


  $('.submitButton').click(function(){
     window.location.href='game.html';
  })

};