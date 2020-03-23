var allKeyNumber = 33;

var keyId;
var keyClass;
var chordKeys = new Array();

function analyzeChord() {
    
    chordKeyReset();
    allKeyUp();
    
    analyzeRoot();
    analyzeModi();
    analyzeNumber();
    analyzeOn();
    analyzeAdd();
    analyzeBaseOn();
    
    chordVisualiting();
    
    return;
    
}

function analyzeSelection(selectionId){
    
    var selectionValue = document.getElementById(selectionId).options[document.getElementById(selectionId).selectedIndex].value;
    
    return selectionValue;
    
}

function analyzeRoot() {
    
    var selectInput = analyzeSelection("root");
    selectInput = parseInt(selectInput);
    
    chordKeys[0] = 13 + selectInput;
    chordKeys[1] = chordKeys[0] + 4;
    chordKeys[2] = chordKeys[0] + 7;
    
    return;
    
}

function analyzeModi() {
    
    var selectInput = analyzeSelection("modi");
    chordKeys[3] = chordKeys[0] + 10;
    
    if(selectInput == ""){
        
        
    }
    
    else if(selectInput == "M"){
        chordKeys[3] += 1;
    }
    
    else if(selectInput == "m"){
        chordKeys[1] -= 1;
    }
    
    else if(selectInput == "aug"){
        chordKeys[2] += 1;
    }
    
    else if(selectInput == "dim"){
        chordKeys[1] -= 1;
        chordKeys[2] -= 1;
        chordKeys[3] -= 1;
    }
    
    else if(selectInput == "sus2"){
        chordKeys[1] -= 2;
    }
    
    else if(selectInput == "sus4"){
        chordKeys[1] += 1;
    }
    
    else if(selectInput == "sus2/4"){
        
    }
    
    return;
    
}

function analyzeNumber() {
    
    var selectInput = analyzeSelection("number");
    
    if(selectInput == ''){
        chordKeys[3] = 0;
    }
    
    else if(selectInput == '6'){
        chordKeys[3] = chordKeys[0] + 9;
    }
    
    else if(selectInput == "7"){
    }
    
    else if(selectInput == "9"){
        chordKeys[4] = chordKeys[0] + 2;
    }
    
    else if(selectInput == "11"){
        chordKeys[4] = chordKeys[0] + 5;
    }
    
    else if(selectInput == "13"){
        chordKeys[4] = chordKeys[0] + 9;
    }
    
    return;
    
}

function analyzeOn() {
    
    var selectInput = analyzeSelection("on");
    
    return;
    
}

function analyzeAdd() {
    
    var selectInput = analyzeSelection("add");
    
    return;
    
}

function analyzeBaseOn() {
    
    var selectInput = analyzeSelection("baseOn");
    
    return;
    
}

function chordVisualiting(){
    
    for(var j = 0; j < chordKeys.length; j++){
        if(chordKeys[j] != 0){
            keyDown('k' + chordKeys[j]);
        }
    }
    
}




function restore(){
    
    var chordType = document.getElementsByClassName("ChordType");
    
    for(var classIterator = 0; classIterator < chordType.length; classIterator++){
        chordType[classIterator].selectedIndex = 0;
    }
    
    //document.getElementById("root").selectedIndex = 0;
    
    chordKeyReset();
    allKeyUp();
    analyzeChord();
        
    return;
    
}

function allKeyUp(){
    
    for(var i = 1; i <= allKeyNumber; i++) {
        keyUp('k' + i);
    }
    
    return;
    
}

function chordKeyReset(){
    
    for(var i = 0; i < chordKeys.length; i++) {
        chordKeys[i] = 0;
    }
        
    return;
    
}


function keyDown(reactKey) {
    
    keyId = reactKey;
    keyClass = document.getElementById(keyId).getAttribute('class');
    
    if(keyClass == "WK") {
        document.getElementById(keyId).src = "Image/White_Key_Down.png";        
    }
    else {
        document.getElementById(keyId).src = "Image/Black_Key_Down.png";      
    }
    
    return;
}

function keyUp(reactKey) {
    
    keyId = reactKey;
    keyClass = document.getElementById(keyId).getAttribute('class');
    
    if(keyClass == "WK") {
        document.getElementById(keyId).src = "Image/White_Key_Up.png";        
    }
    else {
        document.getElementById(keyId).src = "Image/Black_Key_Up.png";      
    }
    
    return;
}

/*function definingKey(keyValue) {
    
    thisKeyId = document.getElementById(keyValue.getAttribute('id')).getAttribute('id');
    thisKeyClass = document.getElementById(keyValue.getAttribute('id')).getAttribute('class');
    
    return;
    
}*/