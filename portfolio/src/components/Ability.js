
import React from "react";
import "../css/Ability.css";
import defaultExport from "../data/Ability";

function Ability() {

    return (
        <div className="container">
            <h2 className="ability_header">Ability</h2>
            <div className="ability_container">
                <div className="ability_title">Development</div>
                {<>
                    {
                        defaultExport.Development_ability.map((skill, idx) => (
                            <div key={idx} id="Development_ability" className="ability">
                                <img src={ require("../images/"+skill.img) } alt="icon"/>
                                <h3>{skill.skill}</h3>
                            </div>
                        ))
                    }
                </>
                }
                <div id="Framework_title"  className="ability_title">Framework</div>
                {<>
                    {
                        defaultExport.Framework_ability.map((skill, idx) => (
                            <div key={idx} id="Framework_ability" className="ability">
                                <img src={ require("../images/"+skill.img) } alt="icon"/>
                                <h3>{skill.skill}</h3>
                            </div>
                        ))
                    }
                </>
                }
                <div id="System_title" className="ability_title">System</div>
                {<>
                    {
                        defaultExport.System_ability.map((skill, idx) => (
                            <div key={idx} id="System_ability" className="ability">
                                <img src={ require("../images/"+skill.img) } alt="icon"/>
                                <h3>{skill.skill}</h3>
                            </div>
                        ))
                    }
                </>
                }
            </div>
        </div>
    )
}


export default Ability;
