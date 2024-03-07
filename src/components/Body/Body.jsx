import React from "react";
import './Body.css';
import leaf1 from '../assets/leaf-balayong.jpg';
import leaf2 from '../assets/leaf-bayabas.png';

export function DictionaryBody() {
    return (
        <div className="wrapper">
            <div className="title">
                <h1> DICTIONARY</h1>
            </div>

            <div className="containers">

                <div className="leaflet-title">
                    <h2>Leaflet</h2>
                </div>

                <div className="paragraphs">
                    <div className="paragraph-1">
                        <p>1. a printed sheet of paper,
                            sometimes folded, containing <strong><span style={{ color: "green" }}>information</span></strong> or
                            <br></br>advertising and usually distributed free</p>
                    </div>

                    <div className="paragraph-2">
                        <p>
                            2. Each of the leaflike structures that together make up a compound leaf.
                        </p>
                    </div>
                </div>
            </div>

            <div className="containers">
                <div className="serenity-title">
                    <h2>Serenetiy Garden</h2>
                </div>

                <div className="paragraphs">
                    <p>Found just behind the College Promenade and Mater et Magistra's blessed gaze, the zen-inspired Serenity Garden which can be visited by students
                    and staffs alike to encourage contemplation and reflection to those experience its peacefulness. Integrating FAITH Colleges' belief that students learn in three ways, that of which: through classroom lessons; through integration of values in
                    various subjects; and most importantly, through the environment. The Serenity Garden exudes a strong sense of order, suggesting that everything has a natural order and a natural rule.
                    </p>

                </div>
            </div>

            <div className="leaves-container">
                <div className="leaf-text">
                    <img src={leaf1} alt="Leaf Image" className="leaf-pic-size" />
                    <div className="leaf-name">
                        <p>Dita</p>
                    </div>
                </div>

                <div className="leaf-text">
                    <img src={leaf2} alt="Leaf Image" className="leaf-pic-size" />
                    <div className="leaf-name">
                        <p>Guyabano</p>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default DictionaryBody;
