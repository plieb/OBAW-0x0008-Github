/* module imports */
const agent = require('superagent-promise')(require('superagent'), Promise)
const formatter = require('../formatter')

export default async function yes(res, payload) {
  console.log('YES')

  const replies = []
  const quickReplies = []
  replies.push(formatter.formatMsg(res.reply()))
  quickReplies.push({
    name: 'Suite',
    value: 'Suite',
  })
  replies.push(formatter.formatQuickReplies(quickReplies, 'Cliquez sur suite pour continuer'))
  return replies
}
