import {Then} from 'cucumber';

import {BookFlightPage} from "../pages/bookFlight.po";
import {RegisterPage} from "../pages/register.po";

const bookFlightPage= new BookFlightPage();
const registerPage  =new RegisterPage()


Then(/^.*?I start booking selected flight by providing necessary details$/,{timeout: 6 * 50000}, async () => {
    await bookFlightPage.bookFlight();
});

Then(/^.*?I logout from the website after booking the flight$/,{timeout: 6 * 50000}, async () => {
    await bookFlightPage.logout();
});
Then(/^.*?I start booking selected flight with out providing necessary details$/,{timeout: 6 * 50000}, async () => {
    await bookFlightPage.bookFlightWithOutDetail();
});
Then(/^.*?I should stay in flight booking page with title (.*)$/,{timeout: 6 * 50000}, async (title) => {
    await registerPage.titleAssertion(title);
});
