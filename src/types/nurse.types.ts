enum WeekDays {
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
}

export interface INurse {
  id?: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  contact?: string;
  weekdays?: WeekDays[] | string;
  duty_start_time?: string;
  duty_end_time?: string;
  image?: string;
  isRoundingManager?: boolean;
  createdBy?: number;
  is_deleted?: boolean;
}
