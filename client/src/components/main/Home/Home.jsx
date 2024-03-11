import "./home.scss"

export default function Home(){

    return(
        <div className="home">
            <div className="col-1">

                <h1>Welcome to MacroFitHub</h1>
                <p>This is a place where you can calculate your macronutrient intake so you can know if you are above or under the need.</p>

            </div>

            <div className="col-2">
                <div className="left">
                    <div className="macro-info">
                        <article>
                            <h2>What are the macronutrients?</h2>
                            <p>Macronutrients are the nutrients we need in larger quantities that provide us with energy: in other words, fat, protein and carbohydrate. Micronutrients are mostly vitamins and minerals, and are equally important but consumed in very small amounts.</p>
                        </article>
                    </div>
                </div>
        
                <div className="right">
                    <div className="macro-need">
                        <article>
                        <h2>Why you need them and how to track?</h2>
                        <p>They are essential nutrients the body needs in large quantities to remain healthy. Macronutrients provide the body with energy, help prevent disease, and allow the body to function correctly. Macronutrients are available in many food sources, but it can be difficult to determine the right amount to consume.</p>
                        </article>
                    </div>
                </div>
            </div>
        </div>

    );
}