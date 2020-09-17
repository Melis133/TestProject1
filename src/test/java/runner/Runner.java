package runner;


import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(

        plugin = {"pretty", "html:reports/cucumber-html-report"},
        features = "src/test/resources/division.feature",
        glue = "steps",
        tags = "@div",
        dryRun = false

)
public class Runner {

}
