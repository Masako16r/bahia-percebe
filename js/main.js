// Poem text
const kiplingPoem = `
  <p>BAHIA PERCEBE&nbsp;&nbsp;&nbsp;BAHIA PERCEBE&nbsp;&nbsp;BAHIA PERCEBE&nbsp;&nbsp;BAHIA PERCEBE&nbsp;&nbsp;BAHIA PERCEBE&nbsp;&nbsp;BAHIA PERCEBE</p>
`;

// Function to insert poem into divs
function insertPoemIntoDivs() {
  const textDivs = document.querySelectorAll(".text");

  textDivs.forEach((div) => {
    if (!div.innerHTML.trim()) {
      div.innerHTML = kiplingPoem;
    }
  });
}

// Call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", insertPoemIntoDivs);

// Adjust content size based on viewport
function adjustContentSize() {
  const contentDiv = document.querySelector(".content");
  if (!contentDiv) return; // Exit if contentDiv doesn't exist

  const viewportWidth = window.innerWidth;
  const baseWidth = 1000;
  const scaleFactor = viewportWidth < baseWidth ? (viewportWidth / baseWidth) * 0.8 : 1;
  contentDiv.style.transform = `scale(${scaleFactor})`;
  contentDiv.style.transformOrigin = "center";
}

// Initialize adjustment on load and on resize
window.addEventListener("load", adjustContentSize);
window.addEventListener("resize", adjustContentSize);
