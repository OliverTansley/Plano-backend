interface IController {
  HandleRequest(action: string, requestParams: Array<string>): void;
}
