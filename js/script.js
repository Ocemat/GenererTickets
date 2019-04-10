var NumTicket = 0;

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

// Je parcours le tableau
for (i = 0; i < eleves.length; i++) {
    var template = $("#recupererElevesDepuisJs").html();
    var html = Mustache.render(template, eleves[i]);
    $("#listElevesContent").append(html);
}

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
    var template = $("#recupererFormateursDepuisJs").html();
    var html = Mustache.render(template, formateurs[i]);
    $("#listFormateursContent").append(html);
}

var raisons = [{

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

for (i=0 ; i < raisons.length; i++) {
    var template = $("#recupererRaisonsDepuisJs").html();
    var html = Mustache.render(template, raisons[i]);
    $("#listRaisonsContent").append(html);
}

/*// Selection d'un élève
$("select[name='listeEleves']").change( function() // lorsqu'un nouvel élève est sélectionné
{    
       alert($("select[name='listeEleves'] > option:selected").val());
});

// Selection d'une raison
$("select[name='listeRaisons']").change( function() // lorsqu'une nouvelle raison est sélectionnée
{    
       alert($("select[name='listeRaisons'] > option:selected").val());
});

// Selection d'un formateur
$("select[name='listeFormateurs']").change( function() // lorsqu'un nouveau formateur est sélectionné
{    
       alert($("select[name='listeFormateurs'] > option:selected").val());
});*/


// Générateur N°Ticket
function getUniqueTicket(){ 
    NumTicket++;
    return NumTicket;
}
 
// Affichage de l'objet dans le html
$("#genererTicket").click(function afficherObjet() {
    
    var monNumeroDeTicket = getUniqueTicket();
    var noob = $("select[name='listeEleves'] > option:selected").text();
    var reason = ($("select[name='listeRaisons'] > option:selected").text()); 
    var formateur = $("select[name='listeFormateurs'] > option:selected").text();
    var urgence = $("select[name='listeUrgence'] > option:selected").text();
    
    var objet = {
        "NumTicket" : monNumeroDeTicket,
        "Noob" : noob,
        "Reason" : reason,
        "Formateur" : formateur,
        "Urgence" : urgence
    };
    var template = "<tr><td># {{NumTicket}}</td><td>{{noob}}</td></tr>";
    var numTicket = Mustache.render(template, objet);
    $("#numTicketContent").append(numTicket);

    var template = "<tr><td>{{Noob}}</td></tr>";
    var nomNoob = Mustache.render(template, objet);
    $("#noobContent").append(nomNoob);

    var template = "<tr><td>{{Reason}}</td></tr>";
    var reason = Mustache.render(template, objet);
    $("#reasonContent").append(reason);

    var template = "<tr><td>{{Formateur}}</td></tr>";
    var boss = Mustache.render(template, objet);
    $("#bossContent").append(boss);

    var template = "<tr><td>{{Urgence}}</td></tr>";
    var urgence = Mustache.render(template, objet);
    $("#urgenceContent").append(urgence);

    var template = "<tr><td><button type=\"button\" class=\"deletebtn\">DEL</button></td></tr>";
    var action = Mustache.render(template, objet);
    //créer un listener de click
    //l'attaché à l"élément qu'on est en train de créé
    //appen au DOM principal
    $("#actionContent").append(action);
    

   
});

 // Suppression d'un ticket
 $(".deletebtn").click(function() {
     alert("lalala");
    $(this).remove();
});


/*
// Exécute un appel AJAX GET
// Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès
function ajaxGet(url, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            // Appelle la fonction callback en lui passant la réponse de la requête
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    req.send(null);
}

var ville = $("#city").val();
console.log(ville);
// Accès à la météo 
ajaxGet("https://www.prevision-meteo.ch/services/json/Lyon", function (reponse) {
    
    var meteo = JSON.parse(reponse);
    // Récupération de certains résultats
    var city = meteo.city_info.name
    var temperature = meteo.current_condition.tmp;
    var condition = meteo.current_condition.condition;
    
    // Affichage des résultats
    var conditionsElt = document.createElement("div");
    conditionsElt.textContent = "A " + city + ", il fait actuellement " + temperature +
        "°C et le temps est " + condition;
    var meteoElt = document.getElementById("meteo");
    meteoElt.appendChild(conditionsElt);     
});*/



$("#weatherBtn").click(function () {

    var wantedCity = $("#city").val();
     const url = "https://www.prevision-meteo.ch/services/json/"+wantedCity;
        
     $.ajax({
         "url": url,
         "type": "GET",
         "success": function(data, status) {
             var parsedResponse = data;
             console.log(parsedResponse);
             var current_city = parsedResponse.city_info.name;
             var current_temp = parsedResponse.current_condition.tmp+"°C";
             var current_cond = parsedResponse.current_condition.condition;
             $("#meteo").html("À " + current_city + ", il fait " + current_temp + " et " + current_cond);
         }, error:function(error) {
             console.log("Error:" + error);
         }
     });
                    
 });