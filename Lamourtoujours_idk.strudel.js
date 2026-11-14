// $piano:
// note(`<
// [D3 D4 D3 D4 D3 D4 D3 D4]
// [F#3 F#4 F#3 F#4 F#3 F#4 F#3 F#4]
// [B3 B4 B3 B4 B3 B4 B3 B4]
// [G3 G4 G3 G4 G3 G4 G3 G4]
// >`.sub(12)).beat("0,2,4,6,8,10,12,14",16)
//   .sound("piano").orbit(4)

  violin:
note(`<
[D5@4 D6@4]
[F#5@4 F#6@4]
[B5@4 B6@4]
[G5@4 G6@4]
>`.sub(12))
  .sound("gm_violin").orbit(4)
._punchcard()



$idk:
note("~ D5 A5 D5 G5 D5 F#5 ~".sub(12))
  .sound("supersaw").slow(1).orbit(4)
._punchcard()
$beat:
sound("bd:1 bd:9").slow(.5)


$segundamao:
note(`<
     [F#5@8]
     [C#6@8]
     [B5@8]
     [B5@8]
  >`.sub(12))
  .sound("gm_viola")
  .orbit(4)
._punchcard()

$kawai:
note(`<
     [F#5@4 F#5@2 F#5 D6]
     [C#6@4 C#6@2 C#6 D6]
     [B5@4 B5@2 B5 A5]
     [B5@2 B5 A5 B5 A5 B5 A5]
  >`.sub(12))
  .sound("kawai")
  .orbit(4)
  .filterHaps(({ whole }) => whole && whole.begin >= 20)


// $CHORD:
// chord("D F# B G").voicing().beat("0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31",32)
// .sound("supersaw")
// .slow(4)
// .orbit(4)
//   .filterHaps(({ whole }) => whole && whole.begin >= 8)
// ._punchcard()
