let sequenceNumber = 1;

const generateCategory = () => {
  const customCategory = document
    .getElementById("categoryInput")
    .value.trim();

  if (customCategory !== "") {
    const tableBody = document
      .getElementById("categoryTable")
      .getElementsByTagName("tbody")[0];

    const row = tableBody.insertRow(-1);
    const [cellNumber, cellCategory, cellCheckbox, cellAction] =
      Array.from({ length: 4 }, (_, index) => row.insertCell(index));

    cellNumber.textContent = sequenceNumber++;
    cellCategory.textContent = customCategory;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    cellCheckbox.appendChild(checkbox);

    const deleteButton = createButton(
      '<i class="fas fa-trash fa-solid"></i>',
      "btn btn-ghost btn-xs",
      () => {
        tableBody.removeChild(row);
        updateSequenceNumbers();
      }
    );

    const editButton = createButton(
      '<i class="fas fa-edit fa-solid"></i>',
      "btn btn-ghost btn-xs",
      () => {
        const newCategory = prompt(
          "نام دسته بندی را وارد کنید:",
          cellCategory.textContent
        );
        if (newCategory !== null && newCategory.trim() !== "") {
          cellCategory.textContent = newCategory;
        }
      }
    );

    const viewButton = createButton(
      '<i class="fas fa-eye fa-solid"></i>',
      "btn btn-ghost btn-xs",
      () =>
        alert(`شما در حال مشاهده پست های مربوط به این ( ${cellCategory.textContent} )دسته بندی هستید`)
    );

    [deleteButton, editButton, viewButton].forEach((button) =>
      cellAction.appendChild(button)
    );

    document.getElementById("categoryInput").value = "";
  } else {
    alert("لطفا یک نام برای دسته بندی انتخاب کنیپ.");
  }
};

const createButton = (html, className, onClick) => {
  const button = document.createElement("a");
  button.innerHTML = html;
  button.className = className;
  button.href = "#";
  button.onclick = onClick;

  return button;
};

const updateSequenceNumbers = () => {
  const tableBody = document
    .getElementById("categoryTable")
    .getElementsByTagName("tbody")[0];
  const rows = tableBody.getElementsByTagName("tr");

  Array.from(rows).forEach(
    (row, index) => (row.cells[0].textContent = index + 1)
  );

  sequenceNumber = rows.length + 1;
};