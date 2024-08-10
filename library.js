// constructor
class book {
  constructor(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
  }
}

// dislay construtor

function Display() {}

// add methods to dispaly prototypes
Display.prototype.add = function (Book) {
  console.log("adding");
  tablebody = document.getElementById("tableBdy");
    let uistring =
 `
  < tr >
      <td> $(Book.name) </td>
      <td>$(Book.author)</td>
      <td>$(Book.type)</td>
    </tr>`
   
    tablebody.innerHTML += uistring;
  };
  Display.prototype.clear = function () {
  let library_form = document.getElementById("library");

  library_form.reset();
};

Display.prototype.validate = function (Book) {
  let library_form = document.getElementById("library");
  if (Book.name.length < 2 || Book.author.length < 2)
  { return false }
  else
  {
    true;
    }
};


Display.prototype.show = function (type) {

  let message = document.getElementById("message")
  message.innerHTML=`<div id="liveAlertPlaceholder"></div>
<button type="button" class="btn btn-primary" id="liveAlertBtn">Show live alert</button>`
 }



let library_form = document.getElementById("library");

// add submit addEventListener to form
library_form.addEventListener("submit", libform);

function libform(e) {
  console.log("you have submitted form");
  let name = document.getElementById("BookName").value;
  let author = document.getElementById("author").value;

  let Fiction = document.querySelector("#Fiction");
  let programing = document.querySelector("#programing");
  let cooking = document.getElementById("cooking");

  let type;

  if (programing.checked) {
    type = programing.value;
  } else if (Fiction.checked) {
    type = Fiction.value;
  } else if (cooking.checked) {
    type = cooking.value;
  }

  let Book = new book(name, author, type);
  console.log(Book);

  let display = new Display();
  if (display.validate(Book)) {
    display.add(Book);
    display.clear();
    display.show = ("success")
    
  }
  else {
    display.show=("error")
  }


  e.preventDefault();
}
