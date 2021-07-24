input.onSound(DetectedSound.Loud, function () {
    closeShell = !(closeShell)
    input.setSoundThreshold(SoundThreshold.Loud, 150)
    if (closeShell) {
        basic.showIcon(IconNames.Happy)
        servos.P0.setAngle(0)
        basic.pause(2000)
    } else {
        basic.showIcon(IconNames.Sad)
        servos.P0.setAngle(180)
        basic.pause(2000)
    }
})
let closeShell = false
servos.P0.setAngle(180)
basic.showIcon(IconNames.Asleep)
basic.forever(function () {
	
})
