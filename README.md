# Google Apps Script for Auto-Sorting a ToDo List

## Overview

This Google Apps Script is designed to automatically sort a ToDo list in Google Sheets based on edits made to a specific column. Specifically, it is configured to sort tasks based on predefined categorical orders in columns A and D when an edit is made to column C.

## How It Works

The script listens for edits on your Google Sheet and, when an edit is detected in column C of the "Todo List" sheet, it sorts the tasks based on values in columns A and D. The sorting is conducted as per predefined orders set within the script for these columns.

## Sheet Structure and Naming

For the script to function correctly, it's imperative to structure your Google Sheet in accordance with the predefined format. The sheet containing your ToDo list should be named "Todo List". The columns should be structured as follows in row 1, serving as the headers:

   - A: Category
   - B: Description
   - C: When
   - D: Comments

Ensure that these headers are placed exactly as described, as the script references these specific locations to execute the sorting functionality. Additionally, the script sorts data from row 2 onwards, assuming that row 1 is reserved for these headers, and thus exempt from the sort to preserve the header names and order.

You can view and use [this example Google Sheet](https://docs.google.com/spreadsheets/d/1mW0CxmKSv3NJPNOS20_ei9IGKt0vncgtr-7yIoSS_sI/edit?usp=sharing) as a template or reference (you need to be logged in for the script to work). Make sure to comply with the described structure to ensure that the script operates effectively. If you'd like to modify the script for different column names or positions, you might need to adjust the referenced column indices within the script accordingly.

## Setup Instructions

1. **Access the Script Editor:**
   - In your Google Sheet, click on "Extensions" in the top menu.
   - Choose "Apps Script" from the dropdown.
   
2. **Paste the Script:**
   - Copy the provided script and paste it into the script editor.
   - Click the floppy disk icon (or File -> Save), and give your project a name.
   
3. **Close the Script Editor:**
   - You can close the script editor tab after saving the script.

4. **Using the Script:**
   - Now, whenever you edit a cell in column C of the "Todo List" sheet, the script will automatically sort the tasks based on the orders specified for columns A and D.

## Customization Guide

### Modify Sorting Criteria

The script sorts tasks based on predefined categorical orders in columns A and D. You can modify these orders to fit your use case. 

Here's the section of the script where the orders are defined:

```javascript
var orderD = {"Today": 1, "Tomorrow": 2, "Waiting for Input": 3, "Later": 4};
var orderA = {"Work": 1, "Personal": 2, "Family": 3};
```

- `orderD` defines the order for column D. 
- `orderA` defines the order for column A. 

Modify these objects to define your own order. Ensure that:
- The keys (e.g., "Today", "Work") match the possible entries in your sheet.
- The values (e.g., 1, 2, 3) define the order. Lower numbers will appear first.

### Example

If you want to sort tasks based on a priority system ("High", "Medium", "Low") in column A and task status ("Not Started", "In Progress", "Completed") in column D, modify the objects as follows:

```javascript
var orderD = {"Not Started": 1, "In Progress": 2, "Completed": 3};
var orderA = {"High": 1, "Medium": 2, "Low": 3};
```

## Troubleshooting and Support

If you encounter issues or have additional questions, you might:
- Review the script to ensure it matches your sheet's structure and naming.
- Check Google Sheets documentation or forums for insights related to your issue.
- If this guide or the script were provided by a specific developer or platform, contact them directly for support.

## License

This script is provided as-is for open use. You may modify and share it as you wish. If sharing or distributing, please provide attribution to the original author or source.
