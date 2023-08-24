import React, {Suspense, useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import './styles/index.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {Container} from "shared/ui/Container/Container";
import {AboutPage} from "pages/ContactPage";
import {MainPage} from "pages/MainPage";
import {UserPage} from "pages/UserPage";
import {Header} from 'widgets/Header'
import {Modal} from "widgets/Modal";

const App = () => {
    const [active, setActiveModal] = useState(false)

    return (
        <Container>
            <div className={classNames('app', {}, [])}>
                <Header setActiveModal={setActiveModal}/>

                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path={'/contacts'} element={<AboutPage/>}/>
                        <Route path={'/userPage'} element={<UserPage/>}/>
                        <Route path={'/'} element={<MainPage setActiveModal={setActiveModal}/>}/>
                    </Routes>
                </Suspense>
                <Modal active={active} setActiveModal={setActiveModal}/>
            </div>
        </Container>
    );
};

export default App;
