console.log("Hello world");

function Addtodo2List() {
    var ShowAlertContent = "🚨You click the Button🚨";
    alert(ShowAlertContent);
    // todoList Logic and variables
    //Eingabe feld, wird betretet und sein inhalt gecloned mit .value und in ein variable gespeichert
    let htmlInputField = document.querySelector("todoInput").value;

    //als test würde die inhalt die eingabe feld, in die konsole von die Internet Browser ausgedrückt
    console.log(htmlInputField);

    //text aus eingabe feld, die in die variable htmlInputField gespeichert in ein text Knoten umgewabdelt damit das text dargestellt werden kann
    let todoTextNote = document.createTextNode(htmlInputField);

    if (htmlInputField !== " ") {

        //ein leeren List item die die TextNode bekommt und in sie speichert und darstellt
        let listItem = document.createElement("li");
    listItem.appendChild(todoTextNote);

    //List item als kind von ul zu gewiesen damit inhalt die li richtig platziert kann
    document.querySelector(".myUL").appendChild(listItem);
  } else {
    alert("You need to input a New Todo!");
  }
    }

    // Entleeren der Eingabe feld
    document.querySelector("todoInput").value = "";
}