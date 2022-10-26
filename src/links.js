import { Link } from 'react-router-dom'
import Style from './links.module.css'

export default function links() {
    return (
        <div className={Style.Link}>
            
            <Link to={`/user/12`}>
                <button className={Style.linkButton}>Utilisateur Karl</button>
            </Link>
            <Link to={`/user/18`}>
                <button className={Style.linkButton}>Utilisateur Cecilia</button>
            </Link>
        </div>
    );
}