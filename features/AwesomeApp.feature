Feature: Test AwesomeApp

    
    Scenario: Validate the Setting
        Given App is launched  
        When Click the Settings tab
        Then Check Settings are loaded          
               
    Scenario: Validate the Dashboard
        Given App is launched          
        When Click the Dashboard tab
        Then Check Dashboard is loaded
           
    Scenario: Validate the Swipe
        Given App is launched          
        When Swipe to the right of the screen
        Then Check Side Menu with button is appeared
        When click on button
        Then check Alert is appeared and click ok        

    Scenario: Validate the valid failure
        Given App is launched          
        When Click the Settings tab
        Then Check Dashboard is loaded
