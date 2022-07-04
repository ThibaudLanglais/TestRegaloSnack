import styled from 'styled-components'
import EventCard from './EventCard'

export default function EventsList() {
  return (
    <Wrapper>
      <EventCard />
    </Wrapper>
  )
}

const Wrapper = styled.View`
  paddingVertical: 10px;
`