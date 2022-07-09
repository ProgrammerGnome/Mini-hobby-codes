# One task, two programming languages.
### The task: Interesting speed control
#### Programming languages: 
```
Java, Python
```

Section speed control is used in many countries to control traffic. It is based on the vehicles
passing two control gates that are several kilometres from each other. At both points the license
plate number of the vehicle and the time of passing the gate are recorded. The average speed is
calculated from the two time values. If it exceeds the maximum allowed speed for the given section,
then the driver has violated the traffic rules. The section speed control measurement data of one of
the lanes of a road section of length 10 km, which is single-lane in both directions, are available.
The road section is closed, that is, vehicles cannot enter or exit it at any other point than the endpoint.

Text file measurements.txt contains the measurement data of a 1-hour measurement
starting at 8 a.m. on a given day. Each vehicle appears only once among the measurement data. The
measurement data of a given vehicle are given in one line separated by single spaces. A line contains
9 pieces of data, the license plate number of the vehicle (6 characters) and the time recorded at the
entry and exit points of the section in hour, minute, second, millisecond format. (The file does not
contain the data of vehicle that did not have a recorded time at the entry or the exit point of the
section.)

The number of lines is at most 1000. The data are ordered by the time recorded at the entry point.
For example:
```
OXZ648 8 4 44 861 8 11 53 432
QUT385 8 4 53 376 8 9 28 185
QTS988 8 5 0 854 8 12 19 879
OTP604 8 5 2 263 8 12 21 288
```
According to the example, the vehicle with license plate number QTS988 passed the recorder
at the entry point at 8:5:0.854 and passed the recorder at the exit point at 8:12:19.879. Its
average speed is 82 km/h, which is the distance travelled (10 km) divided by the elapsed time
(0.1219 hour).

Create a program that uses the data given in file measurements.txt to answer the
following questions. Save the source code of the program as speedcontrol. (When writing
the program, you do not have to check the correctness and the validity of the data given by the
user, you can assume that the available data correspond to the description above.)

If an exercise requires displaying data on the screen, display the exercise number before
displaying the result (for example: Exercise 3.). If you request data from the user, display
the nature of the requested data on the screen. Displaying without accents is also acceptable.
When displaying decimal digits, use the default display method of the programming language
used.

Display the results and communicate with the user according to the example given at the end
of the exercise.

1. Read and store the data of file measurements.txt.
2. Display the number of vehicles whose data were recorded in the measurement on the screen.
3. From the available data, determine the number of vehicles that passed the exit point of the
section before 9 o’clock. Display the number on the screen.
4. Request a time given in hour minute form from the user.
a. Determine the number of vehicles that passed the entry point in the given minute.
If in the given minute no vehicle passed the entry point, then display value 0.
b. Determine the traffic intensity, which is the number of vehicle on the road
section in the minute that starts at the given minute (e.g. if the given hour minute
is 08:09, then between 08:09:00.000-08:09:59.999) divided by the length of the
road section. Display the value in decimal fraction format.
5. Display the recorded speed data on the road section on the screen!
6. Create a text file with name fines.txt, which contains the the recorded speeds.

Example for the textual output:
```
Exercise 1
File readed.
Exercise 2.
The data of 687 vehicles were recorded in the measurement.
Exercise 3.
Before 9 o'clock 603 vehicles passed the exit point recorder.
Exercise 4.
Enter an hour and minute value: 8 20
  a. The number of vehicle that passed the entry point recorder: 12
  b. The traffic intensity: 9,4
Exercise 5.
The recorded speed data:
75.30120481927734
86.05851979346015
120.48192771084311
...
Exercise 6.
The file is ready.
```
Contents of file fines.txt:
```
83.19467554076502
...
11.811953697141501
...
65.1890482398959
...
73.09941520467882
```
#### Based on the following task: 
https://dload-oktatas.educatio.hu/erettsegi/feladatok_2022tavasz_emelt/e_infang_22maj_fl.pdf (4. Section speed control)
