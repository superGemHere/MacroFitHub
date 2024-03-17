import "./addProduct.scss";

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';

export default function AddProduct ({
    item,
    setIsVis
}){


    const positiveInt = (e) => { 
        e.target.value = e.target.value < 0 ? 0 : e.target.value;
    }

                            
    return(
        // <div className='blur'>
            
            <div className="add-product">

                {/* <h2>Name</h2> */}
                <form action="#" onSubmit={()=>alert("Item added!")}>
                    <label htmlFor="quantity">Quantity</label>
                    <div className="inline">
                        <input type="number" id="quantity" name="quantity" placeholder="100g" onChange={e =>  positiveInt(e)}/>
                        <input type="submit" value="Add" />
                    </div>
                </form>
               <DisabledByDefaultRoundedIcon onClick={() => setIsVis(false)} className="add-close"/> 
            </div>

        // </div>
    );
}