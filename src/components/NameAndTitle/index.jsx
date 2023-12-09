import { Input, Form } from 'antd';

export const NameAndTitle = ({ formik }) => {
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
                    value={formik.values.fullName}
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
                    value={formik.values.jobTitle}

                />
            </Form.Item>
        </div>)
}
