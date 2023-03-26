// import RemoveFromGroupCron from '../../../app/api/cron/remove.from.group';
// import RetryAddToGroupCron from '../../../app/api/cron/retry.add';
// import CheckCreatorCron from '../../../app/api/cron/creator.check';
// import CreateGroupCron from '../../../app/api/cron/create.group';
// import RetryAddToMessage from '../../../app/api/cron/add.to.locked.message';
// import CheckMemberCron from '../../../app/api/cron/member.check';
// import CreateBackupCron from '../../../app/api/cron/create.backup.group';
// import AddBotBackupCron from '../../../app/api/cron/add.bot.to.backupGroup';
// import CreateLinksCron from '../../../app/api/cron/create.backup.links';
import ExpiryReminderCron from '../../../app/api/cron/expiry.reminder';
// import AddRemovalBotCron from '../../../app/api/cron/add.removal.bot';
// import ReplaceBots from '../../../app/api/cron/replace.bots';
module.exports = function (app, path = '') {
    // RemoveFromGroupCron.post(app, '/cron/removeFromGroupCron');
    // RetryAddToGroupCron.post(app, '/cron/retryAddToGroup');
    // CreateGroupCron.post(app, '/cron/createGroup');
    // RetryAddToMessage.post(app, '/cron/retryMessage');
    // CheckCreatorCron.post(app, '/cron/checkCreator');
    // CheckMemberCron.post(app, '/cron/checkMember');
    // CreateBackupCron.post(app, '/cron/createBackupGroup');
    // AddBotBackupCron.post(app, '/cron/addBot');
    // CreateLinksCron.post(app, '/cron/links');
    ExpiryReminderCron.post(app, '/cron/epiryReminder');
    // AddRemovalBotCron.post(app, '/cron/addremovalBot');
    // ReplaceBots.post(app, '/cron/replaceBots');
};