import type { Student } from '@/types'
import rupesh from '@/assets/images/students/rupesh.jpeg'
import jackFuller from '@/assets/images/students/jack-fuller.jpeg'
import aleks from '@/assets/images/students/aleks.jpeg'
import danesh from '@/assets/images/students/danesh.jpeg'
import aliMolloy from '@/assets/images/students/ali-molloy.jpeg'
import sharon from '@/assets/images/students/sharon.jpeg'

export const students: Student[] = [
  {
    name: 'Rupesh Bhatti',
    quote:
      'I had the pleasure of being taught the Web Development Immersive course at General Assembly London by Alex in 2017. He has the skill of making the teaching experience fun: often teaching technical concepts in a comedic manner! Alex is one of the most reliable people that I have had the pleasure of working with: he makes himself available for his students at all hours of the day and is always happy to help. An excellent teacher and an even better developer: Alex is the type of expert developer that I would love to keep learning from in the future. An absolute genius and a leader in his field!',
    image: rupesh,
    date: '14 December 2017',
  },
  {
    name: 'Jack Fuller',
    quote:
      "Alex taught me throughout the Web Development Immersive (24) at General Assembly beginning November 2016. His enthusiasm for code and for seeing us succeed came across right from the beginning of the course and stayed through to the final projects. Alex not only teaches you often difficult technical concepts, he gives you the invaluable skill of how to research and learn them for yourself. If you're looking to learn web development in a relaxed yet academic environment I'd recommend one of Alex's courses at GA.",
    image: jackFuller,
    date: '18 May 2017',
  },
  {
    name: 'Aleks Mikolajczyk',
    quote:
      'I thoroughly enjoyed having Alex Chin as my instructor during General Assembly Web Development Immersive cohort number 24, and I would recommend him to anyone looking for coding expertise. His strong coding knowledge, combined with his patience and sense of humour, made for a great environment, in which I learned a great deal while having a good time. While learning to code is often overwhelming, Alex made it much less daunting by a taking his time to explain concepts thoroughly and to answer any (and many!) questions. I know my classmates and I benefited a great deal from having Alex as our instructor.',
    image: aleks,
    date: '12 March 2017',
  },
  {
    name: 'Danesh Madarbakus',
    quote:
      'Alex was my head instructor on my recent WDI Immersive course with General Assembly. His classes were well organised and very clear, he made even the most complex concepts sound simple and easy to understand. Throughout the course he went above and beyond to support myself and my classmates. I feel lucky to have worked with him and I hope to stay in touch ;).',
    image: danesh,
    date: '9 March 2017',
  },
  {
    name: 'Ali Molloy',
    quote:
      "Alex is a great teacher. He's really engaging and enthusiastic and loves what he does. He has a great knack of weaving in interesting relevant stories to the curriculum which really help with the motivation during the intensive course.",
    image: aliMolloy,
    date: '5 March 2017',
  },
  {
    name: 'Sharon Wong',
    quote:
      "Given its complex, ever-evolving nature, web development can be a heady thing to dive into for initiates. That is why I was extremely fortunate to have Alex as an instructor. He has the rare ability to articulate foreign concepts in concise, relatable terms and definitely has a knack for creating useful analogies. He's also a compassionate individual with a real heart for the students he teaches and I was particularly impressed with how he managed to be a pillar of support for the biggest WDI class yet. Thanks for a memorable, life-changing semester at GA, Alex",
    image: sharon,
    date: '1 March 2017',
  },
]
