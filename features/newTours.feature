Feature: New Tours E2E Flow

    Scenario Outline: New Tours E2E Flow
        Given I am at the new tours Website with title <title>
        When I registered by providing necessary details
        Then I should able to login
        And I start looking for suitable flight
        And I select the suitable flight
        And I start booking selected flight by providing necessary details
        And I logout from the website after booking the flight

        Examples:
            | title                |
            |Welcome: Mercury Tours|

    Scenario Outline: Login without username and password
        Given I am at the new tours Website with title <title>
        When I login without username and password
        Then I should stay back in login page with title <title>

        Examples:
            | title                |
            |Sign-on: Mercury Tours|

    Scenario Outline: Register with out providing details
        Given I am at the new tours Website with title <title>
        When I registered with out providing necessary details
        Then I should not able to get the user name and password with text <text>

        Examples:
            | title    |text|
            | Sign-on: Mercury Tours|Note: Your user name is .|

    Scenario Outline: Booking flight with out providing details
        Given I am at the new tours Website with title <title>
        Then I should able to login
        And I start looking for suitable flight
        And I select the suitable flight
        And I start booking selected flight with out providing necessary details
        And I should stay in flight booking page with title <bookTitle>

        Examples:
            | title    |bookTitle|
            |Register: Mercury Tours|Book a Flight: Mercury Tours|



