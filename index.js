// Code your solution here
function findMatching(arr, stri) {
    return arr.filter(function(num) {
        return num.toLowerCase() === stri.toLowerCase();
    });
}
function fuzzyMatch(arr, stri){
    return arr.filter(function(num){
        // console.log()
        // console.log(num[0,stri.length])
        // console.log(stri)
        return num.slice(0,2) === stri
    })}

// }fuzzyMatch(['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'],'Sa')
function matchName(arr, stri) {
    return arr.filter(function(name) {
        return name.name.toLowerCase() === stri.toLowerCase();
    });
}
