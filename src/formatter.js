/* module imports */

exports.formatMsg = msg => ({
  type: 'text',
  content: msg,
})

exports.formatImg = link => ({
  type: 'picture',
  content: link,
})

exports.formatQuickReplies = (quickRp, sentence) => {
  const elements = []
  quickRp.forEach((elem) => {
    elements.push({
      title: elem.name,
      value: elem.value,
    })
  })
  return {
    type: 'quickReplies',
    content: {
      title: sentence,
      buttons: elements,
    },
  }
}

exports.formatCardsReplies = (cards) => {
  const elements = []
  cards.forEach((c) => {
    elements.push({
      title: c.name,
      imageUrl: c.picture,
      buttons: [
        {
          type: 'web_url',
          title: c.name,
          value: c.link,
        },
      ],
    })
  })
  return {
    type: 'carouselle',
    content: elements,
  }
}
