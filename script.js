const rooms = [
  {
    id: 'hallway',
    name: 'Передпокій',
    icon: '🚪',
    subtitle: 'Місце, де починається день',
    bg: 'linear-gradient(135deg, #4a5568, #2d3748, #1a202c)',
    description: 'Передпокій — перше, що бачить гість. Тут зберігається верхній одяг, взуття, парасольки та ключі. Часто є дзеркало і невелика полиця.',
    facts: [
      { title: 'Типовий розмір', text: '3–6 м² у сучасних квартирах' },
      { title: 'Обов’язкові елементи', text: 'Вішалка, полиця для взуття, дзеркало' },
      { title: 'Цікаво', text: 'У будинках 1960–80-х передпокій був дуже вузьким' }
    ],
    hotspots: [
      { label: '🧥 Вішалка', tip: 'Тут висить пальто, куртки та шарфи.' },
      { label: '👟 Полиця для взуття', tip: 'Місце для кросівок, черевиків і капців.' },
      { label: '🔑 Ключниця', tip: 'Щоб ніколи не шукати ключі.' }
    ]
  },
  {
    id: 'living',
    name: 'Вітальня',
    icon: '🛋️',
    subtitle: 'Серце дому та місце відпочинку',
    bg: 'linear-gradient(135deg, #744210, #975a16, #c05621)',
    description: 'Вітальня — головна кімната. Тут збирається сім’я, дивляться телевізор, приймають гостей. Часто поєднана з кухнею або окрема.',
    facts: [
      { title: 'Меблі', text: 'Диван, столик, телевізор, стелаж' },
      { title: 'Стиль', text: 'Від класики до мінімалізму та лофту' },
      { title: 'Цікаво', text: 'У хрущовках вітальня була єдиною кімнатою' }
    ],
    hotspots: [
      { label: '📺 Телевізор', tip: 'Центр вечірнього дозвілля.' },
      { label: '🛋️ Диван', tip: 'Найулюбленіше місце в домі.' },
      { label: '📚 Полиці', tip: 'Книги, фото, сувеніри з подорожей.' }
    ]
  },
  {
    id: 'kitchen',
    name: 'Кухня',
    icon: '🍳',
    subtitle: 'Аромат дому та сімейні традиції',
    bg: 'linear-gradient(135deg, #276749, #2f855a, #48bb78)',
    description: 'Кухня — одна з найважливіших кімнат. Тут готують, снідають і спілкуються. У старих квартирах 6–9 м², у нових — просторіші.',
    facts: [
      { title: 'Техніка', text: 'Плита, холодильник, мікро downstream' },
      { title: 'Зони', text: 'Робоча, обідня, зберігання' },
      { title: 'Цікаво', text: 'У радянські часи кухня була місцем розмов' }
    ],
    hotspots: [
      { label: '☕ Кавоварка', tip: 'Ранок починається з кави.' },
      { label: '🧊 Холодильник', tip: 'Сховище продуктів.' },
      { label: '🍽️ Обідній стіл', tip: 'Місце сімейних розмов.' }
    ]
  },
  {
    id: 'bedroom',
    name: 'Спальня',
    icon: '🛏️',
    subtitle: 'Особистий простір і місце відновлення',
    bg: 'linear-gradient(135deg, #44337a, #553c9a, #6b46c1)',
    description: 'Спальня — приватна зона відпочинку. Важливо раціонально використовувати простір: шафа-купе, ліжко з ящиками, спокійні кольори.',
    facts: [
      { title: 'Основне', text: 'Ліжко, шафа, тумбочки, освітлення' },
      { title: 'Атмосфера', text: 'Спокійні кольори, м’яке світло' },
      { title: 'Цікаво', text: 'Багато хто робить тут міні-кабінет' }
    ],
    hotspots: [
      { label: '🛏️ Ліжко', tip: 'Якісний матрац — запорука сну.' },
      { label: '👗 Шафа', tip: 'Місце для одягу.' },
      { label: '💡 Нічник', tip: 'М’яке світло для читання.' }
    ]
  },
  {
    id: 'bathroom',
    name: 'Ванна кімната',
    icon: '🚿',
    subtitle: 'Зона гігієни та ранкових ритуалів',
    bg: 'linear-gradient(135deg, #2b6cb0, #3182ce, #63b3ed)',
    description: 'Ванна — місце ранкових і вечірніх процедур. У старих будинках часто суміщений санвузол, у нових — роздільний.',
    facts: [
      { title: 'Типи', text: 'Суміщений або роздільний' },
      { title: 'Обов’язкове', text: 'Умивальник, душ/ванна, унітаз' },
      { title: 'Цікаво', text: 'У хрущовках ванна була лише 2–3 м²' }
    ],
    hotspots: [
      { label: '🪞 Дзеркало', tip: 'Тут починається день.' },
      { label: '🚿 Душ', tip: 'Швидкий спосіб освіжитися.' },
      { label: '🧴 Полиці', tip: 'Шампуні, гелі, креми.' }
    ]
  },
  {
    id: 'balcony',
    name: 'Балкон / Лоджія',
    icon: '🌿',
    subtitle: 'Острівець свіжого повітря в місті',
    bg: 'linear-gradient(135deg, #2f855a, #38a169, #68d391)',
    description: 'Балкон — улюблене місце багатьох. Тут п’ють каву, вирощують квіти або просто дивляться на місто. Часто утеплюють.',
    facts: [
      { title: 'Використання', text: 'Відпочинок, рослини, зберігання' },
      { title: 'Тренд', text: 'Утеплення та скління' },
      { title: 'Цікаво', text: 'У багатьох країнах балкон — обов’язковий' }
    ],
    hotspots: [
      { label: '🪴 Рослини', tip: 'Маленький сад у місті.' },
      { label: '☕ Столик', tip: 'Кава з видом на місто.' },
      { label: '🌅 Краєвид', tip: 'Сонце, дахи, шум міста.' }
    ]
  }
];

let currentIndex = 0;

const intro = document.getElementById('intro');
const tour = document.getElementById('tour');
const startBtn = document.getElementById('start-btn');
const roomView = document.getElementById('room-view');
const roomTitle = document.getElementById('room-title');
const infoTitle = document.getElementById('info-title');
const infoText = document.getElementById('info-text');
const factsContainer = document.getElementById('facts');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const dotsContainer = document.getElementById('dots');
const menuBtn = document.getElementById('menu-btn');
const roomMenu = document.getElementById('room-menu');
const roomList = document.getElementById('room-list');
const closeMenu = document.getElementById('close-menu');

startBtn.addEventListener('click', () => {
  intro.classList.remove('active');
  tour.classList.add('active');
  renderRoom(0);
  createDots();
  createRoomList();
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) goToRoom(currentIndex - 1);
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < rooms.length - 1) goToRoom(currentIndex + 1);
});

menuBtn.addEventListener('click', () => roomMenu.classList.add('active'));
closeMenu.addEventListener('click', () => roomMenu.classList.remove('active'));
roomMenu.addEventListener('click', e => {
  if (e.target === roomMenu) roomMenu.classList.remove('active');
});

function createDots() {
  dotsContainer.innerHTML = '';
  rooms.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goToRoom(i));
    dotsContainer.appendChild(dot);
  });
}

function createRoomList() {
  roomList.innerHTML = '';
  rooms.forEach((room, i) => {
    const item = document.createElement('div');
    item.className = 'room-item' + (i === 0 ? ' active' : '');
    item.innerHTML = `<span>${room.icon}</span> ${room.name}`;
    item.addEventListener('click', () => {
      goToRoom(i);
      roomMenu.classList.remove('active');
    });
    roomList.appendChild(item);
  });
}

function goToRoom(index) {
  if (index === currentIndex) return;
  roomView.classList.add('fade-out');
  setTimeout(() => {
    currentIndex = index;
    renderRoom(index);
    roomView.classList.remove('fade-out');
    updateNav();
  }, 300);
}

function renderRoom(index) {
  const room = rooms[index];
  roomTitle.textContent = room.name;
  infoTitle.textContent = room.name;
  infoText.textContent = room.description;

  factsContainer.innerHTML = room.facts.map(f => `
    <div class="fact"><strong>${f.title}</strong>${f.text}</div>
  `).join('');

  roomView.innerHTML = `
    <div class="room-bg" style="background:${room.bg}"></div>
    <div class="room-overlay"></div>
    <div class="room-content">
      <div class="room-icon">${room.icon}</div>
      <h2>${room.name}</h2>
      <p class="subtitle">${room.subtitle}</p>
      <div class="hotspots">
        ${room.hotspots.map(h => `<div class="hotspot" data-tip="${h.tip}">${h.label}</div>`).join('')}
      </div>
    </div>
  `;

  roomView.querySelectorAll('.hotspot').forEach(hs => {
    hs.addEventListener('click', () => alert(hs.dataset.tip));
  });

  updateNav();
}

function updateNav() {
  prevBtn.style.opacity = currentIndex === 0 ? '0.4' : '1';
  nextBtn.style.opacity = currentIndex === rooms.length - 1 ? '0.4' : '1';

  document.querySelectorAll('.dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentIndex);
  });
  document.querySelectorAll('.room-item').forEach((item, i) => {
    item.classList.toggle('active', i === currentIndex);
  });
}

document.addEventListener('keydown', e => {
  if (!tour.classList.contains('active')) return;
  if (e.key === 'ArrowLeft' && currentIndex > 0) goToRoom(currentIndex - 1);
  if (e.key === 'ArrowRight' && currentIndex < rooms.length - 1) goToRoom(currentIndex + 1);
  if (e.key === 'Escape') roomMenu.classList.remove('active');
});
