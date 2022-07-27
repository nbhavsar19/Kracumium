var reporter = require('cucumber-html-reporter');

var options = {
        theme: 'bootstrap',
        jsonFile: 'reports/cucumber-json-report.json',
        output: 'reports/cucumber-html-report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "App Version":"1.0",
            "Test Environment": "UAT",
            "Browser": "None",
            "Platform": "Android",
            "Device": "Pixel 2",
            "Executed": "Emulator"
        }
    };

    reporter.generate(options);