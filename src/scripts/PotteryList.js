import { usePottery } from "./scripts/PotteryCatalog.js"

const potteryToBeSold = usePottery()
// class="potteryList"
export const PotteryList = () => {
    const potteryToBeSold = usePottery()
    let htmlStr = " "
    for (const pottery of potteryToBeSold) {
        htmlStr += `
        <section class="pottery" id="pottery--${pottery.id}">
            <h2 class="pottery__shape">${pottery.shape}</h2>
            <div class="pottery__properties">
             Item weighs ${pottery.weight} grams and is ${pottery.height} cm in height
            </div>
            <div class="pottery__price">Price is $${pottery.price}</div>
        </section> 
       `
    }

    return htmlStr
}