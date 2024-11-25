export const appName = 'Inkdrop'
export const contactMaddr = 'contact@inkdrop.app'
export const webUrl = 'https://www.inkdrop.app/'
export const appUrl = 'https://my.inkdrop.app/'
export const docUrl = 'https://docs.inkdrop.app/'
export const apiDocUrl = 'https://developers.inkdrop.app/'
export const forumUrl = 'https://forum.inkdrop.app/'
export const creditsUrl =
  'https://github.com/inkdropapp/licenses/blob/master/README.md'
export const testimonialFormUrl = 'https://api.inkdrop.app/v1/r/testimonial'
export const trialPeriod = 14
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
