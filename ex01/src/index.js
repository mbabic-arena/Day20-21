var xy = "";
var capsLock = "0";
var shiftKey = "0";

//Special keys

//BackSpace
function funcDel() {
  var value = document.getElementById("display").innerHTML;
  var x = document.getElementById("display").innerHTML.length;
  var y = 1;
  var z = x - y;
  document.getElementById("display").innerHTML = value.slice(0, z);
}
//CapsLock
function funcCL() {
  if (capsLock == "0") {
    capsLock = "1";
  } else if (capsLock == "1") {
    capsLock = "0";
  }
}
//Shift
function funcShift() {
  if (shiftKey == "0") {
    shiftKey = "1";
  } else if (shiftKey == "1") {
    shiftKey = "0";
  }
}
//Enter
function funcEnter() {
  var value = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = value + "\n";
}
//Submit
function funcSubmit() {
  var value = document.getElementById("display").innerHTML;
  if (value == "") {
    alert("Text area is empty!");
  } else {
    alert(value);
  }
}
//Space
function funcSpace() {
  var value = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = value + " ";
}

//Number Keys
//1
function func1() {
  var value = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = value + "1";
}
//2
function func2() {
  var value = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = value + "2";
}
//3
function func3() {
  var value = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = value + "3";
}
//4
function func4() {
  var value = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = value + "4";
}
//5
function func5() {
  var value = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = value + "5";
}
//6
function func6() {
  var value = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = value + "6";
}
//7
function func7() {
  var value = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = value + "7";
}
//8
function func8() {
  var value = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = value + "8";
}
//9
function func9() {
  var value = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = value + "9";
}
//0
function func0() {
  var value = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = value + "0";
}

// Special symbols
function funcMin() {
  var value = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = value + "-";
}
function funcUnder() {
  var value = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = value + "_";
}

//Letter keys

//q
function funcQ() {
  var value = document.getElementById("display").innerHTML;
  if (capsLock == "0") {
    if (shiftKey == "0") {
      document.getElementById("display").innerHTML = value + "q";
    } else if (shiftKey == "1") {
      shiftKey = "0";
      document.getElementById("display").innerHTML = value + "Q";
    }
  } else if (capsLock == "1") {
    if (shiftKey == "0") {
      document.getElementById("display").innerHTML = value + "Q";
    } else if (shiftKey == "1") {
      shiftKey = "0";
      document.getElementById("display").innerHTML = value + "q";
    }
  }
}
//w
function funcW() {
  var value = document.getElementById("display").innerHTML;
  if (capsLock == "0") {
    if (shiftKey == "0") {
      document.getElementById("display").innerHTML = value + "w";
    } else if (shiftKey == "1") {
      shiftKey = "0";
      document.getElementById("display").innerHTML = value + "W";
    }
  } else if (capsLock == "1") {
    if (shiftKey == "0") {
      document.getElementById("display").innerHTML = value + "W";
    } else if (shiftKey == "1") {
      shiftKey = "0";
      document.getElementById("display").innerHTML = value + "w";
    }
  }
}
//e
function funcE() {
  var value = document.getElementById("display").innerHTML;
  if (capsLock == "0") {
    if (shiftKey == "0") {
      document.getElementById("display").innerHTML = value + "e";
    } else if (shiftKey == "1") {
      shiftKey = "0";
      document.getElementById("display").innerHTML = value + "E";
    }
  } else if (capsLock == "1") {
    if (shiftKey == "0") {
      document.getElementById("display").innerHTML = value + "E";
    } else if (shiftKey == "1") {
      shiftKey = "0";
      document.getElementById("display").innerHTML = value + "e";
    }
  }
}
//r
function funcR() {
  var value = document.getElementById("display").innerHTML;
  if (capsLock == "0") {
    if (shiftKey == "0") {
      document.getElementById("display").innerHTML = value + "r";
    } else if (shiftKey == "1") {
      shiftKey = "0";
      document.getElementById("display").innerHTML = value + "R";
    }
  } else if (capsLock == "1") {
    if (shiftKey == "0") {
      document.getElementById("display").innerHTML = value + "R";
    } else if (shiftKey == "1") {
      shiftKey = "0";
      document.getElementById("display").innerHTML = value + "r";
    }
  }
}
//t
function funcT() {
  var value = document.getElementById("display").innerHTML;
  if (capsLock == "0") {
    if (shiftKey == "0") {
      document.getElementById("display").innerHTML = value + "t";
    } else if (shiftKey == "1") {
      shiftKey = "0";
      document.getElementById("display").innerHTML = value + "T";
    }
  } else if (capsLock == "1") {
    if (shiftKey == "0") {
      document.getElementById("display").innerHTML = value + "T";
    } else if (shiftKey == "1") {
      shiftKey = "0";
      document.getElementById("display").innerHTML = value + "t";
    }
  }
}
//y
function funcY() {
  var value = document.getElementById("display").innerHTML;
  if (capsLock == "0") {
    if (shiftKey == "0") {
      document.getElementById("display").innerHTML = value + "y";
    } else if (shiftKey == "1") {
      shiftKey = "0";
      document.getElementById("display").innerHTML = value + "Y";
    }
  } else if (capsLock == "1") {
    if (shiftKey == "0") {
      document.getElementById("display").innerHTML = value + "Y";
    } else if (shiftKey == "1") {
      shiftKey = "0";
      document.getElementById("display").innerHTML = value + "y";
    }
  }
}
//u
function funcU() {
  var value = document.getElementById("display").innerHTML;
  if (capsLock == "0") {
    if (shiftKey == "0") {
      document.getElementById("display").innerHTML = value + "u";
    } else if (shiftKey == "1") {
      shiftKey = "0";
      document.getElementById("display").innerHTML = value + "U";
    }
  } else if (capsLock == "1") {
    if (shiftKey == "0") {
      document.getElementById("display").innerHTML = value + "U";
    } else if (shiftKey == "1") {
      shiftKey = "0";
      document.getElementById("display").innerHTML = value + "u";
    }
  }
}
//i
function funcI() {
  var value = document.getElementById("display").innerHTML;
  if (capsLock == "0") {
    if (shiftKey == "0") {
      document.getElementById("display").innerHTML = value + "i";
    } else if (shiftKey == "1") {
      shiftKey = "0";
      document.getElementById("display").innerHTML = value + "I";
    }
  } else if (capsLock == "1") {
    if (shiftKey == "0") {
      document.getElementById("display").innerHTML = value + "I";
    } else if (shiftKey == "1") {
      shiftKey = "0";
      document.getElementById("display").innerHTML = value + "i";
    }
  }
}
//o
function funcO() {
  var value = document.getElementById("display").innerHTML;
  if (capsLock == "0") {
    if (shiftKey == "0") {
      document.getElementById("display").innerHTML = value + "o";
    } else if (shiftKey == "1") {
      shiftKey = "0";
      document.getElementById("display").innerHTML = value + "O";
    }
  } else if (capsLock == "1") {
    if (shiftKey == "0") {
      document.getElementById("display").innerHTML = value + "O";
    } else if (shiftKey == "1") {
      shiftKey = "0";
      document.getElementById("display").innerHTML = value + "o";
    }
  }
}
//p
function funcP() {
  var value = document.getElementById("display").innerHTML;
  if (capsLock == "0") {
    if (shiftKey == "0") {
      document.getElementById("display").innerHTML = value + "p";
    } else if (shiftKey == "1") {
      shiftKey = "0";
      document.getElementById("display").innerHTML = value + "P";
    }
  } else if (capsLock == "1") {
    if (shiftKey == "0") {
      document.getElementById("display").innerHTML = value + "P";
    } else if (shiftKey == "1") {
      shiftKey = "0";
      document.getElementById("display").innerHTML = value + "p";
    }
  }
}
//a
function funcA() {
  var value = document.getElementById("display").innerHTML;
  if (capsLock == "0") {
    if (shiftKey == "0") {
      document.getElementById("display").innerHTML = value + "a";
    } else if (shiftKey == "1") {
      shiftKey = "0";
      document.getElementById("display").innerHTML = value + "A";
    }
  } else if (capsLock == "1") {
    if (shiftKey == "0") {
      document.getElementById("display").innerHTML = value + "A";
    } else if (shiftKey == "1") {
      shiftKey = "0";
      document.getElementById("display").innerHTML = value + "a";
    }
  }
}
//s
function funcS() {
  var value = document.getElementById("display").innerHTML;
  if (capsLock == "0") {
    if (shiftKey == "0") {
      document.getElementById("display").innerHTML = value + "s";
    } else if (shiftKey == "1") {
      shiftKey = "0";
      document.getElementById("display").innerHTML = value + "S";
    }
  } else if (capsLock == "1") {
    if (shiftKey == "0") {
      document.getElementById("display").innerHTML = value + "S";
    } else if (shiftKey == "1") {
      shiftKey = "0";
      document.getElementById("display").innerHTML = value + "s";
    }
  }
}
//d
function funcD() {
  var value = document.getElementById("display").innerHTML;
  if (capsLock == "0") {
    if (shiftKey == "0") {
      document.getElementById("display").innerHTML = value + "d";
    } else if (shiftKey == "1") {
      shiftKey = "0";
      document.getElementById("display").innerHTML = value + "D";
    }
  } else if (capsLock == "1") {
    if (shiftKey == "0") {
      document.getElementById("display").innerHTML = value + "D";
    } else if (shiftKey == "1") {
      shiftKey = "0";
      document.getElementById("display").innerHTML = value + "d";
    }
  }
}
//f
function funcF() {
  var value = document.getElementById("display").innerHTML;
  if (capsLock == "0") {
    if (shiftKey == "0") {
      document.getElementById("display").innerHTML = value + "f";
    } else if (shiftKey == "1") {
      shiftKey = "0";
      document.getElementById("display").innerHTML = value + "F";
    }
  } else if (capsLock == "1") {
    if (shiftKey == "0") {
      document.getElementById("display").innerHTML = value + "F";
    } else if (shiftKey == "1") {
      shiftKey = "0";
      document.getElementById("display").innerHTML = value + "f";
    }
  }
}
//g
function funcG() {
  var value = document.getElementById("display").innerHTML;
  if (capsLock == "0") {
    if (shiftKey == "0") {
      document.getElementById("display").innerHTML = value + "g";
    } else if (shiftKey == "1") {
      shiftKey = "0";
      document.getElementById("display").innerHTML = value + "G";
    }
  } else if (capsLock == "1") {
    if (shiftKey == "0") {
      document.getElementById("display").innerHTML = value + "G";
    } else if (shiftKey == "1") {
      shiftKey = "0";
      document.getElementById("display").innerHTML = value + "g";
    }
  }
}
//h
function funcH() {
  var value = document.getElementById("display").innerHTML;
  if (capsLock == "0") {
    if (shiftKey == "0") {
      document.getElementById("display").innerHTML = value + "h";
    } else if (shiftKey == "1") {
      shiftKey = "0";
      document.getElementById("display").innerHTML = value + "H";
    }
  } else if (capsLock == "1") {
    if (shiftKey == "0") {
      document.getElementById("display").innerHTML = value + "H";
    } else if (shiftKey == "1") {
      shiftKey = "0";
      document.getElementById("display").innerHTML = value + "h";
    }
  }
}
//j
function funcJ() {
  var value = document.getElementById("display").innerHTML;
  if (capsLock == "0") {
    if (shiftKey == "0") {
      document.getElementById("display").innerHTML = value + "j";
    } else if (shiftKey == "1") {
      shiftKey = "0";
      document.getElementById("display").innerHTML = value + "J";
    }
  } else if (capsLock == "1") {
    if (shiftKey == "0") {
      document.getElementById("display").innerHTML = value + "J";
    } else if (shiftKey == "1") {
      shiftKey = "0";
      document.getElementById("display").innerHTML = value + "j";
    }
  }
}

//k
function funcK() {
  var value = document.getElementById("display").innerHTML;
  if (capsLock == "0") {
    if (shiftKey == "0") {
      document.getElementById("display").innerHTML = value + "k";
    } else if (shiftKey == "1") {
      shiftKey = "0";
      document.getElementById("display").innerHTML = value + "K";
    }
  } else if (capsLock == "1") {
    if (shiftKey == "0") {
      document.getElementById("display").innerHTML = value + "K";
    } else if (shiftKey == "1") {
      shiftKey = "0";
      document.getElementById("display").innerHTML = value + "k";
    }
  }
}
//l
function funcL() {
  var value = document.getElementById("display").innerHTML;
  if (capsLock == "0") {
    if (shiftKey == "0") {
      document.getElementById("display").innerHTML = value + "l";
    } else if (shiftKey == "1") {
      shiftKey = "0";
      document.getElementById("display").innerHTML = value + "L";
    }
  } else if (capsLock == "1") {
    if (shiftKey == "0") {
      document.getElementById("display").innerHTML = value + "L";
    } else if (shiftKey == "1") {
      shiftKey = "0";
      document.getElementById("display").innerHTML = value + "l";
    }
  }
}

//z
function funcZ() {
  var value = document.getElementById("display").innerHTML;
  if (capsLock == "0") {
    if (shiftKey == "0") {
      document.getElementById("display").innerHTML = value + "z";
    } else if (shiftKey == "1") {
      shiftKey = "0";
      document.getElementById("display").innerHTML = value + "Z";
    }
  } else if (capsLock == "1") {
    if (shiftKey == "0") {
      document.getElementById("display").innerHTML = value + "Z";
    } else if (shiftKey == "1") {
      shiftKey = "0";
      document.getElementById("display").innerHTML = value + "z";
    }
  }
}
//x
function funcX() {
  var value = document.getElementById("display").innerHTML;
  if (capsLock == "0") {
    if (shiftKey == "0") {
      document.getElementById("display").innerHTML = value + "x";
    } else if (shiftKey == "1") {
      shiftKey = "0";
      document.getElementById("display").innerHTML = value + "X";
    }
  } else if (capsLock == "1") {
    if (shiftKey == "0") {
      document.getElementById("display").innerHTML = value + "X";
    } else if (shiftKey == "1") {
      shiftKey = "0";
      document.getElementById("display").innerHTML = value + "x";
    }
  }
}
//c
function funcC() {
  var value = document.getElementById("display").innerHTML;
  if (capsLock == "0") {
    if (shiftKey == "0") {
      document.getElementById("display").innerHTML = value + "c";
    } else if (shiftKey == "1") {
      shiftKey = "0";
      document.getElementById("display").innerHTML = value + "C";
    }
  } else if (capsLock == "1") {
    if (shiftKey == "0") {
      document.getElementById("display").innerHTML = value + "C";
    } else if (shiftKey == "1") {
      shiftKey = "0";
      document.getElementById("display").innerHTML = value + "c";
    }
  }
}
//v
function funcV() {
  var value = document.getElementById("display").innerHTML;
  if (capsLock == "0") {
    if (shiftKey == "0") {
      document.getElementById("display").innerHTML = value + "v";
    } else if (shiftKey == "1") {
      shiftKey = "0";
      document.getElementById("display").innerHTML = value + "V";
    }
  } else if (capsLock == "1") {
    if (shiftKey == "0") {
      document.getElementById("display").innerHTML = value + "V";
    } else if (shiftKey == "1") {
      shiftKey = "0";
      document.getElementById("display").innerHTML = value + "v";
    }
  }
}
//b
function funcB() {
  var value = document.getElementById("display").innerHTML;
  if (capsLock == "0") {
    if (shiftKey == "0") {
      document.getElementById("display").innerHTML = value + "b";
    } else if (shiftKey == "1") {
      shiftKey = "0";
      document.getElementById("display").innerHTML = value + "B";
    }
  } else if (capsLock == "1") {
    if (shiftKey == "0") {
      document.getElementById("display").innerHTML = value + "B";
    } else if (shiftKey == "1") {
      shiftKey = "0";
      document.getElementById("display").innerHTML = value + "b";
    }
  }
}
//n
function funcN() {
  var value = document.getElementById("display").innerHTML;
  if (capsLock == "0") {
    if (shiftKey == "0") {
      document.getElementById("display").innerHTML = value + "n";
    } else if (shiftKey == "1") {
      shiftKey = "0";
      document.getElementById("display").innerHTML = value + "N";
    }
  } else if (capsLock == "1") {
    if (shiftKey == "0") {
      document.getElementById("display").innerHTML = value + "N";
    } else if (shiftKey == "1") {
      shiftKey = "0";
      document.getElementById("display").innerHTML = value + "n";
    }
  }
}
//m
function funcM() {
  var value = document.getElementById("display").innerHTML;
  if (capsLock == "0") {
    if (shiftKey == "0") {
      document.getElementById("display").innerHTML = value + "m";
    } else if (shiftKey == "1") {
      shiftKey = "0";
      document.getElementById("display").innerHTML = value + "M";
    }
  } else if (capsLock == "1") {
    if (shiftKey == "0") {
      document.getElementById("display").innerHTML = value + "M";
    } else if (shiftKey == "1") {
      shiftKey = "0";
      document.getElementById("display").innerHTML = value + "m";
    }
  }
}
