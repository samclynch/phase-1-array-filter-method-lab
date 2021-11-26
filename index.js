// Code your solution here
// function findMatching(drivers, string){
//     for (const driver of drivers){
//         if (string(driver)){
//             console.log(drivers.name);
//         }
//     }
// }
// findMatching(drivers, function (drivers){
//     return drivers.name === "Bobby";
// })

// function findMatching(){
// const names = names.filter(name => name.includes('Bobby'));
// }

// console.log(result)

function findMatching(drivers, string){
    // const answer = drivers.filter(element => element === string || drivers.name.toLowerCase().includes(string.toLowerCase()))
    let answer = drivers.filter(element => element === string || element === string.toLowerCase());
    return answer ;
}
function fuzzyMatch(drivers, string){
    let firstLetter = drivers.filter(driver => driver.slice(0, string.length) === string)
    return firstLetter;
}
function matchName(drivers, string){
    let name = drivers.filter(driver => driver.name == string);
    return name;
}