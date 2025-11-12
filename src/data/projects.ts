import type { Project } from '@/types'
import iynk from '@/assets/images/projects/iynk.png'
import learnCodeAbroad from '@/assets/images/projects/learncodeabroad.jpg'
import velocity from '@/assets/images/projects/velocity.png'
import microwave from '@/assets/images/projects/microwave.png'
import womapp from '@/assets/images/projects/womapp.png'
import pad from '@/assets/images/projects/pad/pad.png'

export const projects: Project[] = [
  {
    title: 'IYNK',
    description: 'Find your next tattoo.',
    image: iynk,
    role: 'Co-Founder & CTO',
  },
  {
    title: 'Pad',
    description: 'Rent with no deposit.',
    image: [pad],
    role: 'Co-Founder & CTO',
  },
  {
    title: 'LearnCodeAbroad',
    description: 'Code in paradise.',
    image: learnCodeAbroad,
    role: 'Founder & CEO',
  },
  {
    title: 'VCAL',
    description: 'Funding startups.',
    image: velocity,
    role: 'Technology Advisor',
  },
  {
    title: 'Microwave Media',
    description: 'A boutique digital agency.',
    image: microwave,
    role: 'Co-Founder',
  },
  {
    title: 'womAPP',
    description: 'Brand advocacy platform.',
    image: womapp,
    role: 'Co-Founder',
  },
]
