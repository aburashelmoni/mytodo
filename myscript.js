// var h = document.createElement('h1')
// var myValue = document.createTextNode('Hello World!')
// h.appendChild(myValue)
// document.querySelector('h1').appendChild(h)
// var checked = document.getElementById('check')
// checked.addEventListener('click',checkdItem)

// var addButton = document.getElementById('add')
// addButton.addEventListener('click',addItem)

// var removeButton = document.getElementById('remove')
// removeButton.addEventListener('click',removeItem)

// function checkdItem(){
//     document.getElementById("check").checked = true;
// }

// function addItem(){
//     var input = document.getElementById('input');
//     var item = input.value;
// console.log(`item = ${item}`)
// ul = document.getElementById('list');
// var textnode = document.createTextNode(item);

// if (item ==='') {
//     return false;
// } else {
//create li
// li = document.createElement('li');
//create checkbox
// var checkbox = document.createElement('input');
// checkbox.type = 'checkbox';
// checkbox.setAttribute('id', 'check');
// checkbox.setAttribute('onclick', 'checkdItem');

//create label
// var label = document.createElement('label');
// label.setAttribute('for','item') //optional

//add these elements on web page
// ul.appendChild(label);
// li.appendChild(checkbox);
// label.appendChild(textnode);
// li.appendChild(label);
// ul.insertBefore(li, ul.childNodes[0]);
// li.className = 'visual';

//         setTimeout(() => {
//             li.className = 'visual';
//         }, 2);
//         input.value = '';
//     }
// }

// function removeItem(){
//     li = ul.children
//     // console.log(li)
//     for (let index = 0; index < li.length; index++){
//         while (li[index] && li[index.chidren[0].checked]){
//             ul.removeChild(li[index])
//         }
//     }
// }

shownotes();
let addBtn = document.getElementById("add");
addBtn.addEventListener("click", function(e) {
  let addTxt = document.getElementById("input");
  if (addTxt.value) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";

    shownotes();
  }
  else{
    console.log("Type Something");
    
  }
});

function shownotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function(element, index) {
    html += `
            <li class="mycheck">
              <input type="checkbox" class="check"  >
              <label> ${element} </label>
                
            </li>
          `;
  });

  let notesElm = document.getElementById("list");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothig to show! Add Note using 'Add TODO' Button`;
  }
}

let removeBtn = document.getElementById("remove");
removeBtn.addEventListener("click", function(e) {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  deleteNote();
});

function deleteNote() {
  let check_item = [];
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  for (let i = 0; i < notesObj.length; i++) {
    if (document.getElementsByClassName("check")[i].checked) {
      check_item.push(notesObj[i]);
    } else {
      continue;
    }
  }

  for (let k = 0; k < check_item.length; k++) {
    for (let l = 0; l < notesObj.length; l++) {
      if (check_item[k] === notesObj[l]) {
        notesObj.splice(l, 1);
      }
    }
  }

  localStorage.setItem("notes", JSON.stringify(notesObj));
  shownotes();
}
