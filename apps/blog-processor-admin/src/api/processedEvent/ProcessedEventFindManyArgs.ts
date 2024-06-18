import { ProcessedEventWhereInput } from "./ProcessedEventWhereInput";
import { ProcessedEventOrderByInput } from "./ProcessedEventOrderByInput";

export type ProcessedEventFindManyArgs = {
  where?: ProcessedEventWhereInput;
  orderBy?: Array<ProcessedEventOrderByInput>;
  skip?: number;
  take?: number;
};
