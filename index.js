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



function currentLine(katzDeliLine){
  if(katzDeliLine.length===0){
    return "The line is currently empty."
  }
  else{
    for(var i=0;i<katzDeliLine.length;i++){
      
      var name = katzDeliLine[i];
      var  sn = i+1 "." + name ",";
      
      return  "The line is currently:"+ sn  ;
    }
    
    
  }
}
