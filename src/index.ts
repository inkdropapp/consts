export const appName = 'Inkdrop'
export const contactMaddr = 'contact@inkdrop.app'
export const webUrl = 'https://www.inkdrop.app/'
export const appUrl = 'https://my.inkdrop.app/'
export const docUrl = 'https://docs.inkdrop.app/'
export const forumUrl = 'https://forum.inkdrop.app/'
export const creditsUrl =
  'https://github.com/inkdropapp/licenses/blob/master/README.md'
export type PlanType = 'basic_usd_m' | 'basic_usd_y' | 'basic_m' | 'basic_y'
export const planType: {
  basicMonthly: 'basic_usd_m'
  basicYearly: 'basic_usd_y'
  basicMonthlyJPY: 'basic_m'
  basicYearlyJPY: 'basic_y'
} = {
  basicMonthly: 'basic_usd_m',
  basicYearly: 'basic_usd_y',
  basicMonthlyJPY: 'basic_m',
  basicYearlyJPY: 'basic_y'
}
export type SessionStatus =
  | 'active'
  | 'notLoggedIn'
  | 'unauthorized'
  | 'trialExpired'
  | 'sessionExpired'
  | 'oldVersion'
export const sessionStatus: {
  ACTIVE: 'active'
  NOT_LOGGED_IN: 'notLoggedIn'
  UNAUTHORIZED: 'unauthorized'
  TRIAL_EXPIRED: 'trialExpired'
  SESSION_EXPIRED: 'sessionExpired'
  OLD_VERSION: 'oldVersion'
} = {
  ACTIVE: 'active',
  NOT_LOGGED_IN: 'notLoggedIn',
  UNAUTHORIZED: 'unauthorized',
  TRIAL_EXPIRED: 'trialExpired',
  SESSION_EXPIRED: 'sessionExpired',
  OLD_VERSION: 'oldVersion'
}
export const taxPercentage = 8
export class AssistiveError extends Error {
  detail: string
  debugInfo: Record<string, any>

  constructor(opts: {
    message: string
    detail: string
    debugInfo: Record<string, any>
  }) {
    const { message, detail, debugInfo } = opts
    super(message)
    this.name = 'AssistiveError'
    this.detail = detail
    this.debugInfo = debugInfo
  }
}
