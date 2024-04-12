import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ResultsTable from '@renderer/components/ResultsTable'
import { useForm, SubmitHandler } from 'react-hook-form'

type Input = {
  gamertag: string
}

export default function LeaderboardPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Input>()

  const formData = watch()

  const onSubmit: SubmitHandler<Input> = () => handleSearch(formData.gamertag)
  const [resultsData, setResultsData] = useState([])
  const [player, setPlayer] = useState(null)
  const [buttonLoading, setButtonLoading] = useState(false)
  const [playerError, setPlayerError] = useState(null)

  const handleSearch = async (gamertag: string) => {
    try {
      setPlayerError(null)
      setButtonLoading(true)
      const response = await fetch('https://eerie-tides-api.onrender.com/api/records')
      const data = await response.json()
      const playerTimes = data.filter((p: any) => p.gtag === gamertag)
      if (playerTimes.length > 0) {
        setPlayer(playerTimes[0])
      } else {
        throw new Error('Player not found')
      }
    } catch (error: any) {
      setPlayerError(error.message)
    } finally {
      setButtonLoading(false)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://eerie-tides-api.onrender.com/api/records/top')
        const data = await response.json()
        setResultsData(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="p-16">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-full flex items-top gap-8 justify-between mb-8"
      >
        <div className="text-white leaderboard-title text-7xl ">LEADERBOARD</div>
        <div className="flex flex-col">
          <input
            {...register('gamertag', { required: true, minLength: 3 })}
            type="text"
            className="w-full text-6xl player-input bg-transparent border border-gray-400 rounded-l-sm rounded-r-sm focus:outline-none"
            placeholder="GAMERTAG"
          />
          {errors.gamertag?.type === 'required' && (
            <p className="text-red-500 text-3xl gamertag-error" role="alert">
              Gamertag is required
            </p>
          )}
          {errors.gamertag?.type === 'minLength' && (
            <p className="text-red-500 text-3xl gamertag-error" role="alert">
              Insert at least 3 characters
            </p>
          )}
          {playerError && (
            <p className="text-red-500 text-3xl gamertag-error" role="alert">
              {playerError}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={buttonLoading}
          className=" self-start player-search-button min-w-36 min-h-14 disabled:cursor-not-allowed flex items-center justify-center call-to-action text-4xl bg-white text-black px-8 py-2 rounded-sm rounded-l-none hover:bg-black hover:text-white focus:bg-white active:bg-white"
        >
          {buttonLoading ? (
            <svg
              className="animate-spin h-5 w-5 text-black "
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            'SEARCH'
          )}
        </button>
        <Link
          to={'/'}
          className="self-start call-to-action text-4xl bg-white text-black px-8 py-2 min-h-14 rounded-sm hover:bg-black hover:text-white"
        >
          HOME
        </Link>
      </form>
      <ResultsTable results={resultsData} player={player} />
    </div>
  )
}
