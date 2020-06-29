Feature: SPECIFY NUMBER OF EVENTS

Scenario: When the user hasn't specified a number, 32 events are displayed by default
Given user opens the app
When user has not specified a number of events to be displayed
Then user should see a default of thirty two events

Scenario: User can change how many events they want to be displayed 
Given user opens the app
When user specifies a number of events to be displayed
Then user should see that number of events
