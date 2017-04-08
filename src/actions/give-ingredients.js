/* module imports */
const agent = require('superagent-promise')(require('superagent'), Promise)
const formatter = require('../formatter')

export default async function giveIngredient(res) {
  console.log('GIVE INGREDIENTS')

  const replies = []
  const cardsReplies = []
  const pictures = []
  replies.push(formatter.formatMsg(`Voici 3 recettes :) Laquelle souhaitez-vous que nous fassions ensemble ?`))
  cardsReplies.push({
    name: 'Gaspacho Mozzarella',
    picture: 'https://raw.githubusercontent.com/plieb/chefbot/master/assets/image001.png',
    payload: 'Je veux faire le Gaspacho Mozzarella',
  })
  cardsReplies.push({
    name: 'Burger a la Caprese',
    picture: 'https://raw.githubusercontent.com/plieb/chefbot/master/assets/image002.png',
    payload: 'Je veux faire le Burger a la Caprese',
  })
  cardsReplies.push({
    name: 'Pasta al Freddo',
    picture: 'https://raw.githubusercontent.com/plieb/chefbot/master/assets/image003.png',
    payload: 'Je veux faire les Pasta al Freddo',
  })
  replies.push(formatter.formatCardsReplies(cardsReplies))
  return replies
}
