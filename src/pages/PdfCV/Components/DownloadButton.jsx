import React, { useContext } from 'react'
import { PDFDownloadLink } from '@react-pdf/renderer';
import { MyContext } from '../../../context/data';
import { PdfCV } from '../';
import { Button } from 'antd';

export const DownloadButton = () => {

  const { formValues, ExperienceCards, SkillsCards, EducationCards, LanguagesCards } = useContext(MyContext)

  return (
    <PDFDownloadLink document={<PdfCV
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
    />} fileName="fee_acceptance.pdf">
      {({ blob, url, loading, error }) => (
        loading ?
          <Button type='primary' >Loading</Button>
          :
          <Button type='primary' >Download</Button>
      )}
    </PDFDownloadLink>
  )
}
