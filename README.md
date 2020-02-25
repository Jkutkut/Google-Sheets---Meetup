# Google-Sheets-Meetup

## Content
Contains two functions in order to:

*· DIACALENDARIO*: generate dynamically a calendar based on the "Date of reference".

   - On my case, I used this function to show the number of each day of the month.

`=DIACALENDARIO($B$1;$Q$6;$Q$5;FILA();COLUMNA();DIASEM(FIN.MES($B$1; -1);2);DIA(FIN.MES($B$1;0)))`

*peopleReady*: Check the sheets to get the number of users available to join the meetup.

### The objective of this project:
Easy way to arrange meetups on a defined period of time.

Given a defined starting month (Date of reference, cell B1 on Main Sheet), this groups of functions allows us to visualize possible meetups on that period of time.

Each user must have an individual sheet in order for this script to work (this can be done simply by duplicating the sheet for the admin of the file, since all works the same way).


When all of this is correctly filled, the "Main" sheet will display the calendar with the amount of people available on that particular day, following the criteria defined on the "peopleReady" function on the customfunctions.js file.


Example of operative file:

![EgMain](https://github.com/Jkutkut/Google-Sheets-Meetup/blob/master/resources/MeetupEgMain.png)
