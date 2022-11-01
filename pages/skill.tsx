import Title from '../src/components/Title'
import { SiPython, SiReact, SiJavascript, SiHtml5, SiCss3, SiNextdotjs, SiMongodb, SiRedux, SiAmazonaws, SiSvelte, SiVuedotjs, SiFlutter, SiWebpack } from 'react-icons/si'
import { BsFillEmojiHeartEyesFill, BsCheckCircleFill } from 'react-icons/bs'
import IconWrap from '../src/components/IconWrap'
import { Flex, SimpleGrid, Center, Spacer, List, ListItem, Heading } from '@chakra-ui/react'

const Skill = () => {
  const skills = [
    '웹표준, 웹 접근성 및 SEO를 고려한 시멘틱 마크업 작업이 가능합니다.',
    // 'HTML/CSS로 주어진 디자인 레이아웃에 따라 웹을 디자인할 수 있습니다.',
    // 'CSS Media Query를 사용하여 반응형 웹을 만들 수 있습니다.',
    // 'Vanila JS 또는 제이쿼리를 사용해 DOM 객체를 제어할 수 있습니다.',
    // 'AWS EC2와 Node.js를 사용해 클라이언트와 서버를 구성 할 수 있습니다.',
  ]
  return (
    <>
      <Title />
      <section className="skill-wrap">
        <List spacing={3}>
          {skills.map((s, idx) => (
            <ListItem key={s + idx} as="li">
              <Heading fontSize={'1.5em'}>{s}</Heading>
            </ListItem>
          ))}
        </List>
        기술 스택
        <SimpleGrid minChildWidth="100px" spacing="30px">
          <IconWrap title="JavaScript">
            <SiJavascript color="#f7e018" size="100" />
          </IconWrap>
          <IconWrap title="React">
            <SiReact color="#61dafb" size="100" />
          </IconWrap>
          <IconWrap title="Vue.js">
            <SiVuedotjs color="#41b883" size="100" />
          </IconWrap>
          <IconWrap title="Next.js 12">
            <SiNextdotjs color="#000" size="100" />
          </IconWrap>

          <IconWrap title="Webpack">
            <SiWebpack color="#53b7e6" size="100" />
          </IconWrap>

          <IconWrap title="Redux">
            <SiRedux color="#764abc" size="100" />
          </IconWrap>
          <IconWrap title="HTML5">
            <SiHtml5 color="#ff5723" size="100" />
          </IconWrap>
          <IconWrap title="CSS3">
            <SiCss3 color="#007bc9" size="100" />
          </IconWrap>
        </SimpleGrid>
        <Center gap={{ base: 5, lg: 3 }}>
          <Spacer />
        </Center>
        사용해본 기술 스택
        <SimpleGrid minChildWidth="100px" spacing="30px">
          <IconWrap title="MongoDB">
            <SiMongodb color="#13aa52" size="100" />
          </IconWrap>

          <IconWrap title="AWS EC2">
            <SiAmazonaws color="#ff9a02" size="100" />
          </IconWrap>
        </SimpleGrid>
        관심있는 기술 스택
        <SimpleGrid minChildWidth="100px" spacing="30px">
          <IconWrap title="Next.js 13">
            <SiNextdotjs color="#000" size="100" />
          </IconWrap>
          <IconWrap title="Svelte">
            <SiSvelte color="#ff3b00" size="100" />
          </IconWrap>
          <IconWrap title="ReactNative">
            <SiReact color="#61dafb" size="100" />
          </IconWrap>
          <IconWrap title="Flutter">
            <SiFlutter color="#02c7fa" size="100" />
          </IconWrap>
          <IconWrap title="Python">
            <SiPython color="#4583b5" size="100" />
          </IconWrap>
        </SimpleGrid>
      </section>
    </>
  )
}

export default Skill
