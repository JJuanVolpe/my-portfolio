import React from 'react';

import { FaCreditCard, FaBook, FaGithub, FaLinkedin, FaGoogle, FaTwitterSquare, FaCode, FaTools } from 'react-icons/fa';

const sublinks = [
  {
    page: 'About me',
    links: [
      { label: 'payment', icon: <FaCreditCard />, url: '/products' },/** LA idea es sacar estos atributos y que redirija a la seccion de abajo unicamente*/
      { label: 'terminal', icon: <FaCreditCard />, url: '/products' },
      { label: 'connect', icon: <FaCreditCard />, url: '/products' },
    ],
  },
  {
    page: 'Experience',
    links: [
      { label: 'web develop', icon: <FaCode />, url: '/products' },
      { label: 'explore & create', icon: <FaBook />, url: '/products' },
      { label: 'testing & more', icon: <FaTools />, url: '/products' },
    ],
  },
  {
    page: 'Contact Me!',
    links: [
      { label: 'linkedin', icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/juan-volpe-program/' },
      { label: 'github', icon: <FaGithub />, url: 'https://github.com/JJuanVolpe' },
      { label: 'gmail', icon: <FaGoogle />, url: '/products' },
      { label: 'X', icon: <FaTwitterSquare />, url: '/products' }
    ],
  },
];

export default sublinks;
