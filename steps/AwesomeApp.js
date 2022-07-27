"use strict";

var wd = require("selenium-webdriver"),
    By = wd.By,
    until = wd.until;

const { Before, Given, When, Then, After } = require('@cucumber/cucumber')
var assert = require('assert');

let driver;

// Setting Android Desired Capabilities.
var desiredCaps = {
    platformName: "Android",
    deviceName: "Pixel_2",
    app: "c:\\Dev\\App\\AwesomeApp.apk",
    automationName: "uiautomator2",
    appPackage: "com.awesomeapp",
    appActivity: ".MainActivity",
    browserName: '',
       
};

// Before function for driver initialization
Before( {timeout: 6000 * 10000}, async function () {
    console.log('Before: Connecting to Device.....');  
    driver = await new wd.Builder().usingServer("http://localhost:4723/wd/hub").withCapabilities(desiredCaps).build();
    console.log('');  
    
})

// Given Function of Cucumber
Given(/^App is launched$/, {timeout: 6000 * 1000}, async () => {
    try {
        
        console.log('Given:App is launched... Start');   
        
        var landingPageTitleElement = await driver.findElements(By.xpath("//*[@text='Testing instructions']"));

        if ( landingPageTitleElement.length > 0) {
            assert.Equal(logoutElements.length, 1);
        } 
    
    console.log('Given:App is launched... End');    
    console.log(' ');  
        
     } catch (error) {}  
});

// When function for Action implementation
When(/^Click the Settings tab$/, async () => {  
    console.log('When: Click the Settings tab ... Start');      
    const settingsElement = await driver.findElement(By.xpath("//*[@resource-id='Settings tab']"));
    await settingsElement.click();    
    console.log('When: Click the Settings tab... End');    
    console.log('');  
}); 

When(/^Click the Dashboard tab$/, async () => {  
    console.log('When: Click the Dashboard tab ... Start');      
    const dashboardElement = await driver.findElement(By.xpath("//*[@resource-id='Dashboard tab']"));
    await dashboardElement.click();    
    console.log('When: Click the Dashboard tab... End');    
    console.log('');  
}); 

When(/^Swipe to the right of the screen$/, async () => {  
    console.log('When: Swipe to the right of the screen ... Start');

    let dragable = driver.findElement(By.xpath("//*[@resource-id='leftslide']"));
    //We can dynamically measure the element location and use that for drag and drop
    await driver.actions().dragAndDrop(dragable, { x: 700, y: 50 }).perform(); 
    
    console.log('When: Swipe to the right of the screen... End');    
    console.log('');  

}); 

When(/^click on button$/, {timeout: 6000 * 1000},async () => {  
    console.log('When: click on button ... Start');      
    const buttonElement = await driver.findElement(By.xpath("//*[@resource-id='sidemenuButton']"));
    await buttonElement.click();    
    console.log('When: click on button... End');    
    console.log('');  
}); 


// Check the Result in Then function
Then(/^Check Settings are loaded$/, async () => {
    console.log('Then: Check Settings are loaded... Start');    

    // Check for the Application Settings text
    await driver.wait(until.elementLocated(By.xpath("//*[@text='Application Settings']"), 1000));
    var settingsElements = await driver.findElements(By.xpath("//*[@text='Application Settings']"));
    assert.notEqual(settingsElements.length, 0);
    console.log('Then: Check Settings are loaded... End');  
    
});

Then(/^Check Dashboard is loaded$/, async () => {
    console.log('Then: Check Dashboard is loaded... Start');    

    // Check for the Application Dashboard text
    await driver.wait(until.elementLocated(By.xpath("//*[@resource-id='dashboard-title']"), 1000));
    var dashboardElements = await driver.findElements(By.xpath("//*[@resource-id='dashboard-title']"));
    assert.notEqual(dashboardElements.length, 0);
    console.log('Then: Check Dashboard is loaded... End');  
    
});

Then(/^Check Side Menu with button is appeared$/, async () => {
    console.log('Then: Check Side Menu with button is appeared... Start');    

    // Check for the SideMenu text
    await driver.wait(until.elementLocated(By.xpath("//*[@text='Side menu']"), 1000));
    var sideMenuElements = await driver.findElements(By.xpath("//*[@text='Side menu']"));
    assert.notEqual(sideMenuElements.length, 0);
    //Check for button
    await driver.wait(until.elementLocated(By.xpath("//*[@resource-id='sidemenuButton']"), 1000));
    var buttonElements = await driver.findElements(By.xpath("//*[@resource-id='sidemenuButton']"));
    assert.notEqual(buttonElements.length, 0);

    console.log('Then: Check Side Menu with button is appeared... End');  
    
});

// Check the Result in Then function
Then(/^check Alert is appeared$/, async () => {
    console.log('Then: check Alert is appeared... Start');    

    // Check for the Application Settings text
    await driver.wait(until.elementLocated(By.xpath("//*[@resource-id='android:id/alertTitle']"), 1000));
    var alertElements = await driver.findElements(By.xpath("//*[@resource-id='android:id/alertTitle']"));
    assert.notEqual(alertElements.length, 0);
    const okElement = await driver.findElement(By.xpath("//*[@resource-id='android:id/button1'][@text='OK']"));
    await okElement.click();
    console.log('Then: check Alert is appeared... End');  
    
});


//After function to release the Driver
After(async function() {
    
    console.log('Clicking on Instructions tab.....');  
    const instructionElement = await driver.findElement(By.xpath("//*[@resource-id='Instructions tab']"));
    await instructionElement.click();

    console.log('Disconnecting.....');  
    console.log('');  
    await driver.quit();
  })

