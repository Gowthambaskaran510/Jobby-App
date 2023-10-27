import {Link} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Home = props => {
  const onRedirectToJobs = () => {
    const {history} = props
    history.replace('/jobs')
  }

  return (
    <>
      <Header />
      <div className="heading-container">
        <div className="heading-content">
          <h1 className="home-heading">
            Find The Job That <br /> Fits Your Life
          </h1>
          <p className="home-description">
            Millions of people are searching for jobs,salary information,
            company reviews.Find the jobs that fits your abilities and potential
          </p>
          <Link to="/jobs" className="retry-btn-link">
            <button
              type="button"
              className="find-jobs-button"
              onClick={onRedirectToJobs}
            >
              Find Jobs
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
export default Home
