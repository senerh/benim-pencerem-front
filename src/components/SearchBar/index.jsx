import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SearchBar({ defaultValue }) {
  const [query, setQuery] = useState(defaultValue)
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    if (query) {
      const escapedQuery = encodeURIComponent(query)
      navigate({
        pathname: '/files',
        search: `?query=${escapedQuery}`,
      })
    } else {
      navigate('/files')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          defaultValue={defaultValue}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  )
}

export default SearchBar
