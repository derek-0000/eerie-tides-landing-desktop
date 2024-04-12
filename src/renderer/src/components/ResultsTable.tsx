type Result = {
  gtag: string;
  time: string;
  deaths: number;
  position: number;
};

type Props = {
  results: Result[] | null;
  player: Result | null;
};

export default function ResultsTable({results,player}: Props) {


  return (
    <div className="w-[100%]">
      <table className="w-full border-collapse border border-gray-400">
        <thead className="table-header text-5xl">
          <tr>
            <th className="border border-gray-400 px-4 py-2">Position</th>
            <th className="border border-gray-400 px-4 py-2">Gamertag</th>
            <th className="border border-gray-400 px-4 py-2">Time</th>
            <th className="border border-gray-400 px-4 py-2">Deaths</th>
          </tr>
        </thead>
        <tbody className="table-body text-center text-3xl tracking-wider">
          {results?.map((result, index) => (
            <tr key={result.gtag}>
              <td className="border border-gray-400 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-400 px-4 py-2">
                {result.gtag}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {result.time}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {result.deaths}
              </td>
            </tr>
          ))}
          {player !== null && (
            <tr>
              <td className="border text-yellow-300 border-gray-400 px-4 py-2">
                4
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {player.gtag}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {player.time}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {player.deaths}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
