// Renderiza os ícones da biblioteca Lucide
lucide.createIcons();

// Funcionalidade do Menu Mobile
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Lista de locais a partir do briefing
const locations = [
    "Supermercado Schorr", "Supermercado Ouro Verde", "Supermercado São João",
    "Real Mix (Vila Pioneira)", "Real Mix (Av. Maripá)", "Laboratório Neolab (Centro)",
    "Laboratório Neolab (Av. Cirne Lima)", "La Casa da Barba", "Auto Escola Mais",
    "Lotérica Ponto da Sorte", "Lotérica Panorama", "Restaurante Maria Panela",
    "Academia Chamo Fit", "Restaurante Aroma", "Restaurante Panorama"
];

const locationsContainer = document.querySelector('#locais .grid');

if (locationsContainer) {
    locations.forEach(location => {
        const locationElement = `
            <div class="bg-gray-100 p-4 rounded-lg flex items-center justify-center">
                <p class="font-medium text-gray-700 text-center">${location}</p>
            </div>
        `;
        locationsContainer.innerHTML += locationElement;
    });
}
