export default  function (tag: string) {
  return tag.replace(/[^a-zA-Z0-9]/g, "") // remove special chars
            .toLowerCase();
}