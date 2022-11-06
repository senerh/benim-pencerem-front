import { useSearchParams } from 'react-router-dom'

function Files() {
  const [searchParams] = useSearchParams()
  const q = searchParams.get('q')

  return <div>Research files with q = {q}</div>
}

export default Files
