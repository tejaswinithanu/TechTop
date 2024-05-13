import {Component} from 'react'

import Header from '../Header'
import TestCard from '../TestCard'
import './index.css'

const languages = [
  {
    id: '',
    languageName: 'choose language...',
  },
  {id: 'html', languageName: 'HTML'},
  {
    id: 'css',
    languageName: 'CSS',
  },
  {
    id: 'javascript',
    languageName: 'JavaScript',
  },
  {
    id: 'python',
    languageName: 'Python',
  },
]

const languageCards = [
  {
    languageId: 'html',
    language: 'HTML',
    logoUrl:
      'https://res.cloudinary.com/dqqijdyjr/image/upload/v1715571969/c5djhuqztdocqyx6bagi.png',
    topics:
      'elements, tags, lists, forms, attributes, editors, comments, colors, tables, input, label etc...',
    videoUrl: 'https://www.youtube.com/embed/salY_Sm6mv4?rel=0',
  },
  {
    languageId: 'css',
    language: 'CSS',
    logoUrl:
      'https://res.cloudinary.com/dqqijdyjr/image/upload/v1715571969/c5djhuqztdocqyx6bagi.png',
    topics:
      'elements, tags, lists, forms, attributes, editors, comments, colors, tables, input, label etc...',
    videoUrl: 'https://www.youtube.com/embed/salY_Sm6mv4?rel=0',
  },
  {
    languageId: 'javascript',
    language: 'JAVASCRIPT',
    logoUrl:
      'https://res.cloudinary.com/dqqijdyjr/image/upload/v1715571969/c5djhuqztdocqyx6bagi.png',
    topics:
      'elements, tags, lists, forms, attributes, editors, comments, colors, tables, input, label etc...',
    videoUrl: 'https://www.youtube.com/embed/salY_Sm6mv4?rel=0',
  },
  {
    languageId: 'python',
    language: 'PYTHON',
    logoUrl:
      'https://res.cloudinary.com/dqqijdyjr/image/upload/v1715571969/c5djhuqztdocqyx6bagi.png',
    topics:
      'elements, tags, lists, forms, attributes, editors, comments, colors, tables, input, label etc...',
    videoUrl: 'https://www.youtube.com/embed/salY_Sm6mv4?rel=0',
  },
]

const questions = [
  {
    questionText: 'What does the abbreviation HTML stand for?',
    answerOptions: [
      {answerText: 'HyperText Markup Language', isCorrect: true},
      {answerText: 'HighText Markup Language', isCorrect: false},
      {answerText: 'HyperText Markdown Language', isCorrect: false},
      {answerText: 'none of the above', isCorrect: false},
    ],
  },
  {
    questionText: 'How many sizes of headers are available in HTML by default?',
    answerOptions: [
      {answerText: '5', isCorrect: false},
      {answerText: '6', isCorrect: true},
      {answerText: '1', isCorrect: false},
      {answerText: '3', isCorrect: false},
    ],
  },
  {
    questionText: 'What are the types of lists available in HTML?',
    answerOptions: [
      {answerText: 'Ordered, Unordered Lists', isCorrect: true},
      {answerText: 'Bulleted, Numbered Lists', isCorrect: false},
      {answerText: 'Named Unnamed Lists', isCorrect: false},
      {answerText: 'none of the above', isCorrect: false},
    ],
  },
  {
    questionText: 'What is the effect of the <b> tag?',
    answerOptions: [
      {answerText: 'It is used to write black-colored font', isCorrect: false},
      {answerText: 'It is used to change the font size', isCorrect: false},
      {
        answerText: 'It converts the text within it to bold font',
        isCorrect: true,
      },
      {answerText: 'none of the above', isCorrect: false},
    ],
  },
]

class TestsDisplayPage extends Component {
  render() {
    return (
      <div className="tests-page-container">
        <Header />
        <div className="choosing-container">
          <select className="options-container">
            {languages.map(eachLanguage => (
              <option value={eachLanguage.id} id={eachLanguage.id}>
                {eachLanguage.languageName}
              </option>
            ))}
          </select>
        </div>
        <div className="test-cards-container">
          <ul className="list-of-test-cards">
            {languageCards.map(eachLanguage => (
              <TestCard
                key={eachLanguage.languageId}
                languageDetails={eachLanguage}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default TestsDisplayPage
