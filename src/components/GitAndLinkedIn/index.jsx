import { Input, Form } from 'antd';

export const GitAndLinkedIn = ({ formik }) => {

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
    )
}
