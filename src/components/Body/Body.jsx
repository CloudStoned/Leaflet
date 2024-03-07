import React from "react";
import './Body.css';
import leaf1 from '../assets/leaf-balayong.jpg';
import leaf2 from '../assets/leaf-bayabas.png';
import leaf3 from '../assets/leaf-betis.jpg';
import leaf4 from '../assets/leaf-dao.jpg';
import leaf5 from '../assets/leaf-dita.jpg';
import leaf6 from '../assets/leaf-guyabano.jpg';
import leaf7 from '../assets/leaf-ilangilang.jpg';
import leaf8 from '../assets/leaf-ipil.jpg';
import leaf9 from '../assets/leaf-kalios.jpg';
import leaf10 from '../assets/leaf-kamagong.jpg';

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

            <div className="leaves-container" style={{ overflowX: 'auto' }}>

                <div className="leaves-title">
                    <h2>Leaves</h2>
                </div>

                <div className="leaf-text">
                    <img src={leaf1} alt="Leaf Image" className="leaf-pic-size" />
                    <div className="leaf-name">
                        <p>Balayong</p>
                    </div>
                </div>

                <div className="leaf-text">
                    <img src={leaf2} alt="Leaf Image" className="leaf-pic-size" />
                    <div className="leaf-name">
                        <p>Bayabas</p>
                    </div>
                </div>

                <div className="leaf-text">
                    <img src={leaf3} alt="Leaf Image" className="leaf-pic-size" />
                    <div className="leaf-name">
                        <p>Betis</p>
                    </div>
                </div>

                <div className="leaf-text">
                    <img src={leaf4} alt="Leaf Image" className="leaf-pic-size" />
                    <div className="leaf-name">
                        <p>Dao</p>
                    </div>
                </div>

                <div className="leaf-text">
                    <img src={leaf5} alt="Leaf Image" className="leaf-pic-size" />
                    <div className="leaf-name">
                        <p>Dita</p>
                    </div>
                </div>

                <div className="leaf-text">
                    <img src={leaf6} alt="Leaf Image" className="leaf-pic-size" />
                    <div className="leaf-name">
                        <p>Guyabano</p>
                    </div>
                </div>

                <div className="leaf-text">
                    <img src={leaf7} alt="Leaf Image" className="leaf-pic-size" />
                    <div className="leaf-name">
                        <p>Ilang-ilang</p>
                    </div>
                </div>

                <div className="leaf-text">
                    <img src={leaf8} alt="Leaf Image" className="leaf-pic-size" />
                    <div className="leaf-name">
                        <p>Ipil</p>
                    </div>
                </div>

                <div className="leaf-text">
                    <img src={leaf9} alt="Leaf Image" className="leaf-pic-size" />
                    <div className="leaf-name">
                        <p>Kalios</p>
                    </div>
                </div>

                <div className="leaf-text">
                    <img src={leaf10} alt="Leaf Image" className="leaf-pic-size" />
                    <div className="leaf-name">
                        <p>Kamagong</p>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default DictionaryBody;
