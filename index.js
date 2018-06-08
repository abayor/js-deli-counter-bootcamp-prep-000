var katzDeliLine=[];
var otherDeli=[];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(){
  if(katzDeliLine ===[]){
    return "The line is empty"
  }
  else{
    return "There is somebody on the Line currently servirng" +katzDeliLine[i]
  }
  
}

