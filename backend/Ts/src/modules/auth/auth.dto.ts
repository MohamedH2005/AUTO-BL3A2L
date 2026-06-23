import { Signupschema } from "./auth.validation.js";
import { z } from "zod";

export type SignupDTO = z.infer<typeof Signupschema.body>;
export type LoginDTO = z.infer<typeof Signupschema.body>;