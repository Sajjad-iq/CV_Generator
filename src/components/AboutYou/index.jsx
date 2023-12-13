import { Input, Form } from 'antd';
import { useContext, useEffect, useRef } from 'react';
import { MyContext } from '../../context/data';

export const AboutYou = ({ formik }) => {

    const AboutREf = useRef()
    const { formValues } = useContext(MyContext)

    useEffect(() => {
        if (!AboutREf.current) return
        AboutREf.current.resizableTextArea.textArea.value = formValues.aboutYou
    }, [])
    return (
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
                ref={AboutREf}

            />
        </Form.Item>
    )
}
