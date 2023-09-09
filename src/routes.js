import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from './paginas/Inicio' 
import SobreMim from './paginas/SobreMim'
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "paginas/Post";
import NaoEncontrado from "paginas/NaoEncontrado";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<PaginaPadrao></PaginaPadrao>}>
          <Route index path="/" element={ <Inicio></Inicio> }/>
          <Route path="/sobremim" element={<SobreMim></SobreMim> } />
        </Route>
        <Route path="posts/:id" element={<Post></Post>}></Route>
        <Route path="*" element={<NaoEncontrado></NaoEncontrado>}/>
      </Routes>
      <Rodape></Rodape>
    </BrowserRouter>
  );
}

export default AppRoutes;
