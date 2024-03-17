import "./card.scss"

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AddProduct from "../AddProduct/AddProduct";
import { useState } from "react";



export default function Card ({
    item,
}){

    const [isVis, setIsVis] = useState(false);

    const showAdd = () => {
        
    }
                            
    return(
        <div className="card"  style={{backgroundImage: `url(${item.img})`}}>
            <h2 style={isVis ? {top: "0px"} : {}}>{item.name}</h2>
            {isVis  ? 
                    <AddProduct  setIsVis={setIsVis} item={item}/>
                    :   
                    <div className="buttons">
                        <InfoOutlinedIcon className="info-btn"/>
                        <AddOutlinedIcon className="add-btn" onClick={() => setIsVis(true)}/>
                    </div>
                    
                    }
        </div>				
    );
}