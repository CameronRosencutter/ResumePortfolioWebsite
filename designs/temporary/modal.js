let currentSlide = 0;

        function openModal(card) {
            const images = JSON.parse(card.dataset.images || '[]');
            currentSlide = 0;
            const modal = document.getElementById('modal');
            modal.style.display = "block";
            document.getElementById('modalTitle').innerText = card.dataset.title;
            document.getElementById('modalDescription').innerText = card.dataset.description;
            document.getElementById('modalDate').innerText = card.dataset.date;
            document.getElementById('modalTools').innerText = card.dataset.tools;
            document.getElementById('modalLocation').innerText = card.dataset.location;

            const imageElements = modal.querySelectorAll('.carousel img');
            imageElements.forEach((img, index) => {
                img.src = images[index] || '';
                img.classList.remove('active');
            });

            if (images.length > 0) {
                imageElements[currentSlide].classList.add('active');
            }
        }

        function changeSlide(n) {
            const images = document.querySelectorAll('.carousel img');
            if (images.length > 0) {
                images[currentSlide].classList.remove('active');
                currentSlide = (currentSlide + n + images.length) % images.length;
                images[currentSlide].classList.add('active');
            }
        }

        document.getElementById('modal').addEventListener('click', function(event) {
            if (event.target === this) {
                this.style.display = "none";
            }
        });