const cards = [
    'Given a choice of anyone in the world who would you choose as a dinner guest?',
    'Would you like to be famous? In what way? ',
    'Before making a telephone call do you ever rehearse what youre going to say? why? ',
    'what would you constitue a perfect day for you? ',
    'when did you last sing to youself or to someone else? ',
    'If you were able to live to the age of 90 and retain either the mind or the body of a 30-year-old for the last 60 years of your life, which would you want? ',
    'do you have a secret hunch about how you will die? ',
    'name three things you and your partner appear to have in common ',
    'for what in your life do you feel most grateful? ',
    'if you could chage anything about the wayt you were raised, what would it be? ',
    'take four minutes and tell your partner your life story in as much detail as possible ',
    'if you could wake up tomorrow having gained any one quality or ability what would it be? ',
    'if a crystal ball could tell you the truth about yourself, your life, the future or anything else, what would you want to know? ',
    'is there something that you,ve dreamed of doing for a long time? why havent you done it? ',
    'what is the greatest accomplishment of your life? ',
    'what do you value most in a friendship? ',
    'what is your most treasured memory? ',
    'what is your most terrible memory? ',
    'if you knew that in one year you would die suddenly, would you change anything about the way you are now living? why? ',
    'what does friendship mean to you? ',
    'what roles do love and affection play in your life? ',
    'alternate sharing something you consider a positive characteristic of your partner. share a total of five items. ',
    "how close and warm is your family? do you feel your childhood was happier that most other people's? ",
    'how do you feel about your relationship with your mother? ',
    'make theree true "we" statements each. for instance "we are both in this room feeling..." ',
    'complete this sentence: "I wish i had someone with whom i could share ..." ',
    'if you were going to become a close friend with your partner, plear share what would be important for hem or her to know. ',
    "tell your partner what you like about them; be very honest this time, saying things that you might not say to somenoe you've just met. ",
    'share with your partner an embarrasing moment in your life. ',
    'when did you last cry in front of another person? or by yourself? ',
    'tell your partner something that you like about them already. ',
    'what, if anything, is too serious to be joked about? ',
    'if you were to die this evening with no pooertunity to communicate with anyone, what would you most regret not having told someone? why havent you told them yet? ',
    'your house, containing everything you own, chatches fire. after saving your loved ones and pets,you have time to safely make a final dash to save any one item. what would it be? why? ',
    'of all the people in your family, whose death would you find most disturbing? why? ',
    "share a personal problem and ask your partner's advice on hwo he or she might handle it. also, alsk your partner to refelct back to you hwo you seem to be feeling about the problem you have chosen.",
];

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

document.getElementById('cardtext').innerHTML = cards[randomIntFromInterval(0, cards.length - 1)];
