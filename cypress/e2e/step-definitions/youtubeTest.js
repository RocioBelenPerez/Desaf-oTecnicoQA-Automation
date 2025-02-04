import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";
import enterTheUrl from "../pages/youtubePage";
Given("the user enters the url", () => {
  enterTheUrl.enterTheUrl();
  enterTheUrl.dashboard();
});
When("the user search 'Luzu tv'", () => {
  enterTheUrl.lookFor();
});
Then("the system displays the search results", () => {
  enterTheUrl.result();
});
When("the user select the first video", () => {
  enterTheUrl.selectFirstVideo();
});
Then("the system displays the video correctly", () => {
  enterTheUrl.playVideo();
});
