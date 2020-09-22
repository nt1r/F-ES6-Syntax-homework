// TODO 做的不错
const inject = (items, sections) => {
  sortByIndexDescending(sections)

  for (let section of sections) {
    items.splice(section.index, 0, section.content);
  }

  return items;
}

const sortByIndexDescending = (sections) => {
  sections.sort((first, second) => second.index - first.index);
}
export { inject };
