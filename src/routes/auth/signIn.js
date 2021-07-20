import { Router } from "express";

import { signIn } from "../../controllers/auth/signIn";

const router = Router();

router.post("/sign-in", signIn);

export const SignIn = router;
