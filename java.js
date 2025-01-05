

/* CAROUSEL CODE */
  
document.addEventListener("DOMContentLoaded", () => {
  const holder = document.querySelector(".carousel_items");  // Updated to use .carousel_items
  const boxes = Array.from(document.querySelectorAll(".carousel_item")); // Updated to use .carousel_item
  const boxWidth = boxes[0].offsetWidth + 20; // Include margin
  let currentPosition = 0;

  // Function to duplicate boxes in a loop up to a total of 400 items
  const duplicateBoxes = () => {
    const totalBoxesNeeded = 400; // Total number of boxes for the carousel
    const currentBoxCount = holder.children.length;
    const boxesToAdd = totalBoxesNeeded - currentBoxCount;

    for (let i = 0; i < boxesToAdd; i++) {
      const clone = boxes[i % boxes.length].cloneNode(true); // Duplicate in a loop (1-5 pattern)
      holder.appendChild(clone);
    }
  };

  // Initial duplication of boxes to reach 400 items
  duplicateBoxes();

  // Start infinite scrolling
  const infiniteScroll = () => {
    currentPosition -= 2; // Speed of scrolling
    holder.style.transform = `translateX(${currentPosition}px)`;
    holder.style.transition = "none";

    // Add more boxes dynamically when scrolling reaches the end
    if (Math.abs(currentPosition) >= holder.scrollWidth / 2) {
      duplicateBoxes(); // Duplicate more boxes when needed
    }

    // Reset position to avoid overflow and keep scrolling infinitely
    if (currentPosition <= -holder.scrollWidth / 2) {
      currentPosition = 0;
      holder.style.transform = `translateX(${currentPosition}px)`;
    }

    requestAnimationFrame(infiniteScroll);
  };

  infiniteScroll();
});



