import React, { useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
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

  const handleSubmit = () => {
    console.log('Datos enviados:', formData);
    onClose();
  };

  return (
    <Modal
      show={true}
      onHide={onClose}
      centered
      dialogClassName="modal-squared"
    >
      <Modal.Header>
        <Modal.Title className='titulcomen'>Conversa con un experto sobre cómo personalizar y optimizar tus ideas</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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

          <div className='centerr'>

          <Form.Group className='mt-3' controlId="formTelefono">
            <Form.Label>Teléfono*</Form.Label>
            <Form.Control
              type="number"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
            />
          </Form.Group>
          
          <div className="mt-3">
            <Form.Label className="mb-2">Fecha de la cita*</Form.Label>
  <Form.Group controlId="formFecha">
    <DatePicker
    className='custom-datepicker'
      selected={formData.fecha}
      onChange={handleDateChange}
      dateFormat="dd/MM/yyyy"
    />
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
