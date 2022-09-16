import { useState } from 'react';
import { GameBanner } from './components/GameBanner';
import './styles/main.css';
import logoImg from './assets/logo-nlw-esports.svg'
import { CreateAdBanner } from './components/CreateAdBanner';


function App() {

  const [has] = useState(false)

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} />
      <h1 className='text-6xl text-white font-black mt-20'>Seu <span className='bg-nlw-gradient text-transparent bg-clip-text'>duo</span> está aqui.</h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        <GameBanner bannerUrl='./game-1.png' title='LOL' adsCount={5} />

      </div>
      <CreateAdBanner />
    </div>
  )
}

export default App
