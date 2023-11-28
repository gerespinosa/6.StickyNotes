window.onload = () => {
  const container = document.getElementById("container");
  const newText = document.getElementById("newText");
  const addNote = document.getElementById("addNote");

  // Created function to create a new note
  const addNewNote = () => {
    let newNote = document.createElement("div");
    container.appendChild(newNote);
    newNote.classList.add("note");
    newNote.innerHTML = newText.value + "<h5> Doble Click to Delete </h5>";

    // Create a function to remove notes by double click in them
    newNote.addEventListener("dblclick", () => {
      newNote.remove();
    });

    // Add randomColor filler for the new notes. As seen to Online Tutorials on YT
    newNote.setAttribute("style", "background: " + color() + "");
    newText.value = "";
    newText.style.display = "none";
    // localStorage.setItem("stored", container.innerText);
  };

  // Makes the textarea appear to write a new note
  addNote.addEventListener("click", () => {
    newText.style.display = "flex";
  });

  // Once you type and press enter, the text will be shown in a new sticky note
  newText.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      addNewNote();
    }
  });

  // Randome background color for new notes
  let i = 0;
  const color = () => {
    let randomColors = [
      "#c2ff3d",
      "#ff3de8",
      "#3dc2ff",
      "#04e022",
      "#bc83e5",
      "#ebb328",
    ];
    if (i > randomColors.length - 1) {
      i = 0;
    }
    return randomColors[i++];
  };
};
