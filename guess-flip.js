
// Import the coinFlip function from your coin.mjs file
import { flipACoin } from "./modules/coin.mjs";

// Call the coinFlip function and put the return into STDOUT
let res = []
if (process.argv.length == 2) {
    console.log("Error: no input.")
    console.log("Usage: node guess-flip --call=[heads|tails]")    
} else {
    let call = process.argv[2].substring(7)
    console.log(flipACoin(call))
}
