module.exports = {
  appName: 'Inkdrop',
  contactMaddr: 'contact@inkdrop.info',
  webUrl: 'https://www.inkdrop.info/',
  docUrl: 'http://doc.inkdrop.info/',
  forumUrl: 'https://forum.inkdrop.info/',
  creditsUrl: 'https://github.com/inkdropapp/licenses/blob/master/README.md',
  accountStatus: {
    ACTIVE: 'active',
    DEACTIVATED: 'deactivated',
    DELETED: 'deleted'
  },
  accountType: {
    TRIAL: 'trial',
    BASIC: 'basic'
  },
  sessionStatus: {
    ACTIVE: 'active',
    NOT_LOGGED_IN: 'notLoggedIn',
    UNAUTHORIZED: 'unauthorized',
    TRIAL_EXPIRED: 'trialExpired',
    SESSION_EXPIRED: 'sessionExpired',
    OLD_VERSION: 'oldVersion'
  },
  trashBookId: 'trash',
  noteStatus: {
    NONE: 'none',
    ACTIVE: 'active',
    ON_HOLD: 'onHold',
    COMPLETED: 'completed',
    DROPPED: 'dropped'
  },
  noteShare: {
    PRIVATE: 'private',
    PUBLIC: 'public'
  },
  tagColors: [ 'default', 'red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black' ],
  supportedImageFileTypes: [ 'image/png', 'image/jpeg', 'image/jpg', 'image/svg', 'image/gif' ],
  maxAttachmentFileSize: 10 * 1024 * 1024,
  taxPercentage: 8
}
