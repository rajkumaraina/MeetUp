import React from 'react'

const MeetUpContext = React.createContext({
  name: '',
  course: 'ARTS_AND_CULTURE',
  registered: false,
  nameChange: () => {},
  courseChange: () => {},
  registerChange: () => {},
})

export default MeetUpContext
