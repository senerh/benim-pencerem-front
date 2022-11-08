import SearchBar from '../../components/SearchBar'
import logo from '../../assets/logo.jpeg'
import './style.css'

function Home() {
  return (
    <div className="home">
      <img className="logo" src={logo} alt="logo" />
      <SearchBar />
    </div>
  )
}

export default Home
