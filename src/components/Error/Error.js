import './Error.css'
import Footer from '../MovieDetails/Footer/Footer'

const Error = ({error, chooseMovie}) => {
  return (
    <div>
    {error && <p className="error">Sorry, something went wrong: {error}</p>}
    {!error && <p className="error">Sorry, something went wrong: that page does not exist.</p>}
    <Footer chooseMovie={chooseMovie} />
    </div>
  )
}

export default Error