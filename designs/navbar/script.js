function toggleNavbar() {
    const navbar = document.getElementById("navbar");
    const main = document.getElementById("main");

    if (navbar.style.width === "250px") {
        navbar.style.width = "0";
        main.style.marginLeft = "0";
    } else {
        navbar.style.width = "250px";
        main.style.marginLeft = "250px";
    }
}
