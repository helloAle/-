$piano: 
note(`<
[D3 D4 D3 D4 D3 D4 D3 D4]
[F#3 F#4 F#3 F#4 F#3 F#4 F#3 F#4]
[B3 B4 B3 B4 B3 B4 B3 B4]
[G3 G4 G3 G4 G3 G4 G3 G4]
>`.sub(12))
  .filterHaps(({ whole }) => whole && whole.begin >= 4)
  .sound("piano")
  .orbit(4)
  
organ: 
note(`<
[D3@4]
[F#3@4]
[B3@4]
[G3@4]
>`.sub(12))
  .filterHaps(({ whole }) => whole && whole.begin >= 0 && whole.begin < 4)
  .sound("pipeorgan_loud_pedal")
  .orbit(4)

$idk:
note("~ D5 A5 D5 G5 D5 F#5 ~".sub(12)).sound("piano").slow(1).orbit(4)
  .filterHaps(({ whole }) => whole && whole.begin >= 16)
// ._punchcard()

$segundamao:
note(`<
     [F#5@4 F#5@2 F#5 D6]
     [C#6@4 C#6@2 C#6 D6]
     [B5@4 B5@2 B5 A5]
     [B5@2 B5 A5 B5 A5 B5 A5]
  >`.sub(12))
  .sound("piano")
  .orbit(4)
  .filterHaps(({ whole }) => whole && whole.begin >= 12 && whole.begin < 20)
// ._punchcard()
