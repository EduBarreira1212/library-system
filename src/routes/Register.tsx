import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { css, styled } from "styled-components";
import * as Yup from 'yup';

const Style = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Div = styled.div`
    ${Style}
    height: 100vh;
    max-width: 60vw;
    margin: 0 auto;
`;

const H1 = styled.h1`
    font-size: 2rem;
    margin-bottom: 3vh;
`;

const FormFormik = styled(Form)`
    ${Style}
    gap: 1vh;
`;

export interface IformData {
    name: string;
    cpf: string;
    email: string;
    phone: string;
    title: string;
    author: string;
    publisher: string;
    publicationYear: number;
    loan: Date;
}

const LoanSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    cpf: Yup.string().matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'Invalid CPF').required('CPF is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required'),
    publisher: Yup.string().required('Publisher is required'),
    publicationYear: Yup.number().integer('Publication year must be an integer').positive('Publication year must be a positive number').required('Publication year is required'),
    loan: Yup.date().required('Date and time of loan are required'),
})

const Register = () => {

    const handleSubmit = async (data: IformData) => {
        try {
            const response = await axios.post(
                "https://apigenerator.dronahq.com/api/PxY0zUv0/libraryData",
                data
            );
            console.log("API Response:", response.data);
        } catch (error) {
            console.log("Error:", Error);
        }
    }

    return (
        <Div>
            <H1>Register</H1>
            <Formik
                initialValues={{
                    name: "", cpf: "", email: "", phone: "",
                    title: "", author: "", publisher: "", publicationYear: 0,
                    loan: new Date()
                }}
                validationSchema={LoanSchema}
                onSubmit={(values) => handleSubmit(values)}
            >
                <FormFormik>
                    <label htmlFor="">Name:</label>
                    <Field type="text" name="name" placeholder="Ex: Brian"/>
                    <ErrorMessage name="name" component="div"/>
                    <label htmlFor="">CPF:</label>
                    <Field type="text" name="cpf" placeholder="Ex: 111.222.333-44"/>
                    <ErrorMessage name="cpf" component="div"/>
                    <label htmlFor="">E-mail:</label>
                    <Field type="email" name="email" placeholder="Ex: Brian@gmail.com"/>
                    <ErrorMessage name="email" component="div"/>
                    <label htmlFor="">Phone:</label>
                    <Field type="tel" name="phone" placeholder="Ex: (00)99988-7766"/>
                    <ErrorMessage name="phone" component="div"/>
                    <label htmlFor="title">Title:</label>
                    <Field type="text" name="title" placeholder="Ex: Harry Potter"/>
                    <ErrorMessage name="title" component="div"/>
                    <label htmlFor="title">Author:</label>
                    <Field type="text" name="author" placeholder="Ex: JK"/>
                    <ErrorMessage name="author" component="div"/>
                    <label htmlFor="title">Publisher:</label>
                    <Field type="text" name="publisher" placeholder="Ex: books company"/>
                    <ErrorMessage name="publisher" component="div"/>
                    <label htmlFor="title">Publication Year:</label>
                    <Field type="number" name="publicationYear" placeholder="Ex: 1500"/>
                    <ErrorMessage name="publicationYear" component="div"/>
                    <label htmlFor="title">Loan date:</label>
                    <Field type="datetime-local" name="loan" placeholder="Ex: 01/01/2024"/>
                    <ErrorMessage name="loan" component="div"/>
                    <input type="submit" value="loan the book"/>
                </FormFormik>
            </Formik>
        </Div>
    );
}

export default Register;