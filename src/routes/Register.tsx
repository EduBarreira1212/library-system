import { Form, Formik } from "formik";

const Register = () => {
    return (
        <div>
            <h1>Register</h1>
            <Formik
                initialValues={{
                    name: "", cpf: "", email: "", phone: "",
                    title: "", author: "", publishingCompany: "", publicationYear: "",
                    loan: ""
                }}
                onSubmit={(values) => console.log(values)}
            >
                <Form>
                    
                </Form>
            </Formik>
        </div>
    );
}

export default Register;