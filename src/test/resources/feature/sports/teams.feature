#Author: reachoutsusmitharavella@gmail.com

@all
Feature: Make a record of all teams which are playing today
  This feature record  all team names with a match today.

  
  Scenario: Team names  with matches today
    Given Business  user is on Home Page 
    When Business  user login to the application
    Then Record all teams names which are playing today
    And There are no matches today
    Then Error message displayed as "there is no matches found today"


  
