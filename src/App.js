import React from 'react';
import s from './App.module.css';
import Main from './main/Main.jsx';
import Help from './help/Help.jsx';
import Left from './main/left/Left';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
   return (
      <BrowserRouter>
         <div className={s.main_block}>
            <div className={s.centre}>
               <Left />
               <Routes>
                  <Route path="/main" element={<Main />} />
                  <Route path="/help" element={<Help />} />
               </Routes>
            </div>
         </div>
      </BrowserRouter>
   );
}

export default App;
