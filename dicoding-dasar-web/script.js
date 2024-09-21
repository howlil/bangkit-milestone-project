document.getElementById("open-modal").addEventListener("click", function () {
  document.getElementById("modal-mobile").style.display = "block";
});

document.getElementById("modal-mobile").addEventListener("click", function () {
  document.getElementById("modal-mobile").style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
  const cardList = document.getElementById("card-list");

  const cards = [
    {
      icon: "./assets/icon1.png",
      title: "Starter",
      description: "Free class access for that start learning code and design",
    },
    {
      icon: "./assets/icon2.png",
      title: "Premium",
      description:
        "Advanced material from the Starter & learn to build projects",
    },
    {
      icon: "./assets/icon3.png",
      title: "Superstar",
      description:
        "Materials for experts who have completed the premium package",
    },
    {
      icon: "./assets/icon4.png",
      title: "Bootcamp",
      description:
        "Informatics science training program withthe latest material",
    },
  ];

  cards.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.className = "card";
    cardElement.innerHTML = `
            <img src="${card.icon}" alt="Card icon" />
            <div class="card-detail">
                  <h2>${card.title}</h2>
                  <p class="desc">${card.description}</p>
                  <button>See Class</button>
            </div>
        `;
    cardList.appendChild(cardElement);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const cardList = document.getElementById("about-list");

  const items = [
    {
      icon: "./assets/Vector.svg",
      description: "Free class access for that start learning code and design",
    },
    {
      icon: "./assets/Vector.svg",
      description:
        "Advanced material from the Starter & learn to build projects",
    },
    {
      icon: "./assets/Vector.svg",
      description:
        "Materials for experts who have completed the premium package",
    },
  ];

  items.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.className = "list";
    cardElement.innerHTML = `
            <div class="icon">
                <img src="${card.icon}" alt="Card icon" />
            </div>
            <p class="desc">${card.description}</p>
        `;
    cardList.appendChild(cardElement);
  });
});

const queueElement = document.getElementById('queue');

const marqueeElement = document.createElement('marquee');

const logos = [
    './assets/Github.png',
    './assets/Medium.png',
    './assets/Reddit.png',
    './assets/Linkedin.png',
    './assets/Microsoft.png',
];

logos.forEach((logo) => {
    const imgElement = document.createElement('img');
    imgElement.src = logo;
    imgElement.alt = 'Logo';
    imgElement.style.marginRight = '1.5rem'; 
    imgElement.style.marginTop = '1.5rem'; 
    marqueeElement.appendChild(imgElement);
});
queueElement.appendChild(marqueeElement);



document.addEventListener("DOMContentLoaded", function () {
  const cardList = document.getElementById("alumni-list");
  const cards = [
    {
      icon: "./assets/1.png",
      name: "Jason Todd",
      job: "Frontend Developer",
      description: "“The mentor is cool, how to convey each material is also detailed and easy to understand..”",
    },
    {
      icon: "./assets/2.png",
      name: "Jane Doe",
      job: "Backend Developer",
      description: "“Advanced material from the Starter & learn to build projects”",
    },
    {
      icon: "./assets/3.png",
      name: "John Smith",
      job: "Full Stack Developer",
      description: "“Materials for experts who have completed the premium package”",
    },
    {
      icon: "./assets/4.png",
      name: "Alice Johnson",
      job: "Data Scientist",
      description: "“Informatics science training program with the latest material”",
    },
  ];

  cards.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.className = "alumni-card";
    cardElement.innerHTML = `
            <img src="${card.icon}" alt="Card icon" />
            <div class="alumni-detail">
                  <h2>${card.name}</h2>
                  <p class="job">${card.job}</p>
                  <p class="desc">${card.description}</p>
            </div>
        `;
    cardList.appendChild(cardElement);
  });
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});