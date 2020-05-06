module.exports = Object.freeze({
  TOKEN: '1155146456:AAFE9nAy02VmBmeG6cng49qINcGL2rRbNPo',
  ARIA_SECRET: '',
  ARIA_DOWNLOAD_LOCATION: '/home/user/path/to/download/dir (no trailing "/")',
  ARIA_DOWNLOAD_LOCATION_ROOT: '/', //The mountpoint that contains ARIA_DOWNLOAD_LOCATION
  ARIA_FILTERED_DOMAINS: ['', '', '', '', ''], // Prevent downloading from URLs containing these substrings
  ARIA_FILTERED_FILENAMES: [''], // Files/top level directories with these substrings in the filename won't be downloaded
  ARIA_PORT: 8210, // Port for aria2c RPC server, if you change this here, make sure to update aria.sh as well
  INDEX_DOMAIN: '', // Supporting Sharable Links
  GDRIVE_PARENT_DIR_ID: '1GAM6JF3NXfEOgwQl-e0IrTsGDQa1TUJO',
  SUDO_USERS: [620142151],	// Telegram user IDs. These users can use the bot in any chat.
  AUTHORIZED_CHATS: [-324440264],	// Telegram chat IDs. Anyone in these chats can use the bot.
  STATUS_UPDATE_INTERVAL_MS: 12000, // A smaller number will update faster, but might cause rate limiting
  DRIVE_FILE_PRIVATE: {
    ENABLED: false,
    EMAILS: ['', '']
  },
  DOWNLOAD_NOTIFY_TARGET: {  // Information about the web service to notify on download completion.
    enabled: false,   // Set this to true to use the notify functionality
    host: 'hostname.domain',
    port: 80,
    path: '/botNotify'
  },
  COMMANDS_USE_BOT_NAME: {
    ENABLED: false,  // If true, all commands except '/list' has to have the bot username after the command
    NAME: "@nameOf_bot"
  },
  IS_TEAM_DRIVE: true
});
