import React from 'react'
import './principal.css'

class Marcos extends React.Component{
    render(){
        return(              
        <div className='homep'>
            <div className='Gridh'>
                <div>
                    <div className='titulop'>
                        <p>MARCOS DE CIBERSEGURIDAD</p>
                    </div>

                    <div className='subtitulo'>
                        <p>¿Qué es un Marco de Ciberseguridad?</p>
                    </div>
                    <div className='cont'>
                      <p> Es un conjunto predefinido de políticas y procedimientos definidos por las principales organizaciones de seguridad cibernética para mejorar las estrategias 
                        de seguridad cibernética dentro de un entorno empresarial, y está documentado para el conocimiento teórico y los procedimientos de implementación práctica.</p> 
                      <p>Los marcos de ciberseguridad a menudo se usan de manera obligatoria o al menos con fuertes incentivos en las empresas que desean cumplir con regulaciones 
                        estatales, industriales y de ciberseguridad internacional </p>
                      <p>Están diseñados para una industria específica y están creados para reducir las vulnerabilidades desconocidas y las configuraciones incorrectas que existen  
                        dentro de una red empresarial.</p>
                    </div>

                    <div className='subtitulo'>
                        <p>Implementación </p>
                    </div>
                    <div className='cont'>
                      <p> Luego de identificar el marco de ciberseguridad adecuado, se debe realizar lo siguiente: </p> 
                      <p>1.	Las empresas primero necesitan probar e identificar la postura de seguridad actual dentro de su entorno. </p>
                      <p>2.	Analizar los proyectos existentes, el proceso involucrado en estos proyectos y los recursos involucrados con ellos.</p>
                      <p>3.	Comprender el marco de ciberseguridad leyendo los documentos.</p>
                      <p>4.	Distinguir qué controles de seguridad existen y no existen dentro de la red empresarial.</p>
                      <p>5.	Comunicar dónde se están retrasando las capas de seguridad y definir un plan para establecer el mismo.</p>
                      <p>6.	Implementar lo mismo en un marco de tiempo definido para mantener todo en orden y tiempo.</p>
                      <p>7.	Resaltar los controles que superan a los controles definidos por el marco.</p>
                      <p>8.	Discutir todo el plan con los actores clave, incluidos los interesados, y continúe con la implementación.</p>
                      <p>9.	Auditar el progreso de la implementación continuamente.</p>
                      <p>10. Generar informes y realizar reuniones para medir los desafíos.</p>
                      <p>11.Documentar todo el proceso de auditorías y otros beneficios.</p>
                    </div>

                    <div className='subtitulo'>
                        <p>Ventajas </p>
                    </div>     
                    <div className='cont'>
                      <p>- Los marcos de seguridad cibernética y sus políticas pueden superponerse entre sí, lo que permite a las organizaciones cumplir con múltiples marcos 
                        con el mínimo esfuerzo. </p> 
                      <p>- Ciberseguridad mejorada.</p>
                      <p>- Mejor protección de datos.</p>
                      <p>- Fácil cumplimiento y gestión de auditoría.</p>
                    </div>               

                    <div className='subtitulo'>
                        <p>Desventajas </p>
                    </div>     
                    <div className='cont'>
                      <p>- La implementación puede llevar días, afectando la productividad.</p> 
                      <p>- Una implementación incorrecta puede llevar a lagunas de seguridad</p>
                      <p>- Se pueden aplicar limitaciones financieras</p>
                    </div>    

                </div>
            </div>   
           

         </div>

        )
    }
}
export default Marcos