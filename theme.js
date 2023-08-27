//თემის ცვლილება
const switcher = document.getElementById("switcher");
const body = document.querySelector("body");
const KEY_WORD = "theme"; //კონფიგურაციის ცვლადი

switcher.addEventListener("click", () => {
  const currentTheme = localStorage.getItem(KEY_WORD);
  if (currentTheme === "dark-theme") {
    setTheme("light-theme");
  } else {
    setTheme("dark-theme");
  }
});
function setTheme(className) {
  body.setAttribute("class", className);
  localStorage.setItem(KEY_WORD, className);
}
function changeTheme() {
  const theme = localStorage.getItem(KEY_WORD);
  console.log(theme);
  if (theme) {
    setTheme(theme);
  }
}
changeTheme();
