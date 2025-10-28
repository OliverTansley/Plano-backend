import { injectable, inject, container } from "tsyringe";
import { RoutePlanningService } from "../Services/RoutePlanningService";

@injectable()
class RouteController {
  _routePlanningService: RoutePlanningService;

  RouteController(routePlanningSerivce: RoutePlanningService) {
    this._routePlanningService = routePlanningSerivce;
  }

  HandleRequest(action: string, requestParams: Array<string>) {
    if (action === "Plan") {
      this._routePlanningService.PlanRoute();
    }
  }
}
