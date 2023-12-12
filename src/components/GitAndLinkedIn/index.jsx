import { Input, Form } from 'antd';
import { useContext, useEffect, useRef } from 'react';
import { MyContext } from '../../context/data';

export const GitAndLinkedIn = ({ formik }) => {

    const GitREf = useRef()
    const LinkedInREf = useRef()
    const { formValues } = useContext(MyContext)

    useEffect(() => {
        if (!GitREf.current) return
        if (!LinkedInREf.current) return

        GitREf.current.input.value = formValues.gitUrl
        LinkedInREf.current.input.value = formValues.linkedinUrl
    }, [])

    return (
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
                    ref={GitREf}

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
                    ref={LinkedInREf}
                />
            </Form.Item>
        </div>
    )
}
