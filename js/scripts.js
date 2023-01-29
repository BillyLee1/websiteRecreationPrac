window.onload = function(){
  const orgH1 = document.querySelector("h1");
  orgH1.innerText = "Webpage Recreation Practice";
  const p1 = document.createElement("p");
  p1.append("The HTML of this webpage was created with JavaScript.");
  orgH1.after(p1);
};
