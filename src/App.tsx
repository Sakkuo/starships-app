import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import StarshipContent from "./components/StarshipContent/StarshipContent";
import StarshipsContainer from "./components/StarshipsPage/StarshipsContainer/StarshipsContainer";
import Layout from "./UI/Layout/Layout";


const App = () => {
    const routes = (
        <Routes>
            <Route path="/starships" element={<StarshipsContainer />}/>
            <Route path={"/starships/:id"} element={<StarshipContent />} />
            <Route path="/" element={<MainPage />}/>
        </Routes>
    );

    return (
        <BrowserRouter>
            <div className="App">
              <Layout routes={routes}/>
            </div>
        </BrowserRouter>
    );
};

export default App;
