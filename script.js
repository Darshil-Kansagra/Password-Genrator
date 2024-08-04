var btn = document.getElementsByTagName("button");
btn[0].addEventListener("click", () => {
  var digths = document.getElementById("Digths").value;
  var display = document.getElementsByTagName("span");
  var password = "";
  if (digths == "") {
    alert("Please Enter the Digths");
  } else {
    if (digths > 60) {
      alert("Password should have maximum 60 Digths");
    } else {
      for (i = 0; i < digths; i++) {
        if (Math.random() * 10 > 4) {
          password = password.concat(
            String.fromCharCode(getRandomArbitrary(65, 90))
          );
        } else if (Math.random() * 10 < 2) {
          password = password.concat(
            String.fromCharCode(getRandomArbitrary(97, 122))
          );
        } else {
          password = password.concat(parseInt(Math.random() * 9));
        }
      }
      document.getElementsByTagName("label")[1].style.display = "inline";
      display[0].innerHTML = password;
    }
  }
});
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
