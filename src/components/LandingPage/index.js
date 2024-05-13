import {Link} from 'react-router-dom'

import Header from '../Header'

import './index.css'

const text = {
  scrollText:
    "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.The trouble with programmers is that you can never tell what a programmer is doing until it's too late.",
}

const LandingPage = () => (
  <>
    <Header />
    <div className="video-container">
      <video
        className="bg-video"
        src="https://res.cloudinary.com/dqqijdyjr/video/upload/v1715518208/aitglughdnnuidzbrrep.mp4"
        autoPlay
        loop
        playsInLine
        muted
      >
        <track kind="captions" />
      </video>
      <div className="text-bar">
        <p className="text-inside-bar">{text.scrollText}</p>
      </div>
      <footer className="banner-container">
        <p className="banner-text">
          In computer programming, readability refers to the ease with which a
          human reader can comprehend the purpose, control flow, and operation
          of source code. It affects the aspects of quality above, including
          portability, usability and most importantly maintainability.
          Readability is important because programmers spend the majority of
          their time reading, trying to understand, reusing, and modifying
          existing source code, rather than writing new source code. Unreadable
          code often leads to bugs, inefficiencies, and duplicated code. A study
          found that a few simple readability transformations made code shorter
          and drastically reduced the time to understand it.
        </p>
        <Link className="button-link" to="/tests">
          <button className="explore-button" type="button">
            Explore Tests
          </button>
        </Link>
      </footer>
    </div>
  </>
)

export default LandingPage
