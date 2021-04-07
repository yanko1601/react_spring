import { Link } from 'react-router-dom'


const Admin = () => {
    return(
        <div>
            <h1>ADMIN COMPONENT</h1>
            <Link className="" to="/admin/setadmin">Администратори</Link>
            <Link className="" to="/admin/addcity">Добави град</Link>
            <Link className="" to="/admin/endofleague">Край на лигата</Link> 
        </div>
    );
}

export default Admin;