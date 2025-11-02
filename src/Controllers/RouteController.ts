import { injectable } from "tsyringe";
import { RoutePlanningService } from "../Services/RoutePlanningService";

@injectable()
export class RouteController implements IController {
  _routePlanningService: RoutePlanningService;

  RouteController(routePlanningSerivce: RoutePlanningService) {
    this._routePlanningService = routePlanningSerivce;
  }

  HandleRequest(action: string, requestParams: Array<string>) {
    if (action === "Plan") {
      return this._routePlanningService.PlanRoute();
    }
  }
}
