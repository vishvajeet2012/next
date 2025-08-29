import { Button } from "@headlessui/react";
import { useFormik } from 'formik';

export default function FromValidation() {
    const initialValues = {
        fullname: "",
        email: "",
        password: "",
        confirmPassword: "",
    };

    // Simple validation function
    const validate = values => {
        const errors = {};
        if (!values.fullname) {
            errors.fullname = "Full name is required";
        }
        if (!values.email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = "Email is invalid";
        }
        if (!values.password) {
            errors.password = "Password is required";
        }
        if (!values.confirmPassword) {
            errors.confirmPassword = "Confirm password is required";
        } else if (values.password !== values.confirmPassword) {
            errors.confirmPassword = "Passwords do not match";
        }
        return errors;
    };

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validate,
        onSubmit: value => {
            console.log(value, "vjhis");
        }
    });

    return (
        <>
            <div className="bg-black text-white w-full h-screen p-4">
                <div className="max-w-[91rem] h-screen mx-auto ">
                    <div className="flex  w-full">
                        <div className="w-1/2  h-screen">
                            <div className="flex h-screen items-center justify-center">
                                <h1 className="text-center font-bold text-7xl">
                                    Hire me
                                </h1>
                            </div>
                        </div>
                        <div className="w-1/2  ">
                            <div className=" w-full   flex gap-8  flex-col items-center justify-center h-full  item-center">
                                <div className="">
                                    <h1 className="text-center font-bold text-4xl ">
                                        Contact
                                    </h1>
                                </div>
                                <form onSubmit={handleSubmit} className="">
                                    <div className="flex w-full mb-4 flex-col items-center gap-4">
                                        <div className="">
                                            <label className="block text-sm font-medium my-1">
                                                full name
                                            </label>
                                            <input
                                                value={values.fullname}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                name="fullname"
                                                type="text"
                                                placeholder="Enter your full name"
                                                className="border py-1 px-4 rounded-md placeholder:"
                                            />
                                            {touched.fullname && errors.fullname && (
                                                <div className="text-red-500 text-xs">{errors.fullname}</div>
                                            )}
                                        </div>
                                        <div className=" ">
                                            <label className="block text-sm font-medium my-1">
                                                Email id
                                            </label>
                                            <input
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                name="email"
                                                type="email"
                                                placeholder="enter your email id "
                                                className="border py-1 px-4 rounded-md placeholder:"
                                            />
                                            {touched.email && errors.email && (
                                                <div className="text-red-500 text-xs">{errors.email}</div>
                                            )}
                                        </div>
                                        <div className=" ">
                                            <label className="block text-sm font-medium my-1">
                                                password
                                            </label>
                                            <input
                                                value={values.password}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                name="password"
                                                type="password"
                                                placeholder="enter your password"
                                                className="border py-1 px-4 rounded-md placeholder:"
                                            />
                                            {touched.password && errors.password && (
                                                <div className="text-red-500 text-xs">{errors.password}</div>
                                            )}
                                        </div>
                                        <div className=" ">
                                            <label className="block text-sm font-medium my-1">
                                                Confirm password
                                            </label>
                                            <input
                                                value={values.confirmPassword}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                name="confirmPassword"
                                                type="password"
                                                placeholder="confirm your passsword"
                                                className="border py-1 px-4 rounded-md placeholder:"
                                            />
                                            {touched.confirmPassword && errors.confirmPassword && (
                                                <div className="text-red-500 text-xs">{errors.confirmPassword}</div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center active:bg-gray-300 font-bold transition-all duration-300  cursor-pointer  mt-4 bg-white text-black py-2 rounded-md">
                                        <Button type="submit">Submit</Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}