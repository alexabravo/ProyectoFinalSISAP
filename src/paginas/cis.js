import React from 'react'
import cisLogo from '../imagenes/cis.png'
import './paginas.css'

class Cis extends React.Component{
    render(){
        return(              
        <div className='homep'>
            <div className='Gridh'>
                <div style={{height: '50%', width: '25%'}}>
                    <img className='control' src={cisLogo} />
                </div>
                <div>
                    <div className='titulo'>
                        <p>CIS Controls</p>
                    </div>
                    <div className='subtitulo'>
                        <p>¿Qué es?</p>
                    </div>
                    <div className='cont'>
                      <p> CIS Controls son un conjunto priorizado de Salvaguardas para mitigar los ataques cibernéticos más frecuentes contra sistemas y redes.  
                        Están mapeados y referenciados por múltiples marcos legales, regulatorios y de políticas. CIS Controls v8 se ha mejorado para mantenerse 
                        al día con los sistemas y software modernos. El cambio a la computación basada en la nube, la virtualización, la movilidad, la subcontratación,  
                        el trabajo desde casa y las tácticas cambiantes de los atacantes impulsaron la actualización y respaldan la seguridad de una empresa a medida 
                        que avanzan hacia entornos híbridos y totalmente en la nube.</p> 
                    </div>

                    <div className='subtitulo'>
                        <p>¿Cómo se implementa?</p>
                    </div>
                    <div className='cont'>
                      <p> Los Controles de Seguridad Crítica de CIS son un conjunto prescriptivo y prioritario de mejores prácticas en seguridad cibernética y acciones  
                        defensivas que pueden ayudar a prevenir los ataques más peligrosos y de mayor alcance, y apoyar el cumplimiento en una era de múltiples marcos. </p> 
                      <p><b>Control 1: Inventario y control de activos de hardware: </b> Supervise activamente y gestione todos los dispositivos de hardware conectados a 
                      su red. Mantenga un inventario actualizado de todos sus activos tecnológicos y disponga de un sistema de autenticación para garantizar que los  
                      dispositivos no autorizados no tengan acceso a su red.</p>
                      <p><b>Control 2: Inventario y control de activos de software: </b> Disponga de un sistema de inventario de software para supervisar y gestionar  
                      activamente todo el software que se esté ejecutando en su red. Utilice la lista blanca de aplicaciones para garantizar que sólo se instale y 
                      ejecute software autorizado y que se bloquee el software no autorizado.</p>
                      <p><b>Control 3: Gestión continua de vulnerabilidades: </b> Analice continuamente sus activos para identificar posibles vulnerabilidades y remediarlas 
                       antes de que se conviertan en un problema. Fortalezca la seguridad de su red garantizando que el software y los sistemas operativos utilizados en su  
                       organización ejecuten las actualizaciones de seguridad más recientes.</p>
                      <p><b>Control 4: Uso controlado de los privilegios administrativos: </b>Monitoree los controles de acceso y el comportamiento de los usuarios de las  
                      cuentas privilegiadas para evitar el acceso no autorizado a los sistemas críticos. Garantice que sólo las personas autorizadas tengan privilegios 
                      elevados para evitar el uso indebido de los privilegios administrativos.</p>
                      <p><b>Control 5: Configuración segura para el hardware y el software de los dispositivos móviles, laptops, estaciones de trabajo y servidores: </b> Establezca  
                      y mantenga configuraciones de seguridad basadas en los estándares de configuración aprobados por la organización. Defina un riguroso sistema de gestión de  
                      configuraciones que monitoree y alerte sobre las configuraciones erróneas e implemente un proceso de control de cambios para impedir que los atacantes se 
                       aprovechen de los servicios y configuraciones vulnerables.</p>
                       <p><b>Control 6: Mantenimiento, monitoreo, y análisis de logs de auditoría: </b> Recopile, gestione y analice los logs de auditoría de los eventos para 
                       detectar anomalías. Mantenga registros de log para comprender los detalles de los ataques a fin de responder a los incidentes de seguridad de manera eficaz.</p>
                       <p><b>Control 7: Protección de correo electrónico y navegador web: </b> Proteja y gestione los navegadores web y los sistemas de correo electrónico contra  
                       las amenazas basadas en la web para minimizar su superficie de ataque. Deshabilite los navegadores no autorizados y los plug-ins de los clientes de correo 
                       electrónico, y garantice que los usuarios puedan acceder sólo a sitios web de confianza manteniendo filtros de URL basados en la red.</p>
                       <p><b>Control 8: Defensas contra malware: </b> Controle la instalación y ejecución de código malicioso en varios puntos de su empresa para prevenir los ataques.  
                       Configure e implemente software antimalware y optimice el uso de la automatización para permitir una rápida actualización de las defensas y una rápida acción  
                       correctiva cuando se producen los ataques.</p>
                       <p><b>Control 9: Limitación y control de puertos de red, protocolos y servicios: </b> Supervise y controle la actividad en los puertos, protocolos y servicios 
                        de los dispositivos de la red para reducir el alcance de los ataques mediante las vulnerabilidades del servicio. Aproveche los firewalls del host para garantizar 
                        que sólo se permita el acceso al tráfico apropiado.</p>
                        <p><b>Control 10: Funciones de recuperación de datos: </b> Establezca procesos y herramientas para garantizar que la información crítica de su organización esté  
                        debidamente respaldada, y disponga de un sistema de recuperación de datos fiable para la restauración de los datos a fin de superar los ataques que ponen en 
                        peligro los datos críticos.</p>
                        <p><b>Control 11: Configuración segura para dispositivos de red, tales como firewalls, routers y switches: </b> Establezca, implemente y gestione la  
                        configuración de seguridad de los dispositivos de red para evitar que los atacantes se aprovechen de las configuraciones predeterminadas vulnerables.  
                        Disponga de un proceso estricto de gestión y control de configuraciones para garantizar que éstas no se encuentren en un estado explotable.</p>
                        <p><b>Control 12: Protección perimetral: </b> Detecte, prevenga y controle el flujo de información a través de los perímetros de su red para evitar que  
                        los atacantes obtengan acceso pasando por alto los sistemas perimetrales. Configure el monitoreo perimetral, deniegue el acceso no autorizado e implemente  
                        sistemas de detección de intrusos para reforzar la protección perimetral.</p>
                        <p><b>Control 13: Protección de datos: </b> Identifique y segregue los datos sensibles e implemente una combinación de procesos, incluidos la codificación, 
                        los planes de protección contra la infiltración de datos y las técnicas de prevención de pérdida de datos, para garantizar la privacidad e integridad de los datos sensibles.</p>
                        <p><b>Control 14: Control de acceso basado en la necesidad de saber: </b> Supervise, controle y proteja el acceso a los activos críticos, como la información, 
                        los recursos y los sistemas. Permita el acceso a información crítica sobre la base de la necesidad de saberla y establezca un registro detallado de los servidores 
                        a fin de supervisar el acceso e investigar los incidentes en los que se haya accedido indebidamente a los datos.</p>
                        <p><b>Control 15: Control de acceso inalámbrico: </b> Supervise, controle y proteja sus redes de área local inalámbricas (WLAN), puntos de acceso y sistemas de clientes  
                        inalámbricos para evitar que los atacantes manipulen sus defensas perimetrales. Implemente un sistema de detección de intrusos inalámbricos y lleve a cabo un análisis de  
                        vulnerabilidades en los equipos de clientes inalámbricos para detectar vulnerabilidades explotables.</p>
                        <p><b>Control 16: Monitoreo y control de cuentas: </b> Gestione activamente todo el ciclo de vida de sus sistemas y cuentas de aplicaciones, desde su creación, uso e  
                        inactividad hasta su eliminación, para evitar que los atacantes exploten las cuentas de usuarios legítimos pero inactivos.</p>
                        <p><b>Control 17: Implementar un programa de concienciación y capacitación en seguridad: </b> Implemente un plan integrado para identificar, desarrollar e instruir a 
                        los empleados sobre las habilidades y destrezas específicas que deben poseer para apoyar la defensa de la empresa de acuerdo con su rol funcional en la organización.</p>
                        <p><b>Control 18: Seguridad del software de aplicación: </b> Ponga a prueba regularmente todo su software desarrollado internamente y adquirido para detectar vulnerabilidades. 
                        Disponga de un programa eficaz para abordar la seguridad a lo largo de todo el ciclo de vida del software interno, incluidos el establecimiento de los requisitos, la 
                        capacitación, las herramientas y las pruebas, y disponga de criterios estrictos de evaluación de la seguridad al adquirir software de terceros.</p>
                        <p><b>Control 19: Respuesta y gestión de incidentes: </b> Desarrolle e implemente un sistema de gestión de incidentes definido en su organización para descubrir rápidamente  
                        los ataques, contener eficazmente los daños, erradicar la presencia del atacante y restablecer las operaciones con rapidez.</p>
                        <p><b>Control 20: Pruebas de penetración y ejercicios de equipo rojo: </b> Ponga a prueba periódicamente sus defensas para identificar las brechas y evaluar la preparación  
                        de su organización frente a los ataques mediante la realización de pruebas de penetración. Simule los objetivos y acciones de un atacante con la ayuda de equipos rojos para  
                        inspeccionar su actual postura de seguridad y así obtener valiosos conocimientos sobre la eficacia de sus defensas.</p>
                    </div>
                </div>
            </div>  
         </div>
        )
    }
}
export default Cis