function toggleNavbar() {
    const navbar = document.getElementById("navbar");
    const main = document.getElementById("main");
    const openbtn = document.querySelector(".openbtn");

    if (navbar.style.width === "250px" || navbar.style.width === "100%") {
        navbar.style.width = "0";
        main.style.marginLeft = "0";
        openbtn.classList.remove("hidden");
    } else {
        navbar.style.width = window.innerWidth <= 600 ? "100%" : "250px";
        main.style.marginLeft = window.innerWidth <= 600 ? "0" : "250px";
        openbtn.classList.add("hidden");
    }
}
