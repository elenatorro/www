import React from 'react'
import { alignSelf } from 'styled-system'
import { OutlineButton, Flex, NavLink, Input, Text } from 'components/elements'

const ContactButton = NavLink.extend`
  ${alignSelf};
  padding: 0;
  transition: opacity 0.15s ease;
  &:hover {
    opacity: 0.5;
  }
`

const CustomNavLink = NavLink.extend`
  transition: all 0.1s ease-out;
  &:hover {
    opacity: 0.5;
  }
`

ContactButton.defaultProps = {
  is: 'a',
  blacklist: [...Object.keys(NavLink.propTypes), 'alignSelf']
}

const SignButton = OutlineButton.extend`
  color: #10111b;
  background-color: white;
  box-shadow: none;
  transition: opacity 0.15s ease;

  &:hover {
    color: #10111b;
    background-color: white;
    opacity: 0.5;
  }
`

export default props => (
  <Flex is='footer' flexDirection='column' {...props}>
    <Flex
      mb={2}
      flexDirection={['column', '', 'row']}
      alignItems='center'
      py={3}
      p
    >
      <Flex flexDirection='column'>
        <Text fontSize={1}>Early access and updates on new releases.</Text>
        <Flex py={3} px={0} alignItems='center' justifyContent='flex-start'>
          <form
            action='https://microlink.us17.list-manage.com/subscribe/post?u=13504896341022a643b87c538&id=0d0978d452'
            method='post'
          >
            <Input
              name='EMAIL'
              placeholder='Email Address...'
              width={'12rem'}
              py={1}
              px={2}
              mr={2}
            />
            <SignButton py={'10px'} children='Sign Up' />
          </form>
        </Flex>
      </Flex>
      <Flex mt={[3, '', 0]} ml={[0, '', 'auto']} flexDirection='column'>
        <ContactButton
          color='white'
          fontWeight='bold'
          fontSize={[3, '', 5]}
          href='mailto:hello@microlink.io'
          target='_blank'
          children='hello@microlink.io'
          alignSelf={['center', '', 'flex-start']}
        />
        <Flex w={1} justifyContent={['center', '', 'flex-end']}>
          <CustomNavLink mr={2} href='/privacy' children='Privacy' />
          <CustomNavLink mr={2} href='/terms' children='Terms' />
          <CustomNavLink
            mr={2}
            target='_blank'
            href='http://twitter.com/microlinkhq'
            children='Twitter'
          />
          <CustomNavLink
            target='_blank'
            href='http://github.com/microlinkhq'
            children='GitHub'
          />
        </Flex>
      </Flex>
    </Flex>
  </Flex>
)
