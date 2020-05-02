exports.config = {
    baseUrl: 'http://newtours.demoaut.com/',

    directConnect: true,
    allScriptsTimeout: 110000,
    getPageTimeout: 60000,


    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),

        suites:{
    regression:['./features']
    },

    plugins: [{
        package: 'protractor-multiple-cucumber-html-reporter-plugin',
        options: {
            automaticallyGenerateReport: true,
            displayDuration: true,
            durationInMS: true,
        }
    }],
    onPrepare: function() {
        browser.manage().window().maximize();
    },
    cucumberOpts: {
        require: ["./src/step_definitions/*.ts","./src/support/*.ts"],
        'require-module':   [ 'ts-node/register'],
        format: 'json:temp/Reports/results.json',
        strict:  true,
        keepAlive: false,
        'fail-fast': true,
        //tags:['@e2e']
    },
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['disable-infobars', "--disable-gpu", "--window-size=1920,1080","--no-sandbox"],
            prefs: {'profile.default_content_setting_values.geolocation': 2}

        }
    },
    onComplete:function () {
        browser.executeScript('window.localStorage.clear();');
        browser.executeScript('window.sessionStorage.clear();');
        browser.driver.manage().deleteAllCookies();
    }
};
