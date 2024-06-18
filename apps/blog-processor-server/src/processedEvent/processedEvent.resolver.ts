import * as graphql from "@nestjs/graphql";
import { ProcessedEventResolverBase } from "./base/processedEvent.resolver.base";
import { ProcessedEvent } from "./base/ProcessedEvent";
import { ProcessedEventService } from "./processedEvent.service";

@graphql.Resolver(() => ProcessedEvent)
export class ProcessedEventResolver extends ProcessedEventResolverBase {
  constructor(protected readonly service: ProcessedEventService) {
    super(service);
  }
}
