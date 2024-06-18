import { Module } from "@nestjs/common";
import { ProcessedEventModuleBase } from "./base/processedEvent.module.base";
import { ProcessedEventService } from "./processedEvent.service";
import { ProcessedEventController } from "./processedEvent.controller";
import { ProcessedEventResolver } from "./processedEvent.resolver";

@Module({
  imports: [ProcessedEventModuleBase],
  controllers: [ProcessedEventController],
  providers: [ProcessedEventService, ProcessedEventResolver],
  exports: [ProcessedEventService],
})
export class ProcessedEventModule {}
