function getTitle() {
  const diff = new Date() - new Date("2022-02-28");
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  const num = Math.floor(days / 7);

  let TITLE = num % 2 === 0 ? "Tydzień nieparzysty" : "Tydzień parzysty";

  return TITLE;
}

export default getTitle;
