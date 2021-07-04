import { Link } from 'react-router-dom';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import RestaurantMenuSharpIcon from '@material-ui/icons/RestaurantMenuSharp';

function Sidebar() {
    return (
        <div class="Sidebar">
            <ul>
            <li><Link to="/Home"><HomeTwoToneIcon /> Home</Link></li>
            <li><Link to="/"><RestaurantMenuSharpIcon /> Menu</Link></li>
            </ul>

        </div>
    );
}

export default Sidebar;