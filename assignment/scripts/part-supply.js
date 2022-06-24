console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40 
//    & console.log the variable
console.log('1. Number of partsNeeded:');
let partsNeeded = 40;
console.log(partsNeeded);

// 2. Create a variable called 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
console.log('2. Array of supplyChanges:');
let supplyChanges = [3,5,-6,0,7,11];
console.log(supplyChanges);

// 3. Console log the value of the second item in the 'supplyChanges' array
console.log('3. Second supplyChange is:');
console.log(supplyChanges[1]);

// 4. The last item was added by mistake. Remove it from the 'supplyChanges' 
//    array & console.log the value removed.
console.log('4. Removed item:');
let removeLastItem = supplyChanges.pop();
console.log(removeLastItem);

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
console.log('5. Adding 25 to supplyChanges.');
addToEnd = (item) => {
    supplyChanges.push(item);
    console.log(`Item: ${item} was added`);
    return console.log(`The array after adding ${item}: `, supplyChanges);
}
addToEnd(25);
//console.log(supplyChanges);

// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.' 
//    - if the value is 0, log 'No Change.'
//    - if the value is negative, format the log as 'Removed x parts.' 
console.log('6. Showing supplyChanges...');

/*
for (init; stopCondit; iterator){
    init begins at 0
    stop -- i must be less than array.length
    i++ to go through each one
    run through each value of the array

    if i > 0 log 'added x parts.'
    else if i === 0, 'no change.'
    else if i < 0 'removed x parts'
    else 'invalid entry';
}
*/

for (i = 0; i < supplyChanges.length; i++){
    if (supplyChanges[i] > 0){
        console.log(`Added ${supplyChanges[i]} parts.`)
    } else if (supplyChanges[i] === 0){
        console.log(`No Change.`)
    } else if (supplyChanges[i] < 0) {
        console.log(`Removed ${supplyChanges[i]} parts.`)
    } else {
        console.log('Invalid entry in array');
    }
};


// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop. 
console.log('7. Showing supplyChanges with "for of" loop');
for (let update of supplyChanges) {
    if (update > 0) {
        console.log(`Added ${update} parts.`);
    } else if (update === 0) {
        console.log(`No Change.`);
    } else if (update < 0) {
        console.log(`Removed ${update} parts.`)
    } else {
        console.log('Invalid entry in array.')
    };
};

// 8. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.
let total = 0;
console.log('8. Total supplies available is:');
for (a = 0; a < supplyChanges.length; a++) {
    total += supplyChanges[a];
}
console.log(total);

// 9. We have a large stash of parts in our warehouse that we 
//    need to box up and get ready for shipment. 
//    There are 572 parts in total, and each box holds 7 parts.
//    Use a `while` loop to keep adding parts to boxes until
//    no more boxes can be filled.
//    Then log how many boxes were filled, and how many parts are left over.
console.log('9. Filling boxes with a "while" loop');
/*
572 parts 
each box holds 7 parts
while (condition) {
    code block
    iteration
}
log how many boxes were filled, how many left over.
*/

let totalParts = 572;
let totalBoxes = 0;
let remainingParts;

while (totalParts > 7){
    totalBoxes += 1;
    totalParts -= 7;
if (totalParts > 7) {
    remainingParts = totalParts - 7;
}
}

console.log(`Total boxes filled: ${totalBoxes}`);
console.log(`Parts remaining: ${remainingParts}`);

/*
boxesFilled = (totalParts, partsPerBox) => {
    let totalBoxes = 0;
    let remainingParts;
    while (totalParts >= partsPerBox){
        totalBoxes += 1;
        totalParts -= partsPerBox;
            if (totalParts >= partsPerBox) {
            remainingParts = totalParts - partsPerBox;
    }
    }
    console.log(`Total boxes filled: ${totalBoxes}. \nParts left over: ${remainingParts}`)
};
boxesFilled(851, 7);
*/