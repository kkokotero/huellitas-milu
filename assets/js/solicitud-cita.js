const form = document.getElementById("formulariocita");
const summary = document.querySelector(".resumen-whatsapp");
const messagePreview = document.getElementById("mensaje-whatsapp");
const sendLink = document.getElementById("enviar-whatsapp");
const clinicWhatsApp = "573000000000";

if (!form || !summary || !messagePreview || !sendLink) {
  throw new Error("Faltan elementos del formulario de solicitud de citas.");
}

const buildMessage = () => {
  const values = new FormData(form);
  const get = (name) =>
    values.get(name)?.toString().trim() || "No especificado";
  const selectedText = (id) =>
    form.querySelector(`#${id} option:checked`)?.textContent || "No especificado";
  const date = new Date(`${get("fecha")}T12:00:00`).toLocaleDateString("es-CO");

  return [
    "Hola, quiero solicitar una cita en Huellitas Milu.",
    `Tipo de atención: ${get("tipoatencion") === "urgencia" ? "Urgencia" : "Cita programada"}`,
    "",
    `Responsable: ${get("nombre")}`,
    `Correo: ${get("correo")}`,
    `Celular: ${get("celular")}`,
    "",
    `Mascota: ${get("nombremascota")} (${selectedText("tipomascota")})`,
    `Raza: ${get("raza")}`,
    `Edad: ${get("edad")}`,
    `Peso: ${get("peso")} kg`,
    `Fecha: ${date} - ${selectedText("franja")}`,
    `Motivo: ${get("motivocita")}`,
  ].join("\n");
};

const updateSendLink = () => {
  const valid = form.checkValidity();
  sendLink.setAttribute("aria-disabled", String(!valid));
  sendLink.tabIndex = valid ? 0 : -1;

  if (valid) {
    sendLink.href = `https://wa.me/${clinicWhatsApp}?text=${encodeURIComponent(buildMessage())}`;
  } else {
    sendLink.removeAttribute("href");
  }
};

form.addEventListener("input", updateSendLink);
form.addEventListener("change", updateSendLink);
sendLink.addEventListener("click", (event) => {
  if (!form.reportValidity()) {
    event.preventDefault();
    return;
  }

  messagePreview.textContent = buildMessage();
  summary.hidden = false;
});

updateSendLink();
