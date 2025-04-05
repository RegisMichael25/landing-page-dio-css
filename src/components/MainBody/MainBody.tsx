import './MainBody.css';
import image from '../../assets/professional-challenges.png';

export function MainBody() {
  return (
    <main className="main-body">
        <h1 className="main-body__title">
            O QUE VOU APRENDER?
        </h1>
        <p  className="main-body__text">
            Temos 3 módulos recheados de conteúdos do básico ao avançado para que você aprenda a desenvolver sites profissionais utilizando somente HTML e CSS: sem nenhuma biblioteca ou framework a mais.
        </p>
        <div className="main-body__module">
            <p className="main-body__module-text">
                <span className='main-body__text-blue'>Módulo 01:</span> primeiros passos com CSS
            </p>
        </div>
        <div className="main-body__module">
            <p className="main-body__module-text">
                <span className='main-body__text-blue'>Módulo 02:</span> trabalhando com layouts no CSS
            </p>
        </div>
        <div className="main-body__module">
            <p className="main-body__module-text">
                <span className='main-body__text-blue'>Módulo 03:</span> refinando os estilos CSS das nossas páginas
            </p>
        </div>
        <section className="main-body__scroll-section">
            <h2 className='main-body__title-image'>transforme <br/> o mundo <br/> com a gente</h2>
        </section>
        <div className="main-body__image-section">
            <h2 className="main-body__image-title">
                EVOLUA E ENCARE NOVOS DESAFIOS PROFISSIONAIS
            </h2>
            <img src={image} alt="Desafios profissionais" className="main-body__image" />
            <p className="main-body__image-text">
                Junte-se ao nosso ecossistema e transforme o mundo com a gente! Todos os dias dezenas de empresas acessam a nossa plataforma em busca dos talentos mais criativos, dinâmicos e colaborativos, além do conhecimento técnico. A nossa missão é te preparar para que você conecte-se com as melhores oportunidades.
            </p>
        </div>
    </main>
  );
}