import axios from 'axios';
import { useQuery } from 'react-query'

type Repository = {
  full_name: string;
  description: string;
  language: string;
}

function App() {
  const { data, isFetching } = useQuery<Repository>('repos', async () => {
    const response = await axios.get('https://api.github.com/users/gabrielhz/repos')

    return response.data
  })

  return (
    <ul>
      { isFetching && <p>Carregando...</p>}
      {data?.map(repo => {
        return(
          <li key={repo.full_name}>
            <strong>{repo.full_name}</strong>
            <p>{repo.description}</p>
            <p>{repo.language}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default App
