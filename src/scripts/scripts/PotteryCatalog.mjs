const potteryToBeSold = []

export const toSellOrNotToSell = (potteryObject) => {
    if (!potteryObject.cracked) {
        if (potteryObject.weight >= 6) {
            potteryObject.price = 40
            potteryToBeSold.push(potteryObject)
        } else {
            potteryObject.price = 20
            potteryToBeSold.push(potteryObject)
        }
    
    }
    return potteryObject
}

export const usePottery = () => {
    return potteryToBeSold
}