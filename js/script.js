/* Author:

*/

$(function(){
	console.log("script.js start");
	$.ajax({
		url : "http://www.toshipon.com/sample/buzz/buzz/buzz/files.json", 
		//dataType : "json",
		success : function(file){
			file = JSON.parse(file);
			popBuzz(file);
		}
		});
	var i = 0;
	function popBuzz(file) {
		if (file.length === i+1){ return; }
		setTimeout(function(){
			$("#content").prepend($("<li/>").load("http://www.toshipon.com/sample/buzz/buzz/buzz/"+ file[i]));
			i++;
			if ($('#content li').length > 10){$('#content li:last').remove();}
			popBuzz(file);
		}, 2000);
	}
});





