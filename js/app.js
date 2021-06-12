function CambiarImg() {
  if (colorImage.getAttribute("src") === "./img1.gif") {
    colorImage.setAttribute("src", "./img2.gif");
    document.getElementById("darkMode").innerHTML = "Modo Claro";
    document.getElementById("darkMode").style.backgroundColor = "#E6E6EA";
    document.getElementById("darkMode").style.color = "black";
    document.getElementById("text").style.color = "#478978";
    document.getElementById("answer").style.color = "#478978";
  } else {
    colorImage.setAttribute("src", "./img1.gif");
    document.getElementById("darkMode").innerHTML = "Modo Oscuro";
    document.getElementById("darkMode").style.backgroundColor = "#89888f";
    document.getElementById("darkMode").style.color = "white";
    document.getElementById("text").style.color = "white";
    document.getElementById("answer").style.color = "white";
  }
}
