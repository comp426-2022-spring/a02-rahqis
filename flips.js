// Import the coinFlip function from your coin.mjs file
import { coinFlips, countFlips } from "./modules/coin.mjs";

// Call the coinFlip function and put the return into STDOUT
let res = []
if (process.argv.length == 2) {
    res = coinFlips(10)
    console.log(res)
    console.log(countFlips(res))
    
} else {
    let count = process.argv[2].substring(9)
    res = coinFlips(count)
    console.log(res)
    console.log(countFlips(res))
}

