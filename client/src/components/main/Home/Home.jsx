import "./home.scss"

export default function Home(){

    return(
        <div className="home">
            <div className="col-1">

                <h1>Welcome to FitHub</h1>
                <p>This is the place where you can calculate your macronutrient need and intake so you can know if you are above or under the need.</p>

            </div>

            <div className="col-2">
                <div className="row">
                    
                    <div className="left">
                        <div className="macro-info">
                            <article>
                                <h2>What are the macronutrients?</h2>
                            </article>
                        </div>
                    </div>
            
                    <div className="right">
                        <div className="macro-need">
                            <article>
                            <h2>Why you need them and how to track?</h2>
                            </article>
                        </div>
                    </div>

                </div>
                <div className="read-more">

                <h2 className="read-btn">Read About</h2>
                </div>

            </div>
        </div>

    );
}