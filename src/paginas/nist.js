import React from 'react'
import nistLogo from '../imagenes/nist.png'
import './paginas.css'

class Nist extends React.Component{
    render(){
        return(              
        <div className='homep'>
            <div className='Gridh'>
                <div style={{height: '50%', width: '25%'}}>
                    <img className='control' src={nistLogo} />
                </div>
                <div>
                    <div className='titulo'>
                        <p>NIST CSF</p>
                    </div>

                    <div className='subtitulo'>
                        <p>¿Qué es?</p>
                    </div>
                    <div className='cont'>
                      <p> El Instituto Nacional de Estándares y Tecnología mejor conocido por sus siglas en inglés NIST, es un marco que se utiliza 
                        para la mejora de la seguridad cibernética en infraestructuras críticas. Tiene como propósito comprender, gestionar y reducir 
                        los riesgos cibernéticos. Proteger sus redes y datos.</p> 
                      <p>Las cinco funciones del marco de ciberseguridad son: </p>
                      <p><b>Identificar: </b> Ayuda a desarrollar un entendimiento organizacional para administrar el riesgo de ciberseguridad de 
                      los sistemas, las personas, los activos, los datos y las capacidades. La comprensión del contexto empresarial, los recursos 
                      que respaldan las funciones críticas y los riesgos relacionados con la ciberseguridad permiten que una organización se centre 
                      y priorice sus esfuerzos, de acuerdo con su estrategia de administración de riesgos y sus necesidades comerciales.</p>
                      <p><b>Proteger: </b> Describe las medidas de seguridad adecuadas para garantizar la entrega de servicios de las infraestructuras 
                      críticas. Esta función contempla la capacidad de limitar o contener el impacto de un potencial evento de ciberseguridad.</p>
                      <p><b>Detectar: </b> Define las actividades necesarias para identificar la ocurrencia de un evento de ciberseguridad, permitiendo 
                      el descubrimiento oportuno de los mismos.</p>
                      <p><b>Responder: </b> Incluye actividades necesarias para tomar medidas con respecto a un incidente de ciberseguridad detectado, 
                      desarrollando la capacidad de contener el impacto de un potencial incidente desarrollando la capacidad de contener el impacto de 
                      un potencial incidente.</p>
                      <p><b>Recuperar: </b> Identifica las actividades necesarias para mantener los planes de resiliencia y para restaurar cualquier 
                      capacidad o servicio que se haya deteriorado debido a un incidente de ciberseguridad. Esta función es compatible con la recuperación 
                      oportuna de las operaciones normales para reducir el impacto de un incidente de ciberseguridad.</p>
                    </div>

                    <div className='subtitulo'>
                        <p>¿Cómo se implementa?</p>
                    </div>

                    <div className='cont'>
                      <p><b>TIER 1 </b></p>
                      <p><b>Parcial: </b> Proceso de gestión de riesgos: Las prácticas de gestión de riesgos de ciberseguridad de la organización no están 
                      formalizadas, y el riesgo se gestiona de forma ad hoc y, en ocasiones, de forma reactiva. La priorización de las actividades de 
                      ciberseguridad puede no estar directamente informada por los objetivos de riesgo de la organización, el entorno de amenaza o los 
                      requisitos de negocios / misión.</p>
                      <p><b>Programa integrado de gestión de riesgos: </b> Existe una conciencia limitada sobre el riesgo de seguridad cibernética a nivel 
                      organizacional y no se ha establecido un enfoque de toda la organización para gestionar el riesgo de ciberseguridad. La organización 
                      implementa la gestión del riesgo de ciberseguridad en forma irregular caso por caso debido a la experiencia variada o la información 
                      obtenida de fuentes externas. La organización puede no tener procesos que permitan compartir información de ciberseguridad dentro de 
                      la organización.</p>
                      <p><b>Participación externa: </b> La organización puede no tener los procesos establecidos para participar en la coordinación o 
                      colaboración con otras entidades.</p>
                      <p><b>TIER 2: Riesgos de información </b></p>
                      <p><b>Proceso de gestión de riesgos: </b>Las prácticas de gestión de riesgos son aprobadas por la administración, pero no pueden 
                      establecerse como políticas de toda la organización. La priorización de las actividades de ciberseguridad está directamente relacionada 
                      con los objetivos de riesgo de la organización, el entorno de amenazas o los requisitos de negocios / misiones.</p>
                      <p><b>Programa integrado de gestión de riesgos: </b> Existe una conciencia del riesgo de ciberseguridad a nivel organizacional, pero no 
                      se ha establecido un enfoque de toda la organización para gestionar el riesgo de ciberseguridad. Los procesos y procedimientos informados 
                      por el riesgo, aprobados por la gerencia, se definen e implementan, y el personal cuenta con los recursos adecuados para realizar sus 
                      tareas de ciberseguridad. La información de ciberseguridad se comparte dentro de la organización de manera informal.</p>
                       <p><b>Participación externa: </b> La organización conoce su rol en el ecosistema más grande, pero no ha formalizado sus capacidades para 
                       interactuar y compartir información externamente.</p>
                      <p><b>TIER 3: Repetible </b></p>
                       <p><b>Proceso de gestión de riesgos: </b>Las prácticas de gestión de riesgos de la organización se aprueban formalmente y se expresan 
                       como políticas. Las prácticas de ciberseguridad organizacional se actualizan periódicamente en función de la aplicación de los procesos 
                       de gestión de riesgos a los cambios en los requisitos empresariales / de la misión y un panorama cambiante de amenazas y tecnología.</p>
                       <p><b>Programa integrado de gestión de riesgos: </b> Existe un enfoque de toda la organización para gestionar el riesgo de ciberseguridad. 
                       Las políticas, procesos y procedimientos informados sobre riesgos se definen, implementan según lo previsto y se revisan. Se han 
                       implementado métodos consistentes para responder de manera efectiva a los cambios en el riesgo. El personal posee el conocimiento y las 
                       habilidades para realizar sus roles y responsabilidades asignados.</p>
                       <p><b>Participación externa: </b> La organización entiende sus dependencias y socios y recibe información de estos socios que permite la 
                       colaboración y las decisiones de gestión basadas en riesgos dentro de la organización en respuesta a los eventos.</p>
                       <p><b>TIER 3: Adaptable </b></p>
                       <p><b>Proceso de gestión de riesgos: </b>La organización adapta sus prácticas de ciberseguridad en función de las lecciones aprendidas y 
                       los indicadores predictivos derivados de las actividades de ciberseguridad anteriores y actuales. A través de un proceso de mejora 
                       continua que incorpora prácticas y tecnologías avanzadas de ciberseguridad, la organización se adapta activamente a un entorno cambiante 
                       de ciberseguridad y responde a </p>
                       <p><b>Programa integrado de gestión de riesgos: </b> Existe un enfoque de toda la organización para gestionar el riesgo de ciberseguridad 
                       que utiliza políticas, procesos y procedimientos informados sobre riesgos para abordar posibles eventos de ciberseguridad. La gestión del 
                       riesgo de ciberseguridad forma parte de la cultura organizacional y evoluciona a partir de la conciencia de las actividades previas, la 
                       información compartida por otras fuentes y el conocimiento continuo de las actividades en sus sistemas y redes.</p>
                       <p><b>Participación externa: </b> La organización gestiona los riesgos y comparte activamente la información con los socios para garantizar 
                       que la información precisa y actualizada se distribuya y consuma para mejorar la ciberseguridad antes de que se produzca un evento de 
                       seguridad.</p>
                    </div>
                </div>
            </div>   
         </div>

        )
    }
}
export default Nist