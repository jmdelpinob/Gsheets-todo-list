function onEdit(e) {
  var editRange = e.range; // Gets the range of cells edited
  var sheet = editRange.getSheet();
  var editedColumn = editRange.getColumn(); // Gets the column number of the edited cell
  
  // Check if the edit was on the "Todo List" sheet and in column C (column number 3)
  if(sheet.getName() === "Todo List" && editedColumn === 3) {
    sortToDoList();
  }
}

function sortToDoList() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Todo List");
  var range = sheet.getRange(2, 1, sheet.getLastRow()-1, 4);
  
  var orderD = {"Today": 1, "Tomorrow": 2, "Waiting for Input": 3, "Later": 4};
  var orderA = {"Work": 1, "Personal": 2, "Family": 3};
  
  var values = range.getValues();
  
  values.sort(function(row1, row2){
    return orderD[row1[2]] - orderD[row2[2]] || orderA[row1[0]] - orderA[row2[0]];
  });
  
  // Debugging: Log the sorted values
  Logger.log("Sorted Values:");
  Logger.log(values);
  
  // Set the sorted values back to the sheet
  range.setValues(values);
  
  // Debugging: Log the values after setting them back to the sheet
  Logger.log("Values After Setting Back:");
  Logger.log(range.getValues());
}
