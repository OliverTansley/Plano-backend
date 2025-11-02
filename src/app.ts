import "reflect-metadata";
import express from "express";
import { container } from "tsyringe";
import { ContainerHelper } from "./Helpers/ContainerHelper";

const app = express();
const port = 3000;

ContainerHelper.RegisterControllersByName();

// set up routing as /controller/action/[params ...]

app.get("/:controllerName/:action", (req, res) => {
  const { controllerName, action } = req.params;
  const ids: Array<string> = (req?.query?.ids as string).split(",");
  var controller: IController = container.resolve(controllerName);
  controller.HandleRequest(action, ids);
  res.send();
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
