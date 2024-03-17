import "./catalog.scss";

import Card from "../Card/Card";

export default  function Catalog() {
    
    const data = [
        {
            id: '1',
            name: 'Beef Steak',
            img: "https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            
        },
        {
            id: '2',
            name: 'Oathmeal',
            img: "https://images.pexels.com/photos/4725726/pexels-photo-4725726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        },
        {
            id: '3',
            name: 'Boiled Eggs',
            img: "https://images.pexels.com/photos/806457/pexels-photo-806457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        },
        {
            id: '4',
            name: 'Chicken Breast Grill',
            img: "https://images.pexels.com/photos/262945/pexels-photo-262945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        }
    ]
    
    return (
        <div className="catalog">
            <div className="container">
                {data.map(item => (<Card item={item} key={item.id}/>))}
            </div>
        </div>
    )

}