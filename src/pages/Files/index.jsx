import { useEffect } from 'react'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroller'
import SearchBar from '../../components/SearchBar'
import FileItem from '../../components/FileItem'
import { useCallback } from 'react'

function Files() {
  const [files, setFiles] = useState([])
  const [nextPageToken, setNextPageToken] = useState(null)
  const [hasNoResult, setHasNoResult] = useState(false)
  const [searchParams] = useSearchParams()
  const query = searchParams.get('query')

  useEffect(() => {
    setHasNoResult(false)
    let url = 'http://localhost:8080/files'
    if (query) {
      url += '?q=' + encodeURIComponent(query)
    }
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setFiles(result.files)
          setNextPageToken(result.nextPageToken)
          setHasNoResult(!result.files.length)
        },
        (error) => {
          console.log('Error while fetching api', error)
        }
      )
  }, [query])

  const buildUrl = useCallback(() => {
    let url = 'http://localhost:8080/files'
    if (query) {
      url += '?q=' + encodeURIComponent(query)
      if (nextPageToken) {
        url += '&pageToken=' + nextPageToken
      }
    } else if (nextPageToken) {
      url += '?pageToken=' + nextPageToken
    }
    return url
  }, [query, nextPageToken])

  const loadMore = useCallback(() => {
    const url = buildUrl()
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setFiles(files.concat(result.files))
          setNextPageToken(result.nextPageToken)
        },
        (error) => {
          console.log('Error while fetching api', error)
        }
      )
  }, [buildUrl, files])

  const hasMore = !!nextPageToken

  const loader = <div key={0}>Loading...</div>

  const noResult = <div>No result for '{query}'</div>

  return (
    <div>
      <SearchBar defaultValue={query} />
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} loader={loader}>
        <ul>
          {files.map((file) => (
            <div key={file.id}>
              <FileItem file={file} />
              <br></br>
            </div>
          ))}
        </ul>
      </InfiniteScroll>
      {hasNoResult && noResult}
    </div>
  )
}

export default Files
