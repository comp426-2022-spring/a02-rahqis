
// Import the coinFlip function from your coin.mjs file
import { flipACoin } from "./modules/coin.mjs";

// Call the coinFlip function and put the return into STDOUT
let res = []
if (process.argv.length == 2) {
    console.log("Error: no input.")
    console.log("Usage: node guess-flip --call=[heads|tails]")    
} else {
    let call = process.argv[2].substring(7)
    if (call !== "heads" && call !== "tails") {
        console.log("Error: no input.")
        console.log("Usage: node guess-flip --call=[heads|tails]")
        
    } else {
        let res = flipACoin(call)
        let actual = "" 
        if (res === "win") {
            actual = call
        } else if (call==="heads") {
            actual = "tails"
        } else actual = "heads"
        console.log({"call": call, "flip": actual, "result": res})
    }
}
