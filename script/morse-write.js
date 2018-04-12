$(function() {
	"use-strict";

	$("#page-morse-write .action-back").click(function(ev) {
		ev.preventDefault();
		$("#page-morse-write").hide();
		$("#page-morse-home").show();
	});

	var morse = window.morse;
	var inputclair = document.getElementById("msgclair");
	var inputmorse =document.getElementById("msgchiffre");
	var audioContext = new AudioContext();
	var gain = audioContext.createGain();
	var oscillator = audioContext.createOscillator();

	oscillator.type="square";
	console.log(oscillator);
	oscillator.start();

	console.log(inputclair);
	inputclair.addEventListener("input", function(){
		inputmorse.value =morse.convertirChaine("msgclair".value);

		console.log(inputclair);
	});

	inputmorse.addEventListener("input", function(){
		console.log(inputmorse);
		inputclair.value =morse.convertirChaine(	"msgchiffre".value);

		for (var i = 0 ;  i < inputclair.value.length; i++) {
			// console.log(gain);
			((inputclair.value[i] ==".") ? 750 : 300,audioContext.currentTime);
		}
	});
	// $('#next').on("click",function(){
	//   $('#morse').fadeOut();
	//     $('#morse').fadeIn();
});



/*

if(inputclair.value === "-"){
this.oscillator.start(0);
//gain.setValueAtTime(1.0,morse.morseTabble)
}else if(inputclair.value === "."){
$(morse.morseTabble).find(morseTable===".")
//gain.setValueAtTime(1.0,morse.morseTabble)
}
*/
//
// });
