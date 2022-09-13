const container = document.querySelector(".container");
const coffees = [
  {
    name: "Web Dev",
    image: "images/coffee3.jpg"
  },
  {
    name: "Cloud Hosting",
    image: "images/coffee3.jpg"
  },
  {
    name: "Ai",
    image: "images/coffee3.jpg"
  },
  {
    name: "iot",
    image: "images/coffee3.jpg"
  },
  {
    name: "Online Business",
    image: "images/coffee3.jpg"
  },
  {
    name: "Video Stream",
    image: "images/coffee3.jpg"
  },
  {
    name: "Web Design",
    image: "images/coffee3.jpg"
  },
  {
    name: "Veritatis",
    image: "images/coffee3.jpg"
  },
  {
    name: "Accusantium",
    image: "images/coffee3.jpg"
  }
];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="w3-card w3-margin">
                <img class="w3-image" src=${image} />
                <div class="w3-container w3-center w3-padding-16">
                  <h2 class="">${name}</h2>
                  <a class="" href="#">Taste</a>
           
                </div>
                
                
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
