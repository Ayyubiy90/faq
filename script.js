document.addEventListener("DOMContentLoaded", () => {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", toggleAccordion);
  });

  function toggleAccordion() {
    const currentlyActiveHeader = document.querySelector(
      '.accordion-header[aria-expanded="true"]'
    );

    if (currentlyActiveHeader && currentlyActiveHeader !== this) {
      currentlyActiveHeader.setAttribute("aria-expanded", "false");
      currentlyActiveHeader.querySelector(".accordion-icon").src =
        "./assets/images/icon-plus.svg";
    }

    const isExpanded = this.getAttribute("aria-expanded") === "true";
    this.setAttribute("aria-expanded", !isExpanded);

    const icon = this.querySelector(".accordion-icon");
    icon.src = isExpanded
      ? "./assets/images/icon-plus.svg"
      : "./assets/images/icon-minus.svg";
  }

  // Keyboard navigation
  accordionHeaders.forEach((header, index) => {
    header.addEventListener("keydown", (e) => {
      const key = e.which.toString();

      switch (key) {
        case "38": // Up arrow
          e.preventDefault();
          if (index > 0) {
            accordionHeaders[index - 1].focus();
          }
          break;
        case "40": // Down arrow
          e.preventDefault();
          if (index < accordionHeaders.length - 1) {
            accordionHeaders[index + 1].focus();
          }
          break;
        case "36": // Home key
          e.preventDefault();
          accordionHeaders[0].focus();
          break;
        case "35": // End key
          e.preventDefault();
          accordionHeaders[accordionHeaders.length - 1].focus();
          break;
      }
    });
  });
});
