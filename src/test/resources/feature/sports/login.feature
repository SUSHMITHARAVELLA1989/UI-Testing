#Author: reachoutsusmitharavella@gmail.com

@all
Feature: Login Action
  This feature will test  all nagative scenarios for Login

 
   	Scenario: Login with only  Username
    Given User is on Home Page 
    When User navigate to Login Page
    Then User enters username with "reachoutsusmitharavella@gmail.com"
    And  Click on Sign in button
    Then Error message displayed
    And  Error message should contains as "Sorry, those details don't match. Check you've typed them correctly."

 
   Scenario: Login with only  Password
    Given User is on Home Page 
    When User navigate to Login Page
    Then User enters Password with "Susmitha@02091989"
    And Click on Sign in button
    Then Error message displayed
    And  Validate message should contains as "Sorry, those details don't match. Check you've typed them correctly."
    
    Scenario: Login with  wrong username and password
    Given User is on Home Page 
    When User navigate to Login Page
    Then User enters username with "reachoutsusmitharavell@gmail.com"
    And  User enters Password with "Susmitha@0091989"
    And  Click on Sign in button
    Then Error message displayed
    And  Error message should contains as "Sorry, those details don't match. Check you've typed them correctly."

	Scenario: Login with  wrong username and correct password
    Given User is on Home Page 
    When User navigate to Login Page
    Then User enters username with "reachoutsusitharavell@gmail.com"
    And   User enters Password with "Susmitha@02091989"
    And Click on Sign in button
    Then Error message displayed
    And  Error message should contains as "Sorry, we can’t find an account with that email"

	Scenario: Login with  correct username and wrong password
    Given User is on Home Page 
    When User navigate to Login Page
    Then User enters username with "reachoutsusmitharavella@gmail.com"
    And   User enters Password with "Susmitha@0091989"
    And Click on Sign in button
    Then Error message displayed
    And  Error message should contains as "That's not the right password for that account"
    
    Scenario: Login with out Username and Password
    Given User is on Home Page 
    When User navigate to Login Page
    And Click on Sign in button
    Then Error message displayed
    And  Error message should contains as "Sorry, those details don't match. Check you've typed them correctly."
   