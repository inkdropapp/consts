// @flow
export const appName: string = 'Inkdrop'
export const contactMaddr: string = 'contact@inkdrop.info'
export const webUrl: string = 'https://www.inkdrop.info/'
export const appUrl: string = 'https://app.inkdrop.info/'
export const docUrl: string = 'http://doc.inkdrop.info/'
export const forumUrl: string = 'https://forum.inkdrop.info/'
export const creditsUrl: string = 'https://github.com/inkdropapp/licenses/blob/master/README.md'
export type AccountStatus = 'active' | 'deactivated' | 'deleted'
export type AccountStatusConstType = {
  ACTIVE: string,
  DEACTIVATED: string,
  DELETED: string
}
export const accountStatus: AccountStatusConstType = {
  ACTIVE: 'active',
  DEACTIVATED: 'deactivated',
  DELETED: 'deleted'
}
export type AccountType = 'trial' | 'basic'
export type AccountTypeConstType = {
  TRIAL: string,
  BASIC: string
}
export const accountType: AccountTypeConstType = {
  TRIAL: 'trial',
  BASIC: 'basic'
}
export type PlanType = 'basic_usd_m' | 'basic_usd_y' | 'basic_m' | 'basic_y'
export type PlanTypeConstType = {
  basicMonthly: string,
  basicYearly: string,
  basicMonthlyJPY: string,
  basicYearlyJPY: string
}
export const planType: PlanTypeConstType = {
  basicMonthly: 'basic_usd_m',
  basicYearly: 'basic_usd_y',
  basicMonthlyJPY: 'basic_m',
  basicYearlyJPY: 'basic_y'
}
export type SessionStatus = 'active' | 'notLoggedIn' | 'unauthorized' | 'trialExpired' | 'sessionExpired' | 'oldVersion'
export type SessionStatusConstType = {
  ACTIVE: string,
  NOT_LOGGED_IN: string,
  UNAUTHORIZED: string,
  TRIAL_EXPIRED: string,
  SESSION_EXPIRED: string,
  OLD_VERSION: string
}
export const sessionStatus: SessionStatusConstType = {
  ACTIVE: 'active',
  NOT_LOGGED_IN: 'notLoggedIn',
  UNAUTHORIZED: 'unauthorized',
  TRIAL_EXPIRED: 'trialExpired',
  SESSION_EXPIRED: 'sessionExpired',
  OLD_VERSION: 'oldVersion'
}
export const trashBookId: string = 'trash'
export const noteStatus = {
  NONE: 'none',
  ACTIVE: 'active',
  ON_HOLD: 'onHold',
  COMPLETED: 'completed',
  DROPPED: 'dropped'
}
export const noteShare = {
  PRIVATE: 'private',
  PUBLIC: 'public'
}
export const tagColors = [ 'default', 'red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black' ]
export const supportedImageFileTypes = [ 'image/png', 'image/jpeg', 'image/jpg', 'image/svg', 'image/gif' ]
export const maxAttachmentFileSize = 10 * 1024 * 1024
export const taxPercentage = 8
