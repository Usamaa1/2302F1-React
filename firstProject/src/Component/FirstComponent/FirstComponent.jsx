import React from 'react'

import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';

import './style.css'

import shipImage from '../../images/1.jpg'


const FirstComponent = () => {
  return (
   <>
   
   <h1>Hello</h1>
   <h1>Hello2</h1>
   <h1>Hello3</h1>
   <h1>Hello4</h1>
   <h1>Hello4</h1>
   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={shipImage} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

   <Button variant='primary'>Click me</Button>

   <img src="/2.jpg" width={200} />
   <br />
   <img src={shipImage} width={200} />

   </>

  )
}
export default FirstComponent;