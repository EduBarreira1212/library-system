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
    min-height: 100vh;
    max-width: 60vw;
    margin: 0 auto;
`;

const H1 = styled.h1`
    font-size: 2rem;
    margin-bottom: 3vh;
`;

const Label = styled.label`
    margin-bottom: 0.5vh;
    font-weight: bold;
`;

const FormFormik = styled(Form)`
    ${Style}
    gap: 1vh;
`;

const FieldFormik = styled(Field)`
    width: calc(100% - 1vw);
    padding: 0.8vw;
    margin-bottom: 1vh;
    border: 0.1vw solid #ccc;
    border-radius: 0.5vw;
`;

const SubmitBtn = styled.input`
    width: 100%;
    padding: 1vw;
    margin-bottom: 3vh;
    background-color: #007bff;
    color: #fff;
    font-size: medium;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover{
        background-color: #0056b3;
    }
`;

const ErrorMessageFormik = styled(ErrorMessage)`
    color: red;
    margin-top: 5px;
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
                    <Label htmlFor="">Name:</Label>
                    <FieldFormik type="text" name="name" placeholder="Ex: Brian"/>
                    <ErrorMessageFormik name="name" component="div"/>
                    <Label htmlFor="">CPF:</Label>
                    <FieldFormik type="text" name="cpf" placeholder="Ex: 111.222.333-44"/>
                    <ErrorMessageFormik name="cpf" component="div"/>
                    <Label htmlFor="">E-mail:</Label>
                    <FieldFormik type="email" name="email" placeholder="Ex: Brian@gmail.com"/>
                    <ErrorMessageFormik name="email" component="div"/>
                    <Label htmlFor="">Phone:</Label>
                    <FieldFormik type="tel" name="phone" placeholder="Ex: (00)99988-7766"/>
                    <ErrorMessageFormik name="phone" component="div"/>
                    <Label htmlFor="title">Title:</Label>
                    <FieldFormik type="text" name="title" placeholder="Ex: Harry Potter"/>
                    <ErrorMessageFormik name="title" component="div"/>
                    <Label htmlFor="title">Author:</Label>
                    <FieldFormik type="text" name="author" placeholder="Ex: JK"/>
                    <ErrorMessageFormik name="author" component="div"/>
                    <Label htmlFor="title">Publisher:</Label>
                    <FieldFormik type="text" name="publisher" placeholder="Ex: books company"/>
                    <ErrorMessageFormik name="publisher" component="div"/>
                    <Label htmlFor="title">Publication Year:</Label>
                    <FieldFormik type="number" name="publicationYear" placeholder="Ex: 1500"/>
                    <ErrorMessageFormik name="publicationYear" component="div"/>
                    <Label htmlFor="title">Loan date:</Label>
                    <FieldFormik type="datetime-local" name="loan" placeholder="Ex: 01/01/2024"/>
                    <ErrorMessageFormik name="loan" component="div"/>
                    <SubmitBtn type="submit" value="loan the book"/>
                </FormFormik>
            </Formik>
        </Div>
    );
}

export default Register;