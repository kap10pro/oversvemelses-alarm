let strip = neopixel.create(DigitalPin.P0, 1, NeoPixelMode.RGB)
makerbit.connectUltrasonicDistanceSensor(DigitalPin.P2, DigitalPin.P3)
basic.forever(function () {
    basic.showNumber(makerbit.getUltrasonicDistance(DistanceUnit.CM))
    while (makerbit.isUltrasonicDistanceLessThan(25, DistanceUnit.CM)) {
        music.playMelody("C C D D C C D D ", 300)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
})
