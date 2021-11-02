let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];

// let pronoun = []                     ///////////////Part with user input///////////////
// let adj = []
// let noun = []
// let collection = [pronoun, adj, noun]
// let partCollection = ["pronoun", "adjective", "noun"] 

function domGenerator(pronoun, adj, noun) {
    let domArray = []
    let count = 0
    for(let i=0; i<pronoun.length; i++) {
        for(let j=0; j<adj.length; j++) {
            for(let k=0; k<noun.length; k++){
                domArray[count] = pronoun[i]+adj[j]+noun[k]
                count++
            }
        }
    }
    return domArray
}
                                            ///////////////Part with user input///////////////         
// function userInput(arr, part, numberOfElements) {    
//     for(let i=0; i<numberOfElements; i++) {
//         arr[i] = prompt(`Enter ${part}: `)
//     }
// }

// let numberOfElements = prompt("Please enter the number of elements: ")

// for(let i=0; i<collection.length; i++) {
//     userInput(collection[i], partCollection[i], numberOfElements)
// }

console.log(domGenerator(pronoun, adj, noun))

