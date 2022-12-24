// import logo from './logo.svg';
import logo from './gemach.png'
import Products from './components/Products'
import Secondstest from './components/Secondstest'
import Test from './components/Test'
// import './App.css';
import MainPageComp from './components/MainPageComp';
import SecondPage from './components/SecondPage';
import TestAnimation from './components/TestAnimation'
import Testupload from './components/Testupload'
// import scrips from './script'
import {  Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      
      <Products></Products>
     
      <Test></Test>
      <TestAnimation></TestAnimation>

      <Testupload></Testupload>
      <img src={logo} alt="gemach" />;
      {/* <script></script> */}
      {/* <MainPageComp></MainPageComp> */}
        <Routes>
          <Route path="*" element={<MainPageComp />} />
          <Route path={'/secondpage'} element={<SecondPage />} />
        </Routes>
    </div>
  );
}
export default App;