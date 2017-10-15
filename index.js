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
function sayHiToGrandma(request){
  if (request.includes("hello")){
    return "I can't hear you!"
  }else if (request.toUpperCase()===request) {
    return "Stop shouting at me!"
  }else {
    return "I love you too"
  }
}
