import React from 'react'
import pciLogo from '../imagenes/pci.png'
import './paginas.css'

class Pci extends React.Component{
    render(){
        return(              
        <div className='homep'>
            <div className='Gridh'>
                <div style={{height: '50%', width: '25%'}}>
                    <img className='control' src={pciLogo} />
                </div>
                <div>
                    <div className='titulo'>
                        <p>PCI DSS</p>
                    </div>
                    
                    <div className='subtitulo'>
                        <p>¿Qué es?</p>
                    </div>
                    <div className='cont'>
                      <p> Payment Card Industry Data Security Standard por sus siglas en inglés, es un foro compuesto por cinco de las más importantes marcas de pago: 
                        Visa Inc., MasterCard, American Express, Discover Financial Services y JCB International. Se creo con el objetivo de definir los controles de 
                        seguridad orientados hacia la protección de los datos de tarjetas de pago durante todo el flujo transaccional.</p> 
                    </div>

                    <div className='subtitulo'>
                        <p>¿Cómo se implementa?</p>
                    </div>
                    <div className='cont'>
                        <p><b>Construya y mantenga redes y sistemas protegidos</b></p>
                        <p>1. Instale y mantenga controles de seguridad en las redes. </p>
                        <p>2. Aplique configuraciones protegidas para todos los componentes del sistema.</p>
                        <p><b>Proteja los datos del titular de la tarjeta</b></p>
                        <p>1. Proteja los datos de cuenta almacenados. </p>
                        <p>2. Proteja los datos del titular de la tarjeta con una sólida criptografía durante la transmisión a través de redes públicas abiertas </p>
                        <p><b>Mantenga un programa de gestión de vulnerabilidades: </b></p>
                        <p>1. Proteja todos los sistemas y redes de software malintencionado.  </p>
                        <p>2. Desarrolle y mantenga sistemas y softwares protegidos. </p>
                        <p><b>Implemente medidas solidas de control de acceso </b></p>
                        <p>1. Restrinja el acceso a los componentes del sistema y a los datos del titular de la tarjeta según las necesidades comerciales. </p>
                        <p>2. Identifique a los usuarios y autentique a los componentes del sistema. </p>
                        <p>3. Restrinja el acceso físico a datos del titular de la tarjeta. </p>
                        <p><b>Monitorear y verificar las redes regularmente </b></p>
                        <p>1. Registre y monitoree todo el acceso a los componentes del sistema y a los datos del titular de la tarjeta. </p>
                        <p>2. Verifique la seguridad de los sistemas y redes regularmente. </p>
                        <p><b>Mantenga una política de protección informática</b></p>
                        <p>1. Respalde la protección informática con políticas y programas organizacionales.  </p>
                    </div>
                </div>
            </div>   
         </div>

        )
    }
}
export default Pci