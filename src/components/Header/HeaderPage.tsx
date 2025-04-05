import Logo from '../../assets/logo.png';
import './HeaderPage.css';

export function HeaderPage() {
  
  return (
    <header className="header raleway-header">

        <img src={Logo} alt="Imagem" />
        <h1 className=' title'>Trilha de CSS da DIO</h1>
        <p className='paragaph-header'>A nova Trilha de CSS da DIO está disponível. Acesse já e aprenda do zero como desenvoler sites profissionais</p>
        <button className='button-header'>QUERO ME INSCREVER</button>

    </header>
  );
}