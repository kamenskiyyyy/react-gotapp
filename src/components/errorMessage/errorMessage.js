import './errorMessage.css';
import img from './error.jpg';

export const ErrorMessage = () => {
    return (
        <>
            <img src={img} alt='error'></img>
            <span>Something goes wrong</span>
        </>
    )
}