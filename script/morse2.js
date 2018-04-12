(function() {
	"use strict";
	var morseTable = {
		a : ".-",
		b : "-...",
		c : "-.-.",
		d : "-..",
		e : ".",
		f : "..-.",
		g : "--.",
		h : "....",
		i : "..",
		j : ".---",
		k : "-.-",
		l : ".-..",
		m : "--",
		n : "-.",
		o : "---",
		p : ".--.",
		q : "--.-",
		r : ".",
		s : "...",
		t : "----",
		u : "..-",
		v : "...-",
		w : ".--",
		x : "-..-",
		y : "-.--",
		z : "--..",
		ä : ".-.-",
		ö : "---.",
		ch: "---",
		0 : "-----",
		1 : ".----",
		2 : "..---",
		3 : "...--",
		4 : "....-",
		5 : ".....",
		6 : "-....",
		7 : "--....",
		8 : "---..",
		9 : "----.",
		"." : ".-.-.-",
		"," : "--..--",
		"+" : ".-.-.",
		"-" : "-.....-",
		"=" : "-...-",
		"(" : "-.--.",
		")" : "-.---",
		"&" : ".-...",
		"@" : ".--.-.",
		"_" : "..---.-",
		";" : "-.-.-.",
		":" : "---...",
		"!" : "-.-.--",
		"?" : "..--..",
		"'" : ".----..",
		'"' : ".-..-.",
		"/" : "-..-."
};


	var morse = {
		convertirCaractere: function (lettre)
		{
			for(var key in morseTable)
			{
				if(key == lettre)
					return morseTable[key];
			}
			return "Caractere absent";

		},

		convertirChaine: function (chaine)
		{
			var resultatChiffre = "";
			for(var key in chaine)
			{
				resultatChiffre += this.convertirCaractere(chaine[key]);
			}
			return resultatChiffre;
		}
	};
	window.morse = morse;
}());

/*var morseTable = {
	a 	: ".-",
	b : "-...",
	c : "-.-.",
	d : "-..",
	e : ".",
	f : "..-.",
	g : "--.",
	h : "....",
	i : "..",
	j : ".---",
	k : "-.-",
	l : ".-..",
	m : "--",
	n : "-.",
	o : "---",
	p : ".--.",
	q : "--.-",
	r : ".",
	s : "...",
	t : "----",
	u : "..-",
	v : "...-",
	w : ".--",
	x : "-..-",
	y : "-.--",
	z : "--..",
	ä : ".-.-",
	ö : "---.",
	ch: "---",
	0 : "-----",
	1 : ".----",
	2 : "..---",
	3 : "...--",
	4 : "....-",
	5 : ".....",
	6 : "-....",
	7 : "--....",
	8 : "---..",
	9 : "----.",
	"." : ".-.-.-",
	"," : "--..--",
	"+" : ".-.-.",
	"-" : "-.....-",
	"=" : "-...-",
	"(" : "-.--.",
	")" : "-.---",
	"&" : ".-...",
	"@" : ".--.-.",
	"_" : "..---.-",
	";" : "-.-.-.",
	":" : "---...",
	"!" : "-.-.--",
	"?" : "..--..",
	"'" : ".----..",
	'"' : ".-..-.",
	"/" : "-..-."
}




function convertirCaractere(lettre)
{
	for(var key in morse)
	{
		if(key == lettre)
			return morse[key];
	}
	return "Caractere absent";

}

function convertirChaine(chaine)
{
	let resultatChiffre = "";
	for(var key in chaine)
	{
		resultatChiffre += convertirCaractere(chaine[key]);
	}
	return resultatChiffre;
}*/
