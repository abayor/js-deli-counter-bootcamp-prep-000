var katzDeliLine=[];
var otherDeli=[];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length===0){
    return "There is nobody waiting to be served!"
  }
  else{
    var name = katzDeliLine[0]
    katzDeliLine.splice(0,1)
    return "Currently serving " + name + "."
  }
  
}

if (x.length === 0) {
      return "The line is currently empty."
    } else {
      for(var i = 0; i < x.length; i++) {
        line += (i + 1) + ". " + x[i] + ", "
      }
      line = line.slice(0, line.length-2)
      return "The line is currently: " + line
    }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length===0){
    return "The line is currently empty."
  }
  else{
    for(var i=0;i<katzDeliLine.length;i++){
      var name = katzDeliLine[i];
     
      
      return  "The line is currently:" i + name ","
    }
    
    
  }
}
