const lunches = [];
function addLunchToEnd(lunch, str){
  lunch.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return lunch

}
function addLunchToStart(lunch, str){
  lunch.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return lunch
};
function removeLastLunch(last){
  if (last.length === 0){
    console.log("No lunches to remove.")
  }
  else{
    let lastItem = last.pop()
    console.log(`${lastItem} removed from the end of the lunch menu.`);
    return last

  }
}

console.log(removeLastLunch([]))
// console.log(lunches)

function removeFirstLunch(lunch){
  let firstItem = lunch.shift()
  if (lunch.length === 0){
    console.log("No lunches to remove.")
  }
  else{
    console.log(`${firstItem} removed from the start of the lunch menu.`)
  }
  return lunch
}

function getRandomLunch(array){
  if(array.length === 0){
    console.log("No lunches available.")
  }
  else{
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomLunch = array[randomIndex];
    console.log(`Randomly selected lunch: ${randomLunch}`);
  }
}

function showLunchMenu(show){
  if(show.length === 0){
    console.log("The menu is empty.")
  }

  else{
    console.log(`Menu items: ${show.join(", ")}`)
}
}