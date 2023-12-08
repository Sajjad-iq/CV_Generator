import Home from './pages/home';
import { Routes, Route, Link } from "react-router-dom"
import { PDFViewer } from '@react-pdf/renderer';
import { PdfCV } from './components/PdfCV';
import React, { useContext } from 'react';
import { MyContext } from './context/data';

const App = () => {

  const { formValues, ExperienceCards, SkillsCards, EducationCards } = useContext(MyContext)

  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/CV" element={
        <div>
          <PDFViewer style={{ width: "100dvw", height: "100dvh" }}>
            <PdfCV
              fullName={formValues.fullName}
              jobTitle={formValues.jobTitle}
              git={formValues.gitUrl}
              LinkedIn={formValues.linkedinUrl}
              Location={formValues.geoLocation}
              About={formValues.aboutYou}
              Experience={ExperienceCards}
              Skills={SkillsCards}
              Education={EducationCards}
            />
          </PDFViewer>
          <Link style={{ fontSize: "1.5rem", position: "absolute", top: "100px", left: "50px", color: "red", fontWeight: "bolder" }} to={"/"}>Back</Link>
        </div>

      } />
    </Routes>
  );
};

export default App;