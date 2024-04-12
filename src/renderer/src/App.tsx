import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'
import { Link } from 'react-router-dom'
import eerie_tides_logo from './assets/eerie_tides_logo.png'
import landing_temp_cover from './assets/landing_temp_cover.jpeg'
import TeamMembers from './components/TeamMembers'

function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <div className="flex items-center justify-center w-[100%] ">
        <div className="relative flex flex-col items-center justify-start h-[100vh] w-[100%] sm:w-[80%]">
          <div className="flex gap-2 relative flex-col justify-center items-center z-50 w-[100%] h-[100%]">
            <img
              id="video-player"
              className="w-[100%] md:w-96 lg:w-96 h-56 object-cover"
              src={landing_temp_cover}
            />

            <img className=" w-48 sm:w-56 " src={eerie_tides_logo} />
            <button className="play-now-button text-4xl bg-white text-black px-8 py-2 rounded-sm hover:bg-black hover:text-white">
              PLAY NOW
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col lg:flex-row gap-12 lg:gap-52 p-2 sm:px-48 story-container text-center">
        <div className="story-container text-center">
          <div className=" text-5xl">STORY</div>
          <div className=" text-2xl tracking-wide">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt natus distinctio
            eligendi totam autem perspiciatis perferendis qui! Odit nesciunt velit ipsa ut, nemo
            iusto maiores numquam quisquam, illum earum odio.
          </div>
        </div>
        <img
          id="video-player"
          className="z-50 h-56 w-[100%] object-cover"
          src={landing_temp_cover}
        />
      </div>
      <div className="flex justify-center items-center flex-col gap-1 overflow-x-hidden	">
        <div className="-mb-2 mt-32 overflow-x-hidden">
          <div className=" h-8 background-text-a"></div>
        </div>
        <div className="mb-6">
          <TeamMembers />
        </div>
        <div className="overflow-x-hidden">
          <div className=" h-8 background-text-a2"></div>
        </div>
      </div>
      <div className="text-white call-to-action my-32 flex flex-col items-center justify-center">
        <div className="text-5xl">SEE YOUR TIMES</div>
        <Link
          to={'/leaderboard'}
          className="leaderboard-link text-4xl bg-white text-black px-8 py-2 rounded-sm hover:bg-black hover:text-white"
        >
          Leaderboard
        </Link>
      </div>
    </>
  )
}

export default App
