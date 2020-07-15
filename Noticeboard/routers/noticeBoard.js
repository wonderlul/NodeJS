const express = require("express");
const router = express.Router();

const Notice = require("../models/notice.model");

const authorizationMiddleware = require("../middlewares/authorizationMiddleware");

const processQuery = require("../functions/processQuery");

router.get("/noticeboard", async (req, res, next) => {
  try {
    const notices = await Notice.find(processQuery(req.query)).populate({
      path: "users",
      select: "-_id",
    });

    res.send(notices);
  } catch (error) {
    next(error);
  }
});

router.get("/noticeboard/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const notice = await Notice.findById(id).populate({
      path: "users",
      select: "-_id",
    });
    res.send(notice);
  } catch (error) {
    next(error);
  }
});

router.post("/noticeboard", authorizationMiddleware, async (req, res, next) => {
  try {
    const notice = new Notice(req.body).populate({
      path: "users",
      select: "-_id",
    });
    notice.user = req.user;
    await notice.save();
    res.send(notice);
  } catch (error) {
    next(error);
  }
});

router.delete("/noticeboard/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const deleteNotice = await Notice.findByIdAndDelete(id);
    deleteNotice.save();

    res.send(deleteNotice);
  } catch (error) {
    next(error);
  }
});

router.patch(
  "/noticeboard/:id",
  authorizationMiddleware,
  async (req, res, next) => {
    try {
      const id = req.params.id;
      const updateNotice = await Notice.findByIdAndUpdate(
        id,
        { notice: req.body.notice },
        { omitUndefined: true }
      ).populate({
        path: "users",
        select: "-_id",
      });

      updateNotice.save();

      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
