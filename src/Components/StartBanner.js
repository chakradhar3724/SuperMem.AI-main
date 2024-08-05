import React from "react";

export const StartBanner = () =>
    <div id="home">
        <div className="container fullheight home">
            <div className="row">
                <div className="col-md-6 col-md-offset-3 col-xs-12">
                    <h1 className="color-primary"><b>SuperMem AI</b></h1>
                    <p className="color-dark fontsize-md">
                        <span className="color-dark fontsize-md"><i><b>Learning Made Seamlessly Smart</b></i></span> <br/>
What if you focussed 100% and made yourself the better you? Helle then, I'm SuperMem.AI to enhance your learning experience                    </p>
                    <div style={{"display": "inline-table"}}>
                         <a href="#getstarted" className="button button-v2">Get Started</a>
                    </div>
                </div>
            </div>
        </div>
    </div>;