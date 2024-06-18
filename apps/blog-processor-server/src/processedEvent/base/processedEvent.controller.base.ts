/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ProcessedEventService } from "../processedEvent.service";
import { ProcessedEventCreateInput } from "./ProcessedEventCreateInput";
import { ProcessedEvent } from "./ProcessedEvent";
import { ProcessedEventFindManyArgs } from "./ProcessedEventFindManyArgs";
import { ProcessedEventWhereUniqueInput } from "./ProcessedEventWhereUniqueInput";
import { ProcessedEventUpdateInput } from "./ProcessedEventUpdateInput";

export class ProcessedEventControllerBase {
  constructor(protected readonly service: ProcessedEventService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ProcessedEvent })
  async createProcessedEvent(
    @common.Body() data: ProcessedEventCreateInput
  ): Promise<ProcessedEvent> {
    return await this.service.createProcessedEvent({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ProcessedEvent] })
  @ApiNestedQuery(ProcessedEventFindManyArgs)
  async processedEvents(
    @common.Req() request: Request
  ): Promise<ProcessedEvent[]> {
    const args = plainToClass(ProcessedEventFindManyArgs, request.query);
    return this.service.processedEvents({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ProcessedEvent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async processedEvent(
    @common.Param() params: ProcessedEventWhereUniqueInput
  ): Promise<ProcessedEvent | null> {
    const result = await this.service.processedEvent({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ProcessedEvent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateProcessedEvent(
    @common.Param() params: ProcessedEventWhereUniqueInput,
    @common.Body() data: ProcessedEventUpdateInput
  ): Promise<ProcessedEvent | null> {
    try {
      return await this.service.updateProcessedEvent({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ProcessedEvent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteProcessedEvent(
    @common.Param() params: ProcessedEventWhereUniqueInput
  ): Promise<ProcessedEvent | null> {
    try {
      return await this.service.deleteProcessedEvent({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
