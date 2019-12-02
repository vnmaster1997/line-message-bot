var app = require('express')();
var LINEBot = require('line-messaging');
var bot = LINEBot.Client({
  channelID: 1653593274,
  channelSecret: '22fdc39f502027da0e3913b23ba3c36e',
  channelAccessToken: 'I/tp3NfvyWOYPG4VdGT8nOHk3KafPPbWqLsczP/dUg4cMrvBrn0HEYjAweA7WW5udViV4S+xLtBCUEuMtVPjfac0eIBjRxk5L9ziwFKEjnW4i4qXUjnizSUu/3ZGYPlRr2DoS4ibcJeBzqxjrkABFQdB04t89/1O/w1cDnyilFU='
}, server);
app.use(bot.webhook('/webhook'));
bot.on(LINEBot.Events.MESSAGE, function(replyToken, message) {
  // add code below.
  console.log(replyToken);
});
bot.listen(8080);