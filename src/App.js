import Document_Section from "./components/Document_Section/Document_Section";
import Query_Section from "./components/Query_Section/Query_Section";
import SideNavBar from "./components/SideNavBar/SideNavBar";


function App() {
  return (
  <>
 

  <div className="row m-0"> 

    <div className="col-2 p-0" style={{width: '282px'}}>   <SideNavBar /></div> 
    <div className="col-7  p-0 m-0">   <Document_Section /></div> 
      <div className="col-3 p-0 m-2" style={{min_width: '358px'}}>  <Query_Section /></div> 
</div>
  </>
  );
}

export default App;
