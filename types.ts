export type logins  = {
  userId: number;
  date: string;
  device: string;
}

export interface signups {
  id: number;
  name: string;
  signupDate: string;
  email: string;
}

export interface upgrades {
  userId: number;
  upgradeDate: string;
  oldPlan: string;
  newPlan: string;
}
