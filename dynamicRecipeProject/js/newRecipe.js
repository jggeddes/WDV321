let JSONRecipeObj = localStorage.getItem("userRecipe");

userRecipeObj = JSON.parse(JSONRecipeObj);

console.log(userRecipeObj);

function createUserRecipe() {

    let newUserRecipe = document.createElement("DIV");
    document.querySelector(".newRecipe").appendChild(newUserRecipe);

    let content = document.createElement("DIV");
    content.setAttribute("class", "accordion_content");
    newUserRecipe.appendChild(content);

    let recipeHeader = document.createElement("H1");
    recipeHeader.innerHTML = userRecipeObj.recipeTitle;
    content.appendChild(recipeHeader);

    let servingSize = document.createElement("P");
    servingSize.setAttribute("class", "recipeInformation");
    servingSize.innerHTML = "Servings: " + userRecipeObj.servings;
    content.appendChild(servingSize);

    let prepTime = document.createElement("P");
    prepTime.setAttribute("class", "recipeInformation");
    prepTime.innerHTML = "Prep Time: " + userRecipeObj.prepTime + " minutes";
    content.appendChild(prepTime);

    let cookTime = document.createElement("P");
    cookTime.setAttribute("class", "recipeInformation");
    cookTime.innerHTML = "Cook Time: " + userRecipeObj.cookTime + " minutes";
    content.appendChild(cookTime);

    let ingredientHeader = document.createElement("H2");
    ingredientHeader.innerHTML = "Ingredients";
    content.appendChild(ingredientHeader);

    let ingredientStart = document.createElement("P");
    ingredientStart.id = "userIngredientDisplay";
    ingredientStart.style.display = "block";
    content.appendChild(ingredientStart);

    for(let x = 0; x < userRecipeObj.ingredients.length; x++) {

        let newIngredient = document.createElement("P");
        newIngredient.innerHTML += userRecipeObj.ingredients[x].ingredientUOMQuan + " " + userRecipeObj.ingredients[x].ingredientUOM + " " +  userRecipeObj.ingredients[x].ingredient;
        ingredientStart.appendChild(newIngredient);
    };

    let instructionHeader = document.createElement("H2");
    instructionHeader.innerHTML = "Instructions";
    content.append(instructionHeader);


    let instructionList = document.createElement("ol");
        instructionList.id = "userInstructionDisplay";
        instructionList.style.listStylePosition = "inside";
        instructionList.style.textAlign = "center";
        content.appendChild(instructionList);

    for(let y = 0; y < userRecipeObj.instructions.length; y++) {

        let newInstruction = document.createElement("li");
        newInstruction.innerHTML += userRecipeObj.instructions[y].instruction;
        instructionList.appendChild(newInstruction);
    }

};