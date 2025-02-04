import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import Home from './pages/Home';
import Login from './pages/Login';
import Overview from './pages/Overview';
import Policy from './pages/Policy';
import { Provider } from 'react-redux';
import { persistor, store } from './store/store';
import Lessons from './pages/Lessons';
import { PersistGate } from 'redux-persist/integration/react';
import LectureContent from './pages/LectureContent';
import ReactPixel from 'react-facebook-pixel';

ReactPixel.init('1176265247422612', undefined, { debug: true, autoConfig: false });
ReactPixel.pageView();
ReactPixel.fbq('track', 'PageView');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter >
          <Routes>
            <Route index element={<Home />} />
            <Route path="Login" element={<Login />} />
            <Route path="Policy" element={<Policy />} />
            <Route path="Lectures" element={<Overview />} />
            <Route path="Lessons" element={<Lessons />} />
            <Route path=":lessonId" element={<LectureContent />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode >,
)