function isFill(p) {
  return p.textContent.trim() !== ">";
}

function haveAProject(array, projectName) {
  return array.some((e) => e.textContent.trim() === projectName);
}

export { isFill, haveAProject };
