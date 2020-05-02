import {Given,Then,When} from 'cucumber';

import {RegisterPage} from "../pages/register.po";

const registerPage= new RegisterPage();

Given(/^.*?I am at the new tours Website with title (.*)$/, {timeout: 6 * 50000},async (title) => {
    await registerPage.titleAssertion(title);
});

When(/^.*?I registered by providing necessary details$/, {timeout: 6 * 50000},async () => {
    await registerPage.register();
});

Then(/^.*?I should able to login$/, {timeout: 6 * 50000},async () => {
    await registerPage.login();
});

When(/^.*?I login without username and password$/, {timeout: 6 * 50000},async () => {
    await registerPage.loginWithoutCr();
});

Then(/^.*?I should stay back in login page with title (.*)$/, {timeout: 6 * 50000},async (title) => {
    await registerPage.titleAssertion(title);
});
When(/^.*?I registered with out providing necessary details$/, {timeout: 6 * 50000},async () => {
    await registerPage.registerWithoutDetails();
});

Then(/^.*?I should not able to get the user name and password with text (.*)$/, {timeout: 6 * 50000},async (title) => {
    await registerPage.textAssertion(title);
});

