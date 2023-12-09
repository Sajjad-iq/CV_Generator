import React, { createContext, useState } from 'react';

const MyContext = createContext({});

const MyContextProvider = ({ children }) => {

    const [formValues, setFormValues] = useState({
        aboutYou: "",
        fullName: "",
        geoLocation: "",
        gitUrl: "",
        jobTitle: "",
        linkedinUrl: "",
        portfolioLink: "",
        email: "",
        phone: "",
    });

    const [ExperienceCards, setExperienceCards] = useState([]);
    const [SkillsCards, setSkillsCards] = useState([]);
    const [EducationCards, setEducationCards] = useState([]);
    const [LanguagesCards, setLanguagesCards] = useState([]);
    const updateFormValues = (values) => {
        setFormValues(values);
    };

    return (
        <MyContext.Provider value={{ formValues, updateFormValues, ExperienceCards, setExperienceCards, SkillsCards, setSkillsCards, EducationCards, setEducationCards, LanguagesCards, setLanguagesCards }}>
            {children}
        </MyContext.Provider>
    );
};

export { MyContext, MyContextProvider };