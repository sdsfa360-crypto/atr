/* ═══════════════════════════════════════
   FIREBASE CONFIG
═══════════════════════════════════════ */
const firebaseConfig = {
  apiKey: "AIzaSyBpOhNmKSCRfq3xGVZcCiowYekGXoKfkYw",
  authDomain: "stor-8c542.firebaseapp.com",
  databaseURL: "https://stor-8c542-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "stor-8c542",
  storageBucket: "stor-8c542.firebasestorage.app",
  messagingSenderId: "944239226350",
  appId: "1:944239226350:web:58fa32e1a4c830584f72ff",
  measurementId: "G-K8WQ0WPZL1"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// ═══════════════════════════════════════
// فحص صلاحيات Firebase عند التشغيل
// ═══════════════════════════════════════
function checkFirebaseWriteAccess() {
  db.ref("_writeTest").set(Date.now())
    .then(() => db.ref("_writeTest").remove())
    .catch(() => {
      // قواعد Firebase لا تسمح بالكتابة — أظهر تحذيراً للمسؤول
      showErrorBanner(
        "⚠️ Firebase: قواعد قاعدة البيانات لا تسمح بالكتابة — " +
        "افتح <b>Firebase Console → Realtime Database → Rules</b> " +
        "وغيّر <b>write</b> إلى <b>true</b>"
      );
    });
}

function showErrorBanner(msg) {
  let banner = document.getElementById("firebaseErrorBanner");
  if (!banner) {
    banner = document.createElement("div");
    banner.id = "firebaseErrorBanner";
    banner.style.cssText =
      "position:fixed;bottom:70px;left:50%;transform:translateX(-50%);" +
      "background:#2a0a0a;border:1px solid #c0392b;color:#e74c3c;" +
      "padding:12px 22px;border-radius:12px;font-size:13px;font-weight:600;" +
      "font-family:'Tajawal',sans-serif;z-index:9999;max-width:90vw;" +
      "text-align:center;box-shadow:0 8px 32px rgba(0,0,0,.6);direction:rtl;" +
      "display:flex;align-items:center;gap:10px;";
    document.body.appendChild(banner);
  }
  banner.innerHTML = msg +
    ' <button onclick="this.parentElement.remove()" ' +
    'style="background:none;border:1px solid #c0392b;color:#e74c3c;' +
    'border-radius:6px;padding:2px 8px;cursor:pointer;font-size:12px;">✕</button>';
}

function showErrorToast(msg) {
  const t = document.createElement("div");
  t.style.cssText =
    "position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(0);" +
    "background:#2a0a0a;border:1px solid #c0392b;color:#e74c3c;" +
    "padding:12px 22px;border-radius:50px;font-size:13px;font-weight:600;" +
    "font-family:'Tajawal',sans-serif;z-index:4000;white-space:nowrap;" +
    "box-shadow:0 6px 24px rgba(0,0,0,.5);";
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 4000);
}

// ═══════════════════════════════════════
// كلمة المرور
// ═══════════════════════════════════════
const EDIT_PASSWORD = "kbab1221";

// ═══════════════════════════════════════
// القيم الافتراضية
// ═══════════════════════════════════════
const DEFAULTS = {
  tickerText: "مرحباً بكم في موقعنا — آخر الأخبار والتحديثات تجدونها هنا",

  navLogoIcon: "🌟",
  navLogoText: "موقعي",

  heroBadge:      "✨ مرحباً بك",
  heroTitle:      "عنوان موقعك الرئيسي",
  heroSub:        "وصف قصير ومؤثر يوضح ما يقدمه موقعك للزوار",
  heroBtnPrimary: "ابدأ الآن ←",
  heroBtnGhost:   "اعرف أكثر",

  stat1Num: "500", stat1Suf: "+",     stat1Label: "عميل راضٍ",
  stat2Num: "150", stat2Suf: "+",     stat2Label: "مشروع منجز",
  stat3Num: "10",  stat3Suf: "سنوات", stat3Label: "من الخبرة",
  stat4Num: "98",  stat4Suf: "%",     stat4Label: "نسبة الرضا",

  cardsTag:   "خدماتنا",
  cardsTitle: "ماذا نقدم لك؟",
  cardsDesc:  "نقدم أفضل الخدمات بجودة عالية واحترافية تامة",

  card1Icon: "🚀", card1Title: "الخدمة الأولى",   card1Body: "وصف مختصر وواضح لهذه الخدمة وما تقدمه للعميل بشكل احترافي.", card1Link: "اعرف أكثر ←",
  card2Icon: "💎", card2Title: "الخدمة المميزة",  card2Body: "هذه هي خدمتنا المميزة التي يطلبها أغلب عملائنا بثقة عالية.",   card2Link: "اعرف أكثر ←",
  card3Icon: "⚡", card3Title: "الخدمة الثالثة",  card3Body: "وصف مختصر وواضح لهذه الخدمة وما تقدمه للعميل بشكل احترافي.", card3Link: "اعرف أكثر ←",

  announceLabel: "📢 الإعلانات",
  announceText:  "لا توجد إعلانات حالياً. سيظهر هنا أي إعلان تضيفه مباشرة.",

  socialTag:   "تواصل معنا",
  socialTitle: "نحن هنا لمساعدتك",

  whatsappName:   "واتساب",
  whatsappHandle: "0565832688",
  twitterName:    "تويتر / X",
  twitterHandle:  "@موقعي",
  instaName:      "إنستغرام",
  instaHandle:    "@موقعي",
  emailName:      "البريد الإلكتروني",
  emailHandle:    "sdsfa360@gmail.com",
  discordName:    "ديسكورد",
  discordHandle:  "mask2124",

  aboutTag:       "من نحن",
  aboutTitle:     "قصتنا وما نؤمن به",
  aboutBody:      "اكتب هنا قصة موقعك أو نبذة عنك. هذا القسم يظهر لجميع الزوار في الوقت الفعلي عبر Firebase Realtime Database.",
  aboutCardIcon:  "🏆",
  aboutCardTitle: "الجودة أولاً",
  aboutCardBody:  "نلتزم بأعلى معايير الجودة في كل ما نقدمه لعملائنا",

  footerLogoIcon: "🌟",
  footerLogoText: "موقعي",
  footerTagline:  "نسعى دائماً لتقديم الأفضل",
  footerCopy:     "© 2026 موقعي — جميع الحقوق محفوظة",

  contactBtnLabel: "mask2124",

  storeTag:   "🛒 المتجر",
  storeTitle: "منتجاتنا المتاحة",
  storeDesc:  "تصفّح منتجاتنا واطلب ما يناسبك مباشرة",

  productsTag:   "📦 المنتجات",
  productsTitle: "منتجاتنا المتاحة",
  productsDesc:  "تصفّح منتجاتنا واطلب ما يناسبك مباشرة"
};

// ═══════════════════════════════════════
// حالة التطبيق
// ═══════════════════════════════════════
let editMode          = false;
let saveTimer         = null;
let loaderHidden      = false;
let pendingProductAdd = false;
let productsData      = {};

// خريطة الـ listeners لوضع التعديل (لإزالتها بدون cloneNode)
const editListeners = new Map();

// ═══════════════════════════════════════
// تطبيق القيم الافتراضية فوراً
// ═══════════════════════════════════════
function applyDefaults() {
  Object.keys(DEFAULTS).forEach(key => {
    const el = document.getElementById(key);
    if (!el) return;
    el.textContent = DEFAULTS[key];
  });
  const t2 = document.getElementById("tickerText2");
  if (t2) t2.textContent = DEFAULTS.tickerText;
  const loaderName = document.getElementById("loaderSiteName");
  if (loaderName) loaderName.textContent = DEFAULTS.navLogoText;
}

// ═══════════════════════════════════════
// Firebase — الاستماع للمحتوى العام
// ═══════════════════════════════════════
function startListening() {
  db.ref("siteContent").on("value", snapshot => {
    applyRemoteData(snapshot.val() || {});
  });
}

function applyRemoteData(data) {
  Object.keys(DEFAULTS).forEach(key => {
    const el = document.getElementById(key);
    if (!el || document.activeElement === el) return;
    el.textContent = data[key] !== undefined ? data[key] : DEFAULTS[key];
  });

  // ticker المكرر
  const tickerText = data["tickerText"] || DEFAULTS.tickerText;
  const t1 = document.getElementById("tickerText");
  const t2 = document.getElementById("tickerText2");
  if (t1 && document.activeElement !== t1) t1.textContent = tickerText;
  if (t2) t2.textContent = tickerText;

  // قوائم ميزات الباقات
  ["pkg1Features","pkg2Features","pkg3Features"].forEach(key => {
    const el = document.getElementById(key);
    if (!el || document.activeElement === el) return;
    const raw = data[key] !== undefined ? data[key] : DEFAULTS[key];
    if (typeof raw === "string" && raw.includes("\n")) {
      el.innerHTML = raw.split("\n").filter(Boolean).map(line =>
        `<li${line.startsWith("❌") ? ' class="feat-no"' : ""}>${line}</li>`
      ).join("");
    }
  });

  // روابط أزرار الباقات
  ["pkg1Btn","pkg2Btn","pkg3Btn"].forEach((key, i) => {
    const href = data[`pkg${i+1}BtnHref`];
    const el = document.getElementById(key);
    if (href && el) el.href = href;
  });
}

// ═══════════════════════════════════════
// حفظ حقل في Firebase
// ═══════════════════════════════════════
function saveField(key, value) {
  db.ref("siteContent/" + key).set(value)
    .then(() => showToast())
    .catch(err => {
      console.error("خطأ في الحفظ:", err);
      showErrorToast("❌ فشل الحفظ — تحقق من قواعد Firebase");
      // أعِد القيمة من Firebase إذا فشل الحفظ
      db.ref("siteContent/" + key).once("value", snap => {
        const el = document.getElementById(key);
        if (el) el.textContent = snap.val() !== null ? snap.val() : (DEFAULTS[key] || "");
      });
    });
}

// ═══════════════════════════════════════
// تفعيل / تعطيل التعديل — بدون cloneNode
// ═══════════════════════════════════════
function enableEditing() {
  Object.keys(DEFAULTS).forEach(key => {
    const el = document.getElementById(key);
    if (!el) return;

    el.contentEditable = "true";
    el.style.outline      = "1px dashed rgba(240,192,64,0.3)";
    el.style.borderRadius = "4px";
    el.style.minWidth     = "20px";
    el.style.cursor       = "text";

    const inputFn = () => {
      clearTimeout(saveTimer);
      saveTimer = setTimeout(() => saveField(key, el.textContent.trim()), 600);
    };
    const blurFn = () => {
      clearTimeout(saveTimer);
      saveField(key, el.textContent.trim());
    };

    el.addEventListener("input", inputFn);
    el.addEventListener("blur",  blurFn);
    editListeners.set(key, { el, inputFn, blurFn });
  });
}

function disableEditing() {
  editListeners.forEach(({ el, inputFn, blurFn }) => {
    el.contentEditable = "false";
    el.style.outline      = "";
    el.style.borderRadius = "";
    el.style.minWidth     = "";
    el.style.cursor       = "";
    el.removeEventListener("input", inputFn);
    el.removeEventListener("blur",  blurFn);
  });
  editListeners.clear();
}

// ═══════════════════════════════════════
// كلمة المرور
// ═══════════════════════════════════════
function checkPassword() {
  const val = document.getElementById("passwordInput").value;
  if (val === EDIT_PASSWORD) {
    closeModal();
    enterEditMode();
  } else {
    document.getElementById("passwordError").style.display = "block";
    document.getElementById("passwordInput").value = "";
  }
}

function toggleEditMode() {
  editMode ? exitEditMode() : openModal();
}

function openModal() {
  document.getElementById("passwordModal").style.display = "flex";
  setTimeout(() => document.getElementById("passwordInput").focus(), 100);
}

function closeModal() {
  document.getElementById("passwordModal").style.display = "none";
  document.getElementById("passwordError").style.display = "none";
  document.getElementById("passwordInput").value = "";
}

function enterEditMode() {
  editMode = true;
  document.body.classList.add("edit-mode");
  document.getElementById("editBar").style.display = "flex";
  document.getElementById("editToggleBtn").innerHTML =
    '<span class="tl-icon">🔒</span><span class="tl-label">قفل</span>';
  document.body.style.paddingTop = "32px";
  enableEditing();
  renderProducts(); // تحديث الكروت لإظهار أزرار التعديل/الحذف

  if (pendingProductAdd) {
    pendingProductAdd = false;
    setTimeout(() => openProductModal(), 200);
  }
}

function exitEditMode() {
  editMode = false;
  document.body.classList.remove("edit-mode");
  document.getElementById("editBar").style.display = "none";
  document.getElementById("editToggleBtn").innerHTML =
    '<span class="tl-icon">⚙️</span><span class="tl-label">الإدارة</span>';
  document.body.style.paddingTop = "0";
  disableEditing();
  renderProducts(); // تحديث الكروت لإخفاء أزرار التحكم
}

// ═══════════════════════════════════════
// Toast
// ═══════════════════════════════════════
let toastTimer;
function showToast() {
  const toast = document.getElementById("saveToast");
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2500);
}

// ═══════════════════════════════════════
// Loader
// ═══════════════════════════════════════
function hideLoader() {
  if (loaderHidden) return;
  loaderHidden = true;
  const loader = document.getElementById("loader");
  loader.classList.add("hidden");
  setTimeout(() => loader.style.display = "none", 500);
}

// ═══════════════════════════════════════
// Navbar scroll effect
// ═══════════════════════════════════════
window.addEventListener("scroll", () => {
  document.getElementById("navbar")
    .classList.toggle("scrolled", window.scrollY > 60);
}, { passive: true });

// ═══════════════════════════════════════
// Mobile menu
// ═══════════════════════════════════════
function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("open");
}
function closeMenu() {
  document.getElementById("mobileMenu").classList.remove("open");
}

// ═══════════════════════════════════════
// Scroll reveal
// ═══════════════════════════════════════
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add("visible"), i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

function initReveal() {
  document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
}

// ═══════════════════════════════════════
// Animated stat counters
// ═══════════════════════════════════════
function animateCounter(el, target, duration = 1500) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start = Math.min(start + step, target);
    el.textContent = Math.round(start).toLocaleString("ar");
    if (start >= target) clearInterval(timer);
  }, 16);
}

function initStats() {
  const statsSection = document.getElementById("stats");
  if (!statsSection) return;
  const statsObserver = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      ["stat1Num","stat2Num","stat3Num","stat4Num"].forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        const target = parseInt(el.dataset.target || el.textContent) || 0;
        animateCounter(el, target);
      });
      statsObserver.disconnect();
    }
  }, { threshold: 0.5 });
  statsObserver.observe(statsSection);
}

// ═══════════════════════════════════════
// Hero canvas particles
// ═══════════════════════════════════════
function initCanvas() {
  const canvas = document.getElementById("heroCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let particles = [];

  function resize() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  window.addEventListener("resize", resize, { passive: true });
  resize();

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x       = Math.random() * canvas.width;
      this.y       = Math.random() * canvas.height;
      this.size    = Math.random() * 1.5 + 0.5;
      this.speedX  = (Math.random() - 0.5) * 0.4;
      this.speedY  = (Math.random() - 0.5) * 0.4;
      this.opacity = Math.random() * 0.5 + 0.1;
      this.life    = 0;
      this.maxLife = Math.random() * 200 + 100;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.life++;
      if (this.life > this.maxLife) this.reset();
    }
    draw() {
      const fade = this.life < 30
        ? this.life / 30
        : this.life > this.maxLife - 30
          ? (this.maxLife - this.life) / 30
          : 1;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(240,192,64,${this.opacity * fade})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < 80; i++) particles.push(new Particle());

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
  }
  animate();
}

// ═══════════════════════════════════════
// Keyboard shortcuts
// ═══════════════════════════════════════
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closeModal();
    closeProductModal();
  }
});

document.getElementById("passwordModal")?.addEventListener("click", e => {
  if (e.target === e.currentTarget) closeModal();
});

// ═══════════════════════════════════════
// Init
// ═══════════════════════════════════════
window.addEventListener("DOMContentLoaded", () => {
  applyDefaults();
  setTimeout(hideLoader, 3000);
});

window.addEventListener("load", () => {
  startListening();
  seedDefaultProducts();
  startProductsListening();
  initReveal();
  initStats();
  initCanvas();
  checkFirebaseWriteAccess();
});

console.log("✅ Firebase متصل — الموقع جاهز للعمل");

/* ═══════════════════════════════════════
   نظام المنتجات الديناميكية
═══════════════════════════════════════ */

const DEFAULT_PRODUCTS = {
  "p0001": { icon:"🌐", name:"موقع كامل",     desc:"موقع متعدد الصفحات بتصميم احترافي، سرعة عالية، وربط نطاق مخصص.",     price:"199", currency:"ريال",  link:"https://wa.me/9660565832688" },
  "p0002": { icon:"🛒", name:"متجر كامل",      desc:"متجر إلكتروني متكامل مع بوابة دفع، إدارة منتجات، وتصميم فريد.",       price:"399", currency:"ريال",  link:"https://wa.me/9660565832688" },
  "p0003": { icon:"📋", name:"قوانين السيرفر", desc:"تصميم قوانين ديسكورد احترافية بتنسيق أنيق وألوان متناسقة.",           price:"29",  currency:"ريال",  link:"https://wa.me/9660565832688" },
  "p0004": { icon:"✨", name:"على حسب الطلب", desc:"أي طلب خاص أو فكرة لديك — تواصل معنا وسنحقق ما تريد.",               price:"99",  currency:"ريال+", link:"https://wa.me/9660565832688" }
};

function seedDefaultProducts() {
  // نستخدم علامة "seeded" في Firebase لنعرف إذا تمت التهيئة الأولى
  // هذا يمنع رجوع المنتجات المحذوفة عند تفريغ الجدول
  db.ref("_seeded").once("value", snap => {
    if (!snap.val()) {
      db.ref("products").set(DEFAULT_PRODUCTS);
      db.ref("_seeded").set(true);
    }
  });
}

function startProductsListening() {
  db.ref("products").on("value", snapshot => {
    // Firebase هو المصدر الوحيد — لا دمج محلي
    productsData = snapshot.val() || {};
    renderProducts();
  });
}

// ═══════════════════════════════════════
// رسم كروت المنتجات
// ═══════════════════════════════════════
function renderProducts() {
  const grid  = document.getElementById("productsGrid");
  const empty = document.getElementById("productsEmpty");
  if (!grid) return;

  // احذف الكروت القديمة فقط
  grid.querySelectorAll(".product-card").forEach(c => c.remove());

  const keys = Object.keys(productsData);
  if (keys.length === 0) {
    if (empty) empty.style.display = "flex";
    return;
  }
  if (empty) empty.style.display = "none";

  keys.sort().forEach(id => {
    const p    = productsData[id];
    const card = document.createElement("div");
    card.className  = "product-card";
    card.dataset.id = id;

    // تأمين المدخلات
    const safeIcon  = String(p.icon     || "📦").replace(/</g,"&lt;");
    const safeName  = String(p.name     || "منتج").replace(/</g,"&lt;");
    const safeDesc  = String(p.desc     || "").replace(/</g,"&lt;");
    const safePrice = String(p.price    || "0").replace(/</g,"&lt;");
    const safeCur   = String(p.currency || "ريال").replace(/</g,"&lt;");
    const safeLink  = encodeURI(p.link  || "https://wa.me/9660565832688");

    card.innerHTML = `
      <div class="product-card-actions">
        <button class="pca-btn edit-btn" title="تعديل">✏️</button>
        <button class="pca-btn pca-del del-btn" title="حذف">🗑️</button>
      </div>
      <div class="product-card-icon">${safeIcon}</div>
      <div class="product-card-name">${safeName}</div>
      <div class="product-card-desc">${safeDesc}</div>
      <div class="product-card-price">${safePrice} <span>${safeCur}</span></div>
      <button class="product-card-btn add-to-cart-btn">🛒 أضف للسلة</button>
    `;

    // listeners مباشرة — لا onclick في الـ HTML لتجنب مشاكل الـ scope
    card.querySelector(".edit-btn").addEventListener("click", () => editProduct(id));
    card.querySelector(".del-btn").addEventListener("click",  () => deleteProduct(id));
    card.querySelector(".add-to-cart-btn").addEventListener("click", () => addToCart(id));

    grid.appendChild(card);
  });
}

// ═══════════════════════════════════════
// زر إضافة منتج العام
// ═══════════════════════════════════════
function requestAddProduct() {
  if (editMode) {
    openProductModal();
  } else {
    pendingProductAdd = true;
    openModal();
  }
}

// ═══════════════════════════════════════
// مودال إضافة / تعديل منتج
// ═══════════════════════════════════════
function openProductModal(id) {
  document.getElementById("pEditId").value           = id || "";
  document.getElementById("pModalTitle").textContent = id ? "تعديل منتج" : "إضافة منتج";
  document.getElementById("pModalIcon").textContent  = id ? "✏️" : "📦";

  const p = (id && productsData[id]) ? productsData[id] : {};
  document.getElementById("pIcon").value     = p.icon     || "";
  document.getElementById("pName").value     = p.name     || "";
  document.getElementById("pDesc").value     = p.desc     || "";
  document.getElementById("pPrice").value    = p.price    || "";
  document.getElementById("pCurrency").value = p.currency || "ريال";
  document.getElementById("pLink").value     = p.link     || "";

  document.getElementById("productModal").style.display = "flex";
  setTimeout(() => document.getElementById("pName").focus(), 100);
}

function closeProductModal() {
  document.getElementById("productModal").style.display = "none";
}

function editProduct(id) {
  openProductModal(id);
}

function deleteProduct(id) {
  if (!confirm("هل تريد حذف هذا المنتج؟")) return;

  // تعطيل الزر مؤقتاً لمنع الضغط المزدوج
  const card = document.querySelector(`.product-card[data-id="${id}"]`);
  if (card) card.style.opacity = "0.4";

  // الحذف من Firebase أولاً — الـ listener سيحدّث الواجهة تلقائياً
  db.ref("products/" + id).remove()
    .then(() => showToast())
    .catch(err => {
      console.error("خطأ في حذف المنتج:", err);
      if (card) card.style.opacity = "1";
      showErrorToast("❌ فشل الحذف — تحقق من قواعد Firebase");
    });
}

function saveProduct() {
  const id   = document.getElementById("pEditId").value.trim()   || ("p" + Date.now());
  const icon = document.getElementById("pIcon").value.trim()     || "📦";
  const name = document.getElementById("pName").value.trim();
  const desc = document.getElementById("pDesc").value.trim()     || "";
  const price= document.getElementById("pPrice").value.trim()    || "0";
  const cur  = document.getElementById("pCurrency").value.trim() || "ريال";
  const link = document.getElementById("pLink").value.trim()     || "";

  if (!name) {
    document.getElementById("pName").focus();
    return;
  }

  const product = { icon, name, desc, price, currency: cur, link };

  // تعطيل زر الحفظ أثناء الرفع
  const saveBtn = document.querySelector("#productModal .modal-btns button:first-child");
  if (saveBtn) { saveBtn.disabled = true; saveBtn.textContent = "⏳ جاري الحفظ..."; }

  // حفظ في Firebase أولاً — الـ listener سيحدّث الواجهة تلقائياً
  db.ref("products/" + id)
    .set(product)
    .then(() => {
      closeProductModal();
      showToast();
    })
    .catch(err => {
      console.error("خطأ في حفظ المنتج:", err);
      showErrorToast("❌ فشل الحفظ — تحقق من قواعد Firebase");
    })
    .finally(() => {
      if (saveBtn) { saveBtn.disabled = false; saveBtn.textContent = "💾 حفظ المنتج"; }
    });
}

// إغلاق مودال المنتج بالنقر خارجه
document.getElementById("productModal")?.addEventListener("click", e => {
  if (e.target === e.currentTarget) closeProductModal();
});

/* ═══════════════════════════════════════
   نظام السلة 🛒
═══════════════════════════════════════ */

let cart = []; // [{ id, icon, name, price, currency, qty }]
let logoBase64 = null;
let selectedContactType = "whatsapp";

/* ── فتح / إغلاق السلة ── */
function toggleCart() {
  const drawer  = document.getElementById("cartDrawer");
  const overlay = document.getElementById("cartOverlay");
  const isOpen  = drawer.classList.contains("open");
  drawer.classList.toggle("open",  !isOpen);
  overlay.classList.toggle("open", !isOpen);
  document.body.style.overflow = isOpen ? "" : "hidden";
}

/* ── إضافة منتج للسلة ── */
function addToCart(id) {
  const p = productsData[id];
  if (!p) return;

  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({
      id,
      icon:     p.icon     || "📦",
      name:     p.name     || "منتج",
      price:    parseFloat(p.price) || 0,
      currency: p.currency || "ريال",
      qty:      1
    });
  }

  updateCartBadge();
  renderCartItems();

  // تأثير بصري على الزر
  const btn = document.querySelector(`.product-card[data-id="${id}"] .product-card-btn`);
  if (btn) {
    btn.classList.add("added");
    btn.textContent = "✅ تمت الإضافة";
    setTimeout(() => {
      btn.classList.remove("added");
      btn.textContent = "🛒 أضف للسلة";
    }, 1500);
  }

  // فتح السلة تلقائياً
  setTimeout(toggleCart, 300);
}

/* ── تحديث الكمية ── */
function changeQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(c => c.id !== id);
  updateCartBadge();
  renderCartItems();
}

/* ── حذف من السلة ── */
function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  updateCartBadge();
  renderCartItems();
}

/* ── تحديث عداد السلة ── */
function updateCartBadge() {
  const badge = document.getElementById("cartBadge");
  const total = cart.reduce((sum, c) => sum + c.qty, 0);
  badge.textContent = total;
  badge.classList.toggle("visible", total > 0);
}

/* ── رسم عناصر السلة ── */
function renderCartItems() {
  const container = document.getElementById("cartItems");
  const empty     = document.getElementById("cartEmpty");
  const footer    = document.getElementById("cartFooter");

  // أزل الكروت القديمة
  container.querySelectorAll(".cart-item").forEach(el => el.remove());

  if (cart.length === 0) {
    empty.style.display  = "flex";
    footer.style.display = "none";
    return;
  }
  empty.style.display  = "none";
  footer.style.display = "flex";

  cart.forEach(item => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <div class="cart-item-icon">${item.icon}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${(item.price * item.qty).toLocaleString("ar")} ${item.currency}</div>
      </div>
      <div class="cart-item-qty">
        <button class="qty-btn" onclick="changeQty('${item.id}', -1)">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty('${item.id}', 1)">+</button>
      </div>
      <button class="cart-item-del" onclick="removeFromCart('${item.id}')" title="حذف">🗑️</button>
    `;
    container.appendChild(div);
  });

  // تحديث المجموع
  const total    = cart.reduce((sum, c) => sum + c.price * c.qty, 0);
  const currency = cart[0]?.currency || "ريال";
  document.getElementById("cartTotalVal").textContent = `${total.toLocaleString("ar")} ${currency}`;
}

/* ── فتح استبانة الإتمام ── */
function openCheckout() {
  if (cart.length === 0) return;

  // ملء ملخص الطلب
  const summary = document.getElementById("checkoutSummary");
  const total   = cart.reduce((sum, c) => sum + c.price * c.qty, 0);
  const currency = cart[0]?.currency || "ريال";
  summary.innerHTML = `
    <div class="cos-title">📦 ملخص طلبك</div>
    ${cart.map(c => `
      <div class="cos-item">
        <span class="cos-item-name">${c.icon} ${c.name} ×${c.qty}</span>
        <span>${(c.price * c.qty).toLocaleString("ar")} ${c.currency}</span>
      </div>
    `).join("")}
    <div class="cos-total">
      <span>المجموع الكلي</span>
      <span>${total.toLocaleString("ar")} ${currency}</span>
    </div>
  `;

  // أغلق السلة وافتح الاستبانة
  document.getElementById("cartDrawer").classList.remove("open");
  document.getElementById("cartOverlay").classList.remove("open");
  document.getElementById("checkoutModal").style.display = "flex";
}

function closeCheckout() {
  document.getElementById("checkoutModal").style.display = "none";
  document.body.style.overflow = "";
}

/* ── اختيار نوع التواصل ── */
function selectContactType(btn) {
  document.querySelectorAll(".contact-type-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  selectedContactType = btn.dataset.type;
}

/* ── اختيار لون جاهز ── */
function pickPresetColor(btn) {
  document.querySelectorAll(".color-preset-btn").forEach(b => b.classList.remove("selected"));
  btn.classList.add("selected");
  document.getElementById("coColor").value = btn.dataset.color;
}

/* ── رفع اللوقو ── */
function handleLogoUpload(input) {
  const file = input.files[0];
  if (!file) return;
  if (file.size > 2 * 1024 * 1024) {
    alert("الملف كبير جداً — الحد الأقصى 2 ميجا");
    input.value = "";
    return;
  }
  const reader = new FileReader();
  reader.onload = e => {
    logoBase64 = e.target.result;
    const area = document.getElementById("logoUploadArea");
    const img  = document.getElementById("logoPreviewImg");
    img.src = logoBase64;
    img.style.display = "block";
    area.querySelector(".logo-upload-text").textContent = "✅ تم رفع الشعار";
    area.classList.add("has-logo");
    document.getElementById("logoRemoveBtn").style.display = "inline-flex";
  };
  reader.readAsDataURL(file);
}

function removeLogo() {
  logoBase64 = null;
  document.getElementById("coLogo").value = "";
  document.getElementById("logoPreviewImg").style.display = "none";
  document.getElementById("logoUploadArea").querySelector(".logo-upload-text").textContent = "اضغط لرفع الشعار";
  document.getElementById("logoUploadArea").classList.remove("has-logo");
  document.getElementById("logoRemoveBtn").style.display = "none";
}

/* ── إرسال الطلب لـ Firebase ── */
function submitOrder() {
  const name    = document.getElementById("coName").value.trim();
  const contact = document.getElementById("coContact").value.trim();
  const city    = document.getElementById("coCity").value.trim();
  const address = document.getElementById("coAddress").value.trim();
  const color   = document.getElementById("coColor").value.trim();

  if (!name) {
    document.getElementById("coName").focus();
    document.getElementById("coName").style.borderColor = "#e74c3c";
    setTimeout(() => document.getElementById("coName").style.borderColor = "", 2000);
    return;
  }
  if (!contact) {
    document.getElementById("coContact").focus();
    document.getElementById("coContact").style.borderColor = "#e74c3c";
    setTimeout(() => document.getElementById("coContact").style.borderColor = "", 2000);
    return;
  }
  if (!city) {
    document.getElementById("coCity").focus();
    document.getElementById("coCity").style.borderColor = "#e74c3c";
    setTimeout(() => document.getElementById("coCity").style.borderColor = "", 2000);
    return;
  }

  const btn = document.getElementById("submitOrderBtn");
  btn.disabled = true;
  btn.textContent = "⏳ جاري الإرسال...";

  const orderData = {
    timestamp:   Date.now(),
    date:        new Date().toLocaleString("ar-SA"),
    customer: {
      name,
      contactType: selectedContactType,
      contact,
      city,
      address: address || "—",
      color:   color   || "—",
      logoProvided: !!logoBase64
    },
    items: cart.map(c => ({
      id:       c.id,
      name:     c.name,
      icon:     c.icon,
      price:    c.price,
      currency: c.currency,
      qty:      c.qty,
      subtotal: c.price * c.qty
    })),
    total: cart.reduce((sum, c) => sum + c.price * c.qty, 0),
    currency: cart[0]?.currency || "ريال",
    status: "جديد"
  };

  // إذا في لوقو، احفظه منفصلاً (لتجنب تجاوز حد السجل)
  if (logoBase64) {
    orderData.customer.logoProvided = true;
  }

  const orderId = "order_" + Date.now();
  const saves = [db.ref("orders/" + orderId).set(orderData)];

  // حفظ اللوقو في مسار منفصل
  if (logoBase64) {
    saves.push(db.ref("orders_logos/" + orderId).set({ logo: logoBase64 }));
  }

  Promise.all(saves)
    .then(() => {
      closeCheckout();
      // إظهار إشعار النجاح
      const toast = document.getElementById("orderToast");
      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 4000);

      // إعادة تعيين كل شيء
      cart = [];
      logoBase64 = null;
      updateCartBadge();
      renderCartItems();
      removeLogo();
      document.getElementById("coName").value    = "";
      document.getElementById("coContact").value = "";
      document.getElementById("coCity").value    = "";
      document.getElementById("coAddress").value = "";
      document.getElementById("coColor").value   = "";
      document.querySelectorAll(".color-preset-btn").forEach(b => b.classList.remove("selected"));
      document.querySelectorAll(".contact-type-btn").forEach(b => b.classList.remove("active"));
      document.querySelector('.contact-type-btn[data-type="whatsapp"]').classList.add("active");
      selectedContactType = "whatsapp";
    })
    .catch(err => {
      console.error("خطأ في إرسال الطلب:", err);
      showErrorToast("❌ فشل إرسال الطلب — تحقق من قواعد Firebase");
    })
    .finally(() => {
      btn.disabled = false;
      btn.textContent = "✅ إرسال الطلب";
    });
}

// إغلاق بضغط Escape
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeCheckout();
});
document.getElementById("checkoutModal")?.addEventListener("click", e => {
  if (e.target === e.currentTarget) closeCheckout();
});
