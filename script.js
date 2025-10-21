// --- SETUP ---
lucide.createIcons();

// --- MOBILE MENU ---
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// --- LOCATIONS DATA & MODAL ---
const locations = [
    { name: "Supermercado Schorr", address: "Av. Cirne Lima, 2385 - Jardim Gisela, Toledo - PR, 85905-000" },
    { name: "Supermercado Ouro Verde", address: "Av. Roberto Fachini, 903 - Vila Industrial, Toledo - PR, 85904-470" },
    { name: "Supermercado São João", address: "R. dos Pioneiros, 2315 - Jardim Panorama, Toledo - PR, 85903-330" },
    { name: "Real Mix (Vila Pioneira)", address: "R. Gen. Estilac Leal, 1944 - Vila Pioneira, Toledo - PR, 85909-210" },
    { name: "Real Mix (Av. Maripá)", address: "Av. Maripá, 5542 - Centro, Toledo - PR, 85901-000" },
    { name: "Laboratório Neolab (Centro)", address: "R. Barão do Rio Branco, 2021 - Centro, Toledo - PR, 85900-005" },
    { name: "Laboratório Neolab (Av. Cirne Lima)", address: "Av. Cirne Lima, 2691 - Jardim Gisela, Toledo - PR, 85905-000" },
    { name: "La Casa da Barba", address: "R. Alm. Barroso, 2191 - Sala 02 - Centro, Toledo - PR, 85900-020" },
    { name: "Auto Escola Mais", address: "R. Santos Dumont, 2684 - Centro, Toledo - PR, 85900-010" },
    { name: "Lotérica Ponto da Sorte", address: "R. Gen. Estilac Leal, 1780 - Vila Pioneira, Toledo - PR, 85909-210" },
    { name: "Lotérica Panorama", address: "R. dos Pioneiros, 2595 - Jardim Panorama, Toledo - PR, 85903-330" },
    { name: "Restaurante Maria Panela", address: "R. Haroldo Hamilton, 478 - Vila Industrial, Toledo - PR, 85904-230" },
    { name: "Academia Chamo Fit", address: "R. Dom Pedro II, 2038 - Centro, Toledo - PR, 85902-010" },
    { name: "Restaurante Aroma", address: "R. da Faculdade, 3333 - Jardim La Salle, Toledo - PR, 85903-510" },
    { name: "Restaurante Panorama", address: "R. dos Pioneiros, 2221 - Jardim Panorama, Toledo - PR, 85903-330" }
];

const locationsContainer = document.getElementById('locations-grid');
const modal = document.getElementById('location-modal');
const modalContent = document.getElementById('location-modal-content');
const modalLocationName = document.getElementById('modal-location-name');
const modalLocationAddress = document.getElementById('modal-location-address');
const modalGmapsLink = document.getElementById('modal-gmaps-link');
const closeModalButton = document.getElementById('close-modal-button');

function openModal(location) {
    modalLocationName.textContent = location.name;
    modalLocationAddress.textContent = location.address;
    modalGmapsLink.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`;
    modal.classList.add('active');
}

function closeModal() {
     modal.classList.remove('active');
}

if (locationsContainer && modal) {
    locations.forEach(location => {
        const locationDiv = document.createElement('div');
        locationDiv.className = 'location-item p-4 rounded-lg flex items-center justify-center';
        locationDiv.innerHTML = `<p class="font-medium text-white text-center">${location.name}</p>`;
        locationDiv.addEventListener('click', () => openModal(location));
        locationsContainer.appendChild(locationDiv);
    });

    closeModalButton.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}


// --- PLEXUS ANIMATION ---
function createPlexusAnimation(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height, points;

    function resize() {
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
        points = [];
        const pointCount = Math.floor((width * height) / 10000);
        for (let i = 0; i < pointCount; i++) {
            points.push(createPoint());
        }
    }

    function createPoint() {
        return {
            x: Math.random() * width,
            y: Math.random() * height,
            vx: Math.random() * 0.4 - 0.2,
            vy: Math.random() * 0.4 - 0.2,
            radius: Math.random() * 1.5 + 1
        };
    }

    function draw() {
        ctx.clearRect(0, 0, width, height);

        for (const point of points) {
            ctx.beginPath();
            ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(59, 130, 246, 0.5)';
            ctx.fill();

            point.x += point.vx;
            point.y += point.vy;

            if (point.x < 0 || point.x > width) point.vx *= -1;
            if (point.y < 0 || point.y > height) point.vy *= -1;
        }

        for (let i = 0; i < points.length; i++) {
            for (let j = i + 1; j < points.length; j++) {
                const dx = points[i].x - points[j].x;
                const dy = points[i].y - points[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(points[i].x, points[i].y);
                    ctx.lineTo(points[j].x, points[j].y);
                    ctx.strokeStyle = `rgba(59, 130, 246, ${1 - dist / 120})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(draw);
    }

    window.addEventListener('resize', resize);
    resize();
    draw();
}

createPlexusAnimation('plexus-canvas');
createPlexusAnimation('plexus-canvas-footer');

// --- SWIPER CAROUSEL ---
const swiper = new Swiper('.media-carousel', {
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

