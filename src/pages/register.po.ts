import { by, element, ElementFinder } from "protractor";
const moment = require("moment");
import {ElementHelper} from "../support/elementHelper";
import {Assertions} from "../support/assertions";


const timeOuts=require('../../testdata/time_outs/manageTimeOuts.json');
const jsonData=require('../../testdata/new_tours/options.json');

const elementHelper=new ElementHelper
const assertionsHelper =new Assertions()
var User = "Test"+moment().format("DDMMYYYYHHmmss");


export class RegisterPage {
    registerBtn;selectCountry;country;userName;password;cPassword;submitBtn;signInBtn;user;loginBtn;
    public text: ElementFinder;

    constructor() {
        this.registerBtn=element(by.xpath("//a[contains(.,'REGISTER')]"));
        this.selectCountry=element(by.xpath("//select[@name='country']"));
        this.country=element(by.xpath("//option[contains(.,'INDIA')][3]"));
        this.userName=element(by.xpath("//input[@name='email']"));
        this.password=element(by.xpath("//input[@name='password']"));
        this.cPassword=element(by.xpath("//input[@name='confirmPassword']"));
        this.submitBtn=element(by.xpath("//input[@name='register']"));
        this.signInBtn=element(by.xpath("//a[contains(.,'sign-in')]"));
        this.user=element(by.xpath("//input[@name='userName']"));
        this.loginBtn=element(by.xpath("//input[@name='login']"));
        this.text=element(by.xpath("//b[contains(.,' Note: Your user name is .')]"));

    }

    async register() {
        await elementHelper.waitForElement(timeOuts.Duration.shortDuration)
        await elementHelper.elementClick(this.registerBtn);
        await jsonData.register.forEach((value,index)=>{
            const details=jsonData.registerDetails[index];
            return elementHelper.elementForType(element(by.xpath("//input[@name='"+value+"']")),details)
        });
        await elementHelper.waitForElement(timeOuts.Duration.shortDuration)
        await elementHelper.elementClick(this.selectCountry);
        await elementHelper.elementClick(this.country);
        await elementHelper.elementForType(this.userName,User);
        await elementHelper.elementForType(this.password,User);
        await elementHelper.elementForType(this.cPassword,User);
        await elementHelper.elementClick(this.submitBtn)
        await elementHelper.waitForElement(timeOuts.Duration.shortDuration)
    }

    async login() {
        await elementHelper.waitForElement(timeOuts.Duration.shortDuration);
        await elementHelper.waitAfterClick(this.signInBtn,timeOuts.Duration.shortDuration);
        await elementHelper.elementForType(this.user,User);
        await elementHelper.elementForType(this.password,User);
        await elementHelper.elementClick(this.loginBtn);
        await elementHelper.waitForElement(timeOuts.Duration.shortDuration);
    }
    async loginWithoutCr() {
        await elementHelper.elementClick(this.loginBtn);
        await elementHelper.waitForElement(timeOuts.Duration.shortDuration);
    }

    async titleAssertion(title){
        await assertionsHelper.titleAssertion(title)
    }

    async registerWithoutDetails() {
        await elementHelper.waitForElement(timeOuts.Duration.shortDuration)
        await elementHelper.elementClick(this.registerBtn);
        await elementHelper.elementClick(this.submitBtn)
        await elementHelper.waitForElement(timeOuts.Duration.shortDuration)
    }

    async textAssertion(title){
        await assertionsHelper.textAssertion(this.text,title)
    }
}
