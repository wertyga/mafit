export enum NOTIFY_TYPES {
  NOTIFY = 'NOTIFY',
  REMOVE_NOTIFY = 'REMOVE_NOTIFY',
}
export enum NOTIFY_MESSAGE_TYPES {
  ERROR = 'error',
  SUCCESS = 'success',
  WARNING = 'warning',
}

export type Notify = {
  message: string;
  type: 'error' | 'success' | 'warning';
};

export type NotifyState = Notify[];
