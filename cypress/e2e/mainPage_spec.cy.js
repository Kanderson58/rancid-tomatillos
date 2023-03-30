describe('Main Page', () => {
  beforeEach(() => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/')
    .visit('http://localhost:3000/')
  });

  it('should have a header with the title "Rancid Tomatillos" and a tomatillo image', () => {
    cy.get('header').should('exist');
    cy.get('h1').should('have.text', 'Rancid Tomatillos');
    cy.get('.tomatillo').should('exist');
  });

  it('Should display all movie cards in the movie list with movie posters', () => {
    cy.get('.movieCard').find("img").should('be.visible').should('have.length', 40)
  });

  it('should display the correct movie image in each movie card', () => {
    cy.get('.movieCard').first().within(() => {
      cy.get('img').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg');
      cy.get('.title').should('have.text', 'Black Adam');
    });
  });

  it('should display the correct release date in each movie card', () => {
    cy.get('.movieCard').first().within(() => {
      cy.get('.date').should('have.text', '2022');
    });
  });

  it('should display search bar and have placeholder text', () => {
    cy.get('.searchBar').should('exist');
    cy.get('#search-bar').should('have.attr', 'placeholder', 'Search...');
  });

  it('should allow the user to click on a movie and navigate to the details page', () => {
    cy.get('.movieCard').first().click();
    cy.url().should('include', '/436270');
    cy.url().should('not.eq', 'http://localhost:3000/')
  });

  it('Should display error message for 500 status code', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 500
    })
    cy.visit('http://localhost:3000/')
      .contains('Sorry, there was an error loading your page!')
  })
  
});

