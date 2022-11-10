import React from 'react'
import itilLogo from '../imagenes/itil.png'
import './paginas.css'

class Itil extends React.Component{
    render(){
        return(              
        <div className='homep'>
            <div className='Gridh'>
                <div style={{height: '50%', width: '25%'}}>
                    <img className='control' src={itilLogo} />
                </div>
                <div>
                    <div className='titulo'>
                        <p>ITIL 4</p>
                    </div>
    
                    <div className='subtitulo'>
                        <p>¿Qué es?</p>
                    </div>
                    <div className='cont'>
                      <p> ITIL 4 es una revisión al marco de trabajo más ampliamente aceptado a nivel mundial para la Administración de Servicios de 
                        TI (ITSM). Se compone de una guía comprensiva de como adoptar y adaptar las mejores prácticas de gestión.</p> 
                      <p>ITIL 4 proporciona la guía que necesitan las organizaciones para abordar los nuevos desafíos de la administración de 
                        servicios y utilizar el potencial de la tecnología moderna. Está diseñado para garantizar un sistema flexible, coordinado e 
                        integrado para el gobierno y la gestión efectiva de los servicios habilitados para TI.</p>
                    </div>

                    <div className='subtitulo'>
                        <p>¿Cómo se implementa?</p>
                    </div>
                    <div className='cont'>
                        <p><b>1. Primeros pasos: </b> Es muy importante que las figuras clave de la gestión conozcan los principios de ITIL y se comprometan 
                        con la implementación de ITIL. Eso ayudará a garantizar la atención adecuada de la gerencia y asegurar el financiamiento, la capacitación 
                        y otros recursos necesarios para una implementación exitosa.</p>
                        <p>También es importante establecer la persona o el rol responsable de la gestión de procesos de ITIL, quien se asegurará de que todos los 
                            procesos funcionen en conjunto, que se proporcionen las herramientas necesarias y que los procesos estén bien documentados.</p>
                        <p><b>2. Definición del servicio: </b> Hay que crear una descripción general del servicio, compuesta por servicios comerciales y 
                        servicios de TI que los respaldan (servicios de soporte). Los servicios empresariales son los que representan valor directo para la 
                        empresa (clientes), y los servicios de apoyo son los que no hacen eso, pero son necesarios para ejecutar los servicios empresariales.</p>
                        <p><b>3. Introducción de roles y propietarios de ITIL: </b> Es muy importante saber, en cualquier momento, quién es responsable de qué y, 
                        por lo tanto, introducir roles y funciones designados de acuerdo con el marco ITIL. Según el alcance de la implementación de ITIL, es 
                        posible que no se requieran todos los roles de ITIL en su caso, pero es imprescindible identificar los roles y propietarios clave. Los 
                        roles y su participación dentro del ciclo de vida del servicio se mantienen en una matriz RACI (Responsable, Responsable, Consultado, 
                        Informado).</p>
                        <p><b>4. Análisis de brechas: </b>Un análisis de brechas es básicamente un informe sobre qué procesos necesita cambiar, cuáles debe abandonar 
                        y dónde deben introducirse otros nuevos. Un análisis de brechas podría centrarse en la tecnología de la información en general o en algún 
                        aspecto de la tecnología de la información, como la implementación de una herramienta. Al final, las conclusiones de un análisis de 
                        brechas deben describir cuánto esfuerzo se requiere en términos de tiempo, dinero y recursos humanos para lograr la visión.</p>
                        <p><b>5. Planificación de nuevos procesos: </b> es importante considerar las mejores prácticas de ITIL en su conjunto; esto significa que, 
                        si está implementando la gestión de incidentes, también debe considerar la implementación de la gestión de problemas, debido a la estrecha 
                        relación entre los dos.</p>
                        <p><b>6. Control de procesos: </b> Al diseñar un proceso, es importante implementar métricas medibles (KPI) que muestren claramente si el 
                        proceso se ejecuta de acuerdo con las expectativas o no, porque esa información es muy importante para los propietarios del proceso.</p>
                        <p><b>7. Hoja de ruta de implementación: </b> El propósito de una hoja de ruta de implementación es proporcionar una descripción general 
                        de todos los pasos necesarios para completar con éxito el proyecto.</p>
                        <p><b>8. Implementación de procesos ITIL: </b> Se debe verificar si el plan de implementación cumplió con las expectativas, si todos los 
                        servicios se implementaron con éxito y si sus procesos están produciendo los resultados que deseaba.</p>
                    </div>
                </div>
            </div>   
         </div>

        )
    }
}
export default Itil