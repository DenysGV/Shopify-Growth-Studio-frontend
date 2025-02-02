import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import Home from './pages/Home';
import Login from './pages/Login';
import Overview from './pages/Overview';
import Garantee from './pages/Garantee';
import Policy from './pages/Policy';
import { Provider } from 'react-redux';
import { persistor, store } from './store/store';
import Lessons from './pages/Lessons';
import { PersistGate } from 'redux-persist/integration/react';
import LectureContent from './pages/LectureContent';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter >
          <Routes>
            <Route index element={<Home />} />
            <Route path="Login" element={<Login />} />
            <Route path="Policy" element={<Policy />} />
            <Route path="Garantee" element={<Garantee />} />
            <Route path="Lectures" element={<Overview />} />
            <Route path="Lectures/Lessons" element={<Lessons />} />
            <Route path="Lectures/Lessons/:lessonId" element={<LectureContent />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode >,
)
