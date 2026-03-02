async function loadContent() {
  const response = await fetch("./funnel-config.json");
  if (!response.ok) {
    throw new Error("Konfiguration konnte nicht geladen werden.");
  }

  const config = await response.json();

  document.title = config.meta.pageTitle;

  document.querySelectorAll("[data-text]").forEach((element) => {
    const key = element.getAttribute("data-text");
    const value = getValueByPath(config.texts, key);

    if (typeof value === "string") {
      element.textContent = value;
    }
  });
}

function getValueByPath(source, path) {
  return path.split(".").reduce((accumulator, part) => {
    if (accumulator && Object.prototype.hasOwnProperty.call(accumulator, part)) {
      return accumulator[part];
    }

    return "";
  }, source);
}

loadContent().catch((error) => {
  console.error(error);
});
