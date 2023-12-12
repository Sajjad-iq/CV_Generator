import React, { useContext } from 'react';
import { Form, Button } from 'antd';
import { useFormik } from 'formik';
import { validationSchema } from '../../utils/Schema/FormSchema';
import { useNavigate } from "react-router-dom"
import { MyContext } from '../../context/data';
import { fields } from '../../utils/Schema/Constant/fields';
import './styles.css'
import { AddExperience, TheExperience, AddSkills, Skills, AddEducation, Educations, AddLanguage, Languages, AboutYou, NameAndTitle, PhoneAndEmail, GitAndLinkedIn, PortfolioAndLocation } from '../../components'


const Home = () => {
    const Navigate = useNavigate()
    const { formValues, updateFormValues } = useContext(MyContext)

    const formik = useFormik({
        initialValues: formValues,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            updateFormValues(values)
            Navigate("/CV")
        },
    });


    return (
        <div className="cv-generator">
            <h1>CV Generator</h1>

            <Form onFinish={formik.handleSubmit} layout="vertical">

                <NameAndTitle formik={formik} />

                <PhoneAndEmail formik={formik} />

                <AboutYou formik={formik} />

                <GitAndLinkedIn formik={formik} />

                <PortfolioAndLocation formik={formik} />

                <AddSkills />
                <Skills />

                <AddExperience />
                <TheExperience />

                <AddLanguage />
                <Languages />

                <AddEducation />
                <Educations />

                <Button style={{ marginBottom: "20px" }} type="primary" htmlType="submit">Generate CV</Button>

            </Form>
        </div>
    );
};

export default Home;