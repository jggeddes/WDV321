// JavaScript Document
var instruction = [];

        //reset form
        function ResetForm() {
            document.querySelector("input").value = "";
            
        }

        //load local stoarage data on button click
        function loadDataFromLocalStoarage() {
            document.querySelector("[name='recipe-title']").value = localStorage.getItem("recipe-title") || "";
            document.querySelector("[name='recipe-image']").value = localStorage.getItem("image") || "";
            document.querySelector("[name='servings']").value = localStorage.getItem("servings") || "";
            document.querySelector("[name='prep-time']").value = localStorage.getItem("preptime") || "";
            document.querySelector("[name='cook-time']").value = localStorage.getItem("cooktime") || "";
            document.querySelector("[name='ingredient1']").value = localStorage.getItem("ingredient1") || "";
            document.querySelector("[name='UOMQuantity1']").value = localStorage.getItem("UOMQuantity1") || "";
            document.getElementById("prep-time-measure").value = localStorage.getItem("preptimemeasure") || "";
            document.getElementById("difficultylevel").value = localStorage.getItem("difficultylevel") || "";

        }

        //process form
        function processForm() {
            //set data in the local stoarage
            localStorage.setItem("recipe-title", document.querySelector("[name='recipe-title']").value);
            localStorage.setItem("image", document.querySelector("[name='recipe-image']").value);
            localStorage.setItem("servings", document.querySelector("[name='servings']").value);
            localStorage.setItem("preptime", document.querySelector("[name='prep-time']").value);
            localStorage.setItem("cooktime", document.querySelector("[name='cook-time']").value);
            localStorage.setItem("ingredient1", document.querySelector("[name='ingredient1']").value);
            localStorage.setItem("UOMQuantity1", document.querySelector("[name='UOMQuantity1']").value);

            localStorage.setItem("preptimemeasure", document.getElementById("prep-time-measure").value);
            //difficultylevel
            localStorage.setItem("difficultylevel", document.getElementById("difficultylevel").value);
             
        }


//Add Instructions

let ingredientCount = 1;
let instructionCount = 1;
let UOMOptions = ["--Select UOM--", "Pinch", "Teaspoon", "Tablespoon", "Fluid Ounces", "Cup", "Can(s)", "Pint", "Gallon", '" " (eggs or bread)'];

function createRecipeInputField() {

    ingredientCount++;

    //FIRST INPUT FIELD

    let userIngredientsContainer = document.createElement("DIV");
    userIngredientsContainer.className= "ingredientSection";
    document.querySelector(".ingredients").appendChild(userIngredientsContainer);

    let ingredientInputLabel = document.createElement("label");
    ingredientInputLabel.htmlFor = "ingredient" + ingredientCount;
    ingredientInputLabel.innerHTML = "Ingredient " + ingredientCount;
    userIngredientsContainer.appendChild(ingredientInputLabel);

    let ingredientInput = document.createElement("input");
    ingredientInput.id = "ingredient" + ingredientCount;
    ingredientInput.type = "text";
    ingredientInput.name = "ingredient" + ingredientCount;
    userIngredientsContainer.appendChild(ingredientInput);

    //SECOND INPUT FIELD

    let ingredientInputUOMQuanLabel = document.createElement("label");
    ingredientInputUOMQuanLabel.htmlFor = "UOMQuantity" + ingredientCount;
    ingredientInputUOMQuanLabel.innerHTML = "Measurement quantity  " + ingredientCount;
    userIngredientsContainer.appendChild(ingredientInputUOMQuanLabel);

    let ingredientInputUOMQuantity = document.createElement("input");
    ingredientInputUOMQuantity.id = "UOMQuantity" + ingredientCount;
    ingredientInputUOMQuantity.type = "number";
    ingredientInputUOMQuantity.name = "ingredient" + ingredientCount;
    userIngredientsContainer.appendChild(ingredientInputUOMQuantity);

    //DROP DOWN

    let UOMSelectLabel = document.createElement("label");
    UOMSelectLabel.htmlFor = "ingredientUOM " + ingredientCount;
    UOMSelectLabel.innerHTML = "Unit of measurement " + ingredientCount;
    userIngredientsContainer.appendChild(UOMSelectLabel);

    let ingredientInputUOM = document.createElement("select");
    ingredientInputUOM.id = "ingredientUOM" + ingredientCount;
    for(let x = 0; x < UOMOptions.length; x++) {
        let option = document.createElement("option");
        option.text = UOMOptions[x];
        ingredientInputUOM.appendChild(option);
    };

    userIngredientsContainer.appendChild(ingredientInputUOM);
}

function createInstructionField() {

    instructionCount++;

    let userInstructionsContainer = document.createElement("DIV");
    userInstructionsContainer.className= "instructionSection";
    document.querySelector(".instructions").appendChild(userInstructionsContainer);

    let instructionInputLabel = document.createElement("label");
    instructionInputLabel.htmlFor = "instruction" + instructionCount;
    instructionInputLabel.innerHTML = "Instruction " + instructionCount;
    userInstructionsContainer.appendChild(instructionInputLabel);

    let instructionInput = document.createElement("input");
    instructionInput.id = "instruction" + instructionCount;
    instructionInput.type = "text";
    instructionInput.name = "instruction" + instructionCount;
    userInstructionsContainer.appendChild(instructionInput);
}

document.querySelector("#addInstruction").addEventListener("click", createInstructionField);
