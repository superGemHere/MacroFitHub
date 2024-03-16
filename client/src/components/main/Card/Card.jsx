import "./card.scss"

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function Card ({
    item,
}){
                            
    return(
        <div className="card"  style={{backgroundImage: `url(${item.img})`}}>
            <h2>{item.name}</h2>
            <div className="buttons">
                <InfoOutlinedIcon className="info-btn"/>
                <AddOutlinedIcon className="add-btn"/>
            </div>
        </div>				
    );
}