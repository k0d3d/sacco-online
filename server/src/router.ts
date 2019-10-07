import * as express from "express";

const router = express.Router();

router.get("/members",  ( req, res ) => res.json({}).status(200) );

export { router };