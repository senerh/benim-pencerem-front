import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function File() {
  const { id } = useParams()
  const [file, setFile] = useState(null)

  useEffect(() => {
    let url = `http://localhost:8080/files/${id}`
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setFile(result)
        },
        (error) => {
          console.log('Error while fetching api', error)
        }
      )
  }, [id])

  return (
    file && (
      <div>
        <h2>{file.name}</h2>
        <div>{file.creationDate}</div>
        <div>{file.tags.map((tag) => '#' + tag + ' ')}</div>
        <p style={{ whiteSpace: 'pre-line' }}>{file.description}</p>
        <img
          src={file.thumbnailLink}
          alt={file.name}
          referrerPolicy="no-referrer"
        />
        <div>
          <a href={file.downloadLink}>Download</a>
        </div>
        <div>
          <a href={file.previewLink} target="_blank" rel="noreferrer">
            Preview
          </a>
        </div>
      </div>
    )
  )
}

export default File
