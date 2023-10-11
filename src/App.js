import React from 'react';
import s from './App.module.css';
import Main from './main/Main.jsx';
import Help from './help/Help.jsx';
import Left from './main/left/Left';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App(props) {
   let MainComponent = () => <Main/>
   let HelpComponent = () => <Help dialogs={props.dialogs} messages={props.messages}/>

   return (
      <BrowserRouter>
         <div className={s.main_block}>
            <div className={s.centre}>
               <Left />
               <Routes>
                  <Route path="/main" Component = {MainComponent} />
                  <Route path="/help" Component = {HelpComponent} />
               </Routes>
            </div>
         </div>
      </BrowserRouter>
   );
}

export default App;
