// --- DATOS DEL REGALO (5 DÍAS) ---
const sorpresas = [
    { 
        dia: 1, 
        texto: "¡Hola mi amor! ❤️ Faltan 5 días para Navidad. Aquí tienes nuestra primera foto favorita del año.",
        imagen: "https://picsum.photos/id/10/400/300" // Cambia esto por una foto vuestra
    },
    { 
        dia: 2, 
        texto: "Vale por: Una cena hecha por mí (y yo lavo los platos). 🍝",
        imagen: "https://picsum.photos/id/42/400/300" // Foto de comida o de ustedes comiendo
    },
    { 
        dia: 3, 
        texto: "¿Te acuerdas de este día? Fue uno de los mejores momentos contigo.",
        imagen: "https://picsum.photos/id/88/400/300" // Foto de un viaje o cita
    },
    { 
        dia: 4, 
        texto: "Esta canción me hace pensar en ti siempre que la escucho. 🎶",
        imagen: "https://picsum.photos/id/101/400/300" // Portada de su canción o foto juntos
    },
    { 
        dia: 5, 
        texto: "¡Feliz Navidad! 🎄 Mi mejor regalo eres tú. Te amo.",
        imagen: "https://picsum.photos/id/237/400/300" // La mejor foto que tengan
    }
];

const calendarContainer = document.getElementById('calendar');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close-btn');

// Recuperar si ya abrió alguna puerta
const openedDoors = JSON.parse(localStorage.getItem('openedDoors')) || [];

sorpresas.forEach(sorpresa => {
    const door = document.createElement('div');
    door.classList.add('door');
    door.innerText = sorpresa.dia;
    
    if (openedDoors.includes(sorpresa.dia)) {
        door.classList.add('opened');
    }

    door.addEventListener('click', () => openDoor(sorpresa, door));
    calendarContainer.appendChild(door);
});

function openDoor(sorpresa, doorElement) {
    // Aquí puedes descomentar la lógica de fechas si quieres que sea estricto
    /*
    const today = new Date().getDate(); 
    if (sorpresa.dia > today) {
         alert("¡No seas impaciente amor! Espera a mañana 😘");
         return;
    }
    */

    modalTitle.innerText = `Día ${sorpresa.dia} ❤️`;
    
    // Inyectamos texto + imagen
    modalBody.innerHTML = `
        <p class="modal-mensaje">${sorpresa.texto}</p>
        <div class="modal-imagen-container">
            <img src="${sorpresa.imagen}" alt="Recuerdo del día ${sorpresa.dia}">
        </div>
    `;

    modal.style.display = "block";

    doorElement.classList.add('opened');
    if (!openedDoors.includes(sorpresa.dia)) {
        openedDoors.push(sorpresa.dia);
        localStorage.setItem('openedDoors', JSON.stringify(openedDoors));
    }
}

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (event) => {
    if (event.target == modal) modal.style.display = "none";
}
