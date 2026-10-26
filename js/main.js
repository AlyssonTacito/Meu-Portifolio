const GH = "https://github.com/AlyssonTacito/";

const projects = [
  {
    title: "Bora Society",
    img: "assets/projetos/bora.webp",
    desc: "Site de marcação de quadra society em São Paulo, com uma cena 3D interativa de um campo iluminado no topo da página.",
    tags: ["React", "Three.js", "JavaScript"],
    live: "https://bora-society.vercel.app",
    repo: "bora-society",
  },
  {
    title: "Okashi-ya Confeitaria",
    img: "assets/projetos/okashi.webp",
    desc: "Site de uma confeitaria artesanal com inspiração japonesa, com cardápio, galeria, avaliações e encomenda pelo WhatsApp.",
    tags: ["Next.js", "TypeScript", "Framer Motion"],
    live: "https://okashi-ya-confeitaria-website.vercel.app",
    repo: "Okashi-ya-Confeitaria-website",
  },
  {
    title: "Rolex Submariner",
    img: "assets/projetos/rolex.webp",
    desc: "Landing page conceitual de produto, focada em tipografia, animações de entrada e envio de e-mail pelo formulário de contato.",
    tags: ["Next.js", "TypeScript", "Framer Motion"],
    live: "https://rolex-mu-two.vercel.app",
    repo: "rolex",
  },
  {
    title: "Delicato Doces Afetivos",
    img: "assets/projetos/delicato.webp",
    desc: "Site de uma doceria de presentes e doces artesanais, com animações de rolagem e imagens otimizadas.",
    tags: ["Next.js", "TypeScript", "GSAP"],
    live: "https://delicato-doces-afetivos-presentes.vercel.app",
    repo: "Delicato-Doces-Afetivos-Presentes-",
  },
  {
    title: "Mota Distribuidora de Doces",
    img: "assets/projetos/mota.webp",
    desc: "Site institucional de uma distribuidora de doces, produtos para festas e embalagens, pensado para ser encontrado no Google.",
    tags: ["HTML", "CSS", "SEO"],
    live: "https://mota-distribuidora-doces-website.vercel.app",
    repo: "Mota-Distribuidora-Doces-website",
  },
  {
    title: "Auto Vidros Chaveiro Formosa",
    img: "assets/projetos/autovidros.webp",
    desc: "Site de um negócio local de auto vidros e chaveiro, com chamadas diretas para orçamento por WhatsApp e telefone.",
    tags: ["HTML", "CSS", "Responsivo"],
    live: "https://auto-vidros-chaveiro-website.vercel.app",
    repo: "Auto-Vidros-chaveiro-website",
  },
  {
    title: "Marcenaria Domingos",
    img: "assets/projetos/marcenaria.webp",
    desc: "Site de uma marcenaria de móveis sob medida, com apresentação dos serviços e foco em pedidos de orçamento.",
    tags: ["HTML", "CSS", "SEO"],
    live: "https://marcenaria-domingos-website.vercel.app",
    repo: "Marcenaria-Domingos-website",
  },
  {
    title: "Ark Pet Shop",
    img: "assets/projetos/arkpet.webp",
    desc: "Site de um pet shop de bairro, com serviços, avaliações do Google, tema claro e escuro e botões para WhatsApp e mapa.",
    tags: ["HTML", "CSS", "JavaScript"],
    live: null,
    repo: "Ark-Pet-Shop-website",
  },
];

const techs = [
  ["HTML5", "html5"], ["CSS3", "css3"], ["JavaScript", "javascript"], ["TypeScript", "typescript"],
  ["React", "react"], ["Next.js", "nextjs"], ["Three.js", "threejs"], ["Node.js", "nodejs"],
  ["Git", "git"], ["GitHub", "github"], ["Vercel", "vercel"],
];

const $ = (s) => document.querySelector(s);
const pad = (n) => String(n).padStart(2, "0");
const ghIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.4-.5-1.6.2-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3"/></svg>';

/* ---------- Pilha de projetos ---------- */
const stack = $("#stack");
let order = projects.map((_, i) => i);

const cards = projects.map((p, i) => {
  const el = document.createElement("article");
  el.className = "pcard";
  el.dataset.i = i;
  el.innerHTML = `<div class="pcard__bar"><i></i><i></i><i></i><b>${p.title}</b></div>
    <img src="${p.img}" alt="Captura de tela do projeto ${p.title}" loading="${i < 3 ? "eager" : "lazy"}" draggable="false">`;
  stack.append(el);
  return el;
});

function layout() {
  order.forEach((idx, pos) => {
    const el = cards[idx];
    const shown = pos < 4;
    el.classList.toggle("is-front", pos === 0);
    el.style.zIndex = projects.length - pos;
    el.style.opacity = shown ? 1 - pos * 0.18 : 0;
    el.style.pointerEvents = shown ? "auto" : "none";
    el.style.filter = pos ? `brightness(${1 - pos * 0.16})` : "none";
    el.style.transform = `translateY(${-pos * 17}%) scale(${1 - pos * 0.05})`;
  });
}

function renderInfo(animate = true) {
  const i = order[0], p = projects[i];
  $("#pNum").textContent = pad(i + 1);
  $("#pTitle").textContent = p.title;
  $("#pDesc").textContent = p.desc;
  $("#pTags").innerHTML = p.tags.map((t) => `<li>${t}</li>`).join("");
  $("#pLinks").innerHTML =
    (p.live ? `<a class="btn btn--solid" href="${p.live}" target="_blank" rel="noopener">Visitar site</a>` : "") +
    `<a class="gh" href="${GH}${p.repo}" target="_blank" rel="noopener" aria-label="Código de ${p.title} no GitHub">${ghIcon}</a>`;
  if (animate) {
    const info = $("#info");
    info.classList.remove("swap");
    void info.offsetWidth;
    info.classList.add("swap");
  }
}

function update(animate) { layout(); renderInfo(animate); }
const next = () => { order.push(order.shift()); update(true); };
const prev = () => { order.unshift(order.pop()); update(true); };
function bringToFront(idx) {
  while (order[0] !== idx) order.push(order.shift());
  update(true);
}

// Arrastar o cartão da frente ou clicar em um de trás
let drag = null;
stack.addEventListener("pointerdown", (e) => {
  const card = e.target.closest(".pcard");
  if (!card) return;
  const idx = +card.dataset.i;
  if (idx !== order[0]) { bringToFront(idx); return; }
  drag = { card, x: e.clientX, y: e.clientY, dx: 0 };
  card.classList.add("is-drag");
  card.setPointerCapture(e.pointerId);
});
stack.addEventListener("pointermove", (e) => {
  if (!drag) return;
  drag.dx = e.clientX - drag.x;
  drag.card.style.transform = `translateX(${drag.dx}px) rotate(${drag.dx / 28}deg)`;
});
const endDrag = () => {
  if (!drag) return;
  const { card, dx } = drag;
  drag = null;
  card.classList.remove("is-drag");
  if (Math.abs(dx) > 70) next(); else layout();
};
stack.addEventListener("pointerup", endDrag);
stack.addEventListener("pointercancel", endDrag);

$("#next").addEventListener("click", next);
$("#prev").addEventListener("click", prev);
document.addEventListener("keydown", (e) => {
  const r = stack.getBoundingClientRect();
  if (r.top > innerHeight || r.bottom < 0) return;
  if (e.key === "ArrowRight") next();
  if (e.key === "ArrowLeft") prev();
});

update(false);

/* ---------- Tecnologias ---------- */
const item = ([name, slug]) =>
  `<li><span class="tile"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${slug}/${slug}-original.svg" alt="" loading="lazy"></span><small>${name}</small></li>`;
$("#techTrack").innerHTML = techs.map(item).join("") + techs.map(item).join("");

/* ---------- Pasta do hero ---------- */
const folder = $("#folder");
const toggleFolder = () => {
  const open = folder.classList.toggle("is-open");
  folder.setAttribute("aria-expanded", open);
};
folder.addEventListener("click", (e) => {
  if (e.target.closest(".fcard")) return;
  toggleFolder();
});
folder.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleFolder(); }
});

/* ---------- Menu ativo e entrada ao rolar ---------- */
const links = [...document.querySelectorAll("[data-spy]")];
const sections = links.map((a) => document.querySelector(a.getAttribute("href")));
const spy = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (!en.isIntersecting) return;
    links.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === "#" + en.target.id));
  });
}, { rootMargin: "-45% 0px -50% 0px" });
sections.forEach((s) => s && spy.observe(s));

const rev = new IntersectionObserver((entries) => {
  entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); rev.unobserve(en.target); } });
}, { threshold: 0.12 });
document.querySelectorAll(".about__in > *, .sec-head, .showcase, .contact .wrap > *").forEach((el) => {
  el.classList.add("reveal");
  rev.observe(el);
});

$("#year").textContent = new Date().getFullYear();
