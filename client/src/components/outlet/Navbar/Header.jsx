import "./header.scss";
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import TroubleshootOutlinedIcon from '@mui/icons-material/TroubleshootOutlined';
import {Link} from "react-router-dom"

export default function Header(){

    return(
        <header className="header">
            <div className="left">
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="#">Catalog</Link>
            </div>
            <div className="center">
            <Link className="link logo" to="/">MacroFitHub</Link>
            </div>
            <div className="right">
                <p className="macro-nutrients">
                    Macronutrients
                <TroubleshootOutlinedIcon className="calc-btn" />
                </p>
            </div>

        </header>
    );
}