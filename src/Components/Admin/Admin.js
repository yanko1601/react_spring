import { Link } from 'react-router-dom'
import './Admin.css';


const Admin = () => {
    return(
        <div className="container">
            <h1 className="admin-wrapper">ADMIN COMPONENT</h1>
            <Link className="admin-button" to="/admin/setadmin"><span>Администратори</span></Link>
            <Link className="admin-button" to="/admin/addcity"><span>Добави град</span></Link>
            <Link className="admin-button" to="/admin/endofleague"><span>Край на лигата</span></Link> 
        </div>
    );
}

export default Admin;