
import './App.css';
import Testimonio from './componentes/Testimonio';
function App() {
  return (
    <div className="App">
       <div className="contenedor-principal">
      <h1>esto dicen nuestros alumnos</h1>
     <Testimonio
     nombre='emma bostian'
     pais='suecia'
     cargo='ingeniera'
     imagen='emma'
     empresa='microsoft'
     testimonio='siempre me ha encantado trabajar en esta empresa y aprender cosas nuevas a diario en esta empresa' />
     <Testimonio
     nombre='jhonny'
     pais='singapur'
     cargo='ingeniera'
     imagen='jhonny'
     empresa='amazon'
     testimonio='gracias a esta empresa aprendi muchas cosas nuevas y me ha encantado trabajar en esta empresa' />
      <Testimonio
     nombre='lisa'
     pais='argentina'
     cargo='ingeniera'
     imagen='lisa'
     empresa='henry'
     testimonio='feliz por trabajar en esta empresa ,somos una comunidad amigable y nos divertimos mucho en esta' />
       
    </div>
    </div>
  );
}

export default App;
