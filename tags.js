//tag generator
let input = document.getElementById("myInput");
let listArr = [];
input.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {  // enter keyboard
    if (input.value != '') {
      let inValue = e.target.value;
      listArr.push(inValue.replace(/\s/g, ''));
      let newTagLi = '';
      listArr.forEach((element, index) => {
        newTagLi += `<span   class=" border  rounded inline-block max-w-fit   px-3 m-1 text-base break-words" ># ${element}<i class="fa fa-solid  fa-times   cursor-pointer transition-all duration-1000 hover:bg-rose-600 rounded hover:text-red-200 m-1 py-1 text-rose-600 text-xl p-2" onclick="ondelete(${index})"></i></span>`;
      });
      document.querySelector('.tags').innerHTML = newTagLi;
      input.value = '';
    } else {
      alert("لطفا چیزی بنویسید");
    }
  }
})

function ondelete(index) {
  listArr.splice(index, 1);
  let newTagLi = '';
  listArr.forEach((element, index) => {
    newTagLi += `<span class=" border  rounded inline-block max-w-fit   px-3 m-1 text-base break-words"># ${element}<i class="fa fa-solid  fa-times   cursor-pointer transition-all duration-1000 hover:bg-rose-600 rounded hover:text-red-200 m-1 py-1 text-rose-600 text-xl p-2" onclick="ondelete(${index})"></i></span>`;
  });
  document.querySelector('.tags').innerHTML = newTagLi;
}