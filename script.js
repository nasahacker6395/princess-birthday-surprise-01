// Loading Screen

window.onload = function () {

    setTimeout(() => {

        document.getElementById("loading-screen").style.display = "none";

    }, 3000);

};

// YES Button

document.getElementById("yesBtn").addEventListener("click", function () {

    alert("Yayyy!! 💖 I knew my Princess would say YES! ❤️");

});

// NO Button

const noBtn = document.getElementById("noBtn");

function moveButton() {

    const x = Math.random() * (window.innerWidth - 150);

    const y = Math.random() * (window.innerHeight - 80);

    noBtn.style.position = "absolute";

    noBtn.style.left = x + "px";

    noBtn.style.top = y + "px";

}

noBtn.addEventListener("mouseover", moveButton);

noBtn.addEventListener("click", moveButton);