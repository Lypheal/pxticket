import { Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { QuestionIcon } from '@chakra-ui/icons'
import { Meta } from '../components/roadmap'

const Faqs = () => (
  <Layout title="faqs">
    <Container maxW="container.lg">
      <Heading as="h3" fontSize={30} mb={4}>
        Frequently Asked Questions
      </Heading>
      <Heading as="h4" fontSize={14} mb={1} paddingBottom={4}>
        Feel free to message us on twitter or open a ticket in our Discord server if there are questions
        that have not been addressed.
      </Heading>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          <QuestionIcon paddingRight={1.5} paddingTop={1} />
          Why Us?
        </Heading>
        <Meta>We are for the people by the people.</Meta>
        <Paragraph>
          Our goals are a culmination of the members within our community. As it
          grows and evolves so does our vision. The core values we embody are
          creativity and learning. We are a project where people from many
          different walks of life are encouraged to contribute and teach one
          another. From trading, to coding, and artistry of all types we appreciate all
          crafts and understand that creativity is intelligence having fun.
          Another main goal of this project is to help marginalized communities
          obtain financial literacy and learn more about the cryptocurrency
          space. Paired with a low mint price we will provide tools and
          resources geared at teaching new comers to the space all the
          information they will need to be successful.
        </Paragraph>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          <QuestionIcon paddingRight={1.5} paddingTop={1} />
          How do I get an invite to the discord?
        </Heading>
        <Meta>Engage With Us</Meta>
        <Paragraph>
          Follow us on social media or just simply scroll down on the main page of this website.
        </Paragraph>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title" paddingTop={5}>
          <QuestionIcon paddingRight={1.5} paddingTop={1} />
          How can I get a Membership Pass?
        </Heading>
        <Meta>Minting, Giveaways and More</Meta>
        <Paragraph>
          The public sale date has not been announced yet, but active community
          members can win a free mint just by participating in the
          discord, or engaging with us on social media. You can also mint one using the links provided on the top bar.
        </Paragraph>
      </Section>
      <Section delay={0.4}>
        <Heading as="h3" variant="section-title" paddingTop={5}>
          <QuestionIcon paddingRight={1.5} paddingTop={1} />
          How many membership passes will be reserved?
        </Heading>
        <Meta>50 Membership Passes</Meta>
        <Paragraph>
          We will use these NFTs for marketing, to form partnerships, and
          perform giveaways.{' '}
        </Paragraph>
      </Section>
    </Container>
  </Layout>
)

export default Faqs
