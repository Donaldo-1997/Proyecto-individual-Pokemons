import { useHistory } from "react-router-dom"
import pokemonNotFound from '../img/pokemon-go-1574001_1280.webp'


export default function NotFound() {

    const history = useHistory()

    return (
        <div className="not_found">
            <div>
                <h1>Page not found</h1>
                <img src={pokemonNotFound} alt="not-found" className='image_not_found' />
                <div className="back_btn not_found"><span onClick={() => history.push('/home')}>←</span></div>
            </div>
        </div>
    )
}