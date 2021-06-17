import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import { AppCentral } from '../AppCentral';
import { IconoPagina } from '../complementos/icono/IconoPagina';
import { Logo } from '../complementos/logo/Logo';
import { BarraDeNavegacion } from '../complementos/navegacion/BarraDeNavegacion';
import { Preloader } from '../complementos/pagina.carga/Preloader';
import { LanaTodoFiltro } from '../filtros/lanas/LanaTodoFiltro.js';
import { CisneFiltro } from '../filtros/lanas/CisneFiltro';
import { FaisanFiltro } from '../filtros/lanas/FaisanFiltro';
import { LanabelFiltro } from '../filtros/lanas/LanabelFiltro';
import { ModistaFiltro } from '../filtros/lanas/ModistaFiltro';
import { ReginellaFiltro } from '../filtros/lanas/ReginellaFiltro';
import { RevesderechoFiltro } from '../filtros/lanas/RevesderechoFiltro';
import { UkrilFiltro } from '../filtros/lanas/UkrilFiltro';
import { BufandaFiltro } from '../filtros/tejidos/BufandaFiltro';
import { CalcetinFiltro } from '../filtros/tejidos/CalcetinFiltro';
import { ChalecoFiltro } from '../filtros/tejidos/ChalecoFiltro';
import { CuelloFiltro } from '../filtros/tejidos/CuelloFiltro';
import { GorroFiltro } from '../filtros/tejidos/GorroFiltro';
import { GuanteFiltro } from '../filtros/tejidos/GuanteFiltro';
import { TodoFiltro } from '../filtros/tejidos/TodoFiltro';
import { AccesoriosPagina } from '../paginas/AccesoriosPagina';
import { CrochetsPagina } from '../paginas/CrochetsPagina';
import { HilosPagina } from '../paginas/HilosPagina';
import { LanasPagina } from '../paginas/LanasPagina';
import { PalillosPagina } from '../paginas/PalillosPagina';
import { TejidosPagina } from '../paginas/TejidosPagina';
import { VariosPagina } from '../paginas/VariosPagina';
import { HCisneFiltro } from '../filtros/hilos/HCisneFiltro';
import { HiloTodoFiltro } from '../filtros/hilos/HiloTodoFiltro';
import { HFaisanFiltro } from '../filtros/hilos/HFaisanFiltro';
import { HLanabelFiltro } from '../filtros/hilos/HLanabelFiltro';
import { HModistaFiltro } from '../filtros/hilos/HModistaFiltro';
import { HReginellaFiltro } from '../filtros/hilos/HReginellaFiltro';
import { HRevesderechoFiltro } from '../filtros/hilos/HRevesderechoFiltro';
import { HUkrilFiltro } from '../filtros/hilos/HUkrilFiltro';
import { AeroFiltro } from '../filtros/palillos/AeroFiltro';
import { PonyFiltro } from '../filtros/palillos/PonyFiltro';
import { KnittingNeedlesFiltro } from '../filtros/palillos/KnittingNeedlesFiltro';
import { PModistaFiltro } from '../filtros/palillos/PModistaFiltro';
import { PRevesderechoFiltro } from '../filtros/palillos/PRevesderechoFiltro';
import { PReginellaFiltro } from '../filtros/palillos/PReginellaFiltro';
import { PalilloTodoFiltro } from '../filtros/palillos/PalilloTodoFiltro';
import { CAeroFiltro } from '../filtros/crochet/CAeroFiltro';
import { CPonyFiltro } from '../filtros/crochet/CPonyFiltro';
import { CKnittingNeedlesFiltro } from '../filtros/crochet/CKnittingNeedlesFiltro';
import { CModistaFiltro } from '../filtros/crochet/CModistaFiltro';
import { CRevesderechoFiltro } from '../filtros/crochet/CRevesderechoFiltro';
import { CReginellaFiltro } from '../filtros/crochet/CReginellaFiltro';
import { CrochetTodoFiltro } from '../filtros/crochet/CrochetTodoFiltro';
import { AccesorioTodoFiltro } from '../filtros/accesorios/AccesorioTodoFiltro';
import { HuinchaFiltro } from '../filtros/accesorios/HuinchaFiltro';
import { AgujaCocerFiltro } from '../filtros/accesorios/AgujaCocerFiltro';
import { AgujaLanaFiltro } from '../filtros/accesorios/AgujaLanaFiltro';
import { TijeraFiltro } from '../filtros/accesorios/TijeraFiltro';
import { BotonesFiltro } from '../filtros/accesorios/BotonesFiltro';
import { MarcadorPuntoFiltro } from '../filtros/accesorios/MarcadorPuntoFiltro';
import { MarcadorVueltaFiltro } from '../filtros/accesorios/MarcadorVueltaFiltro';
import { AlfilerFiltro } from '../filtros/accesorios/AlfilerFiltro';
import { AlfilerGanchoFiltro } from '../filtros/accesorios/AlfilerGanchoFiltro';
import { TelarBastidorFiltro } from '../filtros/accesorios/TelarBastidorFiltro';
import { ElasticoFiltro } from '../filtros/accesorios/ElasticoFiltro';
import { VariosTodoFiltro } from '../filtros/varios/VariosTodoFiltro';
import { NuevoFiltro } from '../filtros/varios/NuevoFiltro';
import { UsadoFiltro } from '../filtros/varios/UsadoFiltro';
import { NuevaBarra } from '../complementos/navegacion/NuevaBarra';

export const AppRouter = () => {

  return (
    <Router>

      <Preloader />,
      <BarraDeNavegacion />,
      <Logo />,
      <NuevaBarra />

      <div className="listado">
      <nav>
          <ul>
          <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/tejidos">Tejidos</Link>
            </li>
            <li>
              <Link to="/lanas">Lanas</Link>
            </li>
            <li>
              <Link to="/hilos">Hilos</Link>
            </li>
            <li>
              <Link to="/palillos">Palillos</Link>
            </li>
            <li>
              <Link to="/crochet">Crochet</Link>
            </li>
            <li>
              <Link to="/accesorios">Accesorios de tejidos</Link>
            </li>
            <li>
              <Link to="/varios">Varios</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>

            <Route  path="/tejidos" component = { TejidosRouter } />
            <Route  path="/lanas" component = { LanasRouter } />
            <Route  path="/hilos" component = { HilosRouter } />
            <Route  path="/palillos" component = { PalillosRouter } />
            <Route  path="/crochet" component = { CrochetRouter } />
            <Route  path="/accesorios" component = { AccesoriosRouter } />
            <Route  path="/varios" component = { VariosRouter } />
            <Route  path="/" component = { AppCentral } />

        </Switch>
      </div>
    </Router>
  );

  function TejidosRouter() {

    return (
      <div>
  
          <IconoPagina />
          <TejidosPagina />
  
          <ul>
            <li>
                <Link exact to="/tejidos" className="activo">Todos</Link>
              </li>
              <li>
                <Link to="/tejidos/chalecos">Chalecos</Link>
              </li>
              <li>
                <Link to="/tejidos/gorros">Gorros</Link>
              </li>
              <li>
                <Link to="/tejidos/cuellos">Cuellos</Link>
              </li>
              <li>
                <Link to="/tejidos/bufandas">Bufandas</Link>
              </li>
              <li>
                <Link to="/tejidos/guantes">Guantes</Link>
              </li>
              <li>
                <Link to="/tejidos/calcetines">Calcetines</Link>
              </li>
          </ul>
  
          <Switch>
  
              <Route path="/tejidos/chalecos" component = { ChalecoFiltro } />
              <Route path="/tejidos/gorros" component = { GorroFiltro } />
              <Route path="/tejidos/cuellos" component = { CuelloFiltro } />
              <Route path="/tejidos/bufandas" component = { BufandaFiltro } />
              <Route path="/tejidos/guantes" component = { GuanteFiltro } />
              <Route path="/tejidos/calcetines" component = { CalcetinFiltro } />
              <Route path="/tejidos" component = { TodoFiltro } />
  
          </Switch>
  
      </div>
    );
  };

  function LanasRouter() {

    return (
      <div>

          <LanasPagina />

          <ul>
            <li>
                <Link exact to="/lanas" className="activo">Todos</Link>
              </li>
              <li>
                <Link  to="/lanas/cisne">Cisne</Link>
              </li>
              <li>
                <Link to="/lanas/ukril">Ukryl</Link>
              </li>
              <li>
                <Link to="/lanas/reginella">Reginella</Link>
              </li>
              <li>
                <Link to="/lanas/revesderecho">Revesderecho</Link>
              </li>
              <li>
                <Link  to="/lanas/faisan">Faisan</Link>
              </li>
              <li>
                <Link to="/lanas/lanabel">Lanabel</Link>
              </li>
              <li>
                <Link to="/lanas/modista">Modista</Link>
              </li>
          </ul>

          <Switch>
  
              <Route path="/lanas/cisne" component = { CisneFiltro } />
              <Route path="/lanas/faisan" component = { FaisanFiltro } />
              <Route path="/lanas/lanabel" component = { LanabelFiltro } />
              <Route path="/lanas/modista" component = { ModistaFiltro } />
              <Route path="/lanas/reginella" component = { ReginellaFiltro } />
              <Route path="/lanas/revesderecho" component = { RevesderechoFiltro } />
              <Route path="/lanas/ukril" component = { UkrilFiltro } />
              <Route path="/lanas" component = { LanaTodoFiltro } />
  
          </Switch>

      </div>
    );
  };

  function HilosRouter() {

    return (
      <div>

          <HilosPagina />

          <ul>
            <li>
              <Link exact to="/hilos" className="activo">Todos</Link>
            </li>
            <li>
              <Link  to="/hilos/cisne">Cisne</Link>
            </li>
            <li>
              <Link to="/hilos/ukril">Ukryl</Link>
            </li>
            <li>
              <Link to="/hilos/reginella">Reginella</Link>
            </li>
            <li>
            <Link to="/hilos/revesderecho">Revesderecho</Link>
            </li>
            <li>
              <Link  to="/hilos/faisan">Faisan</Link>
            </li>
            <li>
              <Link to="/hilos/lanabel">Lanabel</Link>
            </li>
            <li>
              <Link to="/hilos/modista">Modista</Link>
            </li>
          </ul>

          <Switch>

            <Route path="/hilos/cisne" component = { HCisneFiltro } />
            <Route path="/hilos/faisan" component = { HFaisanFiltro } />
            <Route path="/hilos/lanabel" component = { HLanabelFiltro } />
            <Route path="/hilos/modista" component = { HModistaFiltro } />
            <Route path="/hilos/reginella" component = { HReginellaFiltro } />
            <Route path="/hilos/revesderecho" component = { HRevesderechoFiltro } />
            <Route path="/hilos/ukril" component = { HUkrilFiltro } />
            <Route path="/hilos" component = { HiloTodoFiltro } />

          </Switch>       

      </div>
    );
  };

    function PalillosRouter() {

      return (
        <div>
    
          <PalillosPagina />
  
          <ul>
            <li>
                <Link exact to="/palillos" className="activo">Todos</Link>
              </li>
              <li>
                <Link to="/palillos/aero">Aero</Link>
              </li>
              <li>
                <Link to="/palillos/pony">Pony</Link>
              </li>
              <li>
                <Link to="/palillos/knitting_needles">Knitting Needles</Link>
              </li>
              <li>
                <Link to="/palillos/modista">Modista</Link>
              </li>
              <li>
                <Link to="/palillos/revesderecho">Revesderecho</Link>
              </li>
              <li>
                <Link to="/palillos/reginella">Reginella</Link>
              </li>
          </ul>
  
          <Switch>
  
              <Route path="/palillos/aero" component = { AeroFiltro } />
              <Route path="/palillos/pony" component = { PonyFiltro } />
              <Route path="/palillos/knitting_needles" component = { KnittingNeedlesFiltro } />
              <Route path="/palillos/modista" component = { PModistaFiltro } />
              <Route path="/palillos/revesderecho" component = { PRevesderechoFiltro } />
              <Route path="/palillos/reginella" component = { PReginellaFiltro } />
              <Route path="/palillos" component = { PalilloTodoFiltro } />
  
          </Switch>
  
        </div>
      );
    };

    function CrochetRouter() {

      return (
        <div>
    
          <CrochetsPagina />
  
          <ul>
            <li>
                <Link exact to="/crochet" className="activo">Todos</Link>
              </li>
              <li>
                <Link to="/crochet/aero">Aero</Link>
              </li>
              <li>
                <Link to="/crochet/pony">Pony</Link>
              </li>
              <li>
                <Link to="/crochet/knitting_needles">Knitting Needles</Link>
              </li>
              <li>
                <Link to="/crochet/modista">Modista</Link>
              </li>
              <li>
                <Link to="/crochet/revesderecho">Revesderecho</Link>
              </li>
              <li>
                <Link to="/crochet/reginella">Reginella</Link>
              </li>
          </ul>
  
          <Switch>
  
              <Route path="/crochet/aero" component = { CAeroFiltro } />
              <Route path="/crochet/pony" component = { CPonyFiltro } />
              <Route path="/crochet/knitting_needles" component = { CKnittingNeedlesFiltro } />
              <Route path="/crochet/modista" component = { CModistaFiltro } />
              <Route path="/crochet/revesderecho" component = { CRevesderechoFiltro } />
              <Route path="/crochet/reginella" component = { CReginellaFiltro } />
              <Route path="/crochet" component = { CrochetTodoFiltro } />
  
          </Switch>
  
        </div>

      );
    };

function AccesoriosRouter() {

  return (
    <div>

      <AccesoriosPagina />

      <ul>
        <li>
            <Link exact to="/accesorios" className="activo">Todos</Link>
          </li>
          <li>
            <Link to="/accesorios/huincha-medir">Huinchas/medir</Link>
          </li>
          <li>
            <Link to="/accesorios/aguja-coser">Aguja/coser</Link>
          </li>
          <li>
            <Link to="/accesorios/aguja-lana">Aguja/lana</Link>
          </li>
          <li>
            <Link to="/accesorios/tijeras">Tijeras</Link>
          </li>
          <li>
            <Link to="/accesorios/botones">Botones</Link>
          </li>
          <li>
            <Link to="/accesorios/marcador-punto">Marcadores/puntos</Link>
          </li>
          <li>
            <Link to="/accesorios/marcador-vuelta">Marcadores/vueltas</Link>
          </li>
          <li>
            <Link to="/accesorios/alfileres">Alfileres</Link>
          </li>
          <li>
            <Link to="/accesorios/alfiler-gancho">Alfileres/gancho</Link>
          </li>
          <li>
            <Link to="/accesorios/telares-bastidores">Telares/Bastidores</Link>
          </li>
          <li>
            <Link to="/accesorios/elasticos">Elasticos</Link>
          </li>
      </ul>

      <Switch>

          <Route path="/accesorios/huincha-medir" component = { HuinchaFiltro } />
          <Route path="/accesorios/aguja-coser" component = { AgujaCocerFiltro } />
          <Route path="/accesorios/aguja-lana" component = { AgujaLanaFiltro } />
          <Route path="/accesorios/tijeras" component = { TijeraFiltro } />
          <Route path="/accesorios/botones" component = { BotonesFiltro} />
          <Route path="/accesorios/marcador-punto" component = { MarcadorPuntoFiltro } />
          <Route path="/accesorios/marcador-vuelta" component = { MarcadorVueltaFiltro } />
          <Route path="/accesorios/alfileres" component = { AlfilerFiltro } />
          <Route path="/accesorios/alfiler-gancho" component = { AlfilerGanchoFiltro } />
          <Route path="/accesorios/telares-bastidores" component = { TelarBastidorFiltro } />
          <Route path="/accesorios/elasticos" component = { ElasticoFiltro } />
          <Route path="/accesorios" component = { AccesorioTodoFiltro } />

      </Switch>

    </div>
      );
    };

  function VariosRouter() {

    return (
      <div>

          <VariosPagina />
  
          <ul>
            <li>
                <Link exact to="/varios" className="activo">Todos</Link>
              </li>
              <li>
                <Link to="/varios/nuevo">Nuevo</Link>
              </li>
              <li>
                <Link to="/varios/usado">Usado</Link>
              </li>
          </ul>
  
          <Switch>
  
              <Route path="/varios/nuevo" component = { NuevoFiltro } />
              <Route path="/varios/usado" component = { UsadoFiltro } />
              <Route path="/varios" component = { VariosTodoFiltro } />
  
          </Switch>

      </div>
    );
  };
};

