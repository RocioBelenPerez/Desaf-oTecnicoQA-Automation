Feature: Login

Scenario: User login
Given the user enters the website
When they enter their username 
And they enter their password 
And they click the Login button
Then they should be redirected to the user dashboard
And they should see the product listing