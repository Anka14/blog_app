import express from "express"
const router = express.Router();
import Category from "../models/Category.mjs"

router.post("/", async (req, res) => {
  const newCat = new Category(req.body)
  try {
    const savedCat = await newCat.save()
    return res.status(200).json(savedCat)

  } catch (err) {
    return res.status(500).json(err)
  }

})

router.get("/", async (req, res) => {

  try {
    const cats = await Category.find()
    return res.status(200).json(cats)

  } catch (err) {
    return res.status(500).json(err)
  }

})



export default router