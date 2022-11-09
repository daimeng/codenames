import logo from './logo.svg';
import './App.css';

function App() {
  const wordlist = new Array(5).fill(null).map(row =>
    new Array(5).fill(-1)
  )

  let blue = 1

  // assign assassin
  const i = Math.floor(Math.random() * 5)
  const j = Math.floor(Math.random() * 5)
  wordlist[i][j] = 2

  let choose = 17
  while (choose > 0) {
    const i = Math.floor(Math.random() * 5)
    const j = Math.floor(Math.random() * 5)
    if (wordlist[i][j] !== -1) {
      continue
    }

    wordlist[i][j] = blue
    blue ^= 1
    choose -= 1
  }

  return (
    <div className="App">
      <table>
        <tbody>
          {wordlist.map(row =>
            <tr>
              {row.map(cell =>
                <td className={`cell cell-${cell}`}>
                  {''}
                </td>
              )}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
