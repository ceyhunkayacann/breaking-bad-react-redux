import { Link, Outlet } from "react-router-dom";
import './root.css'
import Logo from '../assets/breaking.png'

export default function Root() {
    return (
        <>
            <div id="sidebar">
                <div>
                    <img src={Logo}></img>

                </div>

                <div>
                    <ul>
                        <li>
                            <Link to={"home"}>Characters</Link>
                        </li>
                        <li>
                            <Link to={"characters"}>Words</Link>
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