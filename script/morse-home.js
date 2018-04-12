$(function() {


	"use strict";
	$("#page-morse-home .action-write-morse").click(function(ev) {
		ev.preventDefault();
		$("#page-morse-write").show();
		$("#page-morse-home").hide();
	});


	$("#page-morse-home .action-read-morse").click(function(ev) {
		ev.preventDefault();
		$("#page-morse-read").show();
		$("#page-morse-home").hide();
	});



	var inputclair = document.getElementById("msgclair");
	var inputmorse =document.getElementById("msgchiffre");
	var audioContext = new AudioContext();
	var gain = audioContext.createGain();
	var oscillator = audioContext.createOscillator();
	oscillator.type="square";
	oscillator.start();
	console.log(inputclair.value);
	inputclair.addEventListener("input", function(){
		inputmorse.value = morse.convertirChaine(msgclair.value);

		console.log("inputclair");
	});

	inputmorse.addEventListener("input", function(){
		console.log("input morse");
		inputclair.value =morse.convertirChaine(msgchiffre.value);

		for (var i = 0 ;  i < inputclair.value.length; i++) {
			console.log(gain);
			gain.gain.setValueAtTime((inputclair.value[i] ==".") ? 750 : 300,audioContext.currentTime);
		}
	});


	/*
	  			if(inputclair.value[] === "-"){
	  				this.oscillator.start(0);
	  			//gain.setValueAtTime(1.0,morse.morseTabble)
	  			}else if(inputclair.value === "."){
	  				$(morse.morseTabble).find(morseTable===".")
	  				//gain.setValueAtTime(1.0,morse.morseTabble)
	  			}*/


	/*	});*/


});
