import './Error.css'
import Footer from '../MovieDetails/Footer/Footer'

const Error = ({error, chooseMovie}) => {
  let errorMessage;
  if (error) {
    errorMessage = <p className="error">Sorry, something went wrong: {error}</p>;
  } else {
    errorMessage = <p className="error">Sorry, something went wrong: that page does not exist.</p>;
  }

  return (
    <div>
      {errorMessage}
      <Footer chooseMovie={chooseMovie} />
    </div>
  )
}


export default Error