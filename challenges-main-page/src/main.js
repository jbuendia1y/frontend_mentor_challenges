import "./styles.css";

const filterForm = document.getElementById("challenges-filter");
filterForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const value = Object.fromEntries(new FormData(e.target));
  const name = value.name.toString();
  const technology = value.technology.toString();

  const filters = {
    name: name.length > 0 ? name : null,
    technologies: technology.length > 0 ? technology : null,
  };

  const formatFilters = {};
  for (const key of Object.keys(filters)) {
    if (filters[key]) formatFilters[key] = filters[key];
  }

  await filter(formatFilters);
});

const filter = async (fields) => {
  const challenges = await import("./data.json").then((v) => v.default);
  const noFilters = Object.values(fields).every((v) => v === null);
  if (noFilters) {
    renderChallenges(challenges);
    return;
  }

  renderChallenges(
    challenges.filter((v) => {
      const nameEquals = fields.name
        ? v.name.toLocaleLowerCase() === fields.name.toLocaleLowerCase()
        : true;

      const hasTech = fields.technologies
        ? v.technologies.some(
            (v) =>
              v.toLocaleLowerCase() === fields.technologies.toLocaleLowerCase()
          )
        : true;

      return nameEquals && hasTech;
    })
  );
};

const challengeTemplate = (data) => {
  const article = document.createElement("article");
  article.className = "challenge";

  const title = document.createElement("h1");
  title.textContent = data.name;

  const imagePreview = document.createElement("div");
  imagePreview.className = "challenge__preview";

  const image = document.createElement("img");
  image.loading = "lazy";
  image.src = data.preview;

  imagePreview.append(image);

  const actions = document.createElement("div");
  actions.className = "challenge__actions";

  const codeButton = document.createElement("a");
  codeButton.textContent = "Código";
  codeButton.className = "button button-light";
  codeButton.href = data.repository;

  const visitButton = document.createElement("a");
  visitButton.textContent = "Ver más";
  visitButton.className = "button button-primary";
  visitButton.href = data.url;

  actions.append(codeButton, visitButton);

  article.append(imagePreview, title, actions);
  return article;
};

const createChallengeEl = (data) => {
  const fragment = document.createDocumentFragment();
  const el = challengeTemplate(data);
  fragment.append(el);
  return fragment;
};

const renderChallenges = (data) => {
  const challengesEl = document.getElementById("challenges");
  const fragment = document.createDocumentFragment();
  const els = data.map((v) => createChallengeEl(v));
  fragment.append(...els);

  challengesEl.innerHTML = "";
  challengesEl.append(fragment);
};

const appendTechnologies = async () => {
  const technologies = await import("./data.json").then((v) =>
    v.default.map((v) => v.technologies).flat()
  );

  const formatTechs = Array.from(new Set(technologies));
  const technologiesEl = document.getElementById("technologies");

  const fragment = document.createDocumentFragment();
  fragment.append(
    ...formatTechs.map((v) => {
      const option = document.createElement("option");
      option.value = v;
      option.textContent = v;
      return option;
    })
  );

  technologiesEl.append(fragment);
};

window.addEventListener("DOMContentLoaded", async () => {
  await appendTechnologies();
  const challenges = await import("./data.json").then((v) => v.default);
  renderChallenges(challenges);
});
