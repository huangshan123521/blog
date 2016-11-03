window.onload=function  () {
	$().getClass('person').hover(function  () {
		$().getClass('person').css('background','url(img/ar2.gif) no-repeat 75px center')
		$().getTag('ul').show();
	},function  () {
		$().getClass('person').css('background','url(img/ar.gif) no-repeat 75px center')
		$().getTag('ul').hide();
		
	}
);
}