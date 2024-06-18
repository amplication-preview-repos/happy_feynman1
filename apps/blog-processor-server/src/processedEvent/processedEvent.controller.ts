import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProcessedEventService } from "./processedEvent.service";
import { ProcessedEventControllerBase } from "./base/processedEvent.controller.base";

@swagger.ApiTags("processedEvents")
@common.Controller("processedEvents")
export class ProcessedEventController extends ProcessedEventControllerBase {
  constructor(protected readonly service: ProcessedEventService) {
    super(service);
  }
}
