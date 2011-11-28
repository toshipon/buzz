/* Author:

*/

$(function(){
	console.log("script.js start");
	$.getJSON("./buzz/files.json", function(file){
		console.log(file);
	});
});





