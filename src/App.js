
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Uppercase from './Components/Uppercase';
import Lowercase from './Components/Lowercase';
import Togglecase from './Components/Togglecase';
import RemoveSpaces from './Components/Removespace';
import Imagecompressor from './Components/Imagecompressor';
import ImageConverter from './Components/Imageconverter';
import Firstlettercapital from './Components/Firstlettercapital';
import Agecalculator from './Components/Agecounter';
import InterestCalculator from './Components/Intrestcounter';
import UnitConverter from './Components/Unitconverter';
import BMICalculator from './Components/Bmicaalculator';
import CurrencyConverter from './Components/Currencyconverter';
import PrivacyPolicy from './Components/Privacy';
import TermsAndConditions from './Components/Terms';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/uppercase" element={<Uppercase />} />
          <Route path="/lowercase" element={<Lowercase />} />
          <Route path="/togglecase" element={<Togglecase />} />
          <Route path="/removespace" element={<RemoveSpaces />} />
          <Route path="/firstlattercapital" element={<Firstlettercapital />} />
          <Route path="/Imagecompressor" element={<Imagecompressor />} />
          <Route path="/Imageconverter" element={<ImageConverter />} />
          <Route path="/agecounter" element={<Agecalculator />} />
          <Route path="/intrestCalculator" element={<InterestCalculator />} />
          <Route path='/unitconverter' element={<UnitConverter />} />
          <Route path='/currencyconverter' element={<CurrencyConverter />} />
          <Route path='/bmicalculator' element={<BMICalculator />} />
          <Route path='/privacy' element={<PrivacyPolicy />} />
          <Route path='/terms' element={<TermsAndConditions />} />
        </Routes>
      </Router >

    </>
  );
}

export default App;
