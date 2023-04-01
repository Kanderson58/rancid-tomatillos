describe('Search View', () => {
  beforeEach(() => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      fixture: 'movies.json'
    }).visit('http://localhost:3000/')
  });

  it('should allow user to select search bar and type', () => {
    cy.get('input').type('black adam')
  });

  it('should present a movie with a matching title to the search', () => {
    cy.get('input')
      .type('the woman king')
      .get('.movieCard')
      .contains('The Woman King')
  });  

  it('should allow a user to use any capitilization in search', () => {
    cy.get('input')
      .type('BLACK ADAM')
      .get('.movieCard')
      .contains('Black Adam')
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
    .type('black adam')
    .get('.movieCard')
    .click()
    .get('.movie-info')
    .contains('h2', 'Black Adam')
  });
})