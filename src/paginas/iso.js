import React from 'react'
import isoLogo from '../imagenes/iso.png'
import './paginas.css'

class Iso extends React.Component{
    render(){
        return(              
        <div className='homep'>
            <div className='Gridh'>
                <div style={{height: '50%', width: '25%'}}>
                    <img className='control' src={isoLogo} />
                </div>
                <div>
                    <div className='titulo'>
                        <p>ISO/IEC 27001/27002</p>
                    </div>
                    <div className='subtitulo'>
                        <p>¿Qué es?</p>
                    </div>
                    <div className='cont'>
                      <p> ISO 27001 es una norma internacional que permite el aseguramiento, la confidencialidad e integridad de los datos y de la información,
                        así como de los sistemas que la procesan.</p> 
                      <p>La Gestión de la Seguridad de la Información se complementa con las buenas prácticas o controles establecidos en la norma ISO 27002.</p>
                      <p>Contar con esa certificación implica que una empresa está cumpliendo con las buenas prácticas implantadas en el Sistema de Gestión de 
                        Seguridad de la Información. Es decir, que cumplan con un régimen de legalidad para preservar su identidad, integridad y la 
                        confidencialidad de la información que emplean. Además, propone una serie de ventajas muy atractivas para las empresas, como mostrar una 
                        imagen empresarial más profesional y de confianza, mostrar un compromiso con la legalidad y la adecuación de sus recursos y ponerse en 
                        una significante ventaja competitiva dentro del mercado internacional.</p>
                    </div>

                    <div className='subtitulo'>
                        <p>¿Cómo se implementa?</p>
                    </div>
                    <div className='cont'>
                      <p><b>ISO 27001</b></p>
                      <p><b>Definir los objetivos y redactar una Política de Seguridad: </b> Es importante tener los objetivos definidos y saber qué expectativas 
                      debe cumplir en todo momento la empresa para obtener dicha certificación. Tras definir la Política de Seguridad, esta deberá pasarse a la 
                      dirección para que pueda ser aprobada y estudie los recursos humanos y materiales necesarios para llevar a cabo su implementación.</p>
                      <p><b>Definir los riesgos: </b> Una vez tenemos ya pensada una Política de Seguridad, el siguiente paso que debemos dar será identificar los 
                      riesgos a los que se puede enfrentar la empresa, quién se encargará de gestionarlos, cuáles son las vulnerabilidades de la compañía.</p>
                      <p><b>Evaluar y analizar los riesgos: </b> Una vez se han identificado los riesgos a los que se expone la empresa, se debe analizar el impacto 
                      que podrían generar dichas amenazas sobre la compañía y con cuánta frecuencia podrían producirse. se debe realizar un tratamiento de riesgos, 
                      es decir, ver qué riesgos se pueden reducir y eliminar. De la misma forma, debemos buscar cuáles serán los métodos para gestionar dichos 
                      riesgos en caso de que ocurran.</p>
                      <p><b>Realizar la declaración de la aplicabilidad: </b>Una vez ya se ha realizado el tratamiento de riesgos, se deben definir los objetivos de 
                      control, ver cuáles se pueden aplicar y cuáles no, cómo se hará y por qué se hará. Todo esto deberá quedar recogido en un documento llamado 
                      “Declaración de Aplicabilidad”.</p>
                      <p><b>Poner en marcha la implementación del Sistema de Gestión de Seguridad de la Información: </b> Una vez que se ha pasado la fase de planificación, 
                      es el momento de implementar el SGSI, y, por tanto, el plan de tratamiento del riesgo previsto. Se deberán introducir nuevas tecnologías y prácticas 
                      que ayuden a alcanzar los objetivos marcados y realizar controles de seguridad.</p>
                       <p><b>Capacitación y concienciación: </b> Una empresa no es nada sin las personas que la conforman. La puesta en marcha no se podrá llevar a cabo 
                       correctamente si no se forma a los empleados para que puedan actuar siguiendo las nuevas medidas impuestas. En este paso, es primordial la formación 
                       del personal en cuanto a las nuevas tecnologías aplicadas y los nuevos protocolos que se hayan establecido.</p>
                       <p><b>Monitoreo: </b> Es importante que, antes de obtener la certificación, nos aseguremos de la efectividad de los procesos que se han implementado 
                       en la compañía. Por ello, se debe dedicar un periodo de tiempo a medir, controlar y revisar cómo funciona el sistema y si está permitiendo que se 
                       alcancen los objetivos establecidos.</p>
                    </div>
                    <div className='cont'>
                      <p><b>ISO 27002</b></p>
                      <p><b>Sección 5 – Política de Seguridad de la Información: </b> Se debe crear un documento sobre la política de seguridad de la 
                      información de la empresa, que debe contener los conceptos de seguridad de la información, una estructura para establecer los 
                      objetivos y las formas de control, el compromiso de la dirección con la política, entre tantos otros factores.</p>
                      <p><b>Sección 6 – Organización de la Seguridad de la Información: </b> Para implementar la Seguridad de la Información en una empresa, 
                      es necesario establecer una estructura para gestionarla de una manera adecuada. Para ello, las actividades de seguridad de la información 
                      deben ser coordinadas por representantes de la organización, que deben tener responsabilidades bien definidas y proteger las informaciones
                      de carácter confidencial.</p>
                      <p><b>Sección 7 – Gestión de activos: </b> Activo, según la norma, es cualquier cosa que tenga valor para la organización y que necesita ser 
                      protegido. Pero para ello los activos deben ser identificados y clasificados, de modo que un inventario pueda ser estructurado y posteriormente 
                      mantenido. Además, deben seguir reglas documentadas, que definen qué tipo de uso se permite hacer con dichos activos.</p>
                      <p><b>Sección 8 – Seguridad en recursos humanos: </b> Antes de la contratación de un empleado o incluso de proveedores es importante que sea 
                      debidamente analizado, principalmente si se trata de información de carácter confidencial. La intención de esta sección es mitigar el riesgo 
                      de robo, fraude o mal uso de los recursos. Y cuando el empleado esté trabajando en la empresa, debe ser consciente de las amenazas relativas 
                      a la seguridad de la información, así como de sus responsabilidades y obligaciones.</p>
                      <p><b>Sección 9 – Seguridad física y del medio ambiente: </b> Los equipos e instalaciones de procesamiento de información crítica o sensible 
                      deben mantenerse en áreas seguras, con niveles y controles de acceso apropiados, incluyendo protección contra amenazas físicas y ambientales.</p>
                       <p><b>Sección 10 – Seguridad de las operaciones y comunicaciones: </b> Es importante que estén definidos los procedimientos y responsabilidades 
                       por la gestión y operación de todos los recursos de procesamiento de la información. Esto incluye la gestión de servicios tercerizados, la 
                       planificación de recursos de los sistemas para minimizar el riesgo de fallas, la creación de procedimientos para la generación de copias de 
                       seguridad y su recuperación, así como la administración segura de las redes de comunicaciones.</p>
                       <p><b>Sección 11 – Control de acceso: </b> El acceso a la información, así como a los recursos de procesamiento de la información y los procesos 
                       de negocios, debe ser controlado con base en los requisitos de negocio y en la seguridad de la información. Debe garantizarse el acceso de 
                       usuario autorizado y prevenido el acceso no autorizado a los sistemas de información, a fin de evitar daños a documentos y recursos de 
                       procesamiento de la información que estén al alcance de cualquiera.</p>
                       <p><b>Sección 12 – Adquisición, desarrollo y mantenimiento de sistemas: </b>Los requisitos de seguridad de los sistemas de información deben ser 
                       identificados y acordados antes de su desarrollo y/o de su implementación, para que así puedan ser protegidos para el mantenimiento de su 
                       confidencialidad, autenticidad o integridad por medios criptográficos.</p>
                       <p><b>Sección 13 – Gestión de incidentes de seguridad de la información: </b>Los procedimientos formales de registro y escalonamiento deben ser 
                       establecidos y los empleados, proveedores y terceros deben ser conscientes de los procedimientos para notificar los eventos de seguridad de la 
                       información para asegurar que se comuniquen lo más rápido posible y corregidos en tiempo hábil</p>
                       <p><b>Sección 14 – Gestión de continuidad del negocio: </b>Los planes de continuidad del negocio deben ser desarrollados e implementados, con el 
                       fin de impedir la interrupción de las actividades del negocio y asegurar que las operaciones esenciales sean rápidamente recuperadas.</p>
                       <p><b>Sección 15 – Conformidad: </b>Es importante evitar la violación de cualquier ley criminal o civil, garantizando estatutos, regulaciones u 
                       obligaciones contractuales y de cualesquiera requisitos de seguridad de la información. En caso necesario, la empresa puede contratar una 
                       consultoría especializada, para que se verifique su conformidad y adherencia a los requisitos legales y reglamentarios.</p>
                    </div>
                </div>
            </div>   
         </div>
        )
    }
}
export default Iso