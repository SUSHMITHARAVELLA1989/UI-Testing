package com.rest.bbc.runner;



import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

@CucumberOptions(features="src/test/resources/feature/sports/login.feature",
plugin={"pretty","html:target/cucumber-reports","json:target/report.json","testng:target/report.xml"})

public class SportsRunner extends AbstractTestNGCucumberTests{
	
}
