import Title from '../src/components/Title'
import { SiReact, SiJavascript, SiNodedotjs, SiHtml5, SiCss3, SiJquery, SiNextdotjs, SiMongodb, SiRedux, SiAmazonaws, SiMysql, SiSvelte, SiVuedotjs, SiFlutter } from 'react-icons/si'
import { BsFillEmojiSmileFill, BsFillEmojiLaughingFill, BsFillEmojiHeartEyesFill, BsCheckCircleFill } from 'react-icons/bs'
import IconWrap from '../src/components/IconWrap'
import { Flex, Spacer, List, ListItem, Heading } from '@chakra-ui/react'

const Skill = () => {
  const skills = [
    '웹표준, 웹 접근성 및 SEO를 고려한 시멘틱 마크업 작업이 가능합니다.',
    'HTML/CSS로 주어진 디자인 레이아웃에 따라 웹을 디자인할 수 있습니다.',
    'CSS Media Query를 사용하여 반응형 웹을 만들 수 있습니다.',
    'Vanila JS 또는 제이쿼리를 사용해 DOM 객체를 제어할 수 있습니다.',
    'AWS EC2와 Node.js를 사용해 클라이언트와 서버를 구성 할 수 있습니다.',
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

        <Flex gap="3">
          <IconWrap>
            <SiJavascript color="#f7e018" size="100" />
          </IconWrap>
          <Spacer />
          <IconWrap>
            <SiReact color="#61dafb" size="100" />
          </IconWrap>
          <Spacer />
          <IconWrap>
            <SiNextdotjs color="#000" size="100" />
          </IconWrap>
          <Spacer />
          <IconWrap>
            <SiRedux color="#764abc" size="100" />
          </IconWrap>
          <Spacer />
          <IconWrap>
            <SiVuedotjs color="#41b883" size="100" />
          </IconWrap>
          <Spacer />
          <IconWrap>
            <SiNodedotjs color="#8bc500" size="100" />
          </IconWrap>
          <Spacer />
          <IconWrap>
            <SiHtml5 color="#ff5723" size="100" />
          </IconWrap>
          <Spacer />
          <IconWrap>
            <SiCss3 color="#007bc9" size="100" />
          </IconWrap>
        </Flex>

        <h3 className="flex justify-start items-center text-2xl font-bold py-4">
          <BsFillEmojiLaughingFill className="my-2 mr-2 ml-0" />
          사용해본 기술 스택
        </h3>
        <div className="main-skill flex  justify-around  flex-wrap items-center pb-10">
          <IconWrap txt="MongoDB">
            <SiMongodb color="#13aa52" />
          </IconWrap>
          <IconWrap txt="MySQL">
            <SiMysql color="#01618a" />
          </IconWrap>
          <IconWrap txt="AWS EC2">
            <SiAmazonaws color="#ff9a02" />
          </IconWrap>
          <IconWrap txt="JQuery">
            <SiJquery color="#2e68a8" />
          </IconWrap>
        </div>

        <h3 className="flex justify-start items-center text-2xl font-bold py-4">
          <BsFillEmojiHeartEyesFill className="my-2 mr-2 ml-0" />
          관심있는 기술 스택
        </h3>

        <div className="main-skill flex justify-around flex-wrap items-center pb-14">
          <IconWrap txt="Svelte">
            <SiSvelte color="#ff3b00" />
          </IconWrap>

          <IconWrap txt="Flutter">
            <SiFlutter color="#02c7fa" />
          </IconWrap>
        </div>
      </section>
    </>
  )
}

export default Skill
