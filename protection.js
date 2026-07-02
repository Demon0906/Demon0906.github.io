function showProtectionToast() {
  const toast = document.querySelector("#privacy-toast");
  if (!toast) return;
  toast.classList.add("is-visible");
  window.clearTimeout(showProtectionToast.timer);
  showProtectionToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 1800);
}

document.addEventListener("contextmenu", (event) => {
  if (event.target.closest(".protected-media, .project-card, .gallery-frame, .portrait-photo, .story-image, .lightbox, .profile-photo-card")) {
    event.preventDefault();
    showProtectionToast();
  }
});

document.addEventListener("dragstart", (event) => {
  if (event.target.closest(".protected-media, img")) {
    event.preventDefault();
    showProtectionToast();
  }
});

document.addEventListener("copy", (event) => {
  if (event.target.closest(".protected-media, .gallery-frame, .portrait-photo, .story-image, .lightbox")) {
    event.preventDefault();
    showProtectionToast();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "PrintScreen") showProtectionToast();
});
