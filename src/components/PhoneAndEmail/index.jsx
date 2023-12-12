import { Input, Form } from 'antd';
import { useContext, useEffect, useRef } from 'react';
import { MyContext } from '../../context/data';

export const PhoneAndEmail = ({ formik }) => {

    const EmailREf = useRef()
    const phoneREf = useRef()
    const { formValues } = useContext(MyContext)

    useEffect(() => {
        if (!EmailREf.current) return
        if (!phoneREf.current) return

        EmailREf.current.input.value = formValues.email
        phoneREf.current.input.value = formValues.phone
    }, [])

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
                    ref={EmailREf}
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
                    ref={phoneREf}
                />
            </Form.Item>
        </div>)
}
