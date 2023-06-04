// HackerRank problem:
// https://www.hackerrank.com/challenges/java-regex/problem

import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Main {
    public static void main(String[] args) {

        Scanner Object = new Scanner(System.in);
        System.out.println("Enter IP:");
        String IP = Object.nextLine();

        String X = "[0-1][0-9]|[0-1][0-9][0-9]|2|2[0-4][0-9]|25[0-5]|2[0-9]|[3-9][0-9]|[0-9]";
        String REGEX = "^((" + X + ")\\.){3}(" + X + ")$";

        int len = IP.length();
        if (len <= 15){
            Pattern pattern = Pattern.compile(REGEX);
            Matcher matcher = pattern.matcher(IP);
            boolean matchFound = matcher.find();
            if (matchFound) {
                System.out.println("This IP address is VALID.");
            } else {
                System.out.println("This IP address is INVALID.");
            }
        } else {System.out.println("Match not found (too many characters).");}

    }
}
