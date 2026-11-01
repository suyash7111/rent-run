// Rent & Run Self Drive Cars — editable sample fleet.
// Replace placeholder vehicles and image URLs with owner-approved fleet details.
const WHATSAPP_NUMBER = "917420037459";
const GENERAL_MESSAGE = "Hi Rent & Run Self Drive Cars, I found your website and would like to know more about your self-drive car rental services. Could you please share the details?";

const vehicles = [
  {
    id: "urban-hatch",
    name: "Urban Hatchback",
    variant: "Sample vehicle · Details to be confirmed",
    category: "CITY DRIVE",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1100&q=85",
    seats: "To confirm",
    transmission: "To confirm",
    fuel: "To confirm",
    price: "On enquiry",
    description: "A sample fleet listing for a compact city-drive option. The actual vehicle model, specifications, rental charges and availability must be confirmed by Rent & Run."
  },
  {
    id: "family-suv",
    name: "Family SUV",
    variant: "Sample vehicle · Details to be confirmed",
    category: "WEEKEND ESCAPE",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1100&q=85",
    seats: "To confirm",
    transmission: "To confirm",
    fuel: "To confirm",
    price: "On enquiry",
    description: "A sample fleet listing for customers considering a larger vehicle. The actual vehicle model, specifications, rental charges and availability must be confirmed by Rent & Run."
  },
  {
    id: "premium-sedan",
    name: "Premium Sedan",
    variant: "Sample vehicle · Details to be confirmed",
    category: "COMFORT DRIVE",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1100&q=85",
    seats: "To confirm",
    transmission: "To confirm",
    fuel: "To confirm",
    price: "On enquiry",
    description: "A sample fleet listing for a comfortable drive. The actual vehicle model, specifications, rental charges and availability must be confirmed by Rent & Run."
  }
];

const phoneLink = (message) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
const carMessage = (vehicle, action) => action === "book"
  ? `Hi Rent & Run Self Drive Cars, I would like to enquire about booking the ${vehicle.name}. Please share the availability, rental charges and booking process.`
  : `Hi Rent & Run Self Drive Cars, I am interested in the ${vehicle.name}. Could you please share the rental price, availability and booking details?`;

function renderFleet() {
  const grid = document.getElementById("carGrid");
  document.getElementById("fleetCount").textContent = String(vehicles.length).padStart(2, "0");
  grid.innerHTML = vehicles.map((car, index) => `
    <article class="car-card">
      <div class="car-image-wrap">
        <img class="car-image" src="${car.image}" alt="${car.name} sample vehicle" loading="lazy">
        <span class="car-tag">${car.category}</span>
      </div>
      <div class="car-body">
        <span class="car-kicker">0${index + 1} / SAMPLE LISTING</span>
        <h3 class="car-title">${car.name}</h3>
        <p class="car-subtitle">${car.variant}</p>
        <div class="car-specs">
          <span><b>SEATS</b>${car.seats}</span>
          <span><b>GEAR</b>${car.transmission}</span>
          <span><b>FUEL</b>${car.fuel}</span>
        </div>
        <p class="car-price"><strong>${car.price}</strong> <small>· contact for details</small></p>
        <div class="car-actions">
          <button class="car-details-btn" type="button" data-details="${car.id}">View details</button>
          <button class="car-enquire-btn" type="button" data-enquire="${car.id}">Enquire ↗</button>
        </div>
      </div>
    </article>`).join("");

  const select = document.getElementById("vehicleSelect");
  vehicles.forEach(car => {
    const option = document.createElement("option");
    option.value = car.id;
    option.textContent = car.name;
    select.appendChild(option);
  });
}

const modal = document.getElementById("carModal");
const modalContent = document.getElementById("modalContent");
function openCarModal(car) {
  modalContent.innerHTML = `
    <img class="modal-image" src="${car.image}" alt="${car.name} sample vehicle">
    <div class="modal-info">
      <span class="car-kicker">${car.category} · SAMPLE LISTING</span>
      <h2 id="modalTitle">${car.name}</h2>
      <p>${car.description}</p>
      <div class="modal-specs">
        <span><b>SEATING</b>${car.seats}</span>
        <span><b>TRANSMISSION</b>${car.transmission}</span>
        <span><b>FUEL</b>${car.fuel}</span>
        <span><b>RENTAL PRICE</b>${car.price}</span>
      </div>
      <p>All vehicle information shown here is placeholder content pending confirmation by the business.</p>
      <div class="modal-buttons">
        <a href="${phoneLink(carMessage(car, "enquire"))}" target="_blank" rel="noopener noreferrer">Enquire about this car ↗</a>
        <a href="${phoneLink(carMessage(car, "book"))}" target="_blank" rel="noopener noreferrer">Book this car ↗</a>
      </div>
    </div>`;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  document.getElementById("modalClose").focus();
}
function closeCarModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.getElementById("carGrid").addEventListener("click", event => {
  const detailsButton = event.target.closest("[data-details]");
  const enquireButton = event.target.closest("[data-enquire]");
  if (detailsButton) {
    const car = vehicles.find(item => item.id === detailsButton.dataset.details);
    if (car) openCarModal(car);
  }
  if (enquireButton) {
    const car = vehicles.find(item => item.id === enquireButton.dataset.enquire);
    if (car) window.open(phoneLink(carMessage(car, "enquire")), "_blank", "noopener,noreferrer");
  }
});

document.getElementById("modalClose").addEventListener("click", closeCarModal);
modal.addEventListener("click", event => { if (event.target.hasAttribute("data-close-modal")) closeCarModal(); });
document.addEventListener("keydown", event => { if (event.key === "Escape" && modal.classList.contains("is-open")) closeCarModal(); });

document.querySelectorAll('[data-whatsapp="general"]').forEach(link => {
  link.href = phoneLink(GENERAL_MESSAGE);
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

const pickupDate = document.getElementById("pickupDate");
const returnDate = document.getElementById("returnDate");
const today = new Date();
const localDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
pickupDate.min = localDate;
returnDate.min = localDate;
pickupDate.addEventListener("change", () => { returnDate.min = pickupDate.value || localDate; if (returnDate.value && returnDate.value < pickupDate.value) returnDate.value = ""; });

document.getElementById("bookingForm").addEventListener("submit", event => {
  event.preventDefault();
  const car = vehicles.find(item => item.id === document.getElementById("vehicleSelect").value);
  const pickup = pickupDate.value;
  const returning = returnDate.value;
  const location = document.getElementById("pickupLocation").value.trim();
  if (!car || !pickup || !returning || !location) return;
  if (returning < pickup) {
    returnDate.setCustomValidity("Return date must be on or after the pickup date.");
    returnDate.reportValidity();
    returnDate.setCustomValidity("");
    return;
  }
  const message = `Hi Rent & Run Self Drive Cars, I would like to enquire about booking ${car.name}.\n\nPickup Date: ${pickup}\nReturn Date: ${returning}\nPickup Location: ${location}\n\nPlease let me know the availability and total rental charges.`;
  window.open(phoneLink(message), "_blank", "noopener,noreferrer");
});

document.getElementById("year").textContent = new Date().getFullYear();

// Small reveal effect; content remains visible if IntersectionObserver is unavailable.
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".about-copy,.section-heading,.benefit,.booking-copy,.booking-form,.faq-grid>div,.contact-main,.contact-details").forEach(el => {
    el.classList.add("reveal");
    observer.observe(el);
  });
}
renderFleet();
