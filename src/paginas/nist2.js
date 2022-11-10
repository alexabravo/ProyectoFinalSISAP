import React from 'react'
import nist1Logo from '../imagenes/nist1.jpg'
import './paginas.css'

class Nist2 extends React.Component{
    render(){
        return(              
        <div className='homep'>
            <div className='Gridh'>
                <div style={{height: '50%', width: '25%'}}>
                    <img className='control' src={nist1Logo} />
                </div>
                <div>
                    <div className='titulo'>
                        <p>NIST SP 800-53</p>
                    </div>

                    <div className='subtitulo'>
                        <p>¿Qué es?</p>
                    </div>
                    <div className='cont'>
                      <p> Es un marco continuamente actualizado que trata de definir de manera flexible estándares, controles y evaluaciones en función del riesgo, 
                        la rentabilidad y las capacidades.</p> 
                      <p>Tiene como propósito proporcionar una base de elementos guía, estrategias, sistemas y controles, que pueden respaldar de forma independiente 
                        las necesidades y prioridades de ciberseguridad de cualquier organización. </p>
                    </div>

                    <div className='subtitulo'>
                        <p>¿Cómo se implementa?</p>
                    </div>
                    <div className='cont'>
                      <p><b>CA - Control de acceso: </b>  La familia de control de CA consta de requisitos de seguridad que detallan el registro del sistema. 
                      Esto incluye quién tiene acceso a qué activos y capacidades de generación de informes, como administración de cuentas, privilegios del 
                      sistema y registro de acceso remoto para determinar cuándo los usuarios tienen acceso al sistema y su nivel de acceso.</p>
                      <p><b>AU - Auditoría y rendición de cuentas: </b> La familia de controles AU consta de controles de seguridad relacionados con las capacidades 
                      de auditoría de una organización. Esto incluye políticas y procedimientos de auditoría, registro de auditoría, generación de informes de auditoría 
                      y protección de la información de auditoría.</p>
                      <p><b>AT - Sensibilización y Formación: </b> Los conjuntos de control de la familia de controles AT son específicos para su capacitación y 
                      procedimientos de seguridad, incluidos los registros de capacitación de seguridad.</p>
                      <p><b>CM - Gestión de la configuración: </b>Los controles de CM son específicos de las políticas de gestión de la configuración de una organización. 
                      Esto incluye una configuración básica para operar como base para futuras construcciones o cambios en los sistemas de información. 
                      Adicionalmente, esto incluye inventarios de componentes del sistema de información y un control de análisis de impacto de seguridad.</p>
                      <p><b>CP - Planificación de Contingencias: </b> La familia de controles CP incluye controles específicos para el plan de contingencia de una organización 
                      en caso de que ocurra un evento de ciberseguridad. Esto incluye controles como pruebas, actualizaciones, capacitación y copias de seguridad del plan de 
                      contingencia, y reconstitución del sistema.</p>
                       <p><b>CIA - Identificación y Autenticación: </b> Los controles de IA son específicos de las políticas de identificación y autenticación en una organización. 
                       Esto incluye la identificación y autenticación de usuarios organizacionales y no organizacionales y cómo la gestión de esos sistemas.</p>
                       <p>Se puede asegurar que se cumple con este marco de ciberseguridad con los siguientes pasos: </p>
                       <p><b>PASO 1: </b> Delegar responsabilidad.</p>
                       <p><b>PASO 2: </b> Comprender las políticas y operaciones existentes.</p>
                       <p><b>PASO 3: </b> Adoptar un enfoque común para la implementación cuando sea posible.</p>
                       <p><b>PASO 4: </b> Referencia al catálogo de control.</p>
                       <p><b>PASO 5: </b> Registrar evidencia de implementación.</p>
                    </div>     
                </div>
            </div>  
         </div>
        )
    }
}
export default Nist2