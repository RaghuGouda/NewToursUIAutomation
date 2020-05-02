import { by, element, ElementFinder } from "protractor";
import {ElementHelper} from "../support/elementHelper";

const timeOuts=require('../../testdata/time_outs/manageTimeOuts.json');
const jsonData=require('../../testdata/new_tours/options.json');

const elementHelper=new ElementHelper

export class SelectFlightPage {

    public servClass;selectAirline;airline;findFlightBtn;depart;return;reserveFlights: ElementFinder;

    constructor() {
        this.servClass=element(by.xpath("//input[@name='servClass'][2]"));
        this.selectAirline=element(by.xpath("//select[@name='airline']"))
        this.airline=element(by.xpath("//select[@name='airline']/..//option[contains(.,'Unified Airlines')]"));
        this.findFlightBtn=element(by.xpath("//input[@name='findFlights']"));
        this.depart=element(by.xpath("//b[contains(.,'Unified Airlines 363')]/../../..//input[@name='outFlight']"));
        this.return=element(by.xpath("//b[contains(.,'Unified Airlines 633')]/../../..//input[@name='inFlight']"))
        this.reserveFlights=element(by.xpath("//input[@name='reserveFlights']"));
    }

    async findFlight() {
        await elementHelper.waitForElement(timeOuts.Duration.shortDuration)
        await jsonData.flight.forEach((value,index)=>{
            const details=jsonData.flightDetails[index];
            elementHelper.elementClick(element(by.xpath("//select[@name='"+value+"']")))
            return elementHelper.elementClick(element(by.xpath("//select[@name='"+value+"']/..//option[contains(.,'"+details+"')]")))
        });
        await elementHelper.waitForElement(timeOuts.Duration.shortDuration)
        await elementHelper.elementClick(this.servClass);
        await elementHelper.elementClick(this.selectAirline);
        await elementHelper.elementClick(this.airline);
        await elementHelper.elementClick(this.findFlightBtn)
        await elementHelper.waitForElement(timeOuts.Duration.shortDuration)
    }
    async selectFlight() {
        await elementHelper.waitForElement(timeOuts.Duration.shortDuration);
        await elementHelper.elementClick(this.depart);
        await elementHelper.elementClick(this.return);
        await elementHelper.elementClick(this.reserveFlights);
        await elementHelper.waitForElement(timeOuts.Duration.shortDuration);
    }


}
