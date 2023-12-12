import { Input, Form } from 'antd';
import { useContext, useEffect, useRef } from 'react';
import { MyContext } from '../../context/data';

export const PortfolioAndLocation = ({ formik }) => {

    const PortfolioREf = useRef()
    const LocationREf = useRef()
    const { formValues } = useContext(MyContext)

    useEffect(() => {
        if (!PortfolioREf.current) return
        if (!LocationREf.current) return

        PortfolioREf.current.input.value = formValues.portfolioLink
        LocationREf.current.input.value = formValues.geoLocation
    }, [])

    return (
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
                    ref={PortfolioREf}
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
                    ref={LocationREf}
                />
            </Form.Item>
        </div>
    )
}
