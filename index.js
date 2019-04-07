// Code your solution here
const findMatching = (array, name) => array.filter(item => item.toLowerCase() === name.toLowerCase())

// const fuzzyMatch = (array, start) => array.filter(item => item.toLowerCase().slice(0,(start.length)) === start.toLowerCase())
const fuzzyMatch = (array, start) => {
    return array.filter(item => {
        return item.toLowerCase().slice(0,(start.length)) === start.toLowerCase();
    })
}

function matchName(objsArray, name) {
    return objsArray.filter(item => {
        return item.name === name
    })
}