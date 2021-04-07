import { Link } from 'react-router-dom'

const NotAuth = () => {
    return(
        <div>
            <h1>You are not authenticated to view this page</h1>
            <Link className="" to="/">Начало</Link>
        </div>
    );

}

export default NotAuth;