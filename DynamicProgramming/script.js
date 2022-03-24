let list1 = [1,2,3,4,5,6,7,8,9,10]

/**
 * Linear Search in an array
 * @param {*} list 
 * @param {*} target 
 * @returns 
 */
function linear_search (list, target){

    for (i=0; i<list.length; i++){
        if (list[i] == target) {
            return i; // Returns the position of the target
        }
    }
}

/**
 *  Binary Search
 * @param {An Array in which we search for a value} list 
 * @param {The Number which we are searching} target 
 * @returns 
 */
function binarySearch (list, target){
    let first = 0;
    let last = list1.length - 1;

    while (first <= last){
        let midpoint = Math.floor((first + last) / 2);
        
        if (list[midpoint] === target) {
            return midpoint
        }
        else if (list[midpoint] < target){
            first = midpoint + 1;

        }
        else {
            last = midpoint - 1;
        }
    }

    return -1;
}


/**
 * Displays the result in the console
 * @param {A String Value for determining which Algorithm is going to be used} searchAlgorithm 
 */
function displayResultInConsole(searchAlgorithm) {

    if (searchAlgorithm == "liniar") {
        let result = linearSearch(list1, 6);
        getResultValue(result);
    }
    else if (searchAlgorithm == "binary") {
        let result = binarySearch(list1, 6);
        getResultValue(result);
    }

    
    
}

/**
 * 
 * @param {Gives the the result value Back or Not Found Back} result 
 */

function getResultValue(result) {
    if (result == undefined) {
        console.log("Your Target is not found");
    }
    else {
        console.log("Result is on the index: " + result);
    }
}

