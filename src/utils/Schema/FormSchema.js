import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full Name is required'),
    jobTitle: Yup.string().required('Job Title is required'),
    portfolioLink: Yup.string().required('Portfolio Link is required'),
    geoLocation: Yup.string().required('Geo Location is required'),
    linkedinUrl: Yup.string().required('LinkedIn URL is required'),
    gitUrl: Yup.string().required('Git Url required'),
    aboutYou: Yup.string().required('About You is required'),
    email: Yup.string().email().required('Email is required'),
    phone: Yup.number().required('Phone Number is required')
});