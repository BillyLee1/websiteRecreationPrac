window.onload = function(){
  const orgH1 = document.querySelector("h1");
  orgH1.innerText = "Webpage Recreation Practice";
  
  const p1 = document.createElement("p");
  p1.append("The HTML of this webpage was created with JavaScript.");
  orgH1.after(p1);

  const img = document.createElement("img");
  img.setAttribute("src", "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900");
  img.setAttribute("alt", "This is an image of a Multicolored Tanager bird from birdsoftheworld.org");
  img.setAttribute("style", "width: 50%");
  p1.after(img);

  const h1 = document.createElement("h1");
  h1.append("Facts about the Multicolored Tanger");
  img.after(h1);

  const ul = document.createElement("ul");
  const li1 = document.createElement("li")
  const li2 = document.createElement("li")
  const li3 = document.createElement("li");
  li1.append("It is endemic to the mountains of Colombia.");
  li2.append("It usually searches for insects on the underside of leaves of limbs while clinging to the leaves wiht its feet.");
  ul.append(li1, li2);
  h1.after(ul);

  const h2 = document.createElement("h2");
  h2.append("Source");
  ul.after(h2);

  const a = document.createElement("a")
  a.setAttribute("href", "https://en.wikipedia.org/wiki/Multicoloured_tanager");
  a.append("Wikipedia")
  h2.after(a);
};
