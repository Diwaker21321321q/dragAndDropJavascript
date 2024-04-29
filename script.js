// const lists = document.querySelectorAll(".list");
const lists = document.getElementsByClassName("list");

// console.log(list);
const leftbox = document.getElementById("left");
const rightbox = document.getElementById("right");

for (listvalue of lists) {
  listvalue.addEventListener("dragstart", (e) => {
    // console.log(e.target);
    let itemselect = e.target;

    rightbox.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    rightbox.addEventListener("drop", (e) => {
      rightbox.appendChild(itemselect);
      //   itemselect = null;
    });
  });
}
