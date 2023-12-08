import React, { createContext, useState } from 'react';

// Create a new context
const MyContext = createContext({});

// Create a context provider component
const MyContextProvider = ({ children }) => {

    const [formValues, setFormValues] = useState({
        aboutYou: "",
        fullName: "",
        geoLocation: "",
        gitUrl: "",
        jobTitle: "",
        linkedinUrl: "",
        portfolioLink: "",
    });

    const [ExperienceCards, setExperienceCards] = useState([]);
    const [SkillsCards, setSkillsCards] = useState([]);
    const [EducationCards, setEducationCards] = useState([]);
    const updateFormValues = (values) => {
        setFormValues(values);
    };

    return (
        <MyContext.Provider value={{ formValues, updateFormValues, ExperienceCards, setExperienceCards, SkillsCards, setSkillsCards, EducationCards, setEducationCards }}>
            {children}
        </MyContext.Provider>
    );
};

export { MyContext, MyContextProvider };