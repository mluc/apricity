# Apricity Front End Developer Exercise
===============================

### Dataset: 
* Systolic blood pressure for a sample of 500 adults
* Dataset description:
  * https://vincentarelbundock.github.io/Rdatasets/doc/Stat2Data/Blood1.html
* Dataset download: Title Blood 1
  * https://vincentarelbundock.github.io/Rdatasets/datasets.html
* Add date column to the dataset. First 10 rows as the followings:


    | id 	| date     	| systolicBP 	| smoke 	| overwt 	|
    |----	|----------	|------------	|-------	|--------	|
    | 1  	| 6/1/2012 	| 133        	| 0     	| 2      	|
    | 2  	| 6/1/2012 	| 117        	| 1     	| 0      	|
    | 3  	| 6/1/2012 	| 181        	| 1     	| 0      	|
    | 4  	| 6/2/2012 	| 115        	| 1     	| 0      	|
    | 5  	| 6/2/2012 	| 84         	| 0     	| 0      	|
    | 6  	| 6/2/2012 	| 142        	| 0     	| 0      	|
    | 7  	| 6/3/2012 	| 140        	| 1     	| 1      	|
    | 8  	| 6/3/2012 	| 135        	| 0     	| 0      	|
    | 9  	| 6/3/2012 	| 163        	| 1     	| 2      	|
    | 10 	| 6/4/2012 	| 132        	| 0     	| 2      	|

### How to Run:
1. Server:
    * *cd server* folder
    * *npm install* to install all required packages
    * *node server* to start the server. 
        * Data from *server\dataset\Blood1-addtime.csv* file will be loaded
        * API: http://localhost:5001/entries
2. Client:
    * *cd client* folder
    * *npm install* to install all required packages
    * *npm start* to start the client