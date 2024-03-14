import * as React from "react";
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Inject,
  MonthAgenda,
} from "@syncfusion/ej2-react-schedule";
import { registerLicense, extend } from "@syncfusion/ej2-base";
import * as dataSource from './datasource.json';


registerLicense(
  "ORg4AjUWIQA/Gnt2UVhhQlVFfVtdXGBWfFN0QXNddV5zflVFcC0sT3RfQFljSn9XdkFjX3pedXxQQw=="
);


export function CalendarView() {
    const data = extend([], dataSource.ordersData, null, true);
  return (
    <div className="flex justify-center items-center min-h-screen pl-24">
      <ScheduleComponent width={1200} height={800} eventSettings={{
        dataSource:data,
      }}>
        <ViewsDirective>
            <ViewDirective option="MonthAgenda"/>
        </ViewsDirective>
        <Inject services={[MonthAgenda]} />
      </ScheduleComponent>
    </div>
  );
}
