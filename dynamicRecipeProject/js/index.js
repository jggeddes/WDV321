
		//Chili	INGREDIENTS/PREPARATION
		let chiliIngred = '<ul><li>2 tbsp. cooking oil </li><li>1 cup onion </li><li>1 cup chopped peppers </li><li>4 tbsp. Chili powder </li><li>1 tsp. Hot chili powder (optional) </li><li>1 lb ground beef or chicken </li><li>2 cans Red Beans </li><li>2 cans Kidney Beans </li><li>2 cans Tomato Puree </li><li>2 cans Tomato Sauce </li><li>1 cup shredded cheese (optional) </li><li>1/2 cup sour cream (optional)</li></ul>';
		
		let chiliIngredHalf = "<ul><li>1 tbsp. cooking oil </li><li>1/2 cup onion </li><li>1/2 cup chopped peppers </li><li>2 tbsp. Chili powder </li><li>1/2 tsp. Hot chili powder (optional) </li><li>1/2 lb ground beef or chicken </li><li>1 cans Red Beans </li><li>1 cans Kidney Beans </li><li>1 cans Tomato Puree </li><li>1 cans Tomato Sauce </li><li>1/2 cup shredded cheese (optional) </li><li>1/4 cup sour cream (optional)</li></ul>";

		let chiliIngredDouble = "<ul><li>4 tbsp. cooking oil </li><li>2 cup onion </li><li>2 cup chopped peppers </li><li>6 tbsp. Chili powder </li><li>2 tsp. Hot chili powder (optional) </li><li>2 lb ground beef or chicken </li><li>4 cans Red Beans </li><li>4 cans Kidney Beans </li><li>4 cans Tomato Puree </li><li>4 cans Tomato Sauce </li><li>2 cup shredded cheese (optional) </li><li>1 cup sour cream (optional)</li></ul>";

		let chiliPrep = "<ol><li>Heat cooking oil in 2 quart skillet. </li><li>Saute onions and peppers for 5 minutes. </li><li>Add spices and stir for 30 seconds. </li><li>Add meat and cook until browned. Approximately 15 minutes. </li><li>Pour contents of skillet into 3 quart crock pot. </li><li>Rinse beans and place in crockpot. </li><li>Open and pour Tomato puree and sauce into crock pot. </li><li>Cover crockpot and cook on low for 6 hours. </li><li>Serve into individual bowls and top with sour cream and cheese.</li></ol>";
	
	
	
	
		//Chocolate Chip Cookies INGREDIENTS/PREPARATION
		let cookieIngred = "<ul><li>1 cup Softened Butter</li> <li>1 cup White Sugar</li> <li>1 cup Packed Brown Sugar</li> <li>2 Large Eggs</li> <li>2 tsp Vanilla Extract</li> <li>1 tsp Baking Soda</li> <li>1 tsp Baking Soda</li> <li>2 cups Semisweet Chocolate Chips</li> <li>1 cup Chopped Walnuts (Optional)</ul>";
	
		let cookieIngredHalf = "<ul><li>1/2 cup Softened Butter</li> <li>1/2 cup White Sugar</li> <li>1/2 cup Packed Brown Sugar</li> <li>1 Large Egg</li> <li>1 tsp Vanilla Extract</li> <li>1/2 tsp Baking Soda</li> <li>1/2 tsp Baking Soda</li> <li>1 cup Semisweet Chocolate Chips</li> <li>1/2 cup Chopped Walnuts (Optional)</ul>";

		let cookieIngredDouble = "<ul><li>2 cups Softened Butter</li> <li>2 cups White Sugar</li> <li>2 cups Packed Brown Sugar</li> <li>4 Large Eggs</li> <li>4 tsp Vanilla Extract</li> <li>2 tsp Baking Soda</li> <li>2 tsp Baking Soda</li> <li>4 cups Semisweet Chocolate Chips</li> <li>2 cups Chopped Walnuts (Optional)</ul>";

		let cookiePrep = "<ol><li>Preheat oven to 350 degrees F (175 degrees C).</li> <li>Cream together the butter, white sugar, and brown sugar until smooth.</li> <li>Beat in the eggs one at a time, then stir in the vanilla.</li> <li>Dissolve baking soda in hot water. Add to batter along with salt.</li> <li>Stir in flour, chocolate chips, and nuts.</li> <li>Drop by large spoonfuls onto un-greased/greased pan(s).</li> <li>Bake for about 10 minutes in the preheated oven, or until edges are nicely browned.</li></ol>";
		
		
		
		
		//Banana Bread INGREDIENTS/PREPARTION
		let breadIngred = "<ul><li>2 cups All-Purpose Flour</li> <li>1 tps Baking Soda</li> <li>0.25 tps Salt</li> <li>0.5 cup Butter</li> <li>0.75 cup Brown Sugar</li> <li>2 Large Eggs (Beaten)</li> <li>2.33 cups Overripe Banana's</li></ul>";
	
		let breadIngredHalf = "<ul><li>1 cup All-Purpose Flour</li> <li>1/2 tps Baking Soda</li> <li>0.125 tps Salt</li> <li>0.25 cup Butter</li> <li>0.375 cup Brown Sugar</li> <li>1 Large Egg (Beaten)</li> <li>1.165 cups Overripe Banana's</li></ul>";

		let breadIngredDouble = "<ul><li>4 cups All-Purpose Flour</li> <li>2 tps Baking Soda</li> <li>1/2 tps Salt</li> <li>1 cup Butter</li> <li>1 1/2 cup Brown Sugar</li> <li>4 Large Eggs (Beaten)</li> <li>4.66 cups Overripe Banana's</li></ul>";

		let breadPrep = "<ol><li>Preheat oven to 350 degrees F (175 degrees C). Lightly grease a 9x5 inch loaf pan.</li> <li>In a large bowl, combine flour, baking soda and salt.</li> <li>In a separate bowl, mash the banana's.</li> <li>In another separate bowl, cream together butter and brown sugar. Stir in eggs and mashed bananas until well blended.</li> <li>Stir banana mixture into flour mixture; stir just to moisten.</li> <li>Pour batter into prepared loaf pan.</li> <li>Bake in preheated oven for 60 to 65 minutes, until a toothpick inserted into center of the loaf comes out clean</li> <li>Let bread cool in pan for 10 minutes, then turn out onto a wire rack.</li></ol>";
		
		
	
//recipe object	
	let recipes = {crockpotChili:
				   			{heading:  
							{
								recipeName: "Crockpot Chili",
								recipeImage: "<img src='images/chili.jpg' height=\"300\">",
								numServings: "6",
								recipeTime: "25 minutes",
								recipeCookTime: "6 hours",
								difficulty: "Easy",
							},
							 ingredients: 
							 {
								 originalChili: chiliIngred,
								 doubleChili: chiliIngredDouble,
								 halfChili: chiliIngredHalf,
							 },
							 preparation: chiliPrep,
							},
					chocolateChipCookies: 
							{heading:  
							{
								recipeName: "Chocolate Chip Cookies",
								recipeImage: "<img src='images/chocolateChipCookies.jpg' height=\"300\">",
								numServings: "24",
								recipeTime: "20 minutes",
								recipeCookTime: "10 minutes",
								difficulty: "Easy",
							},
							 ingredients: 
							 {
								 originalCookie: cookieIngred,
								 doubleCookie: cookieIngredDouble,
								 halfCookie: cookieIngredHalf,
							 },
							 preparation: cookiePrep,
							},
				   bananaBread:
				   			{heading:  
							{
								recipeName: "Banana Bread",
								recipeImage: "<img src='images/bananaBread.jpg' height=\"300\">",
								numServings: "12 (1 Loaf)",
								recipeTime: "15 minutes",
								recipeCookTime: "1 hour 5 minutes",
								difficulty: "Easy",
							},
							 ingredients: 
							 {
								 originalBread: breadIngred,
								 doubleBread: breadIngredDouble,
								 halfBread: breadIngredHalf,
							 },
							 preparation: breadPrep,
							},
					};
	
//Chili Recipe
	function chiliRecipe()
	{
		document.querySelector("#currentRecipe").style.display = "block";
		
		document.querySelector("#image").innerHTML = recipes.crockpotChili.heading.recipeImage;
		document.querySelector("#recipeName").innerHTML = recipes.crockpotChili.heading.recipeName;
		document.querySelector("#servings").innerHTML = recipes.crockpotChili.heading.numServings;
		document.querySelector("#prepTime").innerHTML = recipes.crockpotChili.heading.recipeTime;
		document.querySelector("#cookTime").innerHTML = recipes.crockpotChili.heading.recipeCookTime;
		document.querySelector("#difficulty").innerHTML = recipes.crockpotChili.heading.difficulty;
		document.querySelector("#ingred").innerHTML = recipes.crockpotChili.ingredients.originalChili;
		document.querySelector("#instruct").innerHTML = recipes.crockpotChili.preparation;
		
		//Select Serving Size
		document.querySelector("#half").innerHTML = "<br><input type='radio' name='size' value='Half' onClick='servingsChili(\"half\")'> Half<br>";
		document.querySelector("#double").innerHTML = "<input type='radio' name='size' value='Half' onClick='servingsChili(\"double\")'> Double<br>";
		document.querySelector("#original").innerHTML = "<input type='radio' name='size' value='Half' onClick='servingsChili(\"original\")'> Original";
		
		
		location.href = "#currentRecipe";
		
	}
	
	function servingsChili(inValue)
	{
		if(inValue == "half"){
			document.querySelector("#ingred").innerHTML = recipes.crockpotChili.ingredients.halfChili;
			document.querySelector("#servings").innerHTML = recipes.crockpotChili.heading.numServings = "3";
		}
		else if(inValue == "double"){
			document.querySelector("#ingred").innerHTML = recipes.crockpotChili.ingredients.doubleChili;
			document.querySelector("#servings").innerHTML = recipes.crockpotChili.heading.numServings = "12";
		}
		else{
			document.querySelector("#ingred").innerHTML = recipes.crockpotChili.ingredients.originalChili;
			document.querySelector("#servings").innerHTML = recipes.crockpotChili.heading.numServings = "6";
		}
	}


//Cookie Recipe 
function cookieRecipe()
	{
		document.querySelector("#currentRecipe").style.display = "block";
		
		document.querySelector("#image").innerHTML = recipes.chocolateChipCookies.heading.recipeImage;
		document.querySelector("#recipeName").innerHTML = recipes.chocolateChipCookies.heading.recipeName;
		document.querySelector("#servings").innerHTML = recipes.chocolateChipCookies.heading.numServings;
		document.querySelector("#prepTime").innerHTML = recipes.chocolateChipCookies.heading.recipeTime;
		document.querySelector("#cookTime").innerHTML = recipes.chocolateChipCookies.heading.recipeCookTime;
		document.querySelector("#difficulty").innerHTML = recipes.chocolateChipCookies.heading.difficulty;
		document.querySelector("#ingred").innerHTML = recipes.chocolateChipCookies.ingredients.originalCookie;
		document.querySelector("#instruct").innerHTML = recipes.chocolateChipCookies.preparation;
		
		//Select Serving Size
		document.querySelector("#half").innerHTML = "<br><input type='radio' name='size' value='Half' onClick='servingsCookie(\"half\")'> Half<br>";
		document.querySelector("#double").innerHTML = "<input type='radio' name='size' value='Half' onClick='servingsCookie(\"double\")'> Double<br>";
		document.querySelector("#original").innerHTML = "<input type='radio' name='size' value='Half' onClick='servingsCookie(\"original\")'> Original";
		
		location.href = "#currentRecipe";
	}
	
	function servingsCookie(inValue)
	{
		if(inValue == "half"){
			document.querySelector("#ingred").innerHTML = recipes.chocolateChipCookies.ingredients.halfCookie;
			document.querySelector("#servings").innerHTML = recipes.chocolateChipCookies.heading.numServings = "12";
		}
		else if(inValue == "double"){
			document.querySelector("#ingred").innerHTML = recipes.chocolateChipCookies.ingredients.doubleCookie;
			document.querySelector("#servings").innerHTML = recipes.chocolateChipCookies.heading.numServings = "48";
		}
		else{
			document.querySelector("#ingred").innerHTML = recipes.chocolateChipCookies.ingredients.originalCookie;
			document.querySelector("#servings").innerHTML = recipes.chocolateChipCookies.heading.numServings = "24";
		}
	}

//Banana Bread Recipe 
function breadRecipe()
	{
		document.querySelector("#currentRecipe").style.display = "block";
		
		document.querySelector("#image").innerHTML = recipes.bananaBread.heading.recipeImage;
		document.querySelector("#recipeName").innerHTML = recipes.bananaBread.heading.recipeName;
		document.querySelector("#servings").innerHTML = recipes.bananaBread.heading.numServings;
		document.querySelector("#prepTime").innerHTML = recipes.bananaBread.heading.recipeTime;
		document.querySelector("#cookTime").innerHTML = recipes.bananaBread.heading.recipeCookTime;
		document.querySelector("#difficulty").innerHTML = recipes.bananaBread.heading.difficulty;
		document.querySelector("#ingred").innerHTML = recipes.bananaBread.ingredients.originalBread;
		document.querySelector("#instruct").innerHTML = recipes.bananaBread.preparation;
		
		//Select Serving Size
		document.querySelector("#half").innerHTML = "<br><input type='radio' name='size' value='Half' onClick='servingsBread(\"half\")'> Half<br>";
		document.querySelector("#double").innerHTML = "<input type='radio' name='size' value='Half' onClick='servingsBread(\"double\")'> Double<br>";
		document.querySelector("#original").innerHTML = "<input type='radio' name='size' value='Half' onClick='servingsBread(\"original\")'> Original";
		
		
		location.href = "#currentRecipe";
		
	}
	
	function servingsBread(inValue)
	{
		if(inValue == "half"){
			document.querySelector("#ingred").innerHTML = recipes.bananaBread.ingredients.halfBread;
			document.querySelector("#servings").innerHTML = recipes.bananaBread.heading.numServings = "6 (Half Loaf)";
		}
		else if(inValue == "double"){
			document.querySelector("#ingred").innerHTML = recipes.bananaBread.ingredients.doubleBread;
			document.querySelector("#servings").innerHTML = recipes.bananaBread.heading.numServings = "24 (2 Loafs)";
		}
		else{
			document.querySelector("#ingred").innerHTML = recipes.bananaBread.ingredients.originalBread;
			document.querySelector("#servings").innerHTML = recipes.bananaBread.heading.numServings = "12 (1 Loaf)";
		}
	}