document.addEventListener("DOMContentLoaded", () => {
  const descriptions = {
    "Эспрессо": "Кофе, вода",
    "Латте": "Эспрессо, молоко, пена",
    "Американо": "Эспрессо, горячая вода",
    "Холодный Брю": "Холодная вода, молотый кофе",
    "Мокка": "Эспрессо, шоколад, молоко",
    "Флэт Уайт": "Двойной эспрессо, микропена",
    "Маккиато": "Эспрессо, капля молока",
    "Кортадо": "Эспрессо, тёплое молоко",
    "Аффогато": "Эспрессо, мороженое",
    "Айриш кофе": "Кофе, виски, сливки",
    "Турецкий кофе": "Кофе, вода, сахар",
    "Раф кофе": "Эспрессо, сливки, ваниль"
  };

  document.querySelectorAll('.card').forEach(card => {
    const name = card.querySelector("h4").innerText;
    const overlay = document.createElement("div");
    overlay.className = "card-overlay";
    overlay.innerText = descriptions[name] || "Ингредиенты неизвестны";
    card.appendChild(overlay);

    card.addEventListener("click", () => {
      overlay.classList.toggle("show");
    });
  });
});
