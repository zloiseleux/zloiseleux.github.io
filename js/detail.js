afficheDetail();

function afficheDetail()
{
	/*
	Recupere les parametres dans la requete et affiche ce qu'il faut
	APPELEE DANS LA PARTIE DETAIL
	*/
	var parameters = location.search; // On récupère la partie parametre de la requete (apres le ?)
	console.log (parameters);
	var paramsTableau = parameters.split("&"); // Casse la chaine avec le caractère $ pour avoir un tableau de paramètres
	
	var nom = paramsTableau[0].split("=")[1] ; // Premiere ligne du tableau qu'on casse avec le caractère = et on prend la deuxieme partie
	var prenom = paramsTableau[1].split("=")[1] ;
	var num = paramsTableau[2].split("=")[1] ; 
	console.log ('nom ='+nom+'prenom='+prenom+'num='+num);
	
	$("#nom").text (nom); // Je récupère l'élement de mon HTML qui a comme ID "nom" et je lui remplit le texte avec mon parametre nom.
	$("#prenom").text (prenom);
	$("#num").text (num);
}