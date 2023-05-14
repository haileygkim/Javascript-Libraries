function generate() {
const petname = [
  "cutie",
  "smarty-pants",
  "jokester",
  

  ];
  const question = document.getElementById("question").value;
  const randomPetname = petname[Math.floor(Math.random() * petname.length)];
  const output = document.getElementById("output");
  output.innerHTML = ` Let's dive into the world of Cho Giseok, ${randomPetname}!`;

}

function restyle() {
  const output = document.getElementById("output");
  const styles = ["color", "font-size", "text-decoration"];
  const randomStyle = styles[Math.floor(Math.random() * styles.length)];
}
