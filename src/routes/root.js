import { Link, Outlet } from "react-router-dom";
import './root.css'
import Logo from '../assets/breaking.png'

export default function Root() {
    return (
        <>
            <div id="sidebar">

                <Link to='/'>
                    <div id="logo-icon">
                        <img src={Logo}></img>

                    </div>
                </Link>

                <div>
                    <ul>
                        <li>
                            <Link to={"characters"}>Characters</Link>
                        </li>
                        <li>
                            <Link to={"words"}>Words</Link>
                        </li>
                    </ul>
                </div>


            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}