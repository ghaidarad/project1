'use strict'

module.exports = (robot) => {
  robot.hear(/Hello/, function(res) {
    let responses = ["Hello!", "Hi!","Good morning", "Good after noon", "Good evening" ]
    let rand = Math.floor(Math.random() * responses.length)
    return res.send(`${responses[rand]}`);
  });

  robot.hear(/I like coffe/i, (res) => {
      res.emote('me too <3')
    })
  robot.hear(/want extra sugar/i, (response) => {
       const sugarextra = +robot.brain.get('sugar') || 0
      
         if (sugarextra > 4) {
           response.reply('Noo its enough')
           return
         }
         response.reply('Sure!')
         robot.brain.set('sugar', sugarextra + 1)
       })
  /*robot.respond (/send to Channels/i, (res) => {
       res.envelope.room = "#js-app"
       res.send = "Hello @channel" })
       */
   /*
    robot.hear (/room info/i, (msg) => {
    msg.send = "This room is: #js-app"})
    */
  }
 