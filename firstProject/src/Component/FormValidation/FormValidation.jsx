import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';


const FormValidation = () => {


    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const submitHandler = (formData) => console.log(formData)

//    console.log(watch("email"))
//    console.log(watch("password"))


    return (
        <>

            <Form onSubmit={handleSubmit(submitHandler)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" {...register("email", {
                        pattern: {
                            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                            message: "Email pattern is incorrect"
                        }
                    })} />
                    <p>{(errors.email?.message)}</p>
                    {/* {console.error(errors)} */}
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" {...register("password", {
                        pattern: {
                            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
                            message: "Password pattern is incorrect"
                        }
                    })} />
                    <p>{(errors.password?.message)}</p>

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </>
    )
}

export default FormValidation