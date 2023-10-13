import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import HeroSection from './components/Hero-Section/HeroSection';
import Login from './components/Login/Login';
import AdminLogin from './components/AdminLogin/AdminLogin';
import UserLogin from './components/UserLogin/UserLogin';
import AboutUs from './components/About-us/AboutUs';
import UserHeader from './header/UserHeader';
import UserCourses from './courses/UserCourses';
import Artifici from './courses/artifci';
import Begin from './courses/begin';
import Chain from './courses/chain';
import Cyber from './courses/cyber';
import Analy from './courses/excel';
import Introd from './courses/introd';
import Jbegi from './courses/jbegin';
import Machin from './courses/machin';
import Msex from './courses/msex';
import Power from './courses/power';
import Pyth from './courses/pytho';
import Snap from './courses/snap';
import Social from './courses/social';
import Sqlto from './courses/sql';
import Quizfile from './quiz/quizfile';
import Quizhome from './quiz/quizhome';
import Community from './header/community';
import Adminhome from './Page/Dashboard/adminhome';
import Dashboard from './Dashboard';
import MainHead from './header/mainheader';
import Helpcenter from './helpcenter/helpcenter';
import HelpContact from './helpcenter/main';
import PrivacyPolicy from './helpcenter/privacy';
import Testimonials from './components/Testimonial/Testimonials';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HeroSection" element={<HeroSection />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/UserLogin" element={<UserLogin />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      




        <Route path='/UserHeader' element={<UserHeader/>}/>
    
      <Route path='Community' element={<Community/>}/>
      <Route path='UserCourses' element={<UserCourses/>}/>
      <Route path='Artifici' element={<Artifici/>}/>
      <Route path='Begin' element={<Begin/>}/>
      <Route path='Chain' element={<Chain/>}/>
      <Route path='Cyber' element={<Cyber/>}/>
      <Route path='Analy' element={<Analy/>}/>
      <Route path='Introd' element={<Introd/>}/>
      <Route path='Jbegi' element={<Jbegi/>}/>
      <Route path='Machin' element={<Machin/>}/>
      <Route path='Msex' element={<Msex/>}/>
      <Route path='Power' element={<Power/>}/>
      <Route path='Pyth' element={<Pyth/>}/>
      <Route path='Snap' element={<Snap/>}/>
      <Route path='Social' element={<Social/>}/>
      <Route path='Sqlto' element={<Sqlto/>}/>
      <Route path='Quizfile' element={<Quizfile/>}/>
      <Route path='Quizhome' element={<Quizhome/>}/>
      <Route path='Adminhome' element={<Adminhome/>}/>
      <Route path='Dashboard' element={<Dashboard/>}/>
      <Route path='UserHeader' element={<UserHeader/>}/>
      <Route path='Helpcenter' element={<Helpcenter/>}/>
      <Route path='HelpContact' element={<HelpContact/>}/>
      <Route path='PrivacyPolicy' element={<PrivacyPolicy/>}/>
      

     
      </Routes>
    </Router>
  );
}

export default App;
