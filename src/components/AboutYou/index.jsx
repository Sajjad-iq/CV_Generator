import { Input, Form } from 'antd';

export const AboutYou = ({ formik }) => {
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

            />
        </Form.Item>
    )
}
