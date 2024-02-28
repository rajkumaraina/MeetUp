import React from 'react'

const MeetUpContext = React.createContext({
  name: '',
  course: '',
  registered: false,
  nameChange: () => {},
  courseChange: () => {},
  registerChange: () => {},
})

export default MeetUpContext
