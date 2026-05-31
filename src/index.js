
import "./styles/style.css";
 import "./styles/main.scss";

console.log("Webpack працює 🚀");

document.addEventListener('DOMContentLoaded', () => {
  console.log('Webpack works!');
});
 
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.event-card');

  cards.forEach(card => {
    card.addEventListener('click', (e) => {
      // Перевіряємо, чи клікнули на кнопку, чи на саму картку
      const target = e.target.closest('.event-card');
      const testId = target.getAttribute('data-testid');
      
      console.log(`Action triggered for: ${testId}`);
      alert(`Відкриття детальної інформації для: ${testId}`);
    });
  });
});
 console.log("Привіт! Webpack працює!");


 import photo from "./assets/images/р1.svg";

const img = document.createElement("img");
img.src = photo;

document.body.appendChild(img);


img.classList.add("hero-img");

document.querySelector(".hero").appendChild(img);






// (відправка в Telegram)
const form = document.getElementById("regForm");





// const BOT_TOKEN = "YOUR_BOT_TOKEN";
// const CHAT_ID = "YOUR_CHAT_ID";


const BOT_TOKEN = "8694181997:AAEW3X1VGpiJcnEAeOVrLfKyb7ZWheeWPAA";
const CHAT_ID = "5354761147";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  const message = `
🆕 Нова заявка:
👤 Ім'я: ${name}
📧 Email: ${email}
📱 Телефон: ${phone}
  `;

  await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message,
    }),
  });

  alert("Дані відправлено!");
  form.reset();
});


const phoneInput = document.getElementById("phone");

phoneInput.addEventListener("input", (e) => {
  let value = e.target.value.replace(/\D/g, "");

  // автоматично додаємо 380 якщо користувач його не ввів
  if (!value.startsWith("380")) {
    value = "380" + value;
  }

  // обрізаємо до 12 цифр (380 + 9 цифр номера)
  value = value.slice(0, 12);

  let formatted = "+" + value.substring(0, 3);

  if (value.length > 3) formatted += " (" + value.substring(3, 5);
  if (value.length > 5) formatted += ") " + value.substring(5, 8);
  if (value.length > 8) formatted += "-" + value.substring(8, 10);
  if (value.length > 10) formatted += "-" + value.substring(10, 12);

  e.target.value = formatted;
});
const nameInput = document.getElementById("name");

nameInput.addEventListener("input", (e) => {
  e.target.value = e.target.value.replace(/[^a-zA-Zа-яА-ЯіІїЇєЄ\s]/g, "");
});


const emailInput = document.getElementById("email");

emailInput.addEventListener("input", (e) => {
  const valid = e.target.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

  if (!valid) {
    e.target.style.border = "2px solid red";
  } else {
    e.target.style.border = "2px solid green";
  }
});
