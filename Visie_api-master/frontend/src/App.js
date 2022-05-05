import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' 
import Master from "./Master";
import Ajustes from "./Ajustes";
import Cadastro from "./Cadastro";
import Chat from "./Chat";
import Contrato from "./Contrato";
import Login from "./Login";
import Pagamentos from "./Pagamentos";
import Perfil from "./Perfil";


function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Main_tela/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/cadastro" element={<Cadastro/>}/>
          <Route exact path="/master" element={<Master/>}/>
          <Route exact path="/ajustes" element={<Ajustes/>}/>
          <Route exact path="/perfil" element={<Perfil/>}/>
          <Route exact path="/pagamentos" element={<Pagamentos/>}/>
          <Route exact path="/contrato" element={<Contrato/>}/>
          <Route exact path="/chat" element={<Chat/>}/>
        </Routes>
    </Router>
  );
}

export default App;
