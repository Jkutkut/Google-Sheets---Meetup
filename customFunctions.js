/**
calculates the day in the calendar grid.
*Math.round((fila-altura) / 2)*7 = nº of the week in month * 7 (round to generate the code in "one-gap-row format").

@param {Date} ahora Actual date 
@param {number} altura Height row margin
@param {number} anchura Weight column margin
@param {number} fila Row
@param {number} columna Column
@param {number} diaFinMesAnterior Last month week's day
@param {number} diaFinMes This month week's day

@return the day in that cell or "" if not a valid cell

@customfunction
*/
function DIACALENDARIO(ahora, altura, anchura, fila, columna, diaFinMesAnterior, diaFinMes) {
  var diaMes = Math.round((fila-altura) / 2) * 7 + columna - anchura - diaFinMesAnterior;
  //diaMes = day of the week (1,2...,diaFinMes).
  //diaFinMes = length of this month: 31, 30, 29 or 28.
  if(diaMes > 0 && diaMes <= diaFinMes){//if valid diaMes
    return diaMes;
  }
  else{
    return "";
  }
}

/**
Check the rest of the pages to get the number of users ready to join the meetup.

@param {number} row The current row
@param {number} column The current column
@return the number of users ready to party in current day

@customfunction
*/
function peopleReady(row, column){
  var ss = SpreadsheetApp.getActiveSpreadsheet().getSheets();//the object with the sheets 
  var result = 0;
  var nope = false;
  
  if(ss[0].getRange(row - 1, column).getValue() == ""){
      //if not day of this month
      return "";
  }
  for(var i = 1; i <ss.length - 1; i++){ 
    //for each sheet in document (not main), count the number of people avalible following this criteria:
    //+1 -> avalible
    //+0.5 -> maybe avalible
    //0 -> not determined or not avalible
    switch(ss[i].getRange(row, column).getValue()){
      case "yes":
      /*case "YES":
      case "Yes":
      case "si":
      case "Si":*/
      case "x":
        result++;
        break;
      //case "no":
      case "No":
        nope = true;
        break;
      case "maybe":
      case "Maybe":
      /*case "puede":
      case "Puede":
      case "luego":
      case "Luego":
      case "tarde":
      case "Tarde":*/
        result += 0.5;
        break;
    }
  }
  if(result == 0 && !nope){
    //if nobody said anything this day, return "";
    return "";
  }
  //else, return the result number.
  return result;
}
