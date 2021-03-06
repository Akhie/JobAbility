import React from 'react';
import Top from "./Components/top";
import Mid from "./Components/mid";
import Features from "./Components/features";
import Tieups from "./Components/tieups"
function App(){
    return <div>
    <div class="div1 container-fluid">
     
      <Top />
      </div>
      <br /><br /><br />
      <div style={{width:"80%", margin:"auto"}}> <Mid />
      <br /><br /><br />
      <Features />
      <br /><br /><br />
      <Tieups />
      </div> 
    </div>
    
}
export default App;