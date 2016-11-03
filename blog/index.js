window.onload=function  () {
	$().getClass('person').hover(function  () {
		$().getClass('person').css('background','url(img/ar2.gif) no-repeat 75px center')
		$().getTag('ul').show();
	},function  () {
		$().getClass('person').css('background','url(img/ar.gif) no-repeat 75px center')
		$().getTag('ul').hide();
		
	}
);
	var login=$().getId('login');
	login.center(400,350).resize(function(){
		login.center(400,350)
	})
$().getClass('login').click(function(){
	$().getClass('mask').show();
	login.show();
});
$().getClass('close').click(function(){
	$().getClass('mask').hide();
	login.hide();
})
}