function verif()
{
	nm=document.getElementById("fname").value;
	ad=document.getElementById("address").value;
	mail=document.getElementById("email").value;
	ph=document.getElementById("phone").value;
	msg=document.getElementById("message").value;
	if(nm=="")
	{
		alert("Veiller saisir votre nom");
		return false;
	}
	if(ad=="")
	{
		alert("Veiller saisir votre adresserie");
		return false;
	}
	if(mail=="")
	{
		alert("Veiller saisir votre adresse email");
		return false;
	}
	if(ph=="")
	{
		alert("Veiller saisir votre numéro de téléphone");
		return false;
	}
	if(msg=="")
	{
		alert("Veiller saisir un message");
		return false;
	}
	if((mail:indexOF("@")==-1)||(mail.indexOF(".")<mail.indexOF("@")))
	{
		alert("Respecter le format de lemail");
		return false;
	}
}