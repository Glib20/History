const locations = [
  {
    id: 1,
    name: "Лісабон (Белен), Португалія",
    type: "general",
    typeLabel: "Загальні",
    lat: 38.6936,
    lng: -9.2058,
    description: "Головна «столиця відкриттів». Пам’ятник відкриттям (Padrão dos Descobrimentos), Башта Белен, Монастир ієронімітів (поховання Васко да Гами), Морський музей. Звідси стартували експедиції да Гами."
  },
  {
    id: 2,
    name: "Севілья, Іспанія",
    type: "magellan",
    typeLabel: "Магеллан",
    lat: 37.3826,
    lng: -5.9963,
    description: "Звідси 10 серпня 1519 р. вийшла флотилія Магеллана. Генеральний архів Індій — головне сховище документів про відкриття. Кафедральний собор претендує на поховання Колумба."
  },
  {
    id: 3,
    name: "Палос-де-ла-Фронтера, Іспанія",
    type: "columbus",
    typeLabel: "Колумб",
    lat: 37.2285,
    lng: -6.8934,
    description: "Місце відправлення Колумба 3 серпня 1492 р. Монастир Ла-Рабіда, де Колумб готувався до плавання, та пам’ятники каравелам."
  },
  {
    id: 4,
    name: "Барселона, Іспанія",
    type: "columbus",
    typeLabel: "Колумб",
    lat: 41.3758,
    lng: 2.1778,
    description: "Монумент Колумбу (1888) на площі Портал-де-ла-Пау — одна з найвідоміших статуй мореплавця у світі. Можна піднятися на оглядовий майданчик."
  },
  {
    id: 5,
    name: "Генуя, Італія",
    type: "columbus",
    typeLabel: "Колумб",
    lat: 44.4056,
    lng: 8.9463,
    description: "Батьківщина Христофора Колумба. Будинок-музей Колумба та кілька пам’ятників у центрі міста."
  },
  {
    id: 6,
    name: "Санто-Домінго, Домініканська Республіка",
    type: "columbus",
    typeLabel: "Колумб",
    lat: 18.4861,
    lng: -69.9312,
    description: "Faro a Colón (Маяк Колумба) — величезний пам’ятник і музей, збудований до 500-річчя відкриття Америки. Перше постійне європейське поселення в Новому Світі."
  },
  {
    id: 7,
    name: "Мис Доброї Надії, ПАР",
    type: "gama",
    typeLabel: "Васко да Гама",
    lat: -34.3568,
    lng: 18.4739,
    description: "Обхідний Бартоломеу Діашем (1488), а потім Васко да Гамою. Ключова точка на шляху з Європи до Індії навколо Африки."
  },
  {
    id: 8,
    name: "Кожикоде (Калікут), Індія",
    type: "gama",
    typeLabel: "Васко да Гама",
    lat: 11.2588,
    lng: 75.7804,
    description: "Місце прибуття Васко да Гами 20 травня 1498 р. Тут європейці вперше висадилися в Індії морським шляхом. Збереглися пам’ятні знаки."
  },
  {
    id: 9,
    name: "Себу / Мактан, Філіппіни",
    type: "magellan",
    typeLabel: "Магеллан",
    lat: 10.3111,
    lng: 123.8917,
    description: "Хрест Магеллана та місце його загибелі у 1521 р. Меморіал і статуя вождя Лапу-Лапу, який переміг іспанців."
  },
  {
    id: 10,
    name: "Пунта-Аренас, Чилі",
    type: "magellan",
    typeLabel: "Магеллан",
    lat: -53.1638,
    lng: -70.9171,
    description: "Статуя Магеллана на головній площі. Музей Nao Victoria з репліками кораблів. Поруч — Магелланова протока, названа на його честь."
  }
];

const colors = {
  columbus: "#c53030",
  gama: "#2b6cb0",
  magellan: "#2f855a",
  general: "#744210"
};

const map = L.map("map").setView([20, 0], 2);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  maxZoom: 18
}).addTo(map);

const markers = {};

function createIcon(type) {
  return L.divIcon({
    className: "custom-marker",
    html: `<div style="
      background: ${colors[type]};
      width: 22px;
      height: 22px;
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 2px 6px rgba(0,0,0,0.4);
    "></div>`,
    iconSize: [22, 22],
    iconAnchor: [11, 11],
    popupAnchor: [0, -12]
  });
}

locations.forEach(loc => {
  const marker = L.marker([loc.lat, loc.lng], {
    icon: createIcon(loc.type)
  }).addTo(map);

  const popupContent = `
    <div class="popup-title">${loc.name}</div>
    <span class="popup-type ${loc.type}">${loc.typeLabel}</span>
    <p>${loc.description}</p>
  `;

  marker.bindPopup(popupContent);
  markers[loc.id] = marker;
});

const listContainer = document.getElementById("locations-list");

locations.forEach(loc => {
  const card = document.createElement("div");
  card.className = "location-card";
  card.dataset.id = loc.id;

  card.innerHTML = `
    <span class="type ${loc.type}">${loc.typeLabel}</span>
    <h3>${loc.name}</h3>
    <p>${loc.description.substring(0, 90)}...</p>
  `;

  card.addEventListener("click", () => {
    document.querySelectorAll(".location-card").forEach(c => c.classList.remove("active"));
    card.classList.add("active");
    map.setView([loc.lat, loc.lng], 6);
    markers[loc.id].openPopup();
  });

  listContainer.appendChild(card);
});

setTimeout(() => {
  map.invalidateSize();
}, 200);