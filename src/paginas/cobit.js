import React from 'react'
import cobitLogo from '../imagenes/cobit.png'
import './paginas.css'

class Cobit extends React.Component{
    render(){
        return(              
        <div className='homep'>
            <div className='Gridh'>
                <div style={{height: '50%', width: '25%'}}>
                    <img className='control' src={cobitLogo} />
                </div>
                <div>
                    <div className='titulo'>
                        <p>COBIT 5</p>
                    </div>
                    <div className='subtitulo'>
                        <p>¿Qué es?</p>
                    </div>
                    <div className='cont'>
                      <p> Por sus siglas en ingles Control Objectives for Information and Related Technologies es un marco de trabajo de larga data 
                        creado por ISACA hace casi 25 años. El marco cubre todos los procesos más importantes necesarios para una gestión eficaz de 
                        las TI. La versión más reciente, COBIT 5, hace mucho hincapié en la seguridad de la información, sobre todo a la hora de 
                        abordar el cambiante permiso empresarial a raíz de factores como bring your own device y el trabajo remoto.  </p> 
                    </div>
                    <div className='subtitulo'>
                        <p>¿Cómo se implementa?</p>
                    </div>
                    <div className='cont'>
                      <p> Este marco de trabajo cuenta con cinco principios que una organización debe seguir para adoptar la gestión de TI:</p> 
                      <p><b>1. Satisfacción de las necesidades de los accionistas: </b> Se alinean las necesidades de los accionistas con los objetivos 
                      empresariales específicos, objetivos de TI y objetivos habilitadores. Se optimiza el uso de recursos cuando se obtienen beneficios 
                      con un nivel aceptable de riesgo.</p>
                      <p><b>2. Considerar la empresa de punta a punta: </b> El gobierno de TI y la gestión de TI son asumidos desde una perspectiva global, 
                      de tal modo que se cubren todas las necesidades corporativas de TI. Esto se aplica desde una perspectiva "de punta a punta" basada 
                      en los 7 habilitadores de COBIT.</p>
                      <p><b>3. Aplicar un único modelo de referencia integrado: </b> COBIT 5 integra los mejores marcos de Information Systems Audit and 
                      Control Association (ISACA) como Val IT, que relaciona los procesos de COBIT con los de la gerencia requeridos para conseguir un 
                      buen valor de las inversiones en TI. También se relaciona con Risk IT, lanzado por ISACA para ayudar a organizaciones a equilibrar 
                      los riesgos con los beneficios.</p>
                      <p><b>4. Posibilitar un enfoque holístico: </b>los habilitadores de COBIT 5 están identificados en siete categorías que abarcan la 
                      empresa de punta a punta. Individual y colectivamente, estos factores influyen para que el gobierno de TI y la gestión de TI operen 
                      en función de las necesidades del negocio.</p>
                      <p><b>5. Separar el gobierno de la gestión: </b> COBIT 5 distingue con claridad los ámbitos del gobierno de TI y la gestión de TI. 
                      Se entiende por gobierno de TI las funciones relacionadas con la evaluación, la dirección y el monitoreo de las TI. El gobierno busca 
                      asegurar el logro de los objetivos empresariales y también evalúa las necesidades de los accionistas, así como las condiciones y las 
                      opciones existentes. La dirección se concreta mediante la priorización y la toma efectiva de decisiones. Y el monitoreo abarca el 
                      desempeño, el cumplimiento y el progreso en función con los objetivos acordados.  La gestión está más relacionada con la planificación, 
                      la construcción, la ejecución y el monitoreo de las actividades alineadas con la dirección establecida por el organismo de gobierno para 
                      el logro de los objetivos empresariales.</p>   
                    </div>
                </div>
            </div>
         </div>
        )
    }
}
export default Cobit