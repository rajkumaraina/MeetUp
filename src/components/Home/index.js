import {Component} from 'react'

import MeetUpContext from '../../Context/meetupContext'

import {
  MainContainer,
  NavBar,
  Logo,
  Container,
  Button,
  Image,
  Heading,
  Para,
} from './styledComponents'

class Home extends Component {
  state = {}

  registerClicked = () => {
    const {history} = this.props
    history.replace('/register')
  }

  render() {
    return (
      <MeetUpContext.Consumer>
        {value => {
          const {name, course, registered} = value
          console.log(registered)
          console.log(name, course)
          return (
            <MainContainer>
              <NavBar>
                <Logo
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                  alt="website logo"
                />
              </NavBar>
              <Container>
                {registered ? (
                  <Heading>Hello {name}</Heading>
                ) : (
                  <Heading>Welcome to MeetUp</Heading>
                )}
                {registered ? (
                  <Para>Welcome to {course}</Para>
                ) : (
                  <Para>Please register for the topic</Para>
                )}

                <Button type="button" onClick={this.registerClicked}>
                  Register
                </Button>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </Container>
            </MainContainer>
          )
        }}
      </MeetUpContext.Consumer>
    )
  }
}
export default Home
