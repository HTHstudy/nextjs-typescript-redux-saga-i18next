import React from 'react'
import { Container, Button } from 'reactstrap'

const Footer = (props) => {
  return (
    <Container className="d-flex justify-content-around">
      <Button color="primary">F</Button>
      <Button color="secondary">O</Button>
      <Button color="success">O</Button>
      <Button color="info">T</Button>
      <Button color="warning">E</Button>
      <Button color="danger">R</Button>
      {/* <Button color="link"></Button> */}
    </Container>
  )
}

export default Footer
// className="mx-1"
