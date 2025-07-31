fetch("http://localhost:5000/menu")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("menu-items");
    container.innerHTML = "";
    data.forEach(item => {
      const div = document.createElement("div");
      div.innerHTML = `<h3>${item.name}</h3><p>${item.description}</p><strong>₹${item.price}</strong>`;
      container.appendChild(div);
    });
  });

document.getElementById("contact-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  };

  const res = await fetch("http://localhost:5000/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  const result = await res.json();
  alert(result.message || "Submitted!");
  form.reset();
});
