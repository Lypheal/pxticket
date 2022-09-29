import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
 import { GridItem } from '../components/grid-item'
import {
  IoLogoTwitter,
  IoLogoDiscord,
  // IoContract
} from 'react-icons/io5'
import thumbMetaMask from '../public/images/metamask.png'

const Page = () => {
  return (
    <Layout>
      <Container maxW = "container.sm" >
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          The Coolest NFT launchpad on the blockchain.
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Prof. Anime Doodle
            </Heading>
            <p>Genius Inventor, Professor at PxLabs University</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/prof.png"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Thesis
          </Heading>
          <Paragraph 
          
          >
            After years of being a model citzen, I&apos;ve realized that no one can guarantee me a 
            prosperous future but myself. 
            I only wish that I could have come to that conclusion sooner.
            According to my calculations the Social Security program will run out before I can even cash in 
            on my benefits.
            And so I decided I needed to gather the greatest minds to form an
            organization that can support the financial freedom of the
            people of the metaverse. 
            The Tridyminiumobulator(try-die-mini-uh-mob-you-later) that I built converts
            Etheruem into energy to bring my parallel selves into this world.
            You can contribute to my research by minting my counterparts.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/roadmaps">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="pink">
                Roadmap
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Blueprint
          </Heading>
          <BioSection>
            <BioYear>Supply:</BioYear>
            Limited to 2,500 in the pre-sale round. 10,000 membership passes in the public sale!
          </BioSection>
          <BioSection>
            <BioYear>Location:</BioYear>
            To keep the laws of physics and inter dimensional travel intact, our
            membership passes live on the Etheruem blockchain as ERC-1155 tokens.
            Gotta love science!
          </BioSection>
          <BioSection>
            <BioYear>Membership:</BioYear>
            Owning a pass will give rights to other exclusive membership benefits. Like gaining
            access to the PxLabs launchpad, and professionally designed merch. More coming soon.
          </BioSection>
        </Section>

        <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Official Links & Socials
        </Heading>
        <List>
          <ListItem>
            <Link href="https://twitter.com/labs_pxl" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @labs_pxl
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/labs_pxl" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoDiscord} />}
              >
                Discord
              </Button>
            </Link>
          </ListItem>
          <ListItem>
          {/* <Link href="" target="_blank"> */}
              {/* <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoContract} />}
              >
                Smart Contract
              </Button> */}
            {/* </Link> */}
          </ListItem>
        </List>
        <SimpleGrid columns={[1, 2, 2]} gap={5}>
          <GridItem
            href="https://www.youtube.com/watch?v=Af_lQ1zUnoM"
            title="Metamask Tutorial"
            thumbnail={thumbMetaMask}
          >
            Metamask complete setup
          </GridItem>
        </SimpleGrid>
        </Section>

      </Container>
    </Layout>
  )
}

export default Page
