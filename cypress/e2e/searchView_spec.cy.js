describe('Search View', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });

  it('should allow user to select search bar and type', () => {
    cy.get('input').type('black panther')
  });

  it('should present a movie with a matching title to the search', () => {
    cy.get('input')
      .type('maneater')
      .get('.movieCard')
      .contains('Maneater')
  });  

  it('should allow a user to use any capitilization in search', () => {
    cy.get('input')
      .type('FALL')
      .get('.movieCard')
      .contains('Fall')
  });

  it('should show an error if the user searches a movie that does not exist', () => {
    cy.get('input')
      .type('potato')
      .get('.error')
      .contains('No movies found with the given search query.')
  });

  it('should allow user to clear search', () => {
    cy.get('input')
      .type('black panther')
      .get('.clear-btn')
      .click()
      .get('.moviesList')
      .contains('The Woman King')
  });

  it('should allow user to click movie card within search', () => {
    cy.get('input')
    .type('black panther')
    .get('.movieCard')
    .click()
    .get('.movie-info')
    .contains('Black Panther: Wakanda Forever - "Forever."')
  });
})