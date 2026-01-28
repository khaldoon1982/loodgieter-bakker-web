import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')

  // Reviews
  const reviews = [
    { name: 'Klaas Jansen', rating: 5, text: 'Snel en vakkundig geholpen bij lekkage.', isPublished: true },
    { name: 'Sophie de Boer', rating: 4, text: 'Goede service, duidelijke afspraken.', isPublished: true },
    { name: 'Mehmet Yilmaz', rating: 5, text: 'Vriendelijke loodgieter, probleem snel opgelost.', isPublished: true },
    { name: 'Anja Visser', rating: 5, text: 'Top bedrijf! Kwamen direct langs in het weekend.', isPublished: true },
    { name: 'Peter Bakker', rating: 4, text: 'Prima werk geleverd bij installatie sanitair.', isPublished: true },
    { name: 'Linda Smit', rating: 5, text: 'Zeer tevreden over de snelle service in Spijkenisse.', isPublished: true },
  ]

  for (const review of reviews) {
    await prisma.review.create({ data: review })
  }

  // FAQs
  const faqs = [
    {
      question_nl: 'Wat zijn jullie tarieven?',
      answer_nl: 'Wij hanteren transparante tarieven. Neem contact op voor een vrijblijvende offerte.',
      question_en: 'What are your rates?',
      answer_en: 'We offer transparent rates. Contact us for a free quote.',
      order: 1,
      isPublished: true
    },
    {
      question_nl: 'Werken jullie ook in het weekend?',
      answer_nl: 'Ja, voor spoedgevallen zijn wij ook in het weekend bereikbaar.',
      question_en: 'Do you work on weekends?',
      answer_en: 'Yes, for emergencies we are available on weekends.',
      order: 2,
      isPublished: true
    },
    {
      question_nl: 'Hoe snel kunnen jullie ter plaatse zijn?',
      answer_nl: 'In Spijkenisse en omgeving zijn we vaak binnen 30-60 minuten aanwezig.',
      question_en: 'How quickly can you be on site?',
      answer_en: 'In Spijkenisse and surroundings we are often on site within 30-60 minutes.',
      order: 3,
      isPublished: true
    },
    {
      question_nl: 'Geven jullie garantie op het werk?',
      answer_nl: 'Ja, wij geven standaard garantie op al onze installaties en reparaties.',
      question_en: 'Do you provide a warranty?',
      answer_en: 'Yes, we provide standard warranty on all our installations and repairs.',
      order: 4,
      isPublished: true
    },
    {
      question_nl: 'Voeren jullie ook dakreparaties uit?',
      answer_nl: 'Ja, wij zijn gespecialiseerd in dak- en zinkwerk.',
      question_en: 'Do you also perform roof repairs?',
      answer_en: 'Yes, we specialize in roofing and zinc work.',
      order: 5,
      isPublished: true
    },
    {
      question_nl: 'Wordt verstopping direct verholpen?',
      answer_nl: 'In 9 van de 10 gevallen kunnen we een verstopping direct verhelpen met onze apparatuur.',
      question_en: 'Is blockage fixed immediately?',
      answer_en: 'In 9 out of 10 cases we can fix a blockage immediately with our equipment.',
      order: 6,
      isPublished: true
    }
  ]

  for (const faq of faqs) {
    await prisma.fAQ.create({ data: faq })
  }

  console.log('Seeding finished.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
