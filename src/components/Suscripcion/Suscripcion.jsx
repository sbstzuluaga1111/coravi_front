import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

const Suscripcion = ({ modalIsOpen, closeModal }) => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleCorreoChange = (e) => {
    setCorreo(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://coravi-back.onrender.com/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre,
          correo,
        }),
      });

      if (response.ok) {
        console.log('Correo de suscripción enviado con éxito');
        closeModal();
      } else {
        console.error('Error al enviar el correo de suscripción');
      }
    } catch (error) {
      console.error('Error al enviar el correo de suscripción', error);
    }
  };

  return (
    <Modal show={modalIsOpen} onHide={closeModal} centered className="custom-modal">
      <Modal.Header className='exx' closeButton>
      </Modal.Header>
      <Modal.Body className="d-flex align-items-center justify-content-center modal-body aloja">
        <div className='center '>
          <div className="susbcripcaru1">
            <Carousel interval={2500} controls={false} indicators={false}>
              <Carousel.Item>
                <img
                  className="susbcripcaru"
                  src="https://www.comparapps.com/wp-content/uploads/2020/03/imagenes-para-paginas-web.png"
                  alt="First slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="susbcripcaru"
                  src="https://www.comparapps.com/wp-content/uploads/2020/03/imagenes-para-paginas-web.png"
                  alt="Second slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="susbcripcaru"
                  src="https://www.comparapps.com/wp-content/uploads/2020/03/imagenes-para-paginas-web.png"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          
          <Form className='espaciadodd' onSubmit={handleSubmit}>
            <div className='textoinrela'>
                <h5>Exclusividad en cada oferta. </h5> 
                Únete a los mejores y disfruta de beneficios únicos.
            </div>
            <Form.Group controlId="formNombre">
              <Form.Label>Nombre completo:</Form.Label>
              <Form.Control type="text" value={nombre} onChange={handleNombreChange} required />
            </Form.Group>
            <Form.Group controlId="formCorreo">
              <Form.Label>Correo electrónico:</Form.Label>
              <Form.Control type="email" value={correo} onChange={handleCorreoChange} required />
            </Form.Group>
            <br />
            <Button className='bututu' variant="primary" type="submit">
              Suscribirse
            </Button>
          </Form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Suscripcion;
