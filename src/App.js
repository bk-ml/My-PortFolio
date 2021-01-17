import './components/styling.css'
import React, {Suspense} from 'react';
import LoadingPage from "./components/loading";
// const TempNav = React.lazy(() => import ('./components/tempNav'));
const NavBarT = React.lazy(() => import ('./components/navBar'));
const Intro = React.lazy(() => import ('./components/intro'));
const About = React.lazy(() => import ('./components/About'));
const Skills = React.lazy(() => import ('./components/skills'));
const Certificates = React.lazy(() => import ('./components/certificates'));
const Projects = React.lazy(() => import ('./components/Projects'));
const ContactAndResume = React.lazy(() => import ('./components/ContactAndResume'));
const WorkExperience = React.lazy(() => import ('./components/WorkExperience'));
// const LoadingPage = React.lazy(() => import ('./components/loading'));

function App() {

  // const styling = {
  //   color : 'red',
  // }

  return (
    <div className="App"> 
      <Suspense fallback={<LoadingPage/>}>
        <NavBarT /> 
        <Intro />
        <section>          
          <About />
          <Skills/>
          <WorkExperience/>
          <Certificates/>
          <Projects/>
        </section>
        <ContactAndResume/>
      </Suspense>
        
    </div>
  );
}

// import NavBar from './components/navBar';
// import Intro from './components/intro';
// import About from './components/About';
// import Skills from './components/skills';
// import Certificates from './components/certificates';
// import Projects from './components/Projects';
// import ContactAndResume from './components/ContactAndResume';
// import WorkExperience from './components/WorkExperience';
// import TempNav from './components/tempNav'

// function App() {
//   return (
//     <div className="App">
//       {/* <TempNav /> */}
//         <NavBar /> 
//         <Intro />
//         <About />
//         <Skills/>
//         <WorkExperience/>
//         <Certificates/>
//         <Projects/>
//         <ContactAndResume/>
//     </div>
//   );
// }
export default App;
