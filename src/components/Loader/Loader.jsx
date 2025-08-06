import { useGlobalContext } from '../../contexts/GlobalContext';
import { Square } from 'ldrs/react'
import 'ldrs/react/Square.css'

function Loader() {
    return (
        <div className='loaderContainer'>
            <Square
                size="35"
                stroke="3"
                strokeLength="0.25"
                bgOpacity="0.1"
                speed="1.2"
                color="white"
            />
        </div>
    );
}

export default Loader