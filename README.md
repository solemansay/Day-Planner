# Day-Planner

The reason for making this day planner was to create a website that would save and store your information for the day in the provided text areas. while doing this excersise I was able to flex the new knowledge that I have on the DOM as well as creating loops. 

# how it works 

The first thing that I accomplished was establishing the html, assigning it rows and columns for the time, text area and save button like so:

<img src = "assets/htmlRows.jpg" alt= "html Rows and Columns example">

I gave each text area an id corilating to the time of the row it was on in military time. I also connected the nessicarry divs to the style sheet by assigning them specific classes that appeared on the css file.

next in the javascript I created a variable for the current time (ct) and made it equal to moment().format("HH") which would allow the value to be changed as the hour did throughout the day. 

After this I created an on load function that would simultaniously set the color for past, preasent, and future while getting the 
values of past entries from local storage and setting them as the text area value.

<img src = "assets/settingVar.jpg" alt= "javascript setting var and creating for each loop">
