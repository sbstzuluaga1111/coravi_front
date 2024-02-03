import React, { useState } from 'react';
import { Modal, Form, Alert } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../css/Sugerencias.css';

const Sugerencias = ({ onClose }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    correo: '',
    comentario: '',
    autorizacion: false,
    fecha: new Date(),
  });

  const [message, setMessage] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      fecha: date,
    });
  };

  const handleSubmit = async () => {
    // Validar campos obligatorios
    const requiredFields = ['nombre', 'telefono', 'correo', 'comentario'];
    const newErrors = {};
    let isValid = true;

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = 'Este campo es obligatorio';
        isValid = false;
      }
    });

    if (!isValid) {
      setErrors(newErrors);
      setMessage('Por favor, complete todos los campos obligatorios');
      return;
    }

    try {
      const response = await fetch('https://coravi-back.onrender.com/send-email-form2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          telefono: formData.telefono,
          correo: formData.correo,
          comentario: formData.comentario,
          autorizacion: formData.autorizacion,
          fecha: formData.fecha,
        }),
      });

      if (response.ok) {
        console.log('Correo enviado con éxito');
        setMessage('Correo enviado con éxito');
        onClose();
      } else {
        console.error('Error al enviar el correo');
        setMessage('Error al enviar el correo');
      }
    } catch (error) {
      console.error('Error al enviar el correo', error);
      setMessage('Error al enviar el correo');
    }
  };

  return (
    <Modal
      show={true}
      onHide={() => {
        setMessage(null);
        onClose();
      }}
      centered
      dialogClassName="modal-squared"
    >
      <Modal.Header>
        <Modal.Title className='titulcomen'>Conversa con un experto sobre cómo personalizar y optimizar tus ideas</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {message && <Alert variant={message.includes('éxito') ? 'success' : 'danger'}>{message}</Alert>}
        <Form>
          <Form.Group controlId="formNombre">
            <Form.Label>Nombre Completo*</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              isInvalid={errors.nombre}
            />
            <Form.Control.Feedback type="invalid">{errors.nombre}</Form.Control.Feedback>
          </Form.Group>

          <div className='centerr'>
            <Form.Group className='mt-3' controlId="formTelefono">
              <Form.Label>Teléfono*</Form.Label>
              <Form.Control
                type="number"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                isInvalid={errors.telefono}
              />
              <Form.Control.Feedback type="invalid">{errors.telefono}</Form.Control.Feedback>
            </Form.Group>

            <div className="mt-3">
              <Form.Label className="mb-2">Fecha de la cita*</Form.Label>
              <Form.Group controlId="formFecha">
                <DatePicker
                  className='custom-datepicker'
                  selected={formData.fecha}
                  onChange={handleDateChange}
                  dateFormat="dd/MM/yyyy"
                  isInvalid={errors.fecha}
                />
                <Form.Control.Feedback type="invalid">{errors.fecha}</Form.Control.Feedback>
              </Form.Group>
            </div>
          </div>

          <Form.Group className='mt-3' controlId="formCorreo">
            <Form.Label>Correo Electrónico*</Form.Label>
            <Form.Control
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              isInvalid={errors.correo}
            />
            <Form.Control.Feedback type="invalid">{errors.correo}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className='mt-3' controlId="formComentario">
            <Form.Label>Comentarios*</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="comentario"
              value={formData.comentario}
              onChange={handleChange}
              isInvalid={errors.comentario}
            />
            <Form.Control.Feedback type="invalid">{errors.comentario}</Form.Control.Feedback>
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
        </Form>
      </Modal.Body>
      <div>
        <button className='personal' onClick={handleSubmit}>
          Enviar
        </button>
      </div>
    </Modal>
  );
};

export default Sugerencias;
