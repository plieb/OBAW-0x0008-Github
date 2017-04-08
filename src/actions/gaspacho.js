/* module imports */
const agent = require('superagent-promise')(require('superagent'), Promise)
const formatter = require('../formatter')

export default async function gaspacho(res) {
  console.log('GASPACHO')

  const replies = []
  const quickReplies = []
  replies.push(formatter.formatMsg(res.reply()))
  replies.push(formatter.formatMsg('Voici les ingredients necessaires :'))
  replies.push(formatter.formatMsg('3 tomates\n1/2 oignon\n1 citron\n100g de billes de mozzarella\n5cl d\'huile d\'olive\nle jus d\'un citron\nbasilic Ducros\nsel et poivre'
))
  quickReplies.push({
    name: 'Oui',
    value: 'Oui',
  })
  quickReplies.push({
    name: 'Non',
    value: 'Non',
  })
  replies.push(formatter.formatQuickReplies(quickReplies, 'Avez-vous bien tous les ingredients ?'))
  return replies
}
