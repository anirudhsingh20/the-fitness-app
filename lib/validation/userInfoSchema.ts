import * as Yup from 'yup';

export const userInfoValidationSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Name must be at least 2 characters')
        .max(50, 'Name must be less than 50 characters')
        .required('Name is required'),
    age: Yup.number()
        .typeError('Age must be a number')
        .integer('Age must be a valid number')
        .min(5, 'You must be at least 5 years old')
        .max(120, 'Please enter a valid age')
        .required('Age is required'),
    height: Yup.number()
        .min(50, 'Height must be at least 50 cm')
        .max(300, 'Height must be less than 300 cm')
        .required('Height is required'),
    weight: Yup.number()
        .min(20, 'Weight must be at least 20 kg')
        .max(500, 'Weight must be less than 500 kg')
        .required('Weight is required'),
    strengthLevel: Yup.string()
        .oneOf(['Beginner', 'Intermediate', 'Advanced'], 'Please select a valid strength level')
        .required('Strength level is required'),
    goal: Yup.string()
        .oneOf(['Lose weight', 'Gain muscle', 'Maintain weight'], 'Please select a valid goal')
        .required('Goal is required'),
});

// check and update this can be removed later ... if not used

// // Step-by-step validation schemas
// export const nameValidationSchema = Yup.object().shape({
//     name: Yup.string()
//         .min(2, 'Name must be at least 2 characters')
//         .max(50, 'Name must be less than 50 characters')
//         .required('Name is required'),
// });

// export const ageValidationSchema = Yup.object().shape({
//     age: Yup.number()
//         .min(13, 'You must be at least 13 years old')
//         .max(120, 'Please enter a valid age')
//         .required('Age is required'),
// });

// export const heightValidationSchema = Yup.object().shape({
//     height: Yup.number()
//         .min(50, 'Height must be at least 50 cm')
//         .max(300, 'Height must be less than 300 cm')
//         .required('Height is required'),
// });

// export const weightValidationSchema = Yup.object().shape({
//     weight: Yup.number()
//         .min(20, 'Weight must be at least 20 kg')
//         .max(500, 'Weight must be less than 500 kg')
//         .required('Weight is required'),
// });

// export const strengthLevelValidationSchema = Yup.object().shape({
//     strengthLevel: Yup.string()
//         .oneOf(['Beginner', 'Intermediate', 'Advanced'], 'Please select a valid strength level')
//         .required('Strength level is required'),
// });

// export const goalValidationSchema = Yup.object().shape({
//     goal: Yup.string()
//         .oneOf(['Lose weight', 'Gain muscle', 'Maintain weight'], 'Please select a valid goal')
//         .required('Goal is required'),
// });

