describe('Single Movie View', () => {
  beforeEach(() => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
      fixture: 'singleMovie.json'
    })
    .visit('http://localhost:3000/436270')
  });

  it('should show the movie details for the specific movie selected', ()=> {
    cy.get('.movie-info')
    .contains('Black Adam')
    cy.contains('Overview: Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.')
    cy.contains('Genres: Action, Fantasy, Science Fiction')
    cy.contains('Budget: $200,000,000')
    cy.contains('Revenue: $384,571,691')
    cy.contains('Rating: 4/10')
  });

  it('should not show details for the movie data that it does not have', () => {
    cy.get('.movie-info')
    .should('not.have.text', 'Runtime')
  });

  it('should be able to click the back to home button to take them back to movies list', () => {
    cy.get('.home-button').click()
    cy.url().should('eq', 'http://localhost:3000/')
  });

  it('should display error message for 404 status code', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
      statusCode: 404
    })
    cy.visit('http://localhost:3000/436270')
      .contains('Sorry, something went wrong: Error: Not Found')
  });

  it('should display error message for 500 status code', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
      statusCode: 500
    })
    cy.visit('http://localhost:3000/436270')
      .contains('Sorry, something went wrong: Error: Internal Server Error')
  });

  it('should show trailer for movie if there is one available', () => {
    cy.get('.movie-poster')
      .should('have.attr', 'title')
      .should('equal', 'Black Adam Official Trailer')
  });

  it('should display a poster if there is no movie trailer', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270/videos', {
      fixture: 'videos.json'
    })
    cy.visit('http://localhost:3000/436270')
      .get('.movie-poster')
      .should('have.attr', 'alt')
      .should('equal', 'Black Adam')
  })

  it('should show error if video fails to fetch', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270/videos', {
      statusCode: 500
    })
    cy.visit('http://localhost:3000/436270')
  })
});