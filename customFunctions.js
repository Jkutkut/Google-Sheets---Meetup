/**
calculates the day in the calendar grid.
*Math.round((fila-altura) / 2)*7 = nº of the week in mounth * 7 (round to generate the code in "one-gap-row format").

@param {Date} Ahora actual date
@param {number} Altura row margin
@param {number} Anchura column margin
@param {number} Fila row
@param {number} Columna column
@param {number} diaMesAnterior last month week's day
@param {number} diaMesAnterior this month week's day

@return the day in that cell or "" if not a valid cell

@customfunction
*/
function DIACALENDARIO(ahora, altura, anchura, fila, columna, diaFinMesAnterior, diaFinMes) {
  var diaMes = Math.round((fila-altura) / 2) * 7 + columna - anchura - diaFinMesAnterior;
  if(diaMes > 0 && diaMes <= diaFinMes){
    return diaMes;
  }
  else{
    return "";
  }
}

/**
Check the rest of the pages to get the number of users ready to join the party.

@param {number} row The current row
@param {number} column The current column
@return the number of users ready to party in current day

@customfunction
*/
function peopleReady(row, column){ 
  //return "";
  var ss = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  var result = 0;
  var nope = false;
  
  if(ss[0].getRange(row - 1, column).getValue() == ""){
      //if not day of this month
      return "";
  }
  for(var i = 1; i <ss.length - 1; i++){ 
    switch(ss[i].getRange(row, column).getValue()){
      /*case "yes":
      case "YES":
      case "Yes":
      case "si":*/
      case "Si":
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
    return "";
  }
  return result;
}
