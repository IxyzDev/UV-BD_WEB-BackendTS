import {Container, Button, InputGroup } from "react-bootstrap"
import Form from 'react-bootstrap/Form';
import { Component, ChangeEvent } from "react";
import TutorialDataService from "../services/tutorial.service";
import {resultProps} from "../interfaces/Publications"


type Props = {};

type State = resultProps & {
  submitted: boolean
  published: boolean
  rutUsuario: string
};


export default class AddTutorial extends Component<Props, State> {
    constructor(props: Props) {
      super(props);
      this.onChangeTitle = this.onChangeTitle.bind(this);
      this.onChangeDescription = this.onChangeDescription.bind(this);
      this.saveTutorial = this.saveTutorial.bind(this);
      this.newTutorial = this.newTutorial.bind(this);
  
/*  idPublicacion: string
  rutUsuario: 21.479.053-4
  idProducto: string
  fotoPublicacion: string
  precioPublicacion: number
  estadoPublicacion: EstadosPublicacion
  tituloPublicacion: string
  descripcionPublicacion: string */

//  { submitted, tituloPublicacion, descripcionPublicacion, estadoPublicacion, precioPublicacion, fotoPublicacion }

      this.state = {
        rutUsuario: "21.439.053-4",
        idPublicacion: "",
        idProducto: "78dd99bb-8433-46fd-9dff-20fb79f892f0",
        fotoPublicacion: "",
        precioPublicacion: 0,
        estadoPublicacion: "",
        tituloPublicacion: "",
        descripcionPublicacion: "",
        submitted: false,
        published: false
      };
    }
  
    onChangeTitle(e: ChangeEvent<HTMLInputElement>) {
      this.setState({
        tituloPublicacion: e.target.value
      });
    }

    onChangeRut(e: ChangeEvent<HTMLInputElement>) {
      this.setState({
        rutUsuario: e.target.value
      });
    }

    onChangeIdProducto(e: ChangeEvent<HTMLInputElement>) {
      this.setState({
        idProducto: e.target.value
      });
    }

    onChangeDescription(e: ChangeEvent<HTMLInputElement>) {
        this.setState({
          descripcionPublicacion: e.target.value
        });
    }
  
    onChangeFoto(e: ChangeEvent<HTMLInputElement>) {
      this.setState({
        fotoPublicacion: e.target.value
      });
    }

    onChangeEstado(e: ChangeEvent<HTMLSelectElement>) {
        this.setState({
          estadoPublicacion: e.target.value
        });
    }

    onChangePrecio(e: ChangeEvent<HTMLInputElement>) {
        this.setState({
          precioPublicacion: e.target.valueAsNumber
        });
    }

  
    saveTutorial() {
      const data:any | resultProps = {
        tituloPublicacion: this.state.tituloPublicacion,
        descripcionPublicacion: this.state.descripcionPublicacion,
        fotoPublicacion: this.state.fotoPublicacion,
        precioPublicacion: this.state.precioPublicacion,
        estadoPublicacion: this.state.estadoPublicacion,
        rutUsuario: this.state.rutUsuario,
        idProducto: this.state.idProducto
      };
  /*
    {
        "fotoPublicacion": "https://via.placeholder.com/150/f684ab",
        "precioPublicacion": 500,
        "estadoPublicacion": "Bueno",
        "tituloPublicacion": "Algo",
        "descripcionPublicacion": "La encontre en un mal estado para su venta",
        "rutUsuario": "21.439.053-4",
        "idProducto": "78dd99bb-8433-46fd-9dff-20fb79f892f0"
    }
  */
      TutorialDataService.create(data)
        .then((response: any) => {
          this.setState({
            idPublicacion: response.data.idPublicacion,
            tituloPublicacion: response.data.titulo,
            descripcionPublicacion: response.data.descripcion,
            estadoPublicacion: response.data.estado,
            fotoPublicacion: response.data.foto,
            precioPublicacion: response.data.precio,
            rutUsuario: response.data.rut,
            idProducto: response.data.idProducto,
            published: response.data.published,
            submitted: true
          });
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    }
  
    newTutorial() {
      this.setState({
        idPublicacion: "",
        tituloPublicacion: "",
        descripcionPublicacion: "",
        published: false,
        submitted: false
      });
    }
    render() {
        const {idProducto, rutUsuario, submitted, tituloPublicacion, descripcionPublicacion, estadoPublicacion, precioPublicacion, fotoPublicacion } = this.state;

    return (
    <Form validated={submitted}>
        <Container>
            <Form>
            <Form.Group className="mb-3">
              <Form.Label required value={rutUsuario} onChange={this.onChangeRut}>User DNI</Form.Label>
              <Form.Control placeholder="Rut" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label required value={idProducto} onChange={this.onChangeIdProducto}>Product ID</Form.Label>
              <Form.Control placeholder="id Producto" />
            </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label required value={tituloPublicacion} onChange={this.onChangeTitle}>Titulo</Form.Label>
                    <Form.Control type="title" placeholder="Titulo Publicacion" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label required value={fotoPublicacion} onChange={this.onChangeFoto}>Link Foto</Form.Label>
                    <Form.Control type="Link" placeholder="https://..." />
                </Form.Group>
                <Form.Label>Estado Producto</Form.Label>
                <Form.Select required value={estadoPublicacion} onChange={this.onChangeEstado} className="mb-3" aria-label="Default select example">
                    <option value="1">Bueno</option>
                    <option value="2">Malo</option>
                    <option value="3">Medio</option>
                </Form.Select>
                <Form.Label>Precio Producto</Form.Label>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label required value={precioPublicacion} onChange={this.onChangePrecio}></Form.Label>
                        <Form.Control type="Precio" placeholder="Valor Producto" />
                    </Form.Group>
                <Form.Group className="mb-3" controlId="descripccion">
                    <Form.Label>Descripccion</Form.Label>
                    <Form.Control as="textarea" type="text" placeholder="Descripccion" aria-required value={descripcionPublicacion} onChange={this.onChangeDescription}/>
                </Form.Group>
                <Button onClick={this.saveTutorial} className="btn btn-success" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    </Form>
    )

    }
}
