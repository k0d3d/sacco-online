import * as express from "express";

const router = express.Router();

router.get("/articles",  ( req, res ) => res.json({}).status(200) );

export { router };