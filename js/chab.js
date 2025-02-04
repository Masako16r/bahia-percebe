const responses = {
    reservas: {
        questions: [
            "Hacer reserva",
            "Tipos habitación",
            "Política reservas"
        ],
        answers: [
            "Reserve online o llame al +34 900 000 000. Disponibilidad inmediata.",
            "Suite Presidencial, Suite Lujo, Deluxe, Estándar.",
            "Cancelación gratis 48h antes. Prepago requerido."
        ]
    },
    servicios: {
        questions: [
            "Servicios hotel",
            "Instalaciones",
            "Actividades para hacer"
        ],
        answers: [
            "Spa 5*, gimnasio, piscina, concierge 24/7.",
            "Gimnasio, spa, piscina interior/exterior, sauna.",
            "Mayordomo, check-in privado, limusina, champán."
        ]
    },
    restaurantes: {
        questions: [
            "Restaurantes",
            "Tipos cocina",
            "Horarios"
        ],
        answers: [
            "3 restaurantes gourmet.",
            "Cocina internacional, mediterránea, española.",
            "Gourmet: 19-23h, Bistró: 12-22h, Bar: 18-01h."
        ]
    },
    ubicacion: {
        questions: [
            "Dirección",
            "Transporte",
            "Cerca de..."
        ],
        answers: [
            "Centro histórico, vista al Mediterráneo.",
            "15min aeropuerto, transporte público.",
            "Museos, centros comerciales, monumentos."
        ]
    }
};

const categorySelector = document.getElementById('categorySelector');
const questionsContainer = document.getElementById('questionsContainer');
const chatBody = document.getElementById('chatBody');

categorySelector.addEventListener('click', (e) => {
    if (e.target.classList.contains('category-btn')) {
        const category = e.target.getAttribute('data-category');
        displayQuestions(category);
    }
});

questionsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('question-btn')) {
        const questionIndex = e.target.getAttribute('data-index');
        const category = e.target.getAttribute('data-category');
        displayAnswer(category, questionIndex);
    }
});

function displayQuestions(category) {
    questionsContainer.innerHTML = '';
    const categoryQuestions = responses[category].questions;
    
    categoryQuestions.forEach((question, index) => {
        const questionBtn = document.createElement('button');
        questionBtn.classList.add('question-btn');
        questionBtn.textContent = question;
        questionBtn.setAttribute('data-index', index);
        questionBtn.setAttribute('data-category', category);
        questionsContainer.appendChild(questionBtn);
    });
}

function displayAnswer(category, index) {
    const answer = responses[category].answers[index];
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', 'bot-message');
    messageDiv.textContent = answer;
    chatBody.appendChild(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}
