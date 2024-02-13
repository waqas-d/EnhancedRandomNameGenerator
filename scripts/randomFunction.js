export { RandomGroups }; 
function RandomGroups(array) {
    let numberName = Math.floor(Math.random() * array.length)
    return array[numberName]
}