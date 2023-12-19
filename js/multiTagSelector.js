const selectedTags = new Set();

function addTag() {
  const tagSelector = document.getElementById("tagSelector");
  const selectedTag = tagSelector.value;

  if (selectedTag && !selectedTags.has(selectedTag)) {
    const tagContainer = document.getElementById("tagContainer");
    const tagElement = document.createElement("div");
    tagElement.className = "border  rounded inline-block max-w-fit   px-3 m-1 text-base break-words";
    tagElement.textContent = selectedTag;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = `X`;
    deleteButton.onclick = function () {
      tagElement.remove();
      selectedTags.delete(selectedTag);
      tagSelector.options.namedItem(selectedTag).disabled = false;
    };

    tagElement.appendChild(deleteButton);
    tagContainer.appendChild(tagElement);

    selectedTags.add(selectedTag);
    tagSelector.options.namedItem(selectedTag).disabled = true;
  }
}