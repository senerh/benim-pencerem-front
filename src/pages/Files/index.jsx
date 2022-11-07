import { useSearchParams } from 'react-router-dom'
import SearchBar from '../../components/SearchBar'

function Files() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('query')

  return (
    <div>
      <SearchBar defaultValue={query} />
      {query
        ? `Research files with query = ${query}`
        : 'Research the last files'}
    </div>
  )
}

export default Files
