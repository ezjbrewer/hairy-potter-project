let potteryID = 1

export const makePottery = (designShape, potteryWeight, potteryHeight) => {
    const pottery = {
        shape: designShape,
        weight: potteryWeight,
        height: potteryHeight,
        id: potteryID
    }
    potteryID++
    return pottery
}