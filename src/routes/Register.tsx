import { ErrorMessage, Field, Form, Formik } from "formik";
import { css, styled } from "styled-components";

const Style = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Div = styled.div`
    ${Style}
    height: 100vh;
`;

const FormFormik = styled(Form)`
    ${Style}
    gap: 1vh;
`;

const Register = () => {
    return (
        <Div>
            <h1>Register</h1>
            <Formik
                initialValues={{
                    name: "", cpf: "", email: "", phone: "",
                    title: "", author: "", publishingCompany: "", publicationYear: "",
                    loan: ""
                }}
                onSubmit={(values) => console.log(values)}
            >
                <FormFormik>
                    <label htmlFor="">Name:</label>
                    <Field type="text" name="name" placeholder="Ex: Brian"/>
                    <ErrorMessage name="name" component="div"/>
                    <label htmlFor="">CPF:</label>
                    <Field type="number" name="cpf" placeholder="Ex: 111.222.333-44"/>
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
                    <label htmlFor="title">Publishing company:</label>
                    <Field type="text" name="publishingCompany" placeholder="Ex: books company"/>
                    <ErrorMessage name="publishingCompany" component="div"/>
                    <label htmlFor="title">Publication Year:</label>
                    <Field type="number" name="publicationYear" placeholder="Ex: 1500"/>
                    <ErrorMessage name="publicationYear" component="div"/>
                    <label htmlFor="title">Loan date:</label>
                    <Field type="datetime-local" name="loan" placeholder="Ex: 01/01/2024"/>
                    <ErrorMessage name="loan" component="div"/>
                </FormFormik>
            </Formik>
        </Div>
    );
}

export default Register;