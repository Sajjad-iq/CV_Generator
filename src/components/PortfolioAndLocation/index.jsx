import { Input, Form } from 'antd';

export const PortfolioAndLocation = ({ formik }) => {
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
    )
}
