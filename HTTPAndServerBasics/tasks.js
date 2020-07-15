const express = require("express");
const router = express.Router();

let counter = 0;

let tasks = [
  {
    id: counter++,
    task: "Wydoić krowę",
    status: "Completed",
  },
  {
    id: counter++,
    task: "Wydoić byka",
    status: "Not completed",
  },
];

router.get("/", (req, res) => {
  res.send(tasks);
});

router.get("/completed", (req, res) => {
  const completedTasks = tasks.filter((t) => t.status === "Completed");

  if (completedTasks.length < 1) {
    res.sendStatus(404);
  } else {
    res.send(completedTasks);
  }
});

router.get("/not-completed", (req, res) => {
  const notCompletedTasks = tasks.filter((t) => t.status === "Not completed");

  if (notCompletedTasks.length < 1) {
    res.sendStatus(404);
  } else {
    res.send(notCompletedTasks);
  }
});

router.get("/:id", (req, res) => {
  const id = JSON.parse(req.params.id);
  const task = tasks.find((t) => t.id === id);
  if (task) {
    res.send(task);
  } else {
    res.sendStatus(404);
  }
});

router.post("/", (req, res) => {
  const { task, status } = req.body;
  if (!task || !status) {
    res.sendStatus(400);
  } else {
    const newTask = {
      id: counter++,
      task,
      status,
    };
    tasks.push(newTask);
    res.sendStatus(201);
  }
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const lengthBeforeFilter = tasks.length;

  tasks = tasks.filter((t) => t.id !== id);

  if (lengthBeforeFilter === tasks.length) {
    res.sendStatus(404);
  } else {
    res.sendStatus(200);
  }
});

router.put("/:id", (req, res) => {
  const id = JSON.parse(req.params.id);
  const item = tasks.find((t) => t.id === id);
  if (!item) {
    res.sendStatus(404);
  } else {
    const { task, status } = req.body;
    if (!task || !status) {
      res.sendStatus(400);
    } else {
      const newTask = {
        id,
        task,
        status,
      };
      tasks = tasks.map((t) => (t === item ? newTask : t));
      res.sendStatus(200);
    }
  }
});

router.patch("/:id", (req, res) => {
  const id = JSON.parse(req.params.id);
  const item = tasks.find((t) => t.id === id);
  if (!item) {
    res.sendStatus(404);
  } else {
    const { status } = req.body;
    if (!status) {
      res.sendStatus(400);
    } else {
      item.status = status;
      res.sendStatus(200);
    }
  }
});

module.exports = router;
