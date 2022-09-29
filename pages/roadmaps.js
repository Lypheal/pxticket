import { Container, Heading} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { LockIcon } from '@chakra-ui/icons'
import { Meta } from '../components/roadmap'

const Roadmaps = () => (
  
<Layout title="Roadmaps">
<Container maxW = "container.lg">
  <Heading as="h3" fontSize={30} mb={4} >
    Roadmap Activations
  </Heading>
  <Heading as="h4" fontSize={14} mb={1} paddingBottom={4}>
    We are here for a good and a long time. 
  </Heading>
  <Section delay={0.2} > 
          <Heading as="h3" variant="section-title">
          <LockIcon paddingRight={1.5} paddingTop={1} />
          0%
          </Heading>
          <Meta>Startup</Meta>
          <Paragraph >
            Initial pre-sale of membership passes for whitelisted members, then public mint initiated. 
          </Paragraph>
          </Section>      
          <Section delay={0.3} > 
          <Heading as="h3" variant="section-title" paddingTop={5}>
          <LockIcon paddingRight={1.5} paddingTop={1}/>
          25%
          </Heading>
          <Meta>Giveaways</Meta>
          <Paragraph>
            Holder prize giveaways and contests initiated. 
          </Paragraph>
          </Section>   
          <Section delay={0.4} > 
          <Heading as="h3" variant="section-title" paddingTop={5}>
          <LockIcon paddingRight={1.5} paddingTop={1}/>
          50%
          </Heading>
          <Meta>Launchpad</Meta>
          <Paragraph>
          We will accept our first NFT launchpad proposal!
           </Paragraph>
        </Section>
        <Section delay={0.5} > 
          <Heading as="h3" variant="section-title" paddingTop={5}>
          <LockIcon paddingRight={1.5} paddingTop={1}/>
          75%
          </Heading>
          <Meta>Expansion</Meta>
          <Paragraph>
         Will look forward to more collaborations and maybe mergers. 
         </Paragraph>
        </Section>
        <Section delay={0.5} > 
          <Heading as="h3" variant="section-title" paddingTop={5}>
          <LockIcon paddingRight={1.5} paddingTop={1}/>
          The PxLabs DAO
          </Heading>
          <Meta>100%</Meta>
          <Paragraph>
         Continued growth and expansion of the PxLabs network within the metaverse. Members will have access to upcoming PxLabs projects and apps in development. We hope to expand into a fully automated DAO one day.
         </Paragraph>
        </Section>
</Container>
</Layout>

)

export default Roadmaps
