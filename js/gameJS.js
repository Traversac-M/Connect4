$.fn.powa4 = function(nbr_y, nbr_x, player1, player2, color_p1, color_p2) {
    var bool = true;
    var plugin = true;
    var current = null;
    var currentPlayer = player1;

// Fonction pour générer la grille de jeu

    function createGrid() {
        $("header").append("<div onclick=document.location.href='index.html' class='playerTurn'><p>" + currentPlayer + " à toi de jouer !</p></div>");
        $("div").css("background-color", color_p1);

        $("body").append("<section class='players'><p class='" + player1 + "'>" +
            player1 + "</p>VS<p class='" + player2 + "'>" + player2 + "</p></section>");

        $("body").append("<table></table>");
        for (var i = 0; i < nbr_y; i++) 
        {
            $("table").append("<tr id='" + i + "grid'></tr>");
            for (var j = 0; j < nbr_x; j++) 
            {
                var generateTd = $("<td></td>").attr("data-position", i + "-" + j);
                $("#" + i + "grid").append(generateTd);
            }
        }

        var playAgain = $("<button class='playAgain'>Play Again</button>");
        $("body").append(playAgain);

        var retour = $("<button class='retour'>Coup précédent</button>");
        $("body").append(retour);
    }
    createGrid();

// Permet de relancer une partie

    $(".playAgain").click(function() {
      $("body").load("game.html");
    }); 

// Fonction pour afficher le token sur la grille

    function putToken(that, nbr_y, nbr_x) {
        var addToken = that.data("position").split("-");
        var pos_y = addToken[0];
        var pos_x = addToken[1];

        for (var count_y = nbr_y; count_y >= 0; count_y--)
        {
            current = $("[data-position='"+ (count_y - 1) +"-"+ pos_x +"']");
            var currentClass = current.attr("class");

                if(currentClass != "active")
                {
                    if(bool){
                        var currentColor = color_p1;
                    }

                    else
                    {
                        var currentColor = color_p2;
                    }

                    var tokensize = $(".token").length;
                    if(count_y == 0)
                    {
                        alert('Cette colonne est déjà remplie !');
                        return;
                    }

                    current.addClass('active').append('<span class="token"></span>');
                    current.find('span').animate({marginTop:0}, 'slow').css("background-color", currentColor);
                    bool = !bool;
                    if(bool)
                    {
                        $("div").css("background-color", currentColor = color_p1);
                        currentPlayer = player1;
                    }

                    else
                    {
                        $("div").css("background-color", currentColor = color_p2);
                        currentPlayer = player2;
                    }

                    bool = !bool;
                    $('div').text(currentPlayer + " à toi de jouer !");
                    bool = !bool;
                return; 
                }
        }
    }   

    $("td").on("click", function() {
    if (plugin = true)
    {
        putToken($(this), nbr_y, nbr_x);
    }
});

// Fonction pour changer la couleur du j2 si color1 = color2
    
    function RandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ )
        {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    if(color_p1 == color_p2)
    {
        color_p2 = RandomColor();
    };

// Fonction pour afficher le message de victoire

    function ggwp() {
        alert(currentPlayer + " à gagné !");
    }
};


$(function() {
    $("window").powa4(7, 8, "Hasagi", "Bazinga", "darkslateblue", "darkslateblue");
});