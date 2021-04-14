radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        tinkercademy.LED(DigitalPin.P1, OnOff.On)
        basic.showIcon(IconNames.SmallHeart)
    } else {
        tinkercademy.LED(DigitalPin.P1, OnOff.Off)
        basic.showIcon(IconNames.Yes)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
})
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    radio.setGroup(69)
})
