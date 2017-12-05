# nodejs-lab1
NodeJS Lab 1 Submission

1. Walk us through the design of your project. Why did you design your project the way you did? What difficulties did you overcome?

I utilized the npm module csvtojson. The program opens a csv file to file stream, pipes it to csvtojson, 
and then pipes resulting json stream to new json file. At first, I worked with static input csv file converting
to static json file then added support to allow customized file name via command line.

I had some issues with setting up emitters for when the conversion is completed.

2. How did you test your project to verify that it works? 

Only verified resulting json

3. Let us know if anything doesn't work as intended so your reviewer will know ahead of time

Everything should work.
