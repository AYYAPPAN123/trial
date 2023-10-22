function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.outerHTML);
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const element = document.createElement("div");
    element.innerHTML = data;

    // Handle different element types
    switch (element.firstChild.textContent) {
        case "Layout":
            element.innerHTML = "<h3>NOT DEFINED</h3>";
            break;
        case "Label":
            element.innerHTML = "<h3>NOT DEFINED</h3>";
            break;
        case "Button":
            element.innerHTML = '<button class="button_button choose ">Click Me</button>';
            break;
        case "Text Box":
            element.innerHTML = '<div class="checkbox_button choose"><p>Name </p><input type="text" class:"name"></div>';
            break;
        case "Dropdown":
            element.innerHTML = '<div class="checkbox_button choose"><p>Food choice </p><select><option>Vegetarian meal </option><option> non-veg </option> <option> chinese</option></select></div>';
            break;
        case "Check Box":
            element.innerHTML = '<div class="checkbox_button choose"><p>Title</p><input type="checkbox" id="checkbox1" name="checkbox1"><label >Mr.</label><input type="checkbox" id="checkbox2" name="checkbox2"><label >Ms.</label><input type="checkbox" id="checkbox3" name="checkbox3"><label >Miss</label></div>';
            break;
        case "Radio Button":
            element.innerHTML = '<div class="checkbox_button choose "><p>Gender</p><input type="radio" name="gender"> <label>Male</label> <input type="radio" name="gender"><label>Female</label> <input type="radio" name="gender"> <label>Prefer not to say</label></div>';
            break;
        case "Table":
            element.innerHTML = "<div class='Table_button choose'><p>Menu</p><table class='layoutTable'><tr><td><h3>Starter</h3></td><td><h3>Main</h3></td><td><h3>Desert</h3></td></tr><tr><td><input type='text' class='table_menu'></td><td><input type='text' class='table_menu'></td><td><input type='text' class='table_menu'></td></tr> </table></div>";
        break;
        case "Navigation Link":
            element.innerHTML = "<div class='Table_button choose'> <p>Location</p><input type='url'placeholder='Enter your address'></div>";
        break;
        case "Image":
            element.innerHTML = "<div class='Table_button choose'> <p>Image</p><input type='file' class='file'></div>";
        break;

        
    }

    element.draggable = true;
    element.ondragstart = (e) => {
        e.dataTransfer.setData("text", e.target.outerHTML);
    };

    event.target.appendChild(element);
}

