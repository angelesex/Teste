function doITMarshal(el){
	console.log("start doITMarshal");
	var _p = $(el).parent();
	hideAllExcept(_p, el);
	
}
function hideAllExcept(p, el){
	console.log("hideAllExcept enter");
	if (_p.is($("body"))) return;
	if ($(p).children().length == 1)
		console.log("unique children");
		return;
	else
	{	
		console.log("many children");
		$(p).children().each(function(){
			console.log("for each child");
			var _child = $(this);
			if(_child.is(el) == false) {
				console.log("hide child");
				_child.hide();
			}
		});
		console.log("next parent");
		var _p = $(_p).parent();
		hideAllExcept(_p, el);
	}
}
