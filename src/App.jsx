import { useState } from "react";
import publicRoute from "./router/routes/publicRoutes";
import Router from "./router/Router";
function App() {
 const [allRoutes,setAllRoutes]=useState([...publicRoute]);
 console.log(allRoutes)
 return <Router allRoutes={allRoutes}/>
}

export default App;
