import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProcessedEventServiceBase } from "./base/processedEvent.service.base";

@Injectable()
export class ProcessedEventService extends ProcessedEventServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
