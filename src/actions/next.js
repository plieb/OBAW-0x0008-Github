/* module imports */
const agent = require('superagent-promise')(require('superagent'), Promise)
const formatter = require('../formatter')

export default async function next(res, payload) {
  console.log('NEXT')

  const replies = []
  const quickReplies = []
  replies.push(formatter.formatMsg(res.reply()))
  quickReplies.push({
    name: 'Fini !',
    value: 'C\'est fini !',
  })
  replies.push(formatter.formatQuickReplies(quickReplies, 'Cliquez pour terminer'))
  return replies
}
