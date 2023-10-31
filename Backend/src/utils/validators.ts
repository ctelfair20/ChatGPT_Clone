import { Request, Response, NextFunction } from "express";
import { ValidationChain, validationResult, body } from "express-validator";

const validate = (validations: ValidationChain[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    //check of errors in each validation chain
    for (let validation of validations) {
      const result = await validation.run(req);
      // if there is an error
      if (!result.isEmpty()) {
        // end loop
        break;
      }
    }
    // check for errors in request
    const errors = validationResult(req);
    // if there are NO ERRORS
    if (errors.isEmpty()) {
      //start next middleware
      return next();
    }
    // respond with or send back the errors
    return res.status(422).json({ errors: errors.array() })
  }
}

// custom validator chains to be validated on signup
const signupValidator = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').trim().notEmpty().withMessage('Email is required').isEmail().withMessage('Must provide a valid email'),
  body('password').trim().notEmpty().withMessage('Password is required').isLength({ min: 8, max: 20 }).withMessage('Password must have at least 8 char long and no more than 20 char')
];

export { validate, signupValidator }