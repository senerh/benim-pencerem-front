import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'

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
    <div className="searchBar">
      <form onSubmit={handleSubmit}>
        <img
          class="voice"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/716px-Google_mic.svg.png"
          title="Search by Voice"
          alt="serach"
        />{' '}
        <input
          type="text"
          name="search"
          defaultValue={defaultValue}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  )
}

export default SearchBar
