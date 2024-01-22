export const firePottery = ( pottery, firingTemperature ) => {
    pottery.fired = true
    pottery.cracked = true
    if (firingTemperature > 2200) {
        pottery.cracked = true
    } else {
        pottery.cracked = false
    }

    return pottery
}