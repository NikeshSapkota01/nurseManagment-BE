enum WorkingDays {
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
}

export interface INurse {
  created_by?: number;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  email?: string;
  contact?: string;
  workingDays?: WorkingDays[] | string;
  duty_start_time?: string;
  duty_end_time?: string;
  image?: string;
  isRoundingManager?: boolean;
  createdBy?: number;
  is_deleted?: boolean;
  updated_at?: string;
}
