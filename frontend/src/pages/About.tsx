import React, { useState } from 'react';
import NotesList from '../components/Part2/NotesList';
import CreateNotes from '../components/Part2/CreateNotes';
import { Note } from '../Models/note.model';
import { Col, Container, Row } from 'react-bootstrap';


export function About() {
    const [notes, setNotes] = useState<Note[]>([{
      id: (new Date()).toString(),
      title: "Ale gay",
      text: "Si, el ale es gay",
      color: "#dfdfdf",
      date: (new Date()).toString()
    }]);
  
  
    return (
      <>
        <Container className="mt-5">
          <Row>
            <Col>
              <NotesList notes={notes} setNotes={ setNotes}/>
            </Col>
          </Row>
          <Row>
            <Col>
              <CreateNotes notes={notes} setNotes={ setNotes}/>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
