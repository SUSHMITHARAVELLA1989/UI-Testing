#Author: reachoutsusmitharavella@gmail.com

@all
Feature: Read about all articles related to sports
  This feature Read about all articles related to sports

  
  Scenario: Read all articles related to sports 
    Given Sports  user is on Home Page 
    When Sports  user login to the application
    Then Search with "sports artile" in the search box
    Then Find all articles related to "sports".
    And Read the First and the last article headings returned on the page
