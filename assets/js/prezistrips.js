$("prezi").each(function(i,p){
    var prezi_element = $(p);
    var prezi_id = prezi_element.attr("id");
    
    var prezi_container = $("<div></div>");
    var container_id = "prezi_" + prezi_id;
    prezi_container.attr("id", container_id);
    prezi_element.after(prezi_container);
    
    PreziPlayer.domain = "//prezi.com";
    var player = new PreziPlayer(container_id, {
	preziId: prezi_id + "&html5=0", //id of prezi, visible in the url when you load the prezi on Prezi.com 
	width: 700,
	height: 560,
	explorable: false,
	controls: true
    });
});