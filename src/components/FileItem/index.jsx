import { Link } from 'react-router-dom'

function FileItem({ file }) {
  return (
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
      <Link to={`/files/${file.id}`}>view details...</Link>
    </div>
  )
}

export default FileItem
