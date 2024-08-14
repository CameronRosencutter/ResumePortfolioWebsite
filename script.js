function toggleNavbar() {
    const navbar = document.getElementById("navbar");
    const main = document.getElementById("main");

    if (navbar.style.width === "250px" || navbar.style.width === "100%") {
        navbar.style.width = "0";
        main.style.marginLeft = "0";
    } else {
        navbar.style.width = window.innerWidth <= 600 ? "100%" : "250px";
        main.style.marginLeft = window.innerWidth <= 600 ? "0" : "250px";
    }
}


function openModal(cardElement) {
    const title = cardElement.getAttribute('data-title');
    const description = cardElement.getAttribute('data-description');
    const date = cardElement.getAttribute('data-date');
    const tools = cardElement.getAttribute('data-tools');
    const location = cardElement.getAttribute('data-location');
    const image = cardElement.getAttribute('data-image');

    document.getElementById('modal').style.display = "block";
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalImage').src = image;
    document.getElementById('modalDescription').innerText = description;
    document.getElementById('modalDate').innerText = date;
    document.getElementById('modalTools').innerText = tools;
    document.getElementById('modalLocation').innerText = location;
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}
