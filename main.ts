let Light_Level_LDR = 0
music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
basic.forever(function () {
    Light_Level_LDR = pins.analogReadPin(AnalogReadWritePin.P1)
    if (Light_Level_LDR >= 1020) {
        basic.showString("\"Wear cap\"")
    } else {
        if (Light_Level_LDR == 1019) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                # # # # #
                . . . . .
                `)
            basic.pause(500)
        } else {
            if (Light_Level_LDR <= 1018) {
                basic.showLeds(`
                    . . . . .
                    . # . # .
                    . . . . .
                    # . . . #
                    . # # # .
                    `)
                basic.pause(500)
            }
        }
    }
})
