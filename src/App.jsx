import Home from './pages/home';
import { Routes, Route, Link } from "react-router-dom"
import { PDFViewer } from '@react-pdf/renderer';
import { PdfCV } from './pages/PdfCV';
import React, { useContext } from 'react';
import { MyContext } from './context/data';
import { Button } from 'antd';
import { DownloadButton } from './pages/PdfCV/Components/DownloadButton';

const App = () => {

  const { formValues, ExperienceCards, SkillsCards, EducationCards, LanguagesCards } = useContext(MyContext)
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/CV" element={
        <div style={{ width: "100vw" }}>

          <nav style={{ display: "flex", maxWidth: "100vw", justifyContent: "space-between", padding: "10px 15px" }}>
            <Button><Link style={{ textDecoration: "none" }} to={"/"}>Back</Link></Button>
            <DownloadButton />
          </nav>

          <PDFViewer style={{ width: "100vw", height: "100vh" }}>
            <PdfCV
              fullName={formValues.fullName}
              jobTitle={formValues.jobTitle}
              git={formValues.gitUrl}
              LinkedIn={formValues.linkedinUrl}
              location={formValues.geoLocation}
              About={formValues.aboutYou}
              Experience={ExperienceCards}
              Skills={SkillsCards}
              Education={EducationCards}
              Email={formValues.email}
              Phone={formValues.phone}
              Languages={LanguagesCards}
            />
          </PDFViewer>
        </div>

      } />
    </Routes>
  );
};

export default App;