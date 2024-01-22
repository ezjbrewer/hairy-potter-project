let potteryID = 1

const makePottery = (designShape, potteryWeight, potteryHeight) => {
    const pottery = {
        shape: designShape,
        weight: potteryWeight,
        height: potteryHeight,
        id: potteryID
    }
    potteryID++
    return pottery
}

console.log( makePottery ("Cylinder", 3.5, 24) )