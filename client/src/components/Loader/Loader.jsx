import loaderIcon from '../../assets/loader.png'
import './Loader.css'

const Loader = () => {
  return (
    <div>
        <img className='loaderIcon' src={loaderIcon} />
    </div>
  )
}

export default Loader