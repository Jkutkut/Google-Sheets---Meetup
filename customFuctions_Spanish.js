/**
Calcula el día del mes en la tabla
@param {Date} Ahora Fecha actual
@param {number} Altura Margen de las filas
@param {number} Anchura Margen de las columnas
@param {number} Fila Fila
@param {number} Columna Culumna
@param {number} diaMesAnterior El día del mes en el que acabó el mes anterior.
@param {number} diaFinMes Día cuando acaba este mes.

@return El día del mes en la celda correcta. Si no es una celda válida, "".

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
Mira el resto de páginas para obtener el nº de usuarios disponibles para la reunión.
@param {number} row La fila actual
@param {number} column La columna actual
@return El número de personas disponibles el día seleccionado

@customfunction
*/
function peopleReady(row, column){
  var ss = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  var result = 0;
  var nope = false;
  
  if(ss[0].getRange(row - 1, column).getValue() == ""){
      //Si encima no está el día del mes => no es una celda válida
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
