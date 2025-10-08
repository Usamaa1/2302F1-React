import React from 'react'
import { Button, Stack } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';

import firstImage from './assets/1.jpg'

export const SecondApp = () => {
    return (


        <>

            <div className='h'>SecondApp</div>
            <button className='btn btn-primary'>Submit</button>

            <Stack direction="horizontal" gap={2}>
                <Button as="a" variant="primary">
                    Button as link
                </Button>
                <Button as="a" variant="success">
                    Button as link
                </Button>
            </Stack>;








    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={firstImage} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>


        </>
    )
}
