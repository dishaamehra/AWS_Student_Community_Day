// Function to check if an element is in the viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle the scroll event
function handleScroll() {
  const cards = document.querySelectorAll(".speaker-card");

  cards.forEach((card) => {
    if (isElementInViewport(card)) {
      card.classList.add("show");
    } else {
      card.classList.remove("show");
    }
  });
}

// Attach an event listener for the scroll event
window.addEventListener("scroll", handleScroll);

// Initially check the elements in view on page load
document.addEventListener("DOMContentLoaded", function(){
 handleScroll();

  // 🔍 SEARCH LOGIC
  const searchBar = document.getElementById("searchBar");
  if (!searchBar) return;
  const cards = document.querySelectorAll(".speaker-card");

  searchBar.addEventListener("keyup", function () {
    const searchValue = searchBar.value.toLowerCase();

    cards.forEach(card => {
      const name = card.querySelector("h3").innerText.toLowerCase();
      const details = card.querySelector(".speaker-details").innerText.toLowerCase();

      if (name.includes(searchValue) || details.includes(searchValue)) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });

});
