function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string){
  console.log (string.toUpperCase())
}
function logWhisper(string){
  console.log (string.toLowerCase())
}
function sayHiToGrandma(string){
  if (string.includes("hello")){
    return "I can't hear you!"
  }else if (string.toUpperCase()==="YES INDEED!") {
    return "Stop shouting at me!"
  }else {
    return "I love you too"
  }
}
