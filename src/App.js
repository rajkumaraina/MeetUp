import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import MeetUpContext from './Context/meetupContext'

import './App.css'

import Home from './components/Home'

import Register from './components/Register'

import NotFound from './components/NotFound'

// These are the lists used in the application. You can move them to any component needed.

class App extends Component {
  state = {register: false, name: '', course: ''}

  nameChange = item => {
    this.setState({name: item})
  }

  courseChange = item => {
    this.setState({course: item})
  }

  registerChange = () => {
    this.setState(prevState => ({register: !prevState.register}))
  }

  render() {
    const {register, name, course} = this.state
    return (
      <MeetUpContext.Provider
        value={{
          name,
          course,
          registered: register,
          nameChange: this.nameChange,
          courseChange: this.courseChange,
          registerChange: this.registerChange,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </MeetUpContext.Provider>
    )
  }
}

export default App
