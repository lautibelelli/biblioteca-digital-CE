function handleFileUpload(event, seccion) {
  const file = event.target.files[0];
  if (!file) return;

  const url = URL.createObjectURL(file);
  const lista = document.getElementById(`lista-${seccion}`);

  const li = document.createElement("li");
  const id = seccion + "-" + Math.random().toString(36).substring(7);
  li.innerHTML = `
    <strong>${file.name}</strong> - <a href="${url}" download>📥 Descargar</a>
    <div class="rating" data-id="${id}">
      <span onclick="calificar(this, 1)">☆</span>
      <span onclick="calificar(this, 2)">☆</span>
      <span onclick="calificar(this, 3)">☆</span>
      <span onclick="calificar(this, 4)">☆</span>
      <span onclick="calificar(this, 5)">☆</span>
    </div>
  `;
  lista.appendChild(li);
}

function calificar(el, puntuacion) {
  const estrellas = el.parentNode.querySelectorAll("span");
  estrellas.forEach((estrella, i) => {
    estrella.textContent = i < puntuacion ? "★" : "☆";
    estrella.style.color = i < puntuacion ? "#f1c40f" : "#ccc";
  });

  const idLibro = el.parentNode.getAttribute("data-id");
  console.log(`Libro ${idLibro} calificado con ${puntuacion} estrellas`);
  localStorage.setItem(idLibro, puntuacion);
}
