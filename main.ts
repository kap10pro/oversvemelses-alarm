let strip = neopixel.create(DigitalPin.P0, 1, NeoPixelMode.RGB)
makerbit.connectUltrasonicDistanceSensor(DigitalPin.P2, DigitalPin.P3)
basic.forever(function () {
    while (makerbit.isUltrasonicDistanceLessThan(7, DistanceUnit.CM)) {
        music.playMelody("- - - - - - - - ", 120)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
})
