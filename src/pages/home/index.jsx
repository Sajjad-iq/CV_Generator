import React, { useContext, useEffect, useRef } from 'react';
import { Input, Form, Button } from 'antd';
import { useFormik } from 'formik';
import { validationSchema } from '../../utils/Schema/FormSchema';
import { useNavigate } from "react-router-dom"
import { MyContext } from '../../context/data';
import { fields } from '../../utils/Schema/Constant/fields';
import './styles.css'
import { AddExperience, TheExperience, AddSkills, Skills, AddEducation, Educations, AddLanguage, Languages } from '../../components'


const Home = () => {
    const Navigate = useNavigate()
    const { formValues, updateFormValues } = useContext(MyContext)
    const FormREf = useRef()

    const formik = useFormik({
        initialValues: formValues,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            updateFormValues(values)
            Navigate("/CV")
        },
    });

    useEffect(() => {
        if (!FormREf.current) return
        const InputsValues = FormREf.current.getFieldValue()
        fields.forEach((e) => InputsValues[e] = formValues[e])
    }, [FormREf.current])


    return (
        <div className="cv-generator">
            <h1>CV Generator</h1>

            <Form ref={FormREf} onFinish={formik.handleSubmit} layout="vertical">
                <div className="form-row">
                    <Form.Item
                        className="form-item"
                        label="Full Name"
                        name="fullName"
                    >
                        <Input
                            name="fullName"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.fullName}
                        />
                    </Form.Item>

                    <Form.Item
                        className="form-item"
                        label="Job Title"
                        name="jobTitle"
                    >
                        <Input
                            name="jobTitle"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.jobTitle}

                        />
                    </Form.Item>
                </div>

                <div className="form-row">
                    <Form.Item
                        className="form-item"
                        label="Portfolio Link"
                        name="portfolioLink"
                        validateStatus={formik.errors.portfolioLink && formik.touched.portfolioLink ? 'error' : ''}
                        help={formik.errors.portfolioLink && formik.touched.portfolioLink ? formik.errors.portfolioLink : null}
                    >
                        <Input
                            name="portfolioLink"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.portfolioLink}

                        />
                    </Form.Item>

                    <Form.Item
                        className="form-item"
                        label="Geo Location"
                        name="geoLocation"
                        validateStatus={formik.errors.geoLocation && formik.touched.geoLocation ? 'error' : ''}
                        help={formik.errors.geoLocation && formik.touched.geoLocation ? formik.errors.geoLocation : null}
                    >
                        <Input
                            name="geoLocation"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.geoLocation}

                        />
                    </Form.Item>
                </div>

                <div className="form-row">
                    <Form.Item
                        className="form-item"
                        label="Email"
                        name="email"
                        validateStatus={formik.errors.portfolioLink && formik.touched.portfolioLink ? 'error' : ''}
                        help={formik.errors.portfolioLink && formik.touched.portfolioLink ? formik.errors.portfolioLink : null}
                    >
                        <Input
                            name="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}

                        />
                    </Form.Item>

                    <Form.Item
                        className="form-item"
                        label="Phone Number"
                        name="phone"
                        validateStatus={formik.errors.geoLocation && formik.touched.geoLocation ? 'error' : ''}
                        help={formik.errors.geoLocation && formik.touched.geoLocation ? formik.errors.geoLocation : null}
                    >
                        <Input
                            name="phone"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.phone}

                        />
                    </Form.Item>
                </div>

                <div className="form-row">
                    <Form.Item
                        className="form-item"
                        label="Git URL"
                        name="gitUrl"
                        validateStatus={formik.errors.gitUrl && formik.touched.gitUrl ? 'error' : ''}
                        help={formik.errors.gitUrl && formik.touched.gitUrl ? formik.errors.gitUrl : null}
                    >
                        <Input
                            name="gitUrl"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.gitUrl}

                        />
                    </Form.Item>

                    <Form.Item
                        className="form-item"
                        label="LinkedIn URL"
                        name="linkedinUrl"
                        value={formik.values.linkedinUrl}
                        validateStatus={formik.errors.linkedinUrl && formik.touched.linkedinUrl ? 'error' : ''}
                        help={formik.errors.linkedinUrl && formik.touched.linkedinUrl ? formik.errors.linkedinUrl : null}
                    >
                        <Input
                            name="linkedinUrl"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </Form.Item>
                </div>

                <Form.Item
                    className="form-item"
                    label="About You"
                    name="aboutYou"
                    validateStatus={formik.errors.aboutYou && formik.touched.aboutYou ? 'error' : ''}
                    help={formik.errors.aboutYou && formik.touched.aboutYou ? formik.errors.aboutYou : null}
                >
                    <Input.TextArea
                        name="aboutYou"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.aboutYou}

                    />
                </Form.Item>

                <AddSkills />
                <Skills />

                <AddExperience />
                <TheExperience />

                <AddLanguage />
                <Languages />

                <AddEducation />
                <Educations />

                <Form.Item className="form-item">
                    <Button type="primary" htmlType="submit">Generate CV</Button>
                </Form.Item>

            </Form>
        </div>
    );
};

export default Home;