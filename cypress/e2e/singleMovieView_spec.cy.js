describe('Single Movie View', () => {
  beforeEach(() => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
      fixture: 'singleMovie.json'
    })
    .visit('http://localhost:3000/436270')
  });

  it('should show the movie details for the specific movie selected', ()=> {
    cy.get('.movie-info')
    .contains('h2', 'Black Adam - "The world needed a hero. It got Black Adam."')
    cy.contains('Overview: Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.')
    cy.contains('Genres: Action, Fantasy, Science Fiction')
    cy.contains('Budget: $200,000,000')
    cy.contains('Revenue: $384,571,691')
    cy.contains('Runtime: 125 minutes')
  })

  it('should not show details for the movie data that it does not have', () => {
    cy.get('.movie-info')
    .should('not.eq', '')
  })
});