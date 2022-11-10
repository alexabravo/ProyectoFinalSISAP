import React from 'react'
import './principal.css'

class Home extends React.Component{
    render(){
        return(              
        <div className='homep'>
            <div className='Gridh'>
                <div>
                    <div className='titulop'>
                        <p>CIBERSEGURIDAD</p>
                    </div>

                    <div className='subtitulo'>
                        <p>¿Qué es Ciberseguridad?</p>
                    </div>
                    <div className='cont'>
                      <p> Es la práctica de proteger sistemas, redes y programas de ataques digitales. Se le conoce también como seguridad de la tecnología de la información (TI), las medidas de ciberseguridad están diseñadas para combatir las amenazas a sistemas en red y aplicaciones, que se originan tanto desde dentro como desde fuera de una organización.</p> 
                      <p>Actualmente, la implementación de medidas de seguridad digital se debe a que hay más dispositivos conectados que personas, y los atacantes son cada vez más creativos. </p>
                      <p>La ciberseguridad cuenta con tres pilares, los cuales son: </p>
                      <p><b>Confidencialidad:</b> Mantener los secretos y garantizar que solo los usuarios autorizados puedan obtener acceso a sus archivos y cuentas.</p>
                      <p><b>Integridad:</b> Garantizar que su información es la que debe ser y de que nadie ha insertado, modificado o eliminado cosas sin su permiso.</p>
                      <p><b>Acceso:</b> Garantizar que puede tener acceso a su información y sistemas cuando lo necesite.</p>
                    </div>

                    <div className='subtitulo'>
                        <p>Ciberamenazas más comunes </p>
                    </div>
                    <div className='cont'>
                      <p><b>Suplantación de identidad/ Phishing/ Ingeniería Social: </b> El phishing es una forma de ingeniería social que engaña a los usuarios para que proporcionen su propia información personal o información confidencial. Ocurre al enviar correos electrónicos fraudulentos que se asemejan a correos electrónicos de fuentes de buena reputación. Es el tipo más común de ciberataque.</p>
                      <p><b>Ransomware: </b> Es un tipo de software malicioso. Está diseñado para exigir dinero mediante el bloqueo del acceso a los archivos o el sistema informático hasta que se pague un rescate. El pago del rescate no garantiza que se recuperen los archivos o se restaure el sistema. Los últimos ataques de ransomware se han dirigido a gobiernos estatales y locales, que son más 
                      fáciles de quebrantar que las organizaciones y están bajo mayor presión a la hora de pagar rescates para restaurar las aplicaciones y sitios web en los que confían los ciudadanos.</p>
                      <p><b>Malware: </b> Es un tipo de software diseñado para obtener acceso no autorizado o causar daños en una computadora, se refiere a variantes de software malicioso, como gusanos, virus, troyanos y spyware. El malware cada vez tiene más ataques "sin archivos" y están diseñados para eludir los métodos de detección más comunes, como las herramientas antivirus, que exploran los archivos adjuntos para detectarlos. </p>
                      <p><b>Ataques de intermediarios "Man in the Middle": </b> Es un tipo de ataque donde un ciberdelincuente intercepta y retransmite mensajes entre dos partes para robar datos.</p>
                      <p><b>Ataques de denegación de servicio distribuido "DDoS": </b> Intenta hacer caer un servidor, un sitio web o una red sobrecargándola con tráfico, generalmente desde varios sistemas coordinados. Los ataques DDoS agobian las redes empresariales a través del protocolo simple de gestión de red (SNMP), utilizado para módems, impresoras, conmutadores, routers y servidores.</p>
                      <p><b>Amenazas persistentes avanzadas "APT": </b> Es cuando un intruso o un grupo de intrusos se infiltran en un sistema y permanecen sin ser detectados durante un largo período de tiempo. El intruso deja intactas las redes y sistemas para poder espiar la actividad empresarial y robar datos confidenciales evitando así que se activen contramedidas defensivas.</p>
                    </div>

                    <div className='subtitulo'>
                        <p>TIPS de ciberseguridad </p>
                    </div>
                    <div className='cont'>
                        <p><b>Actualizar el software y el sistema operativo: </b> Esto significa que aprovechará las últimas revisiones de seguridad.</p>
                        <p><b>Utilizar software antivirus: </b> Las soluciones de seguridad detectarán y eliminan las amenazas. Mantenga su software actualizado para obtener el mejor nivel de protección.</p>
                        <p><b>Utilizar contraseñas seguras: </b> Asegúrese de que sus contraseñas no sean fáciles de adivinar.</p>
                        <p><b>No abrir archivos adjuntos de correos electrónicos de remitentes desconocidos: </b> Podrían estar infectados con malware.</p>
                        <p><b>No hacer clic en los vínculos de los correos electrónicos de remitentes o sitios web desconocidos: </b> Es una forma común de propagación de malware.</p>
                        <p><b>Evitar el uso de redes Wi-Fi no seguras en lugares públicos: </b> Las redes no seguras lo dejan vulnerable a ataques del tipo “Man-in-the-middle”.</p>
                    </div>
                </div>
            </div>   

         </div>

        )
    }
}
export default Home