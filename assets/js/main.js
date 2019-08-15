window.onload = function () {
	var timer;
	var scrolled;
	var necessaryBlock;
	document.getElementById('getStarted').onclick = function () {
		necessaryBlock = 2150;
		scrolled = window.pageYOffset;
		scrollToPurchaseBlock();
	}
	function scrollToPurchaseBlock(){
		if(scrolled < necessaryBlock){
			window.scrollTo(0,scrolled);
			scrolled = scrolled + 80; // 100 - scroll speed
			timer = setTimeout(scrollToPurchaseBlock, 10);
		}
		else{
			clearTimeout(timer);
			window.scrollTo(0,necessaryBlock);
		}
	}
}