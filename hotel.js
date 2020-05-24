const faders = document.querySelectorAll(".fade_in")
var tarjeta1 = document.querySelector("#tarjeta1");
var tarjeta2 = document.querySelector("#tarjeta2");
var tarjeta3 = document.querySelector("#tarjeta3");

const appearOptions = {
	threshold: 1,
	rootMargin: "0px 0px -30px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
	entries,
	appearOnScroll
){
	entries.forEach(entry => {
		if(!entry.isIntersecting) {
			return;
		}else {
			entry.target.classList.add("appear");
			appearOnScroll.unobserve(entry.target);
		}
	})
}, appearOptions);

faders.forEach(fader => {
	appearOnScroll.observe(fader);
})