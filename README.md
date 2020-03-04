# Google-Sheets-Meetup

### The objective of this project:
Easy way to arrange meetups on a defined period of time.

Given a defined starting month (Date of reference, cell B1 on Main Sheet), this groups of functions allows us to visualize possible meetups on that period of time.

Each user must have an individual sheet in order for this script to work (this can be done simply by duplicating the sheet for the admin of the file, since all works the same way).


When all of this is correctly filled, the "Main" sheet will display the calendar with the amount of people available on that particular day, following the criteria defined on the "peopleReady" function on the customfunctions.js file.



## Content
Contains two functions in order to:

*· DIACALENDARIO*: generate dynamically a calendar based on the "Date of reference".

   On my case, I used this function to show the number of each day of the month.

     `=DIACALENDARIO($B$1;$Q$6;$Q$5;FILA();COLUMNA();DIASEM(FIN.MES($B$1; -1);2);DIA(FIN.MES($B$1;0)))`

*peopleReady*: Check the sheets to get the number of users available to join the meetup.
   
   The way to use this function is the following:
      
      `=peopleReady(FILA();COLUMNA())`
      
*#note1:*
   The format of the week day (monday, M, L...) can be also changed from settings:
   
   Being the number at the end the day of the week (e.g. 1 = M, 2 = T, 3 = W...)
      
      `=INDIRECTO("Main!" & Main!$Q$7 & 1)`
      
*#note2:*
   In order to make it more attractive, condicional format is used. This is not required for the logic to work.


Example of operative file:

![EgMain](https://github.com/Jkutkut/Google-Sheets-Meetup/blob/master/resources/MeetupEgMain.png)
![egSheets](https://github.com/Jkutkut/Google-Sheets-Meetup/blob/master/resources/Google_sheet_demo_sheets.png)
![Settings](https://github.com/Jkutkut/Google-Sheets-Meetup/blob/master/resources/Google_sheet_settings.png)
![sheetRoot](https://github.com/Jkutkut/Google-Sheets-Meetup/blob/master/resources/Google_sheet_demoRoot.png)
![sheetUser1](https://github.com/Jkutkut/Google-Sheets-Meetup/blob/master/resources/Google_sheet_demoUser1.png)
