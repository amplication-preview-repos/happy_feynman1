import { ProcessedEvent as TProcessedEvent } from "../api/processedEvent/ProcessedEvent";

export const PROCESSEDEVENT_TITLE_FIELD = "id";

export const ProcessedEventTitle = (record: TProcessedEvent): string => {
  return record.id?.toString() || String(record.id);
};
