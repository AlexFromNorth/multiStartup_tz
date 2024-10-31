import 'bootstrap';
import './style.css';

const users = [
    { name: 'Иван', age: 30, city: 'Москва', job: 'Инженер-программист', bio: 'Любит разрабатывать веб-приложения.' },
    { name: 'Мария', age: 25, city: 'Санкт-Петербург', job: 'Дизайнер', bio: 'Стремится к созданию красивых и функциональных интерфейсов.' },
    { name: 'Алексей', age: 28, city: 'Казань', job: 'Маркетолог', bio: 'Специализируется на цифровом маркетинге.' },
    { name: 'Ольга', age: 22, city: 'Екатеринбург', job: 'Студентка', bio: 'Изучает программирование и веб-дизайн.' },
    { name: 'Иван', age: 30, city: 'Москва', job: 'Инженер-программист', bio: 'Любит разрабатывать веб-приложения.' },
    { name: 'Мария', age: 25, city: 'Санкт-Петербург', job: 'Дизайнер', bio: 'Стремится к созданию красивых и функциональных интерфейсов.' },
    { name: 'Алексей', age: 28, city: 'Казань', job: 'Маркетолог', bio: 'Специализируется на цифровом маркетинге.' },
    { name: 'Ольга', age: 22, city: 'Екатеринбург', job: 'Студентка', bio: 'Изучает программирование и веб-дизайн.' },
    { name: 'Иван', age: 30, city: 'Москва', job: 'Инженер-программист', bio: 'Любит разрабатывать веб-приложения.' },
    { name: 'Мария', age: 25, city: 'Санкт-Петербург', job: 'Дизайнер', bio: 'Стремится к созданию красивых и функциональных интерфейсов.' },
    { name: 'Алексей', age: 28, city: 'Казань', job: 'Маркетолог', bio: 'Специализируется на цифровом маркетинге.' },
    { name: 'Ольга', age: 22, city: 'Екатеринбург', job: 'Студентка', bio: 'Изучает программирование и веб-дизайн.' },
];

const userCardsContainer = document.getElementById('user-cards');

users.forEach(user => {
    const card = document.createElement('div');
    card.className = 'col-lg-3 col-md-6 mb-4';
    card.innerHTML = `
        <div class="card mt-3">
            <div class="card-body">
                <h5 class="card-title">${user.name}</h5>
                <p class="card-text">Возраст: ${user.age}<br>Город: ${user.city}<br>Работа: ${user.job}</p>
                <button class="btn btn-primary mt-1" data-bs-toggle="modal" data-bs-target="#userModal" onclick="showUserInfo('${user.name}', '${user.job}', '${user.bio}')">Подробнее</button>
            </div>
        </div>
    `;
    userCardsContainer.appendChild(card);
});

window.showUserInfo = function(name, job, bio) {
    document.getElementById('userModalLabel').innerText = name;
    document.getElementById('user-info').innerHTML = `<strong>Работа:</strong> ${job}<br><strong>Биография:</strong> ${bio}`;
};

document.getElementById('year').innerText = new Date().getFullYear();
