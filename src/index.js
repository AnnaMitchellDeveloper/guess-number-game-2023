
const input = document.querySelector(".guess");
const button = document.querySelector(".btn");
const answer = Math.floor(Math.random()*20)+1;

input.addEventListener("keypress", function(event){
	if (event.keyCode === 13) {
		play();
	}
})

button.addEventListener("click", play);

function play() {
	const userNumber = document.querySelector(".guess").value;
	if (userNumber < 1 || userNumber > 20) {
		Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Pick a number between 1 and 20!",
    });
	}
	else if (isNaN(userNumber)) {
		Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Pick a number!",
    });
	}
	else {
		if(userNumber < answer) {
			Swal.fire("Your guess is too low");
		}
		else if(userNumber > answer) {
			Swal.fire("Your guess is too high");
		}
		else {
			Swal.fire({
        title: "You WIN!!",
        text: "Congratulations!",
        imageUrl:
          "https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        imageWidth: 600,
        imageHeight: 400,
        imageAlt: "You WIN",
      });
		}
	}
}
