import {Then} from 'cucumber';

import {SelectFlightPage} from "../pages/selectFlight.po";

const selectFlightPage= new SelectFlightPage();


Then(/^.*?I start looking for suitable flight$/, {timeout: 6 * 50000},async () => {
    await selectFlightPage.findFlight();
});

Then(/^.*?I select the suitable flight$/, {timeout: 6 * 50000},async () => {
    await selectFlightPage.selectFlight();
});

