import { useState } from 'react'

import { menuCiudadPaleta,menuArtesanal,galeriaPublicidad } from "./utils/data"

import CiudadPaletaLogo from './assets/logoCiudadPeleta.png'
import PaletaTemporada from './assets/PaletaTemporada.jpg'
import Face from './assets/facebook.svg'
import Insta from './assets/instagram.svg'
import TikTok from './assets/tiktok.png'

function App() {

  const [count, setCount] = useState(0)

  function next() {
    if (count < galeriaPublicidad.length-1){
      setCount(count+1)
      console.log(count)
    } else {
      setCount(0)
      console.log(count)
    }
  }

  function back() {
    if (count <= 0){
      setCount(galeriaPublicidad.length-1)
    } else {
      setCount(count-1)
      console.log(count)

    }
  }

  return (

    <div className='flex flex-col        bg-gradient-to-r
        from-indigo-500
         via-purple-500
          to-pink-500'>

      <div 
       className="
       duration-200
       flex flex-col 
       justify-center items-center 
       mobil:flex-row
       h-36 
       size770:h-48
       size770:justify-evenly
       bg-gradient-to-r
        from-indigo-500
         via-purple-500
          to-pink-500
          rounded-b-3xl shadow-lg "
          
       >
                <div className="px-4">
          <img src={CiudadPaletaLogo} 
          className="duration-200 w-0 h-0
          size570:w-28 size570:h-28
          size770:w-32 size770:h-32
          size890:w-44 size890:h-44"
        />
        </div>
        <div className=""> 
        <h1 
        className="font-popsicle text-5xl mobil:text-6xl medium:text-7xl size770:text-8xl duration-200"
        >Welcome</h1>
        </div>
        <div className="px-4">
          <img src={CiudadPaletaLogo} 
          className="duration-200 w-20 h-20
          mobil:w-28 mobil:h-28
          size770:w-32 size770:h-32          
          size890:w-44 size890:h-44"
        />
        </div>
      </div>

      <div className='duration-200 flex flex-row flex-wrap justify-center size781:justify-evenly'>

        <div className='my-3 flex flex-col items-center'>

          <div className='w-fit p-4 rounded-xl shadow-lg bg-gradient-to-l
        from-indigo-500
         via-purple-500
          to-pink-500'>
            <span className='duration-200 self-center text-4xl size490:text-5xl font-semibold whitespace-nowrap dark:text-white
            
            '>
              Ciudad Paleta
            </span>
          </div>

          <div className="px-5 py-3 flex-wrap ">

          {Object.values(menuCiudadPaleta).map((value, index) => {
            return (
              <div key={index} className='w-fit h-fit py-2 '>
                <h2 className='self-center text-3xl font-semibold whitespace-nowrap dark:text-white py-4 size781:text-4xl text-center'>
                  {value.categortia}
                </h2> 
                {Object.values(value.Paletas).map((value, index) => {
                    return (
                      <div key={index} className='flex flex-row '>
                        <h2 className='self-center text-xl size781:text-2xl font-semibold flex-wrap dark:text-white py-2 w-60 size781:w-[25rem]'>{value.nombre}</h2> 
                        <h2 className='self-center text-xl font-semibold flex-wrap dark:text-white py-2'>$ {value.precio}</h2> 
                      </div>
                    );
                  })
                }
                <hr className=''/>
              </div>
              );
            })
          }

            
          </div>

        </div>

      </div> 

      <div className='flex flex-col justify-center items-center py-6'>

        <div className='flex flex-col justify-center w-11/12 p-4 rounded-xl shadow-lg bg-gradient-to-l
        from-indigo-500
        via-purple-500
          to-pink-500'>

            <span className='text-center text-4xl size490:text-5xl font-semibold  dark:text-white'>
              Galeria de paletas
            </span>

        </div>

        <div className='flex justify-center items-center border-green-700 w-11/12 overflow-auto mt-8'>

              <button type="button" className=" z-30 flex items-center justify-center h-full pr-4 cursor-pointer group focus:outline-none" onClick={back}>
                  <span className="inline-flex 
                  mobil:w-20 mobil:h-20
                  items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                      <svg aria-hidden="true" className="w-6 h-6 text-white dark:text-gray-800                    mobil:w-10 mobil:h-10
                      " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                      <span className="sr-only">Previous</span>
                  </span> 
              </button>

               <div className="overflow-hidden rounded-lg items-center justify-center flex">

                    <img src={galeriaPublicidad[count]['img']} alt="" className='rounded-3xl border-2 shadow-2xl mobil:w-10/12'/>

              </div> 
              <button  className="z-30 flex items-center justify-center h-full pl-4 cursor-pointer group focus:outline-none" onClick={next}>
                   <span className="inline-flex 
                   mobil:w-20 mobil:h-20
                   items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60  group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                      <svg aria-hidden="true" className="w-6 h-6 text-white 
                        mobil:w-10 mobil:h-10
                      dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                      <span className="sr-only">Next</span>
                  </span> 
              </button> 






        </div>

      </div>

      <div className="align-bottom">
        <footer className="duration-500 p-4 bg-white rounded-t-2xl shadow px-6 py-8 dark:bg-gray-900 items-end">
          <div className="duration-500 flex flex-col medium:flex-row items-center  justify-between">
              <div className="flex items-center mb-4 justify-center">
                  <img src={CiudadPaletaLogo} className="mr-3 h-8" alt="Ciudad Paleta Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ciudad Paleta Costa Azul</span>
              </div>
              <div className="duration-500 flex flex-col size750:flex-row items-center justify-center">
                <span  className="mr-3 font-popsicle text-4xl text-slate-300 ">Redes Sociales</span>
                <ul className="flex flex-wrap items-center text-sm text-gray-500  dark:text-gray-400 pt-2">              
                    <li>
                    <a href="https://www.facebook.com/profile.php?id=100086409467203">
                    <img src={Face} className="mr-3 h-9" alt="Flowbite Logo" />
                    </a>
                    </li>
                    <li>
                    <a href="https://instragram.com/ciudadpaletacostaazul?igshid=YmMyMTA2M2Y">
                    <img src={Insta} className="mr-3 h-9" alt="Flowbite Logo" />
                    </a>
                    </li>
                    <li>
                    <a href="https://www.tiktok.com/@ciudadpaletacostaazul">
                    <img src={TikTok} className="mr-3 h-9" alt="Flowbite Logo" />
                    </a>
                    </li>                
                </ul>
      
              </div>
          </div>
          <hr className="my-4 border-gray-200 mx-auto dark:border-gray-700" />
          <div className="duration-500 flex flex-col size750:flex-row items-center justify-center">
          <span className="pr-2 text-sm text-gray-500 text-center dark:text-gray-400">© 2022 Ciudad Paleta Costa Azul™
          </span>
          <span className="pl-2 text-sm text-gray-500 text-center dark:text-gray-400">Todos los derechos reservados.
          </span>
          </div>
        </footer>
      </div>

    </div>  

  )
}

export default App
