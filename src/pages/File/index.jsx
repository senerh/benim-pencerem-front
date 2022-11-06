import { useParams } from 'react-router-dom'

function File() {
  const { id } = useParams()

  return <div>Display file with id = {id}</div>
}

export default File
