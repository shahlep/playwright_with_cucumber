Feature: Login Feature
    
    As a user
    I want to login to application

    Scenario: Login with valid credentials
        Given I visit a login page
        When I fill the login form with valid credentials
        Then I should see the home page 

