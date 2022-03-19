// Mckayla Thomas
//Group 1 Questions
//Write a function that will tell me if a phrase, word, or input (STRING) is a palindrome.

const palindrome = (str) => { // arrow function declaration
    let reverseString = str.split("").reverse().join(""); //creates variable for reverse string 
    if (str === reverseString) {  /// compares input string to reverse of the string 
        return console.log("this is a palindrome") // if the two strings are the same return this is a palindrome
    } else {
        return console.log("this not a palindrome"); // if the two strings are not the same then return this is not a plaindrome
    } 
}


// Write a function that only accepts a number and returns an array that counts up to that number from 1; however, each multiple of 3 is 'yee' and every multiple of 4 is "haw" and every multiple of both is "yeehaw."
// the order of the if statement only matters if I did not include the second part(after &&) of the conditionals in the if else statements 
// for example if moved my first if to last else if and moved the else if for haw as the first if and removed the conditionals then the function would not work for number that are multiples of both 3 and 4
// if the second part(after the &&) of else if conditionals were removed the function will still work for multiples of both 3 and 4 because the function checks the 1st condition first
const yeehaw = (int) => { // arrow function declaration
    let array = []; // create an array called array 
    for (let i = 1; i <= int; i++) { //creates a for loop which will create variable i then check if i less than or equal to the integer entered then increment variable i until i is equal to the integer entered.
        if(i % 3 === 0 && i % 4 === 0){ // if statement that checks if the remainder of i/3 is equal to 0 and i/4 is equal to 0 
            array.push("yeehaw");// pushes(adds) yeehaw to the array if the remainder of i/3 and i/4 are both equal to 0 
        }
        else if (i % 4 === 0 && i % 3 !== 0 ){ //if statement that checks if the remainder of i/4 is equal to 0 and  the remainder of i/3 is not equal 0 
            array.push("haw");// pushes(adds) haw to the array if the remainder of i/4 is 0  and the remainder of i/3 is not equal 0 
        }
        else if (i % 3 === 0 && i % 4 !== 0  ){ //if statement that checks if the remainder of i/3 is equal to 0 and  the remainder of i/4 is not equal 0 
            array.push("yee"); //  pushes(adds) yee to the array if the remainder of i/3 is 0  and the remainder of i/4 is not equal 0 
        }
        else {
            array.push(i) // pushes the number i is to the array if all conditions do not apply to the number
        }
     }
    return console.log(array); // returns and prints the final array 
}

//please uncomment to run tests
/*
palindrome("anna"); // should return this is a palindrome

palindrome("hello"); // should return this is not a palindrome
yeehaw(4);
yeehaw(3);
yeehaw(12);
*/


//Group 2 Questions
let taskList=[ //creates an array of Objects called taskList, i was not sure if i could add id so, i did not include id as one of the properties
    {
    title:"math homework",  //creates object with properties title,description,dateCreated,dateDue,status
    description: "description1", 
    dateCreated: "10-13-2021", 
    dateDue: "10-15-2021",
    status: "New"
    },
    {
    title:"science homework", 
    description: "description2", 
    dateCreated: "10-14-2021", 
    dateDue: "10-15-2021",
    status: "Working on"
    },
    {
    title:"software homework", 
    description: "description3", 
    dateCreated: "10-10-2021", 
    dateDue: "10-12-2021",
    status: "Working on"
    },
]
const addNewElement = (newItem) => { //this function adds a new tasks to the list, the function takes in an object and add the object and the objects properties to the beginning of the list 
    taskList.unshift(newItem);// add the new object to the beginning of the list 
    return taskList; // this will return the new list including the new tasks
}
const deleteElement = (postionInList) =>{ // this function deletes an object(tasks), the function takes in the position of the tasks the user the wants to delete. For example if the user wanted to delete the first task, the positionInList will equal 0 and so on. 
    taskList.splice(postionInList,1); // deletes one object at positionInList
    return taskList;//returns the new list without the object deleted
}
const reorganizeList =(postionInList,itemToMove) => { //this function moves the tasks in the list to different positions, the function takes in position replaces and the item to replace it with
    taskList.splice(postionInList,0, itemToMove); // replaces an element at the positon provided
    deleteElement(postionInList); // deletes the tasks at the position provided to avoid repeats
    return taskList;
}

const editTitle= (indexInArray, editedItem) => { //this function edits the title in the list. The function takes in the index of the object to be edit and what title should be changed to
    taskList[indexInArray].title = editedItem; //changes the current title to the new title 
    console.log("After update: ", taskList) //returns the updated task list with the object's new title 
}

const editDescription = (indexInArray, editedItem) => { //this function edits the description in the list. The function takes in the index of the object to be edit and what description should be changed to
    taskList[indexInArray].description = editedItem; //changes the current description to the new description 
    console.log("After update: ", taskList) //returns the updated task list with the object's new description 
}

const editDateCreated= (indexInArray, editedItem) => { //this function edits the DateCreated in the list. The function takes in the index of the object to be edit and what DateCreated should be changed to
    taskList[indexInArray].dateCreated = editedItem; //changes the current DateCreated to the new DateCreated
    console.log("After update: ", taskList) //returns the updated task list with the object's new DateCreated 
}

const editDateDue= (indexInArray, editedItem) => {//this function edits the DateDue in the list. The function takes in the index of the object to be edit and what DateDue should be changed to
    taskList[indexInArray].dateDue = editedItem; //changes the current DateDue to the new DateDue
    console.log("After update: ", taskList) //returns the updated task list with the object's new DateDue 
}

const editStatus= (indexInArray, editedItem) => {//this function edits the Status in the list. The function takes in the index of the object to be edit and what Status should be changed to
    taskList[indexInArray].status = editedItem; //changes the current Status to the new Status 
    console.log("After update: ", taskList)//returns the updated task list with the object's new Status 
}

const editListItem = (indexInArray, propertyToEdit, newChange) => { //this function combines the edit funcitons. this function takes in the index of the oject to edit, the property to edit, and what to change the properties to
    if (propertyToEdit === 'title') { //if the property to edit is the title 
        editTitle(indexInArray, newChange) // then uses the editTitle to change the title to the new title
    }
    else if  (propertyToEdit === 'description') { //if the property to edit is the description
        editDescription(indexInArray, newChange) // then uses the editDescription to change the description to the new description
    }
    else if  (propertyToEdit === 'dateCreated') { //if the property to edit is the dateCreated
        editDateCreated(indexInArray, newChange) // then uses the editDateCreated to change the DateCreated to the new DateCreated
    }
    else if  (propertyToEdit === 'dateDue') { //if the property to edit is the dateDue
        editDateDue(indexInArray, newChange)// then uses the propertyToEdit to change the dateDue to the new dateDue
    }
    else if  (propertyToEdit === 'status') { //if the property to edit is the status
        editStatus(indexInArray, newChange)// then uses the editStatus to change the status to the new status
    }
    else { 
        console.log("please enter valid property to change"); //if a non valid property is entered than logs please enter valid property to change to the console
    }
}



//plese uncomment to run tests
/*


let test = { //creates tests objects 
title:"test", 
description: "test", 
dateCreated: "test", 
dateDue: "test",
status: "test"
}


console.log(addNewElement(test));
console.log(deleteElement(1));
console.log(reorganizeList(0,test))
console.log(reorganizeList(1,taskList[0]))

editListItem(0,'title',"new Title");
editListItem(1,'description',"new description");
*/
