import React from 'react';
import Test from './content/test/Test'
import './App.css';
import {
    Route,
    Routes,
} from "react-router-dom"
import MainPage from "./content/main_page/Main_page";
import Catalog from "./content/catalog/Catalog";
import Reviews from "./content/reviews/Reviews";
import Contacts from "./content/contacts/Contacts";

function App() {
    return (
            <div className="App">
                <Routes >
                    <Route path='/' element={<MainPage/>}></Route>
                    <Route path='/catalog' element={<Catalog/>}></Route>
                    <Route path='/contacts' element={<Contacts/>}></Route>
                    <Route path='/reviews' element={<Reviews/>}></Route>
                    <Route path='/test/*' element={<Test/>}></Route>
                </Routes>
            </div>
    );
}

export default App;
