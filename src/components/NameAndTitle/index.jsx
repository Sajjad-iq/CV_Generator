import { Input, Form } from 'antd';
import { useContext, useEffect, useRef } from 'react';
import { MyContext } from '../../context/data';

export const NameAndTitle = ({ formik }) => {

    const NameREf = useRef()
    const JobREf = useRef()
    const { formValues } = useContext(MyContext)

    useEffect(() => {
        if (!NameREf.current) return
        if (!JobREf.current) return

        NameREf.current.input.value = formValues.fullName
        JobREf.current.input.value = formValues.jobTitle
    }, [])
    return (
        <div className="form-row">
            <Form.Item
                className="form-item"
                label="Full Name"
                name="fullName"
                validateStatus={formik.errors.fullName && formik.touched.fullName ? 'error' : ''}
                help={formik.errors.fullName && formik.touched.fullName ? formik.errors.fullName : null}
            >
                <Input
                    name="fullName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    ref={NameREf}
                />
            </Form.Item>

            <Form.Item
                className="form-item"
                label="Job Title"
                name="jobTitle"
                validateStatus={formik.errors.jobTitle && formik.touched.jobTitle ? 'error' : ''}
                help={formik.errors.jobTitle && formik.touched.jobTitle ? formik.errors.jobTitle : null}
            >
                <Input
                    name="jobTitle"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    ref={JobREf}
                />
            </Form.Item>
        </div>)
}
