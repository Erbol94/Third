import classes from './menu.module.css'
import {Link, NavLink} from 'react-router-dom'

function Menu () {
    return (
        <ul className={classes.menu}>
            <li>
                <NavLink to="/" className={classes.link}>Main Page</NavLink>
            </li>
            <li>
                <NavLink to="/about" className={classes.link}>About Page</NavLink>
            </li>
            <li>
                <NavLink to="/contact" className={classes.link}>Contact Page</NavLink>
            </li>
            <li>
                <NavLink to='/port' className={classes.link}>Portfol Page</NavLink>
            </li>
            <li>
                <NavLink to='/blogs' className={classes.link}>Blogs page</NavLink>
            </li>
        </ul>
    )
}
export default Menu;