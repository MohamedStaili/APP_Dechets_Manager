import { BrowserRouter as Router , Routes ,Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home";
import Login from "./pages/Login"
import About from "./pages/About"
import GestionDeshets from "./pages/GestionDeshets"
import GestionPoints from "./pages/GestionPoints"
import GestionPubelle from "./pages/GestionPubelle"
import GestionUsers from "./pages/GestionUsers"
import HistoriqueCollecte from "./pages/HistoriqueCollecte"
import Localisation from "./pages/Localisation"
import Parametres from "./pages/Parametres";
import Report from "./pages/Report";
import SupportFaq from "./pages/SupportFaq";
import FluxUsers from "./pages/FluxUsers"
import NotFound from "./pages/NotFound"
import DashboardLayout from "./components/DashboardLayout";
import AuthState from "./contexteAPI/AuthContext/ContexteState";
import PrivateRouter from "./PrivateRouter";
function App() {


  return (
    
    <Router>
    <AuthState>
   
    

      <Routes>
        {/*Public pages*/}
    
      
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/about" element={<About/>}/>
      

      {/* Private pages*/}
        <Route path="/dashboard" element={
          <PrivateRouter>
            <DashboardLayout/>
          </PrivateRouter>
        }>
          <Route index element={<Dashboard/>}/>
          <Route path="gestiondeshets" element={<GestionDeshets/>}/>
          <Route path="gestionpoints" element={<GestionPoints/>}/>
          <Route path="gestionpubelle" element={<GestionPubelle/>}/>
          <Route path="gestionusers" element={<GestionUsers/>}/>
          <Route path="historique" element={<HistoriqueCollecte/>}/>
          <Route path="localisation" element={<Localisation/>}/>
          <Route path="parametres" element={<Parametres/>}/>
          <Route path="report" element={<Report/>}/>
          <Route path="support" element={<SupportFaq/>}/>
          <Route path="fluxusers" element={<FluxUsers/>}/>
        </Route>

        {/*Not Found pages */}

      
        <Route path="*" element={<NotFound/>}/>

      </Routes>

      
      
    

    </AuthState>
    </Router>
    
  )
}
export default App