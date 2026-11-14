//teste
setcpm(120 / 4)

$BASS:
note("C3 D3 E3 F3".sub(12))
.sound("supersaw")
.slow(4)
.orbit(4)
._punchcard()

$CHORD:
chord("D F#- C#- A").voicing()
.sound("supersaw")
.slow(4)
.orbit(4)
._punchcard()

$drums:
sound("bd:1 bd:9").beat("0,4,8,11,14",16).orbit(7).slow(1)
._punchcard()

$snare:
sound("sd:1").beat("0,6,8,11,14",16).orbit(7).slow(1)
._punchcard()

$idk:
note("~ D5 A5 D5 G5 D5 F#5 ~".sub(12)).sound("wt_digital_curses").slow(1).orbit(4)
._punchcard()
