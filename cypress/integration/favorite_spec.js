describe("favorite functionality", () => {
    it("Main page links render currectly", () => {
        cy.visit("/");
        cy.get("[data-cy=main-page-button]")
            .contains("Browse SpaceX Launches")
            .should("be.visible");
        cy.get("[data-cy=main-page-button]")
            .contains("Browse SpaceX Launch Pads")
            .should("be.visible");
    });
    it("User can Add and Remove launch items to favorites list and Navigate fo the favorite items from slidein drawer", () => {
        cy.visit("/");
        cy.intercept("GET", "https://api.spacexdata.com/v3/launches/past*", {
            statusCode: 200,
            fixture: "test_rockets.json",
        });
        cy.intercept("GET", "https://api.spacexdata.com/v3/launches/*", {
            statusCode: 200,
            fixture: "test_rocket_info.json",
        });
        cy.get("[data-cy=main-page-button]")
            .contains("Browse SpaceX Launches")
            .click();
        cy.findByText("A test mission").should("be.visible");
        cy.findByText("A test mission").click();
        cy.get("[data-cy=info-page-fav-button]").should("be.visible");
        cy.get("[data-cy=info-page-fav-button]").click();
        cy.findByRole("link", { name: /home/i }).should("be.visible");
        cy.findByRole("link", { name: /home/i }).click();
        cy.get("[data-cy=navbar-fav-button]").should("be.visible");
        cy.get("[data-cy=navbar-fav-button]").click();
        cy.get("[data-cy=drawer-launch-item-card]")
            .contains("A test mission")
            .should("be.visible");
        cy.get("[data-cy=drawer-launch-item-card]")
            .contains("A test mission")
            .click();
        cy.findByText("21 November 2020, 9:17:00 GMT-8").should("be.visible");
        cy.get("[data-cy=navbar-fav-button]").click();
        cy.get("[data-cy=drawer-launch-item-card-fav-button]").should(
            "be.visible"
        );
        cy.get("[data-cy=drawer-launch-item-card-fav-button]").click();
        cy.get("[data-cy=navbar-fav-button]").click();
        cy.findByText("Your favorite Launches list is empty").should(
            "be.visible"
        );
    });
});
