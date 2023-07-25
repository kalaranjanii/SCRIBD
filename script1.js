let products = {
  data: [
    {
      productName: "Black Heart",
      category: "Fiction",
      Author:"Author:Author:Holly Black",       
      price: "1,029",
      image: "fbook1.jpg",
    },
    {
      productName: "Emergence Of The Delhi Sultanate",
      category: "History&Humanities",      
      Author:"Author:AMITAV GHOSH",
      price: "500",
      image: "hbook1.jpg",
    },
    {
      productName: "Smart Economy in Smart Cities ",
      category: "Environment&geography",
      price: "12,737",
      Author: "Author:Springer",
      image: "ebook1.jpg",
    },    
    {
      productName: "Harry Potter",
      category: "Fiction",
      Author:"Author:J.K. Rowling", 
      price: "374",
      image: "fbook2.jpg",
    },
    {
      productName: "Ambedkar & Modi",
      category: "Biographies&Memories",
      price: "198",      
      Author:"Author:BlueKraft Digital Foundation",      
      image: "bbook1.jpg",
    },
    {
      productName: "The Teachings of Vimala Thakar",
      category: "History&Humanities",
      Author:"Author: Christine Townend",
      price: "188",
      image: "hbook2.jpg",
    },
    {
      productName: "An Intent to Serve",
      category: "Biographies&Memories",
      Author:"Author:Tejendra Khanna",
      price: "454",
      image: "bbook2.jpg",
    },
    {
      productName: "The Life of Hunting & Gathering Tribe in the Eastern Ghats",
      category: "History&Humanities",
      Author:"Author:C.Subba Reddy",
      price: "435",
      image: "hbook3.jpg",
    },
    {
      productName: "Global Environment Movements",
      category: "Environment&geography",
      Author:"Author:Mccormic John",
      price: "373",
      image: "ebook2.jpg",
    },
    {
      productName:"Geronimo Stilton And The Kingdom Of Fantasy",
      category:"Fiction",
      Author:"Author: Geronimo Stilton", 
      price: "384",
      image: "fbook4.jpg",
    },
    {
      productName:"The Magic Drum ",
      category:"Fiction",
      Author:"Author: Sudha Murty", 
      price: "200",
      image: "fbook5.jpg",
    },
  ],
};

for (let i of products.data) {
  let card = document.createElement("div");
  card.classList.add("card", i.category, "hide");
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  let container = document.createElement("div");
  container.classList.add("container");
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  let Author = document.createElement("h5");
  Author.classList.add("Author-name")
  Author.innerText = i.Author;
  container.appendChild(Author);
  let price = document.createElement("h6");
  price.classList.add('price')
  price.innerText = "Price:$" + i.price;
  container.appendChild(price);  

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}


function filterProduct(value) {
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  
  let elements = document.querySelectorAll(".card");
  elements.forEach((element) => {
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      if (element.classList.contains(value)) {
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }
    }
  });
}


document.getElementById("search").addEventListener("click", () => {
  
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  
  elements.forEach((element, index) => {
    if (element.innerText.includes(searchInput.toUpperCase())) {
      cards[index].classList.remove("hide");
    } else {
      cards[index].classList.add("hide");
    }
  });
});

window.onload = () => {
  filterProduct("all");
};

// dropdown

function menuToggle() {
  const toggleMenu = document.querySelector(".menu");
  toggleMenu.classList.toggle("active");
}
// logout
function logout(){
  document.getElementById('logout');
  window.open('index.html')
  window.close()
}





