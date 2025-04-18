for (let i = 1; i < 11; i++) {
  let node = document.createElement("div");
  let textElement = document.createTextNode(i + (i % 2));
  node.appendChild(textElement);

  node.id = i;
  node.className = "card";
  
  document.getElementById("main-content").appendChild(node);
}

var cards = document.querySelectorAll(".card")

for(let i=0; i<cards.length; i++) {
    cards[i].addEventListener('click', function(e) {
        console.log(i + "clicked!")
    })
}