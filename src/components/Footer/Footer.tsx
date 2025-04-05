import './Footer.css';
import image from '../../assets/dio-logo.png';

export function Footer() {
  return (
    <footer className="footer">
        <img src={image} alt="Logo da DIO" className="footer__logo" />
        <p className="footer__text">
          Acesse <a href="https://www.dio.me/" target="_blank" rel="noopener noreferrer" className="footer__link">dio.me</a> e se cadastre agora
        </p>
    </footer>
  );
}