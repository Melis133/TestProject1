package utils;

public class DivisionFunction {

    /*

    I put the "division" function in util package
    as we can have this function as ready/util method in future
    and made it static in order to avoid creating an object of it

     */

    public static int division(String a, String b) {
        int result = Integer.parseInt(a) / Integer.parseInt(b);
        return result;
    }
}
