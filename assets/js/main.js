window.onload = function () {
  
// Scroll
    
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
  
// Toggle menu
    
    let menuBtn = document.querySelector(".menu-btn");
    menuBtn.onclick = function() {
        let nav = this.parentElement.parentElement.querySelector(".nav");
        nav.classList.toggle("show")
        this.classList.toggle("close");
    }
  
  
}