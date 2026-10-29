const recipes = [
  {
    id: "avena-fruta",
    name: "Avena cremosa con fruta",
    category: "Desayunos",
    time: "10 min",
    cost: "Económica",
    desc: "Una opción sencilla para empezar el día con avena y fruta fresca.",
    image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=900&q=85",
    ingredients: ["½ taza de avena", "1 taza de leche o bebida de tu preferencia", "½ banano o fruta disponible", "Canela al gusto (opcional)"],
    steps: [
      "Calienta la leche o bebida en una olla pequeña.",
      "Agrega la avena y cocina a fuego bajo, mezclando durante unos minutos.",
      "Sirve y añade la fruta picada y la canela si deseas."
    ]
  },
  {
    id: "arroz-lentejas",
    name: "Bowl de arroz y lentejas",
    category: "Almuerzos",
    time: "25 min*",
    cost: "Económica",
    desc: "Combina ingredientes cotidianos en un plato práctico y lleno de sabor.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
    ingredients: ["1 taza de arroz cocido", "1 taza de lentejas cocidas", "Tomate o verduras disponibles", "Limón y hierbas al gusto"],
    steps: [
      "Prepara o calienta el arroz y las lentejas ya cocidas.",
      "Lava y corta las verduras que tengas disponibles.",
      "Sirve todo en un recipiente y añade limón o hierbas al gusto."
    ],
    note: "*Tiempo estimado si los ingredientes ya están cocidos."
  },
  {
    id: "ensalada-color",
    name: "Ensalada de muchos colores",
    category: "Almuerzos",
    time: "12 min",
    cost: "Flexible",
    desc: "Una mezcla fresca que puedes adaptar a las verduras de temporada.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
    ingredients: ["Lechuga u hojas verdes", "Tomate", "Zanahoria", "Maíz o legumbres cocidas (opcional)", "Limón y un poco de aceite"],
    steps: [
      "Lava bien las verduras bajo agua potable.",
      "Corta los ingredientes en trozos pequeños.",
      "Mezcla en un recipiente y aliña con limón y un poco de aceite."
    ]
  },
  {
    id: "sandwich",
    name: "Sándwich casero de huevo",
    category: "Meriendas",
    time: "12 min",
    cost: "Económica",
    desc: "Una preparación versátil con ingredientes que suelen encontrarse en casa.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=85",
    ingredients: ["2 tajadas de pan", "1 huevo", "Tomate o lechuga lavados", "Sal y especias al gusto"],
    steps: [
      "Cocina el huevo completamente en una sartén.",
      "Lava y corta las verduras.",
      "Arma el sándwich y sirve recién preparado."
    ]
  },
  {
    id: "batido-banano",
    name: "Batido de banano",
    category: "Bebidas",
    time: "5 min",
    cost: "Económica",
    desc: "Una bebida casera fácil de preparar con fruta madura.",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=900&q=85",
    ingredients: ["1 banano maduro", "1 vaso de leche o bebida de tu preferencia", "Canela o avena (opcional)"],
    steps: [
      "Pela y corta el banano.",
      "Licúa con la leche o bebida elegida hasta que quede homogéneo.",
      "Sirve de inmediato. Mantén refrigerado si no lo consumes enseguida."
    ]
  },
  {
    id: "arepa-hogao",
    name: "Arepa con tomate salteado",
    category: "Desayunos",
    time: "15 min",
    cost: "Económica",
    desc: "Una idea inspirada en ingredientes cotidianos de la cocina colombiana.",
    image: "https://images.unsplash.com/photo-1604467707321-70d5ac45adda?auto=format&fit=crop&w=900&q=85",
    ingredients: ["1 arepa", "1 tomate maduro", "Un poco de cebolla (opcional)", "Una cucharadita de aceite"],
    steps: [
      "Calienta la arepa según las instrucciones del empaque o tu preparación habitual.",
      "Pica el tomate y la cebolla.",
      "Saltéalos en una sartén con un poco de aceite hasta que estén blandos y sirve sobre la arepa."
    ]
  },
  {
    id: "fruta-yogur",
    name: "Vasito de fruta y yogur",
    category: "Meriendas",
    time: "7 min",
    cost: "Flexible",
    desc: "Una mezcla fresca que puedes hacer con la fruta disponible.",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=85",
    ingredients: ["Fruta fresca de temporada", "Yogur natural o de tu preferencia", "Avena o cereal sin azúcar añadida (opcional)"],
    steps: [
      "Lava y corta la fruta.",
      "Coloca una capa de yogur en un vaso.",
      "Agrega la fruta y, si quieres, un poco de avena o cereal."
    ]
  },
  {
    id: "agua-frutada",
    name: "Agua con frutas",
    category: "Bebidas",
    time: "5 min",
    cost: "Económica",
    desc: "Una forma de darle un aroma suave al agua con fruta fresca.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?auto=format&fit=crop&w=900&q=85",
    ingredients: ["Agua potable fría", "Rodajas de limón o naranja", "Hojas de hierbabuena (opcional)"],
    steps: [
      "Lava la fruta y las hierbas.",
      "Corta la fruta en rodajas finas.",
      "Añade todo al agua y deja reposar unos minutos en refrigeración. No sustituye la necesidad de beber agua regularmente."
    ]
  }
];

const foods = [
  {
    name: "Banano",
    type: "Frutas",
    desc: "Fruta suave y práctica para llevar como merienda.",
    use: "Úsalo en avena, batidos o con yogur.",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Naranja",
    type: "Frutas",
    desc: "Fruta cítrica de sabor fresco y aromático.",
    use: "Disfrútala entera o en preparaciones caseras.",
    image: "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Fresas",
    type: "Frutas",
    desc: "Frutos de color rojo que aportan sabor y variedad.",
    use: "Añádelas a ensaladas de frutas o yogur.",
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Aguacate",
    type: "Frutas",
    desc: "Fruta de textura cremosa y sabor suave.",
    use: "Combina con arepas, ensaladas o sándwiches.",
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Zanahoria",
    type: "Verduras",
    desc: "Verdura crujiente que puede comerse cruda o cocida.",
    use: "Rállala para ensaladas o agrégala a guisos.",
    image: "https://images.unsplash.com/photo-1445282768818-728615cc910a?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Brócoli",
    type: "Verduras",
    desc: "Verdura que puede prepararse al vapor, salteada o en sopas.",
    use: "Prueba combinarlo con arroz u otras verduras.",
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Tomate",
    type: "Verduras",
    desc: "Ingrediente jugoso que se utiliza en muchas preparaciones.",
    use: "Úsalo en ensaladas, salsas o huevos.",
    image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Avena",
    type: "Cereales",
    desc: "Cereal versátil que se puede cocinar o añadir a mezclas.",
    use: "Prepara avena caliente, batidos o galletas caseras.",
    image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Arroz",
    type: "Cereales",
    desc: "Ingrediente básico que acompaña distintas comidas.",
    use: "Combínalo con legumbres y verduras.",
    image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Lentejas",
    type: "Legumbres",
    desc: "Legumbre que puede utilizarse en sopas, guisos y ensaladas.",
    use: "Cocínalas en cantidad y aprovecha en varias comidas.",
    image: "https://images.unsplash.com/photo-1515543904379-3d757b?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Fríjoles",
    type: "Legumbres",
    desc: "Ingrediente tradicional presente en muchas cocinas.",
    use: "Sírvelos con arroz o inclúyelos en bowls.",
    image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Huevo",
    type: "Otros",
    desc: "Ingrediente práctico que se puede preparar de varias maneras.",
    use: "Cocínalo completamente y acompáñalo con otros alimentos.",
    image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=600&q=80"
  }
];

const pageNames = [
  "inicio",
  "alimentos",
  "recetas",
  "habitos",
  "consejos",
  "acerca"
];

let activeFoodFilter = "Todos";
let activeRecipeFilter = "Todas";
let toastTimer;

let favorites = new Set();

try {
  favorites = new Set(
    JSON.parse(localStorage.getItem("nutrijoven-favorites") || "[]")
  );
} catch (e) {}

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];

function safeText(text) {
  return String(text).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

function goToPage(name) {
  if (!pageNames.includes(name)) return;

  $$(".page").forEach(page => {
    page.classList.toggle(
      "active",
      page.dataset.pageContent === name
    );
  });

  $$(".nav-link").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.page === name
    );
  });

  $("#mainNav").classList.remove("open");
  $("#menuToggle").setAttribute("aria-expanded", "false");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  history.replaceState(null, "", "#" + name);
}

document.addEventListener("click", event => {
  const target = event.target.closest("[data-page]");

  if (target) {
    event.preventDefault();
    goToPage(target.dataset.page);
  }
});

function showToast(message) {
  const element = $("#toast");

  element.textContent = message;
  element.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    element.classList.remove("show");
  }, 2600);
}

function recipeCard(recipe) {
  const saved = favorites.has(recipe.id);

  return `
    <article class="recipe-card">
      <div class="recipe-photo">
        <img
          src="${recipe.image}"
          alt="${safeText(recipe.name)}"
          loading="lazy"
          onerror="this.style.display='none';this.parentElement.style.background='linear-gradient(135deg,#e2f0df,#f8f2dc)'"
        >

        <span class="recipe-category">
          ${safeText(recipe.category)}
        </span>

        <button
          class="favorite-btn ${saved ? "saved" : ""}"
          data-favorite="${recipe.id}"
          aria-label="${saved ? "Quitar de" : "Guardar en"} favoritas"
          title="${saved ? "Quitar de favoritas" : "Guardar en favoritas"}"
        >
          ${saved ? "♥" : "♡"}
        </button>
      </div>

      <div class="recipe-info">
        <h3>${safeText(recipe.name)}</h3>
        <p>${safeText(recipe.desc)}</p>

        <div class="recipe-meta">
          <span>◷ ${safeText(recipe.time)}</span>
          <strong>${safeText(recipe.cost)}</strong>
        </div>

        <button class="text-link open-recipe" data-recipe="${recipe.id}">
          Ver receta <span>→</span>
        </button>
      </div>
    </article>
  `;
}

function renderRecipes(target, filter, search, empty) {
  const query = (search || "").trim().toLocaleLowerCase("es");

  const list = recipes.filter(recipe =>
    (
      filter === "Todas" ||
      filter === "Favoritas" ||
      recipe.category === filter
    ) &&
    (
      filter !== "Favoritas" ||
      favorites.has(recipe.id)
    ) &&
    (
      !query ||
      [
        recipe.name,
        recipe.desc,
        recipe.category,
        ...recipe.ingredients
      ]
        .join(" ")
        .toLocaleLowerCase("es")
        .includes(query)
    )
  );

  $(target).innerHTML = list.map(recipeCard).join("");

  if (empty) {
    $(empty).classList.toggle("hidden", list.length > 0);
  }
}

function renderFoods() {
  const query = $("#foodSearch")
    .value
    .trim()
    .toLocaleLowerCase("es");

  const list = foods.filter(food =>
    (
      activeFoodFilter === "Todos" ||
      food.type === activeFoodFilter
    ) &&
    (
      !query ||
      [food.name, food.type, food.desc, food.use]
        .join(" ")
        .toLocaleLowerCase("es")
        .includes(query)
    )
  );

  $("#foodGrid").innerHTML = list.map(food => `
    <article class="food-card">
      <div class="food-photo">
        <img
          src="${food.image}"
          alt="${safeText(food.name)}"
          loading="lazy"
          onerror="this.style.display='none';this.parentElement.style.background='linear-gradient(135deg,#e2f0df,#f8f2dc)'"
        >
      </div>

      <div class="food-body">
        <span class="food-type">${safeText(food.type)}</span>
        <h3>${safeText(food.name)}</h3>
        <p>${safeText(food.desc)}</p>
        <div class="food-use">${safeText(food.use)}</div>
      </div>
    </article>
  `).join("");

  $("#foodEmpty").classList.toggle("hidden", list.length > 0);
}

function toggleFavorite(id) {
  if (favorites.has(id)) {
    favorites.delete(id);
    showToast("Receta quitada de tus favoritas.");
  } else {
    favorites.add(id);
    showToast("¡Receta guardada en favoritas!");
  }

  try {
    localStorage.setItem(
      "nutrijoven-favorites",
      JSON.stringify([...favorites])
    );
  } catch (e) {}

  renderRecipes(
    "#recipeGrid",
    activeRecipeFilter,
    $("#recipeSearch").value,
    "#recipeEmpty"
  );

  renderRecipes("#homeRecipeGrid", "Todas", "", "");
}

function openRecipe(id) {
  const recipe = recipes.find(item => item.id === id);

  if (!recipe) return;

  $("#modalContent").innerHTML = `
    <div class="modal-photo">
      <img
        src="${recipe.image}"
        alt="${safeText(recipe.name)}"
        onerror="this.style.display='none'"
      >
    </div>

    <div class="modal-body">
      <span class="food-type">${safeText(recipe.category)}</span>

      <h2 id="modalTitle">${safeText(recipe.name)}</h2>

      <p>${safeText(recipe.desc)}</p>

      <div class="modal-meta">
        <span>◷ ${safeText(recipe.time)}</span>
        <span>✦ ${safeText(recipe.cost)}</span>
        <span>⌂ Preparación casera</span>
      </div>

      <h3>Ingredientes</h3>

      <ul>
        ${recipe.ingredients.map(item =>
          `<li>${safeText(item)}</li>`
        ).join("")}
      </ul>

      <h3>Preparación</h3>

      <ol>
        ${recipe.steps.map(step =>
          `<li>${safeText(step)}</li>`
        ).join("")}
      </ol>

      ${recipe.note
        ? `<p><em>${safeText(recipe.note)}</em></p>`
        : ""
      }

      <button class="btn btn-primary" data-favorite="${recipe.id}">
        ${favorites.has(recipe.id)
          ? "♥ Guardada en favoritas"
          : "♡ Guardar en favoritas"
        }
      </button>

      <p style="font-size:10px;margin-top:15px">
        Adapta los ingredientes según tus preferencias,
        disponibilidad y necesidades. Si tienes dudas específicas
        sobre alimentación, consulta a un profesional de salud.
      </p>
    </div>
  `;

  $("#recipeModal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
  $("#modalClose").focus();
}

function closeModal() {
  $("#recipeModal").classList.add("hidden");
  document.body.style.overflow = "";
}

$("#menuToggle").addEventListener("click", () => {
  const open = $("#mainNav").classList.toggle("open");

  $("#menuToggle").setAttribute(
    "aria-expanded",
    String(open)
  );
});

$("#foodFilters").addEventListener("click", event => {
  const button = event.target.closest("[data-filter]");

  if (!button) return;

  activeFoodFilter = button.dataset.filter;

  $$("#foodFilters .filter-chip").forEach(item => {
    item.classList.toggle("active", item === button);
  });

  renderFoods();
});

$("#recipeFilters").addEventListener("click", event => {
  const button = event.target.closest("[data-filter]");

  if (!button) return;

  activeRecipeFilter = button.dataset.filter;

  $$("#recipeFilters .filter-chip").forEach(item => {
    item.classList.toggle("active", item === button);
  });

  renderRecipes(
    "#recipeGrid",
    activeRecipeFilter,
    $("#recipeSearch").value,
    "#recipeEmpty"
  );
});

$("#foodSearch").addEventListener("input", renderFoods);

$("#recipeSearch").addEventListener("input", () => {
  renderRecipes(
    "#recipeGrid",
    activeRecipeFilter,
    $("#recipeSearch").value,
    "#recipeEmpty"
  );
});

$("#clearFoodSearch").addEventListener("click", () => {
  $("#foodSearch").value = "";
  renderFoods();
  $("#foodSearch").focus();
});

$("#clearRecipeSearch").addEventListener("click", () => {
  $("#recipeSearch").value = "";

  renderRecipes(
    "#recipeGrid",
    activeRecipeFilter,
    "",
    "#recipeEmpty"
  );

  $("#recipeSearch").focus();
});

document.addEventListener("click", event => {
  const favoriteButton = event.target.closest("[data-favorite]");

  if (favoriteButton) {
    event.preventDefault();

    toggleFavorite(favoriteButton.dataset.favorite);

    if (!$("#recipeModal").classList.contains("hidden")) {
      const recipe = recipes.find(
        item => item.id === favoriteButton.dataset.favorite
      );

      if (recipe) {
        $("#modalContent").querySelector(".btn-primary").textContent =
          favorites.has(recipe.id)
            ? "♥ Guardada en favoritas"
            : "♡ Guardar en favoritas";
      }
    }

    return;
  }

  const recipeButton = event.target.closest("[data-recipe]");

  if (recipeButton) {
    openRecipe(recipeButton.dataset.recipe);
  }
});

$("#modalClose").addEventListener("click", closeModal);

$("#recipeModal").addEventListener("click", event => {
  if (event.target === $("#recipeModal")) {
    closeModal();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeModal();
  }
});

window.addEventListener("scroll", () => {
  $("#backTop").classList.toggle(
    "visible",
    window.scrollY > 500
  );
});

$("#backTop").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

window.addEventListener("hashchange", () => {
  const name = location.hash.slice(1);

  if (pageNames.includes(name)) {
    goToPage(name);
  }
});

$("#year").textContent = new Date().getFullYear();

renderFoods();

renderRecipes(
  "#recipeGrid",
  activeRecipeFilter,
  "",
  "#recipeEmpty"
);

renderRecipes("#homeRecipeGrid", "Todas", "", "");

if (pageNames.includes(location.hash.slice(1))) {
  goToPage(location.hash.slice(1));
}
