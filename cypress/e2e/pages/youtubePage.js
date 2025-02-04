class Youtube {
  elements = {
    logo: () =>
      cy.get(
        "#start > ytd-topbar-logo-renderer.style-scope > #logo > div.style-scope > .ytd-topbar-logo-renderer > #logo-icon"
      ),
    logo2: () =>
      cy.get(
        "#start > ytd-topbar-logo-renderer.style-scope > #logo > ytd-yoodle-renderer.style-scope > picture.style-scope > img.style-scope"
      ),
    menu: () =>
      cy.get(
        "#start > #guide-button > #button > #guide-icon > .yt-icon-shape > div"
      ),
    searchBar: () => cy.get(".ytSearchboxComponentInputBox"),
    results: () => cy.get("#items > :nth-child(1) > #dismissible"),
    title: () =>
      cy.get(".grid-subheader > #title-container > h2.style-scope > #title"),
    firstVideo: () =>
      cy.get(
        ":nth-child(2) > #dismissible > ytd-thumbnail.style-scope > #thumbnail > yt-image.style-scope > .yt-core-image"
      ),
    video: () => cy.get(".ytp-play-button"),
  };

  enterTheUrl() {
    cy.visit("https://www.youtube.com/");
  }
  dashboard() {
    this.elements.menu().should("be.visible");
  }
  lookFor() {
    this.elements.searchBar().should("be.visible").type("luzu tv");
    this.elements.searchBar().should("be.visible").type("{enter}");
  }
  result() {
    this.elements
      .title()
      .should("be.visible")
      .and("contain.text", "Lo más reciente");
    this.elements.results().should("be.visible");
  }
  selectFirstVideo() {
    this.elements.firstVideo().should("be.visible").click();
    cy.wait(2000);
  }
  playVideo() {
    this.elements.video().trigger("play");
  }
}

export default new Youtube();
