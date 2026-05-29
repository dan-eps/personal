function allowDrop(event) {
    event.preventDefault(); // Allow drop
}

function drag(event) {
    // Find the custom-icon element
    const customIcon = event.target.closest('custom-icon');
    if (customIcon) {
        event.dataTransfer.setData("text", customIcon.id); // Use custom element's id
    }
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);

    if (!draggedElement) {
        console.error("Dragged element with ID '" + data + "' not found in document.");
        return;
    }

    // Find the slot in the drop target cell
    const slot = event.target.querySelector('slot');
    if (slot) {
        draggedElement.setAttribute('slot', slot.name);
    }

    // Append to the grid cell, not the slot
    if (event.target.classList.contains('dropSpot')) {
        event.target.appendChild(draggedElement);
    }
}