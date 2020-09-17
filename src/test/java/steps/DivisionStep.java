package steps;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;


import static utils.DivisionFunction.division;

public class DivisionStep {

    //Created one integer "result" in order to save the result of division and to use for validation
    int result;

    // Gave just general idea, but actual 2 digits passing in next "@When" step
    @Given("two digits to be divided")
    public void two_digits_to_be_divided() {
    }


    @When("division function is called with two digits {string} and {string}")
    public void division_function_is_called_with_two_digits_and(String a, String b) {
        result = division(a, b);
    }

    @Then("result {int} is validated")
    public void result_is_validated(int expected) {
        Assert.assertTrue(result == expected);
    }


}
