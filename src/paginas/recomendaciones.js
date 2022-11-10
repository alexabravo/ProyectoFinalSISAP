import React from 'react'
import './principal.css'
import ReactPlayer from 'react-player'

class Recomendaciones extends React.Component{
    render(){
        return(              
        <div className='homep'>
            <div className='Gridh'>
                <div>
                    <div className='titulop'>
                        <p>RECOMENDACIONES</p>
                    </div>

                    <div className='subtitulo'>
                        <p>Peliculas/ Series/ Documentales</p>
                    </div>

                    <div className='cont'>
                        <p><b>Clickbait</b></p>
                    </div>
                    <div>
                        <ReactPlayer
                        url='https://www.youtube.com/watch?v=JZJo0BFZDQ8'
                        className='react-player'
                        playing
                        width='640px'
                        height='360px'
                        />
                    </div>

                    <div className='cont'>
                        <p><b>Nada es privado</b></p>
                    </div>
                    <div>
                        <ReactPlayer
                        url='https://www.youtube.com/watch?v=HVHKYXJq7qo '
                        className='react-player'
                        playing
                        width='640px'
                        height='360px'
                        />
                    </div>

                    <div className='cont'>
                        <p><b>El dilema de las redes sociales</b></p>
                    </div>
                    <div>
                        <ReactPlayer
                        url='https://www.youtube.com/watch?v=EBxHl0H7Y0g'
                        className='react-player'
                        playing
                        width='640px'
                        height='360px'
                        />
                    </div>

                </div>
            </div>   
           
         </div>

        )
    }
}
export default Recomendaciones