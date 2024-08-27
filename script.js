
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}


let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}


let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

document.addEventListener("DOMContentLoaded", function () {
	var btn = document.getElementById("chatButton");
	var modal = document.getElementById("contactForm");
	var span = document.getElementsByClassName("close")[0];

	btn.onclick = function () {
		modal.style.display = "block";
	};

	span.onclick = function () {
		modal.style.display = "none";
	};

	window.onclick = function (event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	};

	// Form submission
	var form = document.getElementById("contactFormContent");
	form.onsubmit = function (event) {
		event.preventDefault();
    var name = document.getElementById("name").value;
		var email = document.getElementById("email").value;
		var message = document.getElementById("message").value;

		emailjs
      .send("service_uq8yy18", "template_kcortls", {
        name:name,
				email: email,
				message:message,
			})
			.then(
				function (response) {
					alert("Your idea has been sent!");
					modal.style.display = "none";
				},
				function (error) {
					console.error("Failed to send email:", error);
					alert("There was an error sending your idea.");
				}
			);
	};
});

