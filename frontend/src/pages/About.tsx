import React, { useState } from 'react';
import NotesList from '../components/Part2/NotesList';
import CreateNotes from '../components/Part2/CreateNotes';
import { StoreItemProps } from '../Models/StoreItemProps';
import { Col, Container, Row } from 'react-bootstrap';

/*export interface StoreItemProps {
    id: number
    name: string
    description: string;
    state: string;
    price: number
    imgUrl: string
  }
   */

export function About() {
    const [notes, setNotes] = useState<StoreItemProps[]>([{
      id: (new Date()).valueOf(),
      name: "Ale diosito",
      description: "Si, el ale es god",
      state: "si",
      price: 80,
      imgUrl: "me quiero matar"
    }]);
  
  
    return (
      <>
        <Container className="mt-5">
          <Row>
            <Col>
              <CreateNotes notes={notes} setNotes={ setNotes}/>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
