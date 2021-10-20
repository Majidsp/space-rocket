describe("favorite functionality", () => {
    it("User can Add and Remove launch items to favorites list and Navigate fo the favorite items from slidein drawer", () => {
        cy.visit("/");
        cy.findByText("Browse SpaceX Launches").click();
        cy.findByText("Sentinel-6 Michael Freilich").click();
        cy.get(".css-111kxot > svg").click();
        cy.get(":nth-child(1) > .css-u5zpo1").click();
        cy.get(".css-fcmcvc").click();
        cy.get(".css-1qj7heb").click();
        cy.get(".css-111kxot > svg").click();
        cy.get(".css-fcmcvc").click();
    });
});
