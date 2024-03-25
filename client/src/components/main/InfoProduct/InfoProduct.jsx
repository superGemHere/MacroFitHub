import "./infoProduct.scss";

// import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';

export default function infoProduct ({
    item,
    setIsInfoVis
}){


    

                            
    return(
        // <div className='blur'>
            
            <div className="info-product">

                <h2>{item.name}</h2>
                <p className="bold">Nutrition per 100g</p>
                <p className="bold">Proteins: <span>{item.protein}g</span></p>
                <p className="bold">Carbs: <span>{item.carbohydrates}g</span></p>
                <p className="bold">Fats: <span>{item.fat}g</span></p>
                <p className="bold">Calories: <span>{item.calories}kCal</span></p>
               <DisabledByDefaultRoundedIcon onClick={() => setIsInfoVis(false) } className="info-close"/> 
            </div>

        // </div>
    );
}