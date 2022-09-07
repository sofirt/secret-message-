input.onButtonPressed(Button.A, function () {
    radio.sendString("jj")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    music.playMelody("B G C5 F A E C5 D ", 209)
    music.playMelody("E G D A F G A G ", 121)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("i am hungry")
})
basic.showIcon(IconNames.Chessboard)
// I am hungry 
radio.setGroup(444)
basic.forever(function () {
	
})
