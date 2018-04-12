var webaudio_tooling_obj = function() {
	var audioContext = new AudioContext();
	var gain = audioContext.createGain();
var recorder;
	var audio_stream;
	//create a synth and connect it to the master output (your speakers)
var synth = new Tone.Synth().toMaster();
//play a middle 'C' for the duration of an 8th note




	// var oscillator = audioContext.createOscillator();
	// oscillator.type = "sine";
	// oscillator.frequency.setValueAtTime(750, audioContext.currentTime);
	// oscillator.connect(audioContext.destination);
	$("#start").on("click", function() {
		//pass in an array of events
		var part = new Tone.Part(function(time, event){
			//the events will be given to the callback with the time they occur
			synth.triggerAttackRelease(event.note, event.dur, time)
		}, [{ time : 0, note : 'C4', dur : '4n'},
			{ time : '4n + 8n', note : 'E4', dur : '8n'},
			{ time : '2n', note : 'G4', dur : '16n'},
			{ time : '2n + 8t', note : 'B4', dur : '4n'}])

		//start the part at the beginning of the Transport's timeline
		part.start(0)

		//loop the part 3 times
		part.loop = 3
		part.loopEnd = '1m'

		document.querySelector('.playToggle').addEventListener('change', function(e){
			if (e.target.checked){
				Tone.Transport.start('+0.1')
			} else {
				Tone.Transport.stop()
			}
		})

	})

	/*var effect = gain.exponentialRampToValueAtTime(0.00001, AudioContext.currentTime +0.5);*/
	// $("#stop").on("click", function() {
	// 	setTimeout(function() {
	// 		oscillator.stop();
	// 	}, 1000)
	// });
	// var frequency = 300.0;
	// oscillator.frequency.value = frequency;
	// console.log("audio is starting up ...");

	var BUFF_SIZE = 256;
	var audioInput = null,
		microphone_stream = null,
		gain_node = null,
		script_processor_node = null,
		script_processor_fft_node = null,
		analyserNode = null;


	if (!navigator.getUserMedia)
 navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia ||navigator.mozGetUserMedia || navigator.msGetUserMedia;

	if (navigator.getUserMedia){

		        navigator.getUserMedia({audio:true},
		          function(stream) {
		              start_microphone(stream);
		          },
		          function(e) {
		            alert('Error capturing audio.');
		          }
		        );

		    } else { alert("getUserMedia not supported in this browser."); }


// ---

	function show_some_data(given_typed_array, num_row_to_display, label) {
		var size_buffer = given_typed_array.length;
var index = 0;
var max_index = num_row_to_display;

 //console.log("__________ " + label);
		for (index=0; index < max_index && index < size_buffer; index += 1) {

		//console.log(given_typed_array[index]);

	}
}

function process_microphone_buffer(event) {

		var microphone_output_buffer;

		microphone_output_buffer = event.inputBuffer.getChannelData(0); // just mono - 1 channel for now

// microphone_output_buffer  <-- this buffer contains current gulp of data size BUFF_SIZE

		show_some_data(microphone_output_buffer, 5, "from getChannelData");
	}

	function start_microphone(stream) {

		gain_node = audioContext.createGain();
		gain_node.connect(audioContext.destination);

		microphone_stream = audioContext.createMediaStreamSource(stream);
		microphone_stream.connect(gain_node);

		script_processor_node = audioContext.createScriptProcessor(BUFF_SIZE, 1, 1);
		script_processor_node.onaudioprocess = process_microphone_buffer;
		microphone_stream.connect(script_processor_node);

		// --- enable volume control for output speakers

		document.getElementById("volume").addEventListener("change", function() {

			var curr_volume = this.value;
			gain_node.gain.value = curr_volume;

console.log("curr_volume ", curr_volume);
		});

// --- setup FFT

script_processor_fft_node = audioContext.createScriptProcessor(256, 1, 1);
script_processor_fft_node.connect(gain_node);

analyserNode = audioContext.createAnalyser();
analyserNode.smoothingTimeConstant = 0;
analyserNode.fftSize = 256;

microphone_stream.connect(analyserNode);

analyserNode.connect(script_processor_fft_node);

script_processor_fft_node.onaudioprocess = function() {

  // get the average for the first channel
  var array = new Uint8Array(analyserNode.frequencyBinCount);
analyserNode.getByteFrequencyData(array);

  // draw the spectrogram
if (microphone_stream.playbackState == microphone_stream.PLAYING_STATE) {

				show_some_data(array, 5, "from fft");
			}
		};
}

function starRecording() {
navigator.getUserMedia({
			audio: true
		}, function(stream) {
			audio_stream = stream;
			var input = audioContext.createMediaStreamSource(stream);
			console.log("Media stream successfully created");

			recorder = new Recorder("intput");
			console.log("Recoder initialized");

  // start recording !
			console.log("recording...");

//
			document.getElementById("#start").disable = true;
			document.getElementById("#stop").disable = false;

		}, function(e) {
			console.log("No live audio input:" + e);
		});
	}
}(); //  webaudio_tooling_obj = function()
