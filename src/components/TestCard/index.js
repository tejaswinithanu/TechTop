import {Link} from 'react-router-dom'

import './index.css'

const TestCard = props => {
  const {languageDetails} = props
  const {languageId, language, logoUrl, topics, videoUrl} = languageDetails
  return (
    <li className="test-card-item">
      <div className="language-details-container">
        <div className="logo-language-container">
          <img className="language-logo" src={logoUrl} alt={language} />
          <h2 className="language-name">{language}</h2>
        </div>
        <p>Topics: {topics}</p>
        <Link className="test-start-link" to={`/test/${languageId}`}>
          <button className="test-start-button" type="button">
            Take Test
          </button>
        </Link>
      </div>
      <div className="video-container">
        <iframe className="video" title="Quick revision" src={videoUrl} />
      </div>
    </li>
  )
}

export default TestCard
