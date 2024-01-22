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

makePottery ("Cylinder", 3.5, 24)
makePottery ("Bowl", 2.0, 18)
makePottery ("Plate", 1.8, 8)
makePottery ("Mug", 2.5, 16)
makePottery ("Vase", 4.2, 18)