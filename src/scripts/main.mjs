// Imports go first
import { makePottery } from "./scripts/PotteryWheel.mjs"
import { firePottery } from "./scripts/Kiln.mjs"


// Make 5 pieces of pottery at the wheel
let mug = makePottery ("Mug", 2.5, 16)
let cylinder = makePottery ("Cylinder", 3.5, 24)
let bowl = makePottery ("Bowl", 2.0, 18)
let plate = makePottery ("Plate", 1.8, 8)
let vase = makePottery ("Vase", 4.2, 18)

// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 2135)
let firedCylinder = firePottery(cylinder, 2256)
let firedBowl = firePottery(bowl, 2089)
let firedPlate = firePottery(plate, 2201)
let firedVase = firePottery(vase, 2032)
console.log(firedMug, firedCylinder, firedBowl, firedPlate, firedVase)
// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list



