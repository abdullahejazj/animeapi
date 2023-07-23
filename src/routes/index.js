import { Router } from "express";
import v1 from "./v1.js";
import v2 from "./v2.js";

const router = Router();

// No allowlist logic or rate limiter anymore
router.use("/v1", v1);
router.use("/v2", v2);

export default router;
