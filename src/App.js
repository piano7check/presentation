import './App.css';
import profilePic from './Images/image_gustavo.jpg';

function App() {
  return (
    <div className="resume-container">
      <header className="resume-header">
        <img
          src={profilePic} // Usa la imagen importada
          alt="Gustavo Rojas"
          className="profile-pic"
        />
        <h1>Ing. Gustavo Rojas Valdivia</h1>
        <p>e-mail: grv.trainer@gmail.com</p>
      </header>

      <section className="education">
        <h2>Formación Profesional</h2>
        <ul>
          <li>Ingeniero de Sistemas</li>
          <li>Diplomado Experto en Desarrollo de Aplicaciones Empresariales</li>
          <li>Diplomado en Educación Superior Basado en Competencias</li>
          <li>Diplomado en Docencia para Educación Virtual por Competencias</li>
        </ul>
      </section>

      <section className="experience">
        <h2>Experiencia Profesional</h2>
        <ul>
          <li>Docente en la Escuela de Gestión Pública Plurinacional (EGPP)</li>
          <li>Ingeniero de Software Fullstack en Jalasoft</li>
          <li>Desarrollador de Software en el Departamento de Informática y Sistemas, Laboratorio de Desarrollo de la UMSS</li>
          <li>Desarrollador de Software en Getsoft S.A.</li>
        </ul>
      </section>

      <section className="hobbies">
        <h2>Hobbies</h2>
        <ul>
          <li>Viajar</li>
          <li>Ajedrez</li>
          <li>Piano</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
