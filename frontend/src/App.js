import { Route } from "react-router-dom";

//User Pages
import Register from "./components/Register";
import Terms from "./components/Terms";
import Login from "./components/Login";
import Forget from "./components/Forget";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Insert from "./components/Insert";
import Update from "./components/Update";
import View from "./components/View";
import Donations from "./components/Donations";
import Donationcard from "./components/Donationcard";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
//Agent Pages
import Agentlogin from "./components/Agentlogin";
import Agentprofile from "./components/Agentprofile";
import UpdateAgent from "./components/UpdateAgent"
import AgentNavBar from "./components/AgentNavbar";
import AgentHome from "./components/AgentHome";
//Admin pages
import Adminnav from "./components/Adminnav";
import Adminreq from "./components/Adminreq";
import Adminview from "./components/Adminview";
import Adminusers from "./components/Adminusers";
import Hireagent from "./components/Hireagent";
import Adminagents from "./components/Adminagents";
import CityAgents from "./components/admincitywise";
import Paymentinsert from "./components/Paymentinsert";


function App() {
  return (
    <div>
      {/* User Routes */}
      <Route exact path="/" component={Login} />
      <Route exact path="/forget">
        <Forget />
      </Route>
      <Route exact path="/register" component={Register} />
      <Route exact path="/home">
        <Navbar />
        <Home />
        <Footer />
      </Route>
      <Route exact path="/aboutus">
        <Navbar />
        <About />
        <Footer />
      </Route>
      <Route exact path="/termsandconditions">
        <Terms />
      </Route>
      <Route exact path="/donate">
        <Navbar />
        <Insert />
        <Footer />
      </Route>
      <Route exact path="/update">
        <Navbar />
        <Update />
        <Footer />
      </Route>
      <Route exact path="/view">
        <Navbar />
        <View />
        <Footer />
      </Route>
      <Route exact path="/donations">
        <Navbar />
        <Donations />
        <Footer />
      </Route>
      <Route exact path="/card">
        <Donationcard />
      </Route>
      <Route exact path="/profile">
        <Navbar />
        <Profile />
        <Footer />
      </Route>
      <Route exact path="/Agentlogin">
        <Agentlogin/>
      </Route>
      <Route exact path="/agenthome">
        <AgentNavBar/>
        <AgentHome/>
      </Route>
      <Route exact path="/agentprofile">
        <AgentNavBar/>
        <Agentprofile/>
      </Route>
      <Route exact path="/updateagent" component={UpdateAgent}></Route>
      {/* Admin routes */}
      <Route exact path="/admin">
        <Adminnav />
        <Adminreq />
      </Route>
      
      <Route exact path="/adminview">
        <Adminnav />
        <Adminview />
      </Route>
      <Route exact path="/adminusers">
        <Adminnav />
        <Adminusers />
      </Route>
      <Route exact path="/Hireagent">
        <Adminnav />
        <Hireagent/>
      </Route>
      <Route exact path="/Adminagents">
        <Adminnav />
        <Adminagents/>
      </Route>
      <Route exact path="/admincitywise">
        <Adminnav/>
        <CityAgents/>
      </Route>
      <Route exact path="/payment">
      <Adminnav/>
        <Paymentinsert />
        {/* <Footer /> */}
      </Route>
    </div>
  );
}

export default App;
