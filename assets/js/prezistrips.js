var PS = {};

PS.kimilsung_template = '<div class="entry-kim">\
	    <div class="kim_top"></div>\
	    <div class="kim_mid">{{ KIMILSUNG_TEXT }}</div>\
	    <div class="kim_bottom"></div>\
	    <div class="entry-bottom"></div>\
	</div>';

$("prezi").each(function(i,p){
    var prezi_element = $(p);
    var prezi_id = prezi_element.attr("id");
    var kim_text = prezi_element.attr("kim");
    var kim_on = prezi_element.attr("kim_on");
    var kim_opened = false;
    
    var prezi_container = $('<div style="position:relative;z-index:100;"></div>');
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
    
    if (kim_text) {
	var kim_element = $(PS.kimilsung_template.replace("{{ KIMILSUNG_TEXT }}", kim_text));
	prezi_container.append(kim_element);
	var show_kim = function(){
	    $(".entry-kim").animate({left: '710px', opacity: 1}, 850);
	    kim_opened = true;
	}
	if (kim_on) {
	    kim_on = parseInt(kim_on, 10);
	    player.on(PreziPlayer.EVENT_CURRENT_STEP, function(e) {
		if (!kim_opened && e.value == kim_on) {
		    show_kim();
		}
	    });
	} else {
	    show_kim();
	}
	
	
    }
});