import java.io.*;
public class converter_class{
		public static void main(String[] args) throws IOException {
			Integer[] new_integer_array = input_class.file_handling(args).toArray(new Integer[0]);
			for (Integer n : new_integer_array) {
				System.out.println(n);}
        }
}
