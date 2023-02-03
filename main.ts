input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            . # # # #
            . . . . #
            . . . # #
            . . . . .
            . . # . .
            `)
        music.playTone(139, music.beat(BeatFraction.Whole))
        basic.pause(1000)
        basic.clearScreen()
        basic.pause(1000)
    }
    note = randint(0, 100)
    basic.showNumber(note)
    basic.pause(1000)
    if (note > 80) {
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.pause(1000)
        basic.clearScreen()
        basic.pause(1000)
    }
    if (note < 30) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.pause(1000)
        basic.clearScreen()
        basic.pause(1000)
    }
    basic.showLeds(`
        . . . . .
        . # . # .
        # . . . #
        . # . # .
        . . . . .
        `)
})
let note = 0
basic.showLeds(`
    . . . . .
    . # . # .
    # . . . #
    . # . # .
    . . . . .
    `)
