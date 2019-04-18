// Initialisation de la valeur des tickets à 0
// J'ai choisi d'initialiser ma variable ici plutôt que dans ma function ainsi je pourrais l'utiliser de partout.
// Si j'initialise ma variable dans la function, elle est utilisable uniquement à l'intérieur.
var NumTicket = 0;

// Tableau des élèves
var eleves = [
    {
        "id": "1",
        "prenom": "Elodie",
        "nom": "MARTIN"
    },
    {
        "id": "2",
        "prenom": "Jérémy",
        "nom": "FACCHINO"
    },
    {
        "id": "3",
        "prenom": "Audrey",
        "nom": "SAUVAGEON"
    },
    {
        "id": "4",
        "prenom": "Alexis",
        "nom": "MONTERRAT"
    },
    {
        "id": "5",
        "prenom": "Alban",
        "nom": "BROSSARD"
    },
    {
        "id": "6",
        "prenom": "Mylène",
        "nom": "GRENERON"
    },
    {
        "id": "7",
        "prenom": "Adrien",
        "nom": "SOUBEYRAND"
    },
    {
        "id": "8",
        "prenom": "Cyril",
        "nom": "FRANCISCO"
    },
    {
        "id": "9",
        "prenom": "Mickaïl",
        "nom": "CELIKBAS"
    },
    {
        "id": "10",
        "prenom": "Raphaël",
        "nom": "VILAIN"
    },
    {
        "id": "11",
        "prenom": "Brian",
        "nom": "RAOELINA"
    }
];

// Je parcours le tableau afin de récupérer l'ensemble des noobs
for (i = 0; i < eleves.length; i++) {
    // Utilisation de la librairie Mustache
    var template = $("#recupererElevesDepuisJs").html();
    var html = Mustache.render(template, eleves[i]);
    // Affichage de la liste
    $("#listElevesContent").append(html);
}


// Tableau des formateurs
var formateurs = [
    {
        "id": "1",
        "nomF": "FX Cote",
    },
    {
        "id": "2",
        "nomF": "Vincent B.",
    },
    {
        "id": "3",
        "nomF": "Ludo",
    },
    {
        "id": "4",
        "nomF": "Samuel",
    },
    {
        "id": "5",
        "nomF": "Amine",
    }
];


// Je parcours le tableau
for (i = 0; i < formateurs.length; i++) {
    // Utilisation de la librairie Mustache
    var template = $("#recupererFormateursDepuisJs").html();
    var html = Mustache.render(template, formateurs[i]);
    // Affichage de la liste
    $("#listFormateursContent").append(html);
}


// Tableau des raisons
var raisons = [
    {
        "id": "1",
        "libelle": "Je suis bloqué sur mon code"
    },
    {
        "id": "2",
        "libelle": "J'ai une question sur le cours"
    },
    {
        "id": "3",
        "libelle": "Je suis perdu, au secours ! "
    },
    {
        "id": "4",
        "libelle": "NullPointerException"
    },
    {
        "id": "5",
        "libelle": "C'est quoi déjà le polymorphisme ? "
    },
    {
        "id": "6",
        "libelle": "Mon ordi redémarre dans le BIOS ? "
    },
    {
        "id": "7",
        "libelle": "J'ai envie d'aller aux toilettes"
    },
    {
        "id": "8",
        "libelle": "Je peux frapper mon voisin ? "
    },
    {
        "id": "9",
        "libelle": "J'ai un train"
    },
    {
        "id": "10",
        "libelle": "Autre"
    }
];

// Je parcours le tableau
for (i = 0; i < raisons.length; i++) {
    // Utilisation de la librairie Mustache
    var template = $("#recupererRaisonsDepuisJs").html();
    var html = Mustache.render(template, raisons[i]);
    // Affichage de la liste
    $("#listRaisonsContent").append(html);
}



// Générateur N°Ticket
function getUniqueTicket() {
    NumTicket++;
    return NumTicket;
}

// Affichage de l'objet dans le html
// Créer un listener de click
$("#genererTicket").on("click", function afficherObjet() {
    // Récupération des données choisies par l'utilisateur
    var monNumeroDeTicket = getUniqueTicket();
    var noob = $("select[name='listeEleves'] > option:selected").text();
    var reason = ($("select[name='listeRaisons'] > option:selected").text());
    var formateur = $("select[name='listeFormateurs'] > option:selected").text();
    var urgence = $("select[name='listeUrgence'] > option:selected").text();

    // Création de l'objet ticket
    var objet = {
        "NumTicket": monNumeroDeTicket,
        "Noob": noob,
        "Reason": reason,
        "Formateur": formateur,
        "Urgence": urgence
    };

    alert("Vous avez généré un ticket!!");
    //Rattaché l'objet qu'on est en train de créer au listener
    var objetCreate = objet;
    console.log(objetCreate);


    // Utilisation de la librairie Mustaphe et affichage du N°Ticket
    var template = "<tr><td>{{NumTicket}}</td></tr>";
    var numTicket = Mustache.render(template, objet);
    $("#numTicketContent").append(numTicket);

    // Utilisation de la librairie Mustaphe et affichage du Noob
    var template = "<tr><td>{{Noob}}</td></tr>";
    var nomNoob = Mustache.render(template, objet);
    $("#noobContent").append(nomNoob);

    // Utilisation de la librairie Mustaphe et affichage de la raison
    var template = "<tr><td>{{Reason}}</td></tr>";
    var reason = Mustache.render(template, objet);
    $("#reasonContent").append(reason);

    // Utilisation de la librairie Mustaphe et affichage du formateur
    var template = "<tr><td>{{Formateur}}</td></tr>";
    var boss = Mustache.render(template, objet);
    $("#bossContent").append(boss);

    // Utilisation de la librairie Mustaphe et affichage de l'état d'urgence 
    var template = "<tr><td>{{Urgence}}</td></tr>";
    var urgence = Mustache.render(template, objet);
    $("#urgenceContent").append(urgence);

    // Utilisation de la librairie Mustaphe et affichage du bouton DELETE
    var template = "<tr><td><button type=\"button\" class=\"deleteBtn\">DEL</button></td></tr>";
    var action = Mustache.render(template, objet);

    //On l'affiche dans le DOM
    $("#actionContent").append(action);

});

 

// Suppression d'un ticket
$("#actionContent").click(function() {
    alert("DELETE");
    var objetDelete = afficherObjet();
    $(this).remove();
});



// Appel à Ajax  pour récupérer la météo d'une ville choisie par l'utilisateur
$("#weatherBtn").click(function () {
    // Récupération de la ville rentrée par l'utilisateur
    var wantedCity = $("#city").val();
    // Récuperation des données en Json
    const url = "https://www.prevision-meteo.ch/services/json/" + wantedCity;
    $.ajax({
        "url": url,
        "type": "GET",
        "success": function (data, status) {
            var parsedResponse = data;
            console.log(parsedResponse);
            var current_city = parsedResponse.city_info.name;
            var current_temp = parsedResponse.current_condition.tmp + "°C";
            var current_cond = parsedResponse.current_condition.condition;
            $("#meteo").html("À " + current_city + ", il fait " + current_temp + " et " + current_cond);
        // Gestion des erreurs
        }, error: function (error) {
            console.log("Error:" + error);
        }
    });
});


// Appel Ajax de la date et heure du moment
function date_heure(id) {
    date = new Date;
    annee = date.getFullYear();
    moi = date.getMonth();
    mois = new Array('Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre')
    j = date.getDate();
    jour = date.getDay();
    jours = new Array('Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche')
    h = date.getHours();
    if (h < 10) {
        h = "0" + h;
    }
    m = date.getMinutes();
    if (m < 10) {
        m = "0" + m;
    }
    s = date.getSeconds();
    if (s < 10) {
        s = "0" + s;
    }
    resultat = 'Nous sommes le ' + jours[jour] + ' ' + j + ' ' + mois[moi] + ' ' + annee + ' il est ' + h + ':' + m + ':' + s;

    setTimeout('date_heure("' + id + '");', '1000');
    return resultat;
}

// Création de l'objet dateEtHeure en faisant appel à la function
var dateHeure = date_heure();
var objet = {
    "dateEtHeure": dateHeure,
}
// Affichage en utilisant la librairie Mustache
var template = "<div> {{dateEtHeure}} </div>";
var html = Mustache.render(template, objet);
console.log(html);
$("#date_heureContent").append(html);
