const photos = [
  {
    title: "晨雾之后",
    category: "travel",
    meta: "Travel / 2026",
    src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=82",
    alt: "山路通向远处山峰的旅行照片",
  },
  {
    title: "窗边光线",
    category: "portrait",
    meta: "Portrait / 2026",
    src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=82",
    alt: "人物站在窗边的柔光人像照片",
  },
  {
    title: "雨夜街口",
    category: "street",
    meta: "Street / Tokyo",
    src: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=82",
    alt: "夜晚霓虹灯照亮城市街道",
  },
  {
    title: "风经过山谷",
    category: "nature",
    meta: "Nature / Landscape",
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=82",
    alt: "山谷、湖泊和云层的自然风景照片",
  },
  {
    title: "午后人群",
    category: "street",
    meta: "Street / City",
    src: "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?auto=format&fit=crop&w=1400&q=82",
    alt: "城市街道人群与建筑",
  },
  {
    title: "海岸线",
    category: "travel",
    meta: "Travel / Coast",
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=82",
    alt: "蓝色海岸线和沙滩",
  },
];

const gallery = document.querySelector("#gallery");
const filterButtons = document.querySelectorAll(".filter-button");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxTitle = document.querySelector("#lightbox-title");
const lightboxMeta = document.querySelector("#lightbox-meta");
const lightboxClose = document.querySelector(".lightbox-close");

function renderGallery(filter = "all") {
  const visiblePhotos = filter === "all" ? photos : photos.filter((photo) => photo.category === filter);

  gallery.innerHTML = visiblePhotos
    .map(
      (photo, index) => `
        <button class="photo-card" type="button" data-index="${photos.indexOf(photo)}" style="animation-delay:${index * 45}ms">
          <img src="${photo.src}" alt="${photo.alt}" loading="lazy">
          <span class="photo-info">
            <strong>${photo.title}</strong>
            <p>${photo.meta}</p>
          </span>
        </button>
      `,
    )
    .join("");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderGallery(button.dataset.filter);
  });
});

gallery.addEventListener("click", (event) => {
  const card = event.target.closest(".photo-card");
  if (!card) return;

  const photo = photos[Number(card.dataset.index)];
  lightboxImage.src = photo.src;
  lightboxImage.alt = photo.alt;
  lightboxTitle.textContent = photo.title;
  lightboxMeta.textContent = photo.meta;
  lightbox.showModal();
});

lightboxClose.addEventListener("click", () => lightbox.close());

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.close();
  }
});

renderGallery();
