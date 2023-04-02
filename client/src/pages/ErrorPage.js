import {Link} from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
      <p>Page Not Found!</p>
      <Link to='/'>Return Home</Link>
    </div>
  )
}
export default ErrorPage