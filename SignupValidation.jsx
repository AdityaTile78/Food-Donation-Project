function validation(values) {
    let errors = {}; //object to store the validation errors.

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Regular Expression

    if (values.name === "") {
        errors.name = "Name should not be empty";
    } else {
        errors.name = ""; //send empty string to the object
    }

    if (values.email === "") {
        errors.email = "Email should not be empty";
    } else if (!emailPattern.test(values.email)) {
        errors.email = "Invalid email format";
    } else {
        errors.email = "";
    }

    if (values.password === "") {
        errors.password = "Password should not be empty";
    } else {
        errors.password = "";
    }

    return errors;
}

export default validation;
