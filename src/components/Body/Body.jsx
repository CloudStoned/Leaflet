import React from "react";
import './Body.css';

export function DictionaryBody() {
    return (
        <div className="wrapper">
            <div className="title">
                <h1> DICTIONARY</h1>
            </div>

            <div className="container-1">

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
        </div>
    );
}

export default DictionaryBody;
