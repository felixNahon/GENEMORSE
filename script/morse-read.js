$(function() {
	"use-strict";

	$("#page-morse-read .action-back").click(function(ev) {
		ev.preventDefault();
		$("#page-morse-read").hide();
		$("#page-morse-home").show();
	});


});
