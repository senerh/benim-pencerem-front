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
        <div>{file.id}</div>
        <div>{file.name}</div>
        <div>{file.mimeType}</div>
        <div>{file.description}</div>
        <div>{file.tags.map((tag) => tag + ' ')}</div>
        <div>{file.thumbnailLink}</div>
        <div>{file.downloadLink}</div>
        <div>{file.previewLink}</div>
        <div>{file.creationDate}</div>
      </div>
    )
  )
}

export default File
