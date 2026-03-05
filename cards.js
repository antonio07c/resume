document.querySelectorAll(".expandable").forEach(card => {
  card.classList.remove("expanded");
});

document.querySelectorAll(".expandable .card-header").forEach((header) => {
  header.addEventListener("click", () => {
    const card = header.closest(".expandable");
    const isExpanded = card.classList.contains("expanded");

    // Collapse all cards
    document.querySelectorAll(".expandable.expanded").forEach((c) => {
      c.classList.remove("expanded");
    });

    // Expand clicked card
    if (!isExpanded) {
      card.classList.add("expanded");
    }
  });
});