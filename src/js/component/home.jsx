import React, { useState, useEffect } from 'react';
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	const [ color, setColor ] = useState("red");
	return (
		<div className="container d-flex justify-content-center">
		<div className="trafficlight">
		<div className="protector"></div>
		<div className="protector"></div>
		<div className="protector"></div>
		<div className={`red ${ color=="red"?"glow":"opacity" }`} onClick={()=>setColor("red")}></div>
		<div className={`yellow ${ color=="yellow"?"glow":"opacity" }`} onClick={()=>setColor("yellow")}></div>
		<div className={`green ${ color=="green"?"glow":"opacity" }`} onClick={()=>setColor("green")}></div>
	    </div>
		</div>
	);
};

export default Home;
