print("Exercise 1.")
cars = []
filename = open('measurements.txt')
for row in filename:
    cars.append(row.strip().split())
filename.close()
print("File readed.")

print("Exercise 2.")
print("The data of",len(cars),"vehicles were recorded in the measurement.")

print("Exercise 3.")
c = 0
for i in cars:
    if int(i[5])<9:
        c += 1
print("Before 9 o'clock",c,"vehicles passed the exit point recorder.")

print("Exercise 4")
hour = int(input("Enter hour value: "))
minute = int(input("Enter minute value: "))
c = 0
for i in cars:
    if (int(i[1])==hour and int(i[2])==minute):
        c += 1
print("       a. The number of vehicle that passed the entry point recorder: ",c)
c = 0
for i in cars:
    if ((int(i[1])==hour and int(i[2])<=minute) and (int(i[5])==hour and int(i[6])>=minute)):
        c += 1
print("       b. The traffic intensity: ",c/10)

print("Exercise 5")
print("The recorded speed data:")
for i in cars:
    print(10/((int(i[6])*0.0166+int(i[5]))-(int(i[2])*0.0166+int(i[1]))))
    
print("Exercise 6")
célfájl = open('fines.txt', 'w')
for i in cars:
    print(10/((int(i[6])*0.0166+int(i[5]))-(int(i[2])*0.0166+int(i[1]))), file=célfájl)
célfájl.close()
print("The file is ready.")