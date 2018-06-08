var katzDeliLine=[];
var otherDeli=[];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(name){
  if(katzDeliLine.length===0){
    return "There is nobody waiting to be served!"
  }
  else{
    return "There is somebody on the Line currently servirng" + katzDeliLine.length
  }
  
}

