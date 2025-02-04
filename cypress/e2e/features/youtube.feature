Feature: Youtube

Scenario: User plays a video on YouTube
Given the user enters the url
When the user search 'Luzu tv'
Then the system displays the search results
When the user select the first video
Then the system displays the video correctly

