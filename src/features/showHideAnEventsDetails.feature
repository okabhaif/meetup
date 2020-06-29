Feature: SHOW / HIDE EVENT DETAILS

Scenario: By default, when user hasn’t searched for a city, show upcoming events based on the user’s location
Given the user has opened the app
When the user has not entered a location
Then the user should a collapsed view of events based on their default location

Scenario: User can expand event for further information
Given user would like more info about a specific event from the list
When the user clicks on details button
Then the user should see an expanded view of the event

Scenario: User can collapse an event to hide extra information
Given user is on an expanded view of a specific event
When the user clicks the hide details button
Then the user should see the collapsed version of the event
