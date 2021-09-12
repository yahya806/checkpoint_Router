import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router'

export const Screen = ({movies}) => {
  const params = useParams();
  let movie =movies.find((el) => el.id == params.me);
  
  return (
   
    <div>
      <Container>
      <Row>
        <Col>
        {" "}
        <img style={{width:"100%"}} src={movie.posterurl} alt=''/>
        </Col>
        <Col>
        {" "}
        <h1>{movie.name}</h1>
        <p>{movie.description}</p>
        </Col>
      </Row>
      </Container>
    </div>

  )
}
