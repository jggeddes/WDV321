function ingredientsChili() {
  let ingredient = {
    ingredientName:"Sugar",
    ingredientUnitOfMeasure: "tablespoons",
    ingredientQuantity: 2
  };

  //let listOfIngredients = [ingredient, ingredient, ingredient...];

  let listOfIngredients = [
    {ingredientName:"Cooking Oil", ingredientUnitOfMeasure: "tbsp", ingredientQuantity: 2},
    {ingredientName:"Onion", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1},
    {ingredientName:"Chopped Pepper", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1},
    {ingredientName:"Chili Powder", ingredientUnitOfMeasure: "tbsp", ingredientQuantity: 4},
    {ingredientName:"Hot Chili Powder (optional)", ingredientUnitOfMeasure: "tsp", ingredientQuantity: 1},
    {ingredientName:"Ground Beef or Chicken", ingredientUnitOfMeasure: "lb", ingredientQuantity: 1},
    {ingredientName:"Red Beans", ingredientUnitOfMeasure: "cans", ingredientQuantity: 2},
    {ingredientName:"Kidney Beans", ingredientUnitOfMeasure: "cans", ingredientQuantity: 2},
    {ingredientName:"Tomato Puree", ingredientUnitOfMeasure: "cans", ingredientQuantity: 2},
    {ingredientName:"Tomato Sauce", ingredientUnitOfMeasure: "cans", ingredientQuantity: 2},
    {ingredientName:"Shredded Cheese (optional)", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1},
    {ingredientName:"Sour Cream (optional)", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1/2}
  ];

  //document.getElementById("demo").innerHTML=listOfIngredients[0].ingredientName;
  //listOfIngredients.push(ingredient);
  let i;
  let ingredientList = "";

  for (i=0; i<listOfIngredients.length; i++) {
    ingredientList += listOfIngredients[i].ingredientQuantity + " " + listOfIngredients[i].ingredientUnitOfMeasure + " " + listOfIngredients[i].ingredientName + "<br>";
  }

  document.querySelector("#ingredientsChili").innerHTML = ingredientList;

}

function halfServingChangeChili() {
  let listOfIngredients = [
    {ingredientName:"Cooking Oil", ingredientUnitOfMeasure: "tbsp", ingredientQuantity: 2},
    {ingredientName:"Onion", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1},
    {ingredientName:"Chopped Pepper", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1},
    {ingredientName:"Chili Powder", ingredientUnitOfMeasure: "tbsp", ingredientQuantity: 4},
    {ingredientName:"Hot Chili Powder (optional)", ingredientUnitOfMeasure: "tsp", ingredientQuantity: 1},
    {ingredientName:"Ground Beef or Chicken", ingredientUnitOfMeasure: "lb", ingredientQuantity: 1},
    {ingredientName:"Red Beans", ingredientUnitOfMeasure: "cans", ingredientQuantity: 2},
    {ingredientName:"Kidney Beans", ingredientUnitOfMeasure: "cans", ingredientQuantity: 2},
    {ingredientName:"Tomato Puree", ingredientUnitOfMeasure: "cans", ingredientQuantity: 2},
    {ingredientName:"Tomato Sauce", ingredientUnitOfMeasure: "cans", ingredientQuantity: 2},
    {ingredientName:"Shredded Cheese (optional)", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1},
    {ingredientName:"Sour Cream (optional)", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1/2}
  ];

  let i;
  let ingredientList = "";

  for (i=0; i<listOfIngredients.length; i++) {
    ingredientList += (listOfIngredients[i].ingredientQuantity/2) + " " + listOfIngredients[i].ingredientUnitOfMeasure + " " + listOfIngredients[i].ingredientName + "<br>";
  }

  document.querySelector("#ingredientsChili").innerHTML = ingredientList;

}

function doubleServingChangeChili() {
  let listOfIngredients = [
    {ingredientName:"Cooking Oil", ingredientUnitOfMeasure: "tbsp", ingredientQuantity: 2},
    {ingredientName:"Onion", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1},
    {ingredientName:"Chopped Pepper", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1},
    {ingredientName:"Chili Powder", ingredientUnitOfMeasure: "tbsp", ingredientQuantity: 4},
    {ingredientName:"Hot Chili Powder (optional)", ingredientUnitOfMeasure: "tsp", ingredientQuantity: 1},
    {ingredientName:"Ground Beef or Chicken", ingredientUnitOfMeasure: "lb", ingredientQuantity: 1},
    {ingredientName:"Red Beans", ingredientUnitOfMeasure: "cans", ingredientQuantity: 2},
    {ingredientName:"Kidney Beans", ingredientUnitOfMeasure: "cans", ingredientQuantity: 2},
    {ingredientName:"Tomato Puree", ingredientUnitOfMeasure: "cans", ingredientQuantity: 2},
    {ingredientName:"Tomato Sauce", ingredientUnitOfMeasure: "cans", ingredientQuantity: 2},
    {ingredientName:"Shredded Cheese (optional)", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1},
    {ingredientName:"Sour Cream (optional)", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1/2}
  ];

  let i;
  let ingredientList = "";

  for (i=0; i<listOfIngredients.length; i++) {
    ingredientList += (listOfIngredients[i].ingredientQuantity*2) + " " + listOfIngredients[i].ingredientUnitOfMeasure + " " + listOfIngredients[i].ingredientName + "<br>";
  }

  document.querySelector("#ingredientsChili").innerHTML = ingredientList;

}




function ingredientsChocolateCookies() {
    let ingredient = {
      ingredientName:"Sugar",
      ingredientUnitOfMeasure: "tablespoons",
      ingredientQuantity: 2
    };

    let listOfIngredients = [
      {ingredientName:"Softened Butter", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1},
      {ingredientName:"White Sugar", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1},
      {ingredientName:"Packed Brown Sugar", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1},
      {ingredientName:"Large Eggs", ingredientUnitOfMeasure: "", ingredientQuantity: 2},
      {ingredientName:"Vanilla Extract", ingredientUnitOfMeasure: "tsp", ingredientQuantity: 2},
      {ingredientName:"Baking Soda", ingredientUnitOfMeasure: "tsp", ingredientQuantity: 1},
      {ingredientName:"All Purpose Four", ingredientUnitOfMeasure: "cups", ingredientQuantity: 3},
      {ingredientName:"Semisweet Chocolate Chips", ingredientUnitOfMeasure: "cups", ingredientQuantity: 2},
      {ingredientName:"Chopped Walnuts", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1}
    ];

    //listOfIngredients.push(ingredient);
    let i;
    let ingredientList = "";

    for (i=0; i<listOfIngredients.length; i++) {
      ingredientList += listOfIngredients[i].ingredientQuantity + " " + listOfIngredients[i].ingredientUnitOfMeasure + " " + listOfIngredients[i].ingredientName + "<br>";
    }

    document.querySelector("#ingredientsCCC").innerHTML = ingredientList;
}

function halfServingChocolateCookies() {
  let listOfIngredients = [
    {ingredientName:"Softened Butter", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1},
    {ingredientName:"White Sugar", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1},
    {ingredientName:"Packed Brown Sugar", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1},
    {ingredientName:"Large Eggs", ingredientUnitOfMeasure: "", ingredientQuantity: 2},
    {ingredientName:"Vanilla Extract", ingredientUnitOfMeasure: "tsp", ingredientQuantity: 2},
    {ingredientName:"Baking Soda", ingredientUnitOfMeasure: "tsp", ingredientQuantity: 1},
    {ingredientName:"All Purpose Four", ingredientUnitOfMeasure: "cups", ingredientQuantity: 3},
    {ingredientName:"Semisweet Chocolate Chips", ingredientUnitOfMeasure: "cups", ingredientQuantity: 2},
    {ingredientName:"Chopped Walnuts", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1}
  ];

  let i;
  let ingredientList = "";

  for (i=0; i<listOfIngredients.length; i++) {
    ingredientList += (listOfIngredients[i].ingredientQuantity/2) + " " + listOfIngredients[i].ingredientUnitOfMeasure + " " + listOfIngredients[i].ingredientName + "<br>";
  }

  document.querySelector("#ingredientsCCC").innerHTML = ingredientList;

}

function doubleServingChocolateCookies() {
  let listOfIngredients = [
    {ingredientName:"Softened Butter", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1},
    {ingredientName:"White Sugar", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1},
    {ingredientName:"Packed Brown Sugar", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1},
    {ingredientName:"Large Eggs", ingredientUnitOfMeasure: "", ingredientQuantity: 2},
    {ingredientName:"Vanilla Extract", ingredientUnitOfMeasure: "tsp", ingredientQuantity: 2},
    {ingredientName:"Baking Soda", ingredientUnitOfMeasure: "tsp", ingredientQuantity: 1},
    {ingredientName:"All Purpose Four", ingredientUnitOfMeasure: "cups", ingredientQuantity: 3},
    {ingredientName:"Semisweet Chocolate Chips", ingredientUnitOfMeasure: "cups", ingredientQuantity: 2},
    {ingredientName:"Chopped Walnuts", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1}
  ];

  let i;
  let ingredientList = "";

  for (i=0; i<listOfIngredients.length; i++) {
    ingredientList += (listOfIngredients[i].ingredientQuantity*2) + " " + listOfIngredients[i].ingredientUnitOfMeasure + " " + listOfIngredients[i].ingredientName + "<br>";
  }

  document.querySelector("#ingredientsCCC").innerHTML = ingredientList;

}




function ingredientsMacAndCheese() {
  let ingredient = {
    ingredientName:"Sugar",
    ingredientUnitOfMeasure: "tablespoons",
    ingredientQuantity: 2
  };

  let listOfIngredients = [
    {ingredientName:"Uncooked Elbow Macaroni", ingredientUnitOfMeasure: "oz", ingredientQuantity: 8},
    {ingredientName:"Shredded Sharp Cheddar Cheese", ingredientUnitOfMeasure: "cups", ingredientQuantity: 2},
    {ingredientName:"Grated Parmesan Cheese", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1/2},
    {ingredientName:"Milk", ingredientUnitOfMeasure: "cups", ingredientQuantity: 3},
    {ingredientName:"Butter", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1/4},
    {ingredientName:"All Purpose Flour", ingredientUnitOfMeasure: "tbsp", ingredientQuantity: 2.5},
    {ingredientName:"Butter", ingredientUnitOfMeasure: "tbsp", ingredientQuantity: 2},
    {ingredientName:"Bread Crumbs", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1/2},
    {ingredientName:"Paprika", ingredientUnitOfMeasure: "pinch", ingredientQuantity: 1}
  ];

  //listOfIngredients.push(ingredient);
  let i;
  let ingredientList = "";

  for (i=0; i<listOfIngredients.length; i++) {
    ingredientList += listOfIngredients[i].ingredientQuantity + " " + listOfIngredients[i].ingredientUnitOfMeasure + " " + listOfIngredients[i].ingredientName + "<br>";
  }

  document.querySelector("#ingredientsMAC").innerHTML = ingredientList;

}

function halfServingMacAndCheese() {
  let listOfIngredients = [
    {ingredientName:"Uncooked Elbow Macaroni", ingredientUnitOfMeasure: "oz", ingredientQuantity: 8},
    {ingredientName:"Shredded Sharp Cheddar Cheese", ingredientUnitOfMeasure: "cups", ingredientQuantity: 2},
    {ingredientName:"Grated Parmesan Cheese", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1/2},
    {ingredientName:"Milk", ingredientUnitOfMeasure: "cups", ingredientQuantity: 3},
    {ingredientName:"Butter", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1/4},
    {ingredientName:"All Purpose Flour", ingredientUnitOfMeasure: "tbsp", ingredientQuantity: 2.5},
    {ingredientName:"Butter", ingredientUnitOfMeasure: "tbsp", ingredientQuantity: 2},
    {ingredientName:"Bread Crumbs", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1/2},
    {ingredientName:"Paprika", ingredientUnitOfMeasure: "pinch", ingredientQuantity: 1}
  ];

  let i;
  let ingredientList = "";

  for (i=0; i<listOfIngredients.length; i++) {
    ingredientList += (listOfIngredients[i].ingredientQuantity/2) + " " + listOfIngredients[i].ingredientUnitOfMeasure + " " + listOfIngredients[i].ingredientName + "<br>";
  }

  document.querySelector("#ingredientsMAC").innerHTML = ingredientList;

}

function doubleServingMacAndCheese() {
  let listOfIngredients = [
    {ingredientName:"Uncooked Elbow Macaroni", ingredientUnitOfMeasure: "oz", ingredientQuantity: 8},
    {ingredientName:"Shredded Sharp Cheddar Cheese", ingredientUnitOfMeasure: "cups", ingredientQuantity: 2},
    {ingredientName:"Grated Parmesan Cheese", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1/2},
    {ingredientName:"Milk", ingredientUnitOfMeasure: "cups", ingredientQuantity: 3},
    {ingredientName:"Butter", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1/4},
    {ingredientName:"All Purpose Flour", ingredientUnitOfMeasure: "tbsp", ingredientQuantity: 2.5},
    {ingredientName:"Butter", ingredientUnitOfMeasure: "tbsp", ingredientQuantity: 2},
    {ingredientName:"Bread Crumbs", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1/2},
    {ingredientName:"Paprika", ingredientUnitOfMeasure: "pinch", ingredientQuantity: 1}
  ];

  let i;
  let ingredientList = "";

  for (i=0; i<listOfIngredients.length; i++) {
    ingredientList += (listOfIngredients[i].ingredientQuantity*2) + " " + listOfIngredients[i].ingredientUnitOfMeasure + " " + listOfIngredients[i].ingredientName + "<br>";
  }

  document.querySelector("#ingredientsMAC").innerHTML = ingredientList;

}




function ingredientsBananaBread() {
  let ingredient = {
    ingredientName:"Sugar",
    ingredientUnitOfMeasure: "tablespoons",
    ingredientQuantity: 2
  };

  let listOfIngredients = [
    {ingredientName:"All-Purpose Flour", ingredientUnitOfMeasure: "cups", ingredientQuantity: 2},
    {ingredientName:"Baking Soda", ingredientUnitOfMeasure: "tps", ingredientQuantity: 1},
    {ingredientName:"Salt", ingredientUnitOfMeasure: "tps", ingredientQuantity: 1/4},
    {ingredientName:"Butter", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1/2},
    {ingredientName:"Brown Sugar", ingredientUnitOfMeasure: "cup", ingredientQuantity: 3/4},
    {ingredientName:"Eggs (Beaten)", ingredientUnitOfMeasure: "Large", ingredientQuantity: 2},
    {ingredientName:"Overripe Banana's", ingredientUnitOfMeasure: "cups", ingredientQuantity: 2.33}
  ];

  //listOfIngredients.push(ingredient);
  let i;
  let ingredientList = "";

  for (i=0; i<listOfIngredients.length; i++) {
    ingredientList += listOfIngredients[i].ingredientQuantity + " " + listOfIngredients[i].ingredientUnitOfMeasure + " " + listOfIngredients[i].ingredientName + "<br>";
  }

  document.querySelector("#ingredientsBBread").innerHTML = ingredientList;

}

function halfServingBananaBread() {
  let listOfIngredients = [
    {ingredientName:"All-Purpose Flour", ingredientUnitOfMeasure: "cups", ingredientQuantity: 2},
    {ingredientName:"Baking Soda", ingredientUnitOfMeasure: "tps", ingredientQuantity: 1},
    {ingredientName:"Salt", ingredientUnitOfMeasure: "tps", ingredientQuantity: 1/4},
    {ingredientName:"Butter", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1/2},
    {ingredientName:"Brown Sugar", ingredientUnitOfMeasure: "cup", ingredientQuantity: 3/4},
    {ingredientName:"Eggs (Beaten)", ingredientUnitOfMeasure: "Large", ingredientQuantity: 2},
    {ingredientName:"Overripe Banana's", ingredientUnitOfMeasure: "cups", ingredientQuantity: 2.33}
  ];

  let i;
  let ingredientList = "";

  for (i=0; i<listOfIngredients.length; i++) {
    ingredientList += (listOfIngredients[i].ingredientQuantity/2) + " " + listOfIngredients[i].ingredientUnitOfMeasure + " " + listOfIngredients[i].ingredientName + "<br>";
  }

  document.querySelector("#ingredientsBBread").innerHTML = ingredientList;

}

function doubleServingBananaBread() {
  let listOfIngredients = [
    {ingredientName:"All-Purpose Flour", ingredientUnitOfMeasure: "cups", ingredientQuantity: 2},
    {ingredientName:"Baking Soda", ingredientUnitOfMeasure: "tps", ingredientQuantity: 1},
    {ingredientName:"Salt", ingredientUnitOfMeasure: "tps", ingredientQuantity: 1/4},
    {ingredientName:"Butter", ingredientUnitOfMeasure: "cup", ingredientQuantity: 1/2},
    {ingredientName:"Brown Sugar", ingredientUnitOfMeasure: "cup", ingredientQuantity: 3/4},
    {ingredientName:"Eggs (Beaten)", ingredientUnitOfMeasure: "Large", ingredientQuantity: 2},
    {ingredientName:"Overripe Banana's", ingredientUnitOfMeasure: "cups", ingredientQuantity: 2.33}
  ];

  let i;
  let ingredientList = "";

  for (i=0; i<listOfIngredients.length; i++) {
    ingredientList += (listOfIngredients[i].ingredientQuantity*2) + " " + listOfIngredients[i].ingredientUnitOfMeasure + " " + listOfIngredients[i].ingredientName + "<br>";
  }

  document.querySelector("#ingredientsBBread").innerHTML = ingredientList;

}