"use client";
import React, { useEffect, useState, useRef } from 'react';
import './HeaderDashboard.css';
import UserOptionsModal from '../shared/UserOptionsModal';

const imgBasePath = "https://bibliotecadigitaluplaph.hidalgo.gob.mx/img_banco/";
const imgLogos = "/img/forms nivelacion tierra/logos/";

export default function HeaderDashboard() {
  const [userName, setUserName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [anchorElement, setAnchorElement] = useState(null);
  const userCircleRef = useRef(null);

  useEffect(() => {
    // Consume endpoint /api/me/ para obtener el nombre de usuario
    fetch('/api/me/', {
      method: 'GET',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => {
        if (res.status === 401) {
          // No autenticado: redirigir a login
          window.location.href = '/login';
          return null;
        }
        return res.json();
      })
      .then(data => {
        if (data && data.username) {
          setUserName(data.username);
        }
      })
      .catch(() => {
        // Error de red: forzar login
        window.location.href = '/login';
      });
  }, []);

  const handleCircleClick = () => {
    setIsModalOpen(true);
    setAnchorElement(userCircleRef.current);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="header-dashboard">
      <div className="header-left">
        <img src={`${imgLogos}Gob Federal.png`} alt="Gobierno Federal" />
        <img src={`${imgLogos}Gob Hgo.png`} alt="Gobierno del Estado de Hidalgo" />        
      </div>

      <div className="header-right">
        <div className="welcome-container">
          <p className="welcome-text">Hola! <span>{userName}</span></p>
          <div
            className="Navbar_circulo"
            ref={userCircleRef}
            onClick={handleCircleClick}
          >
            <img src={`${imgBasePath}estrella.webp`} alt="Usuario" />
          </div>
        </div>
        {/* <div className="Navbar_circulo">
          <img src={`${imgBasePath}alerta.png`} alt="Alertas" />
        </div> */}
      </div>

      <UserOptionsModal
        isOpen={isModalOpen}
        onClose={closeModal}
        anchorElement={anchorElement}
        username={userName}
      />
    </header>
  );
}
