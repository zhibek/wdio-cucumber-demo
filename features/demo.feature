Feature: Demo

  I want to demo cypress cucumber style tests

  Scenario: Search for demo
    Given I am on the Google homepage
    When I search for "demo wikipedia"
    And I click on the first search result
    Then the URL is "https://en.wikipedia.org/wiki/Demo"
    And the page title is "Demo"
