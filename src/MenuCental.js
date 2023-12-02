import React from "react";
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function MenuCental() {
  return (
    <Menu fixed="top" inverted style={{ background: '#ed9121', display: 'flex', justifyContent: 'center' }}>
      <Menu.Item as={Link} to="/">HOME</Menu.Item>
      <Menu.Item as={Link} to="/tela-usuario">INSCREVER</Menu.Item>
      <Menu.Item as={Link} to="/tela-login">LOGIN</Menu.Item>
      <Menu.Item as={Link} to="/tela-empresa">EMPRESA</Menu.Item>
      <Menu.Item as={Link} to="/pontos-de-coleta">PONTOS DE COLETA</Menu.Item>
      <Menu.Item as={Link} to="/sobre-nos">SOBRE NÓS</Menu.Item>


    </Menu>
  );
}
