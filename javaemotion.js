


function containsAny(str, substrings) {
    for (var i = 0; i != substrings.length; i++) {
       var substring = substrings[i];
       if (str.indexOf(substring) != - 1) {
         return substring;
       }
    }
    return null; 
}
	$("#sServer button").click(function(){
		var embed = $(this).attr("data-embed");
		console.log(embed);
		console.log(embed.substring(0,1));
        if(embed.substring(0,1) == "<"){
			$("#player #Playerholder").html(embed);
		}else{
			$("#player #Playerholder iframe").attr("src",embed);
		}
		$(".active").attr("class","");
		$(this).attr("class","active");
var iframe = document.getElementsByTagName("iframe")[0];
var qfrm = containsAny(testv, ["ok90", "vidhdr"]);
if(qfrm){
iframe.sandbox = '';
}else{
iframe.sandbox = 'allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation';
}	
	});
