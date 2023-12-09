import { Input, Form } from 'antd';

export const PhoneAndEmail = ({ formik }) => {
    return (
        <div className="form-row">
            <Form.Item
                className="form-item"
                label="Email"
                name="email"
                validateStatus={formik.errors.email && formik.touched.email ? 'error' : ''}
                help={formik.errors.email && formik.touched.email ? formik.errors.email : null}
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
                validateStatus={formik.errors.phone && formik.touched.phone ? 'error' : ''}
                help={formik.errors.phone && formik.touched.phone ? formik.errors.phone : null}
            >
                <Input
                    name="phone"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}

                />
            </Form.Item>
        </div>)
}
