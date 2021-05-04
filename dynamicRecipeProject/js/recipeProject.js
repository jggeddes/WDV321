function pageSetupOnLoad() {

    let chosenRecipe;
		
        //alert('inside pageSetupOnLoad()');
        document.querySelector("#recipeType").addEventListener("change", function() {
        chosenRecipe = document.querySelector("#recipeType").value;

        if (chosenRecipe == "A") {
        	//Show Recipe Info.
            document.querySelector("#chili").style.display = "block";
            document.querySelector("#chocolateChipCookies").style.display = "none";
            document.querySelector("#bananaBread").style.display = "none";
            document.querySelector("#homemadeMacAndCheese").style.display = "none";
            
            //Show Ingredients
            document.querySelector("#ingredientsChili").style.display="block";
            document.querySelector("#ingredientsCCC").style.display="none";
            document.querySelector("#ingredientsBBread").style.display="none";
            document.querySelector("#ingredientsMAC").style.display="none";
            
            //New Recipe
            document.querySelector("#infoName").style.display="none";
      		document.querySelector("#infoNew").style.display="none";
      		document.querySelector("#ingredientsNew").style.display="none";
      		document.querySelector("#instructionsNew").style.display="none";
        }

        else if (chosenRecipe == "B") {
        	//Show Recipe Info.
            document.querySelector("#chili").style.display = "none";
            document.querySelector("#chocolateChipCookies").style.display = "block";
            document.querySelector("#bananaBread").style.display = "none";
            document.querySelector("#homemadeMacAndCheese").style.display = "none";
            
            //Show Ingredients
            document.querySelector("#ingredientsChili").style.display="none";
            document.querySelector("#ingredientsCCC").style.display="block";
            document.querySelector("#ingredientsBBread").style.display="none";
            document.querySelector("#ingredientsMAC").style.display="none";
            
            //New Recipe
            document.querySelector("#infoName").style.display="none";
      		document.querySelector("#infoNew").style.display="none";
      		document.querySelector("#ingredientsNew").style.display="none";
      		document.querySelector("#instructionsNew").style.display="none";
        }

        else if (chosenRecipe == "C") {
            //Show Recipe Info. 
            document.querySelector("#chili").style.display = "none";
            document.querySelector("#chocolateChipCookies").style.display = "none";
            document.querySelector("#bananaBread").style.display = "block";
            document.querySelector("#homemadeMacAndCheese").style.display = "none";
            
            //Show Ingredients
            document.querySelector("#ingredientsChili").style.display="none";
            document.querySelector("#ingredientsCCC").style.display="none";
            document.querySelector("#ingredientsBBread").style.display="block";
            document.querySelector("#ingredientsMAC").style.display="none";
            
            //New Recipe
            document.querySelector("#infoName").style.display="none";
      		document.querySelector("#infoNew").style.display="none";
      		document.querySelector("#ingredientsNew").style.display="none";
      		document.querySelector("#instructionsNew").style.display="none";
        }
        
        else if (chosenRecipe == "D") {
            //Show Recipe Info.
            document.querySelector("#chili").style.display = "none";
            document.querySelector("#chocolateChipCookies").style.display = "none";
            document.querySelector("#bananaBread").style.display = "none";
            document.querySelector("#homemadeMacAndCheese").style.display = "block";
            
            //Show Ingredients
            document.querySelector("#ingredientsChili").style.display="none";
            document.querySelector("#ingredientsCCC").style.display="none";
            document.querySelector("#ingredientsBBread").style.display="none";
            document.querySelector("#ingredientsMAC").style.display="block";
            
            //New Recipe
            document.querySelector("#infoName").style.display="none";
      		document.querySelector("#infoNew").style.display="none";
      		document.querySelector("#ingredientsNew").style.display="none";
      		document.querySelector("#instructionsNew").style.display="none";
        }
			
        else {
            //Show Recipe Info.
            document.querySelector("#chili").style.display = "none";
            document.querySelector("#chocolateChipCookies").style.display = "none";
            document.querySelector("#bananaBread").style.display = "none";
            document.querySelector("#homemadeMacAndCheese").style.display = "none";
            
            //Show Ingredients
            document.querySelector("#ingredientsChili").style.display="none";
            document.querySelector("#ingredientsCCC").style.display="none";
            document.querySelector("#ingredientsBBread").style.display="none";
            document.querySelector("#ingredientsMAC").style.display="none";
            
            //New Recipe
            document.querySelector("#infoName").style.display="block";
      		document.querySelector("#infoNew").style.display="block";
     		document.querySelector("#ingredientsNew").style.display="block";
      		document.querySelector("#instructionsNew").style.display="block";

        }
    });

}