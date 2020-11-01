import { ErrorRequestHandler } from 'express'
import { ValidationError } from 'Yup'

interface ValidationErrors {
    [key: string]: string[];
}

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    if (err instanceof ValidationError ) {
        let errors: ValidationErrors =  {};

        err.inner.forEach(erro =>{
            errors[erro.path] = erro.errors;
        });
        return res.status(400).json({ message: 'Validation fails', errors })
    }
    console.error(err);

    return res.status(500).json({ message: 'Internal server error' });
};

export default errorHandler;