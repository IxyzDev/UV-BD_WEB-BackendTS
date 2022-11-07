import * as React from 'react';
import Button from 'react-bootstrap/Button'
import { StoreItemProps } from '../../Models/StoreItemProps'
import { Alert, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';

interface ICreateNotesProps {
    notes: StoreItemProps[],
    setNotes: React.Dispatch<React.SetStateAction<StoreItemProps[]>>
}
/*name: string;
    description: string;
    state: string;
    price: number;
    imgUrl: string; */
const CreateNotes: React.FunctionComponent<ICreateNotesProps> = ({notes, setNotes}) => {
    const [error, setError] = React.useState<string>("");
    const nameRef = React.useRef<HTMLInputElement | null>(null);
    const descriptionRef = React.useRef<HTMLTextAreaElement | null>(null);
    const stateRef = React.useRef<HTMLInputElement | null>(null);
    const priceRef = React.useRef<HTMLInputElement | null>(null);
    const imageRef = React.useRef<HTMLImageElement | null>(null);
    const idRef = React.useRef<HTMLInputElement | null>(null);

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (nameRef.current?.value === "" || descriptionRef.current?.value === "") {
            return setError("All fields are mandatory");
        }
        
        setError("");
        setNotes([...notes, {
            id: (idRef.current as HTMLInputElement).valueAsNumber,
            name: (nameRef.current as HTMLInputElement).value,
            description: (descriptionRef.current as HTMLTextAreaElement).value,
            state: (stateRef.current as HTMLInputElement).value,
            price: (priceRef.current as HTMLInputElement).valueAsNumber,
            imgUrl: (imageRef.current as HTMLImageElement).src
        }]);
        
        (nameRef.current as HTMLInputElement).value = "";
        (descriptionRef.current as HTMLTextAreaElement).value = "";
        (stateRef.current as HTMLInputElement).value = "";
        (priceRef.current as HTMLInputElement).value = "";
        (imageRef.current as HTMLImageElement).src = "";

    }
    /*     id: price
    name: string
    description: string
    state: string
    price: number
    imgUrl: string*/

    return (
        <>
            <h2>Create Notes</h2>
            {error && <Alert variant="danger">{ error}</Alert>}
            <Form className="mt-3 mb-3" onSubmit={(e) => handleSubmit(e) }>
                <Form.Group className="mb-3" controlId="formBasicname">
                    <Form.Label>name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name for the Note" ref={ nameRef }/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Text</Form.Label>
                    <Form.Control placeholder="Enter your notes" as="textarea" rows={3} ref={ descriptionRef }/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicname">
                    <Form.Label>State</Form.Label>
                    <FormControl placeholder='Enter the state of the product' ref={ stateRef} />
                </Form.Group>
                <FormGroup>
                    <FormLabel>Price</FormLabel>
                    <FormControl placeholder='enter the price of the product' ref= {priceRef} />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Image</FormLabel>
                    <FormControl placeholder='Enter a url' />
                </FormGroup>
                <Button type="submit" variant="primary">Submit</Button>
            </Form>
        </>
  );
};

export default CreateNotes;

