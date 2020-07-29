export interface AppointmentSchema {
  name: string;
  description: string;
  startDate: moment.Moment; // day, month, year, hour
  endDate: moment.Moment; // date only
}
