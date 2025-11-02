import { container } from "tsyringe";
import { RouteController } from "../Controllers/RouteController";

export class ContainerHelper {
  /**
   * RegisterControllersByName
   */
  public static RegisterControllersByName() {
    container.register("Route", { useClass: RouteController });
  }
}
