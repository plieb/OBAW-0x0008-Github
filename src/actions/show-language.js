/* module imports */
const agent = require('superagent-promise')(require('superagent'), Promise)
const formatter = require('../formatter')
const languages = ['Asssembly', 'C', 'C++', 'Go', 'Java', 'JavaScript', 'Python', 'Ruby', 'Rust', 'Swift',]

export default async function showLanguage(res) {
  console.log('SHOW LANGUAGE')

  const replies = []
  const quickReplies = []
  replies.push(formatter.formatMsg(res.reply()))
  languages.forEach((l) => {
    quickReplies.push({
      name: l,
      value: `Show me the top starred repositories in ${l}`,
    })
  })
  replies.push(formatter.formatQuickReplies(quickReplies))
  return replies
}
