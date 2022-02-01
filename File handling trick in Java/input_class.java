import java.io.*;
import java.util.ArrayList;
// raf = random acces file

public class input_class{

	static ArrayList<Integer> strings = new ArrayList<Integer>();

	public static ArrayList<Integer> file_handling(String[] args)
	{
	  RandomAccessFile raf;
	  String row;
	  ArrayList<Integer> strings = new ArrayList<Integer>();
   
	  try
	  {
		raf = new RandomAccessFile("example_file.txt","r");
		 
		int n = 0;
		for( row = raf.readLine(); row != null; row = raf.readLine() )
		{
			n++;
			if(n % 2 == 0){
				strings.add(Integer.parseInt(row));
			}
		}
		 
		raf.close();
	  }
	  catch( IOException e )
	  {
		System.out.println("Error message.");
	  }
	  return strings;
	}
}
