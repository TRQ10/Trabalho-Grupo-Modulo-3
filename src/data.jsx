// import images
import Logo from '../src/img/header/logo.svg';
import QuoteImg from '../src/img/testimonial/quote.svg';
// import icons
import { GrFacebookOption } from 'react-icons/gr';
import { IoMdArrowForward } from 'react-icons/io';
import { FiSend } from 'react-icons/fi';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import {
  IoLogoInstagram,
  IoLogoTwitter,
} from 'react-icons/io';


export const headerData = {
  logo: Logo,
};

export const navData = {
  items: [
    { href: '/', name: 'Home' },
    { href: '#sobre', name: 'Sobre' },
    { href: '#galeria', name: 'Galeria' },
    { href: '#contato', name: 'Contato' },
  ],
};

export const socialData = [
  { href: '/', icon: <GrFacebookOption /> },
  { href: '/', icon: <IoLogoInstagram /> },
  { href: '/', icon: <IoLogoTwitter /> },
];

export const heroData = {
  title: 'Tattoo da Natu',
  btnText: 'Orçamento',
  btnIcon: <IoMdArrowForward />,
};

export const aboutData = {
  title: 'Sobre Nós:',
  subtitle1:
    'A tattoo da natu foi criada a partir da minha paixão por arte, ideias de amigos e com a ajuda deles montei o estúdio',
  subtitle2:
    'O nome veio do meu username nas redes que é "natulims" e com o incrível enxoval de ideias dos meus companheiros',
  subtitle3:
    'Idealizado em 2022 e iniciado em 2023 esse foi e é um grande projeto que visa atualmente não só fazer tatuagens como também colocar piercings. Nosso foco é o bom atendimentom qualidade de serviço e satisfação do cliente. Antes de todo e qualquer procedimento há uma conversa prévia para esclarecimento de dúvidas a respeito do procedimento desejado.',
  btnText: 'Know more',
  btnIcon: <IoMdArrowForward />,
};


export const testimonialData = [
  {
    quoteImg: QuoteImg,
    message:
      "The entire team is extremely kind and friendly. They're fantastic. They're great at what they do! And it's unique.They will properly consult with you.",
    name: 'Jack Geoffrey',
    occupation: 'Tattoo Artist',
  },
  {
    quoteImg: QuoteImg,
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam culpa asperiores officia natus dignissimos autem possimus molestias aperiam?',
    name: 'Douglas Hane',
    occupation: 'Tattoo Artist',
  },
];

export const contactData = {
  title: 'Entre em contato:',
  info: [
  ],
  form: {
    name: 'Nome',
    email: 'Email',
    message: 'Mensagem',
    btnText: 'Enviar',
  },
};

export const footerData = {
  about: {
    title: 'Sobre Tattoo Da Natu',
    address: {
      icon: <FaMapMarkerAlt />,
      name: 'Rua Humaitá 275 - RJ',
    },
    phone: {
      icon: <FaPhoneAlt />,
      number: '+55 21 99804521',
    },
    email: {
      icon: <FaEnvelope />,
      address: 'tattoo@danatu.com',
    },
  },
  links: {
    title: 'Useful links',
    items: [
      { href: '/', name: 'Sobre Nós' },
      { href: '/', name: 'Galeria' },
      { href: '/', name: 'Serviços' },
      { href: '/', name: 'Contato' },
    ],
  },
  program: {
    title: 'Horário de Funcionamento',
    items: [
      { name: 'Seg - Ter / 9:00 - 22:00' },
      { name: 'Qua - Sex / 10:00 - 18:00' },
      { name: 'Sab - Dom / Não Funcionamos.' },
    ],
  },
  newsletter: {
    title: 'Newsletter',
    subtitle:
      'Fique por dentro das novidades.',
    form: {
      placeholder: 'Email',
      icon: <FiSend />,
    },
  },
};
