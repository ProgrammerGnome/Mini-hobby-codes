package java_language;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Scanner; 

/**
 *
 * @author kiralymark
 */
public class speedcontrol {

    public static void main(String args[]) throws FileNotFoundException, IOException {
        
        System.out.println("Exercise 1");
        
        ArrayList<String> cars = new ArrayList<String>();
        try {
            File myObj = new File("measurements.txt");
            try (Scanner myReader = new Scanner(myObj)) {
                while (myReader.hasNextLine()) {
                    String data = myReader.next();
                    cars.add(data);
                }
            }
        } catch (FileNotFoundException e) {
            System.out.println("An error occurred.");
        }
        System.out.println("File readed.");
        
        System.out.println("Exercise 2");
        System.out.println("The data of "+cars.size()+" vehicles were recorded in the measurement.");
        
        System.out.println("Exercise 3");
        int c = 0;
        String array[] = {};
        array = cars.toArray(array);
        for (int i = 0; i < array.length; i++) {
            if (i%9 == 5){
                int array_i = Integer.parseInt(array[i]);
                if(array_i < 9) {c++;}
            }
        }
        System.out.println("Before 9 o'clock "+c+" vehicles passed the exit point recorder.");
        
        System.out.println("Exercise 4");
        Scanner myObj_hour = new Scanner(System.in); System.out.print("Enter an hour value: ");
        String input_hour = myObj_hour.nextLine();
        Scanner myObj_minute = new Scanner(System.in); System.out.print("Enter an minute value: ");
        String input_minute = myObj_minute.nextLine();
        c = 0;
        for (int i = 0; i < array.length; i++) {
            if (i%9 == 1 || i%9 == 2){
                String str_input_hour = input_hour; String str_input_minute = input_minute;
                if(array[i].equals(str_input_hour) && array[i+1].equals(str_input_minute)) {c++;}
            }
        }
        System.out.println("    a. The number of vehicle that passed the entry point recorder: "+c);
        c = 0;
        for (int i = 4; i < array.length; i++) {
            if (i%9 == 1 || i%9 == 2 || i%9 == 5 || i%9 == 6){
                int int_input_minute = Integer.parseInt(input_minute);
                int array_i_1 = Integer.parseInt(array[i+1]); 
                int array_i_3 = Integer.parseInt(array[i-4]);
                if((array[i].equals(input_hour) && array_i_1 <= int_input_minute) && (array[i-5].equals(input_hour) && array_i_3 >= int_input_minute)) {
                    c++;
                    //System.out.println(array[i]+" "+array[i+1]+":"+array[i-5]+" "+array[i-4]);
                }
            }
        }
        DecimalFormat df = new DecimalFormat("#.##");
        String c_round = df.format(c*0.1);
        System.out.println("    b. The traffic intensity: "+c_round);
        
        System.out.println("Exercise 5");
        ArrayList<String> h_speed = new ArrayList<String>();
        c = 0;
        for (int i = 4; i < array.length; i++) {
            if (i%9 == 1 || i%9 == 2 || i%9 == 5 || i%9 == 6){
                if((array[i].equals("8") || array[i].equals("9")) && (array[i-5].equals("8") || array[i-5].equals("9"))) {
                    //System.out.println(array[i]+" "+array[i+1]+":"+array[i-5]+" "+array[i-4]);
                   
                    int array_i = Integer.parseInt(array[i]);
                    int array_ip1 = Integer.parseInt(array[i+1]);
                    int array_im5 = Integer.parseInt(array[i-5]);
                    int array_im4 = Integer.parseInt(array[i-4]);
                    
                    if (((array_im5+array_im4*0.0166) > (array_i+array_ip1*0.0166))) {
                        String s = String.valueOf(10/((array_im5+array_im4*0.0166)-(array_i+array_ip1*0.0166)));  
                        h_speed.add(s);
                        c++;
                    }
                }
            }
        }
        System.out.println("The recorded speed data: ");
        for (int i = 0; i < h_speed.size(); i++) {
            System.out.println(h_speed.get(i));
        }
        
        System.out.println("Exercise 6.");
        Path output = Paths.get("fines.txt");
        try {
            Files.write(output, h_speed);
            System.out.println("The file is ready.");
        } catch (IOException e) {
        }
    }
}