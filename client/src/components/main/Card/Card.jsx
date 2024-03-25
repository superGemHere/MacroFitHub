import "./card.scss"

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AddProduct from "../AddProduct/AddProduct";
import InfoProduct from "../InfoProduct/InfoProduct";
import { useState } from "react";



export default function Card ({
    item,
}){

    const [isAddVis, setIsAddVis] = useState(false);
    const [isInfoVis, setIsInfoVis] = useState(false);

                            
    return(
        <div className="card"  style={  isAddVis ? {backgroundImage: `url(${item.img})`, padding: "0"}: isInfoVis ? {backgroundImage: `url(${item.img})`, padding: "0", height: "calc(25em + 4em)"} : {backgroundImage: `url(${item.img})`, } }>
            {isAddVis  ? 
                    <AddProduct  setIsAddVis={setIsAddVis} item={item}/>
                    : isInfoVis 
                    ? <InfoProduct setIsInfoVis={setIsInfoVis} item={item}/>    
                    :<>
                        <h2 style={isAddVis ? {top: "0px"} : {}}>{item.name}</h2>
                    <div className="buttons">
                        <InfoOutlinedIcon className="info-btn" onClick = {() => setIsInfoVis(true)}/>
                        <AddOutlinedIcon className="add-btn" onClick={() => setIsAddVis(true)}/>
                    </div>
                    </>
                    
                    }
        </div>				
    );
}