import React, { useState } from 'react';
import { Modal, Form, Alert } from 'react-bootstrap';
import '../css/Sugerencias.css';

const Sugerencias = ({ onClose }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    comentario: '',
    autorizacion: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setIsError(false);

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage('Correo enviado con éxito');
        onClose();
      } else {
        setIsError(true);
        setSuccessMessage('Error al enviar el correo');
      }
    } catch (error) {
      setIsError(true);
      setSuccessMessage('Error al enviar el correo');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      show={true}
      onHide={onClose}
      centered
      dialogClassName="modal-squared"
    >
      <Modal.Header>
        <Modal.Title className='titulcomen'>Tus comentarios son valiosos para nosotros, muchas gracias</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {isError && <Alert variant="danger">{successMessage}</Alert>}
        {!isError && successMessage && <Alert variant="success">{successMessage}</Alert>}

        <Form>
          <Form.Group controlId="formNombre">
            <Form.Label>Nombre Completo*</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className='mt-3' controlId="formCorreo">
            <Form.Label>Correo Electrónico*</Form.Label>
            <Form.Control
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className='mt-3' controlId="formComentario">
            <Form.Label>Comentarios*</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="comentario"
              value={formData.comentario}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formAutorizacion" className="mt-3 autorizar">
            <Form.Check
              type="checkbox"
              label="Acepto recibir otras comunicaciones de CORAVI*"
              name="autorizacion"
              checked={formData.autorizacion}
              onChange={handleChange}
            />
          </Form.Group>

          <div>
            <button type='button' className='personal' onClick={handleSubmit} disabled={isLoading}>
              {isLoading ? 'Enviando...' : 'Enviar'}
            </button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Sugerencias;
