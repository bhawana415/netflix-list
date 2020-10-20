import React from 'react';

import './index.css';
import Sdata from "./Sdata";

import Card from "./Cards";

const App=()=>(
  <>
  <h1 className="heading_style">List of top 5 Netflix Series in 2020</h1>
  {Sdata.map((val,index)=>{
    return(
      <Card 
      key={val.id}
      imgsrc={val.imgscr}
      title={val.title}
      sname={val.sname}
      link={val.links}
      />
    );
  })
}

</>

  
);
export default App;

