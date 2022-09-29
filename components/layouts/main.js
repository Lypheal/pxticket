import Head from 'next/head'
import dynamic from 'next/dynamic'
import Navbar from '../navbar.tsx'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelPlanetLoader from '../voxel-planet-loader'

const LazyVoxelPlanet = dynamic(() => import('../voxel-planet'), {
  ssr: false,
  loading: () => <VoxelPlanetLoader />
})

const Main = ({ children, router }) => {
  return (
    
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, inital-scale=1" />
        <meta name="description" content="The PxLabs' Homepage" />
        <meta name="author" content="PxLabs" />
        <meta name="author" content="Bhavya" />
        <link rel="apple-touch-icon" href="logo.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="PxLabs' Homepage" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/banner.png" />
        <title>PxLabs - Homepage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.xl" pt={10}>
        <LazyVoxelPlanet />
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
