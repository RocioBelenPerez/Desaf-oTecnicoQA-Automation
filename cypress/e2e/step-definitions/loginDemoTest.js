import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";
import login from "../pages/loginDemoPage";

Given("the user enters the website", () => {
  login.url();
});
When("they enter their username", () => {
  login.typeUsername();
});
And("they enter their password", () => {
  login.typePassword();
});
And("they click the Login button", () => {
  login.clickBtnLogin();
});
Then("they should be redirected to the user dashboard", () => {
  login.dashboard();
});
And("they should see the product listing", () => {
  login.inventoryList();
});
