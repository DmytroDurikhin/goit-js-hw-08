



const items = document.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);



items.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const categoriesCount = item.querySelectorAll(" ul li").length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${categoriesCount}`);


})




