import {Component} from 'react'

import MeetUpContext from '../../Context/meetupContext'

import {
  MainContainer,
  NavBar,
  Logo,
  RegisterContainer,
  RegisterImage,
  Heading,
  Button,
  Para,
  RegisterSecondContainer,
  RegisterDetailsForm,
  Label,
  Select,
  Input,
} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Option = props => {
  const {item} = props
  const {id, displayText} = item
  return <option value={displayText}>{displayText}</option>
}

class Register extends Component {
  state = {
    nameElement: '',
    courseElement: topicsList[0].displayText,
    error: false,
  }

  render() {
    const {error, courseElement} = this.state
    return (
      <MeetUpContext.Consumer>
        {value => {
          const {courseChange, nameChange, registerChange} = value

          const nameInput = event => {
            nameChange(event.target.value)
            this.setState({nameElement: event.target.value})
          }

          const selectedOption = event => {
            courseChange(event.target.value)
          }

          const submitClicked = event => {
            event.preventDefault()
            registerChange()
            const {nameElement} = this.state
            if (nameElement !== '') {
              const {history} = this.props
              history.replace('/')
              this.setState({
                nameElement: '',
                courseElement: topicsList[0].displayText,
              })
            } else {
              this.setState({error: true})
            }
          }

          return (
            <MainContainer>
              <NavBar>
                <Logo
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                  alt="website logo"
                />
              </NavBar>
              <RegisterContainer>
                <RegisterImage
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                  alt="website register"
                />
                <RegisterSecondContainer>
                  <Heading>Let us join</Heading>
                  <RegisterDetailsForm onSubmit={submitClicked}>
                    <Label htmlFor="Name">NAME</Label>
                    <Input
                      id="Name"
                      type="text"
                      placeholder="Your name"
                      onChange={nameInput}
                    />
                    <Label htmlFor="topic">Topics</Label>
                    <Select
                      onChange={selectedOption}
                      id="topic"
                      value={courseElement}
                    >
                      {topicsList.map(each => (
                        <Option item={each} key={each.id} />
                      ))}
                    </Select>
                    <Button type="submit">Register Now</Button>
                    {error ? <Para>Please enter your name</Para> : null}
                  </RegisterDetailsForm>
                </RegisterSecondContainer>
              </RegisterContainer>
            </MainContainer>
          )
        }}
      </MeetUpContext.Consumer>
    )
  }
}
export default Register
