import "./header.scss";
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import TroubleshootOutlinedIcon from '@mui/icons-material/TroubleshootOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-router-dom"

export default function Header(){

    //next step add nutrient cart

    return(
        <div className="header-main">
        <header className="header">
            < MenuIcon className="menuIcon" />
            <div className="left">
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/catalog">Catalog</Link>
            <Link className="link" to="#">Recipes</Link>
            </div>
            <div className="center">
            <Link className="link logo" to="/">FitHub</Link>
            </div>
            <div className="right">
                <p className="macro-nutrients">
                    <span>Macronutrients</span>
                <TroubleshootOutlinedIcon className="calc-btn" />
                </p>
            </div>

        </header>
        </div>
    );
}