export default  function (tag: string) {
  return tag
    // remove everything except A–Z, a–z, 0–9 and space
    .replace(/[^a-zA-Z0-9 ]+/g, "")
    // replace multiple spaces with a single space
    .replace(/\s+/g, " ")
    // trim leading & trailing spaces
    .trim();
}