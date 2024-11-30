import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Nav from "../Nav";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import "../css/Home.css";
import "../css/Home1.css";
import "../../App.css";

const Home = () => {
  const [isMessageOpen, setIsMessageOpen] = useState(true);
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [telefonoError, setTelefonoError] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [telefonoTouched, setTelefonoTouched] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setIsMessageOpen(true);
    }
  }, [location]);

  const closeMessage = () => setIsMessageOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "correo") {
      setEmailTouched(true);
    } else if (name === "telefono") {
      setTelefonoTouched(true);
    }
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|co)$/;
    return emailRegex.test(email);
  };

  const isTelefonoValid = (telefono) => {
    const telefonoRegex = /^[0-9]{10}$/; // Verifica que el teléfono tenga exactamente 10 dígitos
    return telefonoRegex.test(telefono);
  };

  useEffect(() => {
    if (formData.nombre && isEmailValid(formData.correo) && isTelefonoValid(formData.telefono)) {
      setIsButtonDisabled(false);
      setEmailError("");
      setTelefonoError("");
    } else {
      setIsButtonDisabled(true);
      if (emailTouched && !isEmailValid(formData.correo)) {
        setEmailError("El correo electrónico debe ser válido");
      } else {
        setEmailError("");
      }
      if (telefonoTouched && !isTelefonoValid(formData.telefono)) {
        setTelefonoError("El teléfono debe tener exactamente 10 dígitos");
      } else {
        setTelefonoError("");
      }
    }
  }, [formData, emailTouched, telefonoTouched]);

  const handleSubmit = async () => {
    try {
      const response = await fetch("https://coravi-back.onrender.com/solicitud-descarga", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Formulario enviado con éxito");
        downloadPDF();
      } else {
        const errorData = await response.json();
        console.error("Error al enviar el formulario:", errorData);
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };

  const downloadPDF = async () => {
    try {
      const response = await fetch("https://coravi-back.onrender.com/download-pdf");
      if (response.ok) {
        const blob = await response.blob();
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.setAttribute('download', 'Ebook_Construir_Para_Vender_O_Arrendar.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        console.error("Error al descargar el PDF");
      }
    } catch (error) {
      console.error("Error de red al descargar el PDF:", error);
    }
  };

  return (
    <div>
      {isMessageOpen && (
        <div className="message-overlay">
          <div className="message-content">
            <h2>
              <span className="icon-container">🏠</span> Bienvenido a CORAVI{" "}
              <span className="icon-container">🏠</span>
            </h2>
            <p>
              1. Descarga ahora nuestro Ebook gratuito "Construir para vender o arrendar", una guía esencial para inversionistas como tú.
            </p>
            <p>
              2. Además, recibirás un formato exclusivo para que apliques lo aprendido directamente en tus proyectos. 🌟
            </p>
            <div className="alerttttt">
              🔽 Por favor, completa el formulario para recibir tu Ebook gratuito. 🔽
            </div>
            <div className="form-group">
              <input
                type="email"
                name="correo"
                placeholder="Correo electrónico"
                value={formData.correo}
                onChange={handleChange}
                className="form-input"
                required
              />
              {emailError && <div className="error-message">{emailError}</div>}
            </div>
            <div className="form-group">
              <input
                type="text"
                name="nombre"
                placeholder="Nombre completo"
                value={formData.nombre}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="telefono"
                placeholder="Teléfono"
                value={formData.telefono}
                onChange={handleChange}
                className="form-input"
                required
              />
              {telefonoError && <div className="error-message">{telefonoError}</div>}
            </div>
            <button className="submit-btn" onClick={() => { handleSubmit(); closeMessage(); }} disabled={isButtonDisabled}>
              Enviar
            </button>
            <button className="close-btn" onClick={closeMessage}>
              &times;
            </button>
          </div>
        </div>
      )}
      <Nav />
      <Page1 />
      <Page2 />
      <Page3 />
    </div>
  );
};

export default Home;
