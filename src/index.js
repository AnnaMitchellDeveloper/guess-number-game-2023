const input = document.querySelector("#guess");
const button = document.querySelector("#btn");
button.addEventListener("click", play);

function play() {
	const userNumber = document.querySelector("#guess").value;
	if (userNumber < 1 || userNumber > 20) {
		Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Pick a number between 1 and 20!",
    });
	}
}
