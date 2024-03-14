import { useState, useRef } from "react";
import "./home.scss";

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

export default function Home(){

    const macroInfoRef = useRef(null);
    const welcomeRef = useRef(null);

    const [isVis, setIsVis] = useState(false);

    const scrollToInfo = () => {
            macroInfoRef.current?.scrollIntoView({
                behavior: 'smooth'
            })
    }
    const scrollToTop = () => {

            welcomeRef.current?.scrollIntoView({
                behavior: 'smooth'
            })

    }

    const makeNotVis = () =>  {
        setIsVis(false)
    }

    return(
        <div className="home" ref={welcomeRef}>
            <div className="col-1"  style={isVis ? {marginTop: "20vh"} : {marginTop: "0vh"}}>

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

                <button  className="read-btn" onClick={async () => {
                await setIsVis(true);
                scrollToInfo()
                }}>Read About</button>
                </div>

            </div>
            {isVis && <div ref={macroInfoRef} className="col-3" id="macros-about">
                
                <article>
                    <section className="macro-infoAll">
                        <h2>Macronutrients</h2>
                        <p>Basically macronutrients are <i>carbohydrates</i>, <i>fat</i> and <i>protein</i> are called <i>macronutrients</i>. They are the nutrients you use in the largest amounts.</p>
                        <p>Macronutrients are the nutritive components of food that the body needs for energy and to maintain the body’s structure and systems</p>
                    </section>
                    <section className="carb-info">
                        <h2>Carbohydrates</h2>
                        <p>Carbohydrates – or carbs – are the body’s primary fuel. They provide energy for your muscles and the central nervous system during movement and exercise.Wohlford says 45-65% of calories per day should come from carbohydrates. The amount depends on an individual’s health goals and medical conditions.</p>
                    </section>
                    <section className="protein-info">
                        <h2>Protein</h2>
                        <p>Protein is essential to many processes in the body. It provides structure to the tissue. That includes cell membranes, organs, muscle, hair, skin, nails, bones, tendons, ligaments and blood plasma.</p>
                        <p>Proteins are involved in metabolic, hormonal and enzyme systems and help maintain acid-base balance in our bodies.</p>
                        <p>The Recommended Dietary Allowance is 0.8 grams of protein per kilogram of body weight per day. For a person who weighs 150 pounds, that adds up to around 54 grams of protein per day.</p>
                    </section>
                    <section className="fat-info">
                        <h2>Fat</h2>
                        <p>Fat is vital for the body as an energy reserve, for insulation and protection of your organs, and for absorption and transport of fat-soluble vitamins.</p>
                        <p>About 20-35% of your total daily calories should come from fat, with less than 10% of total daily calories from saturated fat.</p>
                    </section>
                </article>
                <a href="#welcome" className="closeBtn" onClick= {async() =>{
                    setTimeout( () => makeNotVis(), 550)
                    scrollToTop()

                }}>Close Article</a>
            </div>}
            
        </div>


    );
}