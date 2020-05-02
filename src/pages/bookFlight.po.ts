import { by, element, ElementFinder } from "protractor";
import {ElementHelper} from "../support/elementHelper";

const timeOuts=require('../../testdata/time_outs/manageTimeOuts.json');
const jsonData=require('../../testdata/new_tours/options.json');

const elementHelper=new ElementHelper



export class BookFlightPage {

    public buyFlights;logoutBtn: ElementFinder;

    constructor() {
        this.buyFlights=element(by.xpath("//input[@name='buyFlights']"));
        this.logoutBtn=element(by.xpath("//img[@src='/images/forms/Logout.gif']"));
    }

    async bookFlight() {
        await elementHelper.waitForElement(timeOuts.Duration.shortDuration)
        await jsonData.passengers.forEach((value,index)=>{
            const details=jsonData.passengersDetails[index];
            return elementHelper.elementForType(element(by.xpath("//input[@name='"+value+"']")),details)
        });

        await jsonData.creditCard.forEach((value,index)=>{
            const details=jsonData.creditCardDetails[index];
            elementHelper.elementClick(element(by.xpath("//select[@name='"+value+"']")))
            return elementHelper.elementClick(element(by.xpath("//select[@name='"+value+"']/..//option[contains(.,'"+details+"')]")))
        });

        await jsonData.address.forEach((value,index)=>{
            const details=jsonData.selectAddress[index];
            return elementHelper.elementForClearType(element(by.xpath("//input[@name='"+value+"']")),details)

        });
        await elementHelper.waitForElement(timeOuts.Duration.shortDuration)
        await elementHelper.elementClick(this.buyFlights)
        await elementHelper.waitForElement(timeOuts.Duration.shortDuration)

    }
    async logout(){
        await elementHelper.waitForElement(timeOuts.Duration.shortDuration)
        await elementHelper.elementClick(this.logoutBtn);
    }
    async bookFlightWithOutDetail(){
        await elementHelper.waitForElement(timeOuts.Duration.shortDuration)
        await elementHelper.elementClick(this.buyFlights)
        await elementHelper.waitForElement(timeOuts.Duration.shortDuration)
    }

}
