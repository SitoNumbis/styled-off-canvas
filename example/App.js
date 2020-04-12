import { hot } from 'react-hot-loader/root'
import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Menu as BurgerIcon } from '@styled-icons/remix-fill/Menu'

import { Menu, Overlay, Content, StyledOffCanvas } from '../src/'

import List from './components/List'
import Close from './components/Close'
import GitHub from './components/GitHub'

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background: linear-gradient(150deg, rgba(218, 135, 196, 1) 0%, rgba(125, 50, 108, 1) 100%);
    margin: 0;
    min-height: 100%;
  }
`

const Container = styled.div`
  color: #fff;
  font-family: Helvetica, Arial, sans-serif;
`
const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Container>
      <GlobalStyle />

      <StyledOffCanvas
        push
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Content css={{ minHeight: 'calc(100vh - 80px)', padding: '40px' }}>
          <div css={{ textAlign: 'right' }}>
            <BurgerIcon
              size={48}
              css={{
                background: '#fff',
                borderRadius: '6px',
                color: '#333',
                cursor: 'pointer',
                padding: '8px'
              }}
              onClick={() => { setIsOpen((isOpen) => !isOpen) }}
            />
          </div>

          <h1>Hello.</h1>
          <p>A simple off canvas menu built with styled-components 💅</p>

          <GitHub />
        </Content>

        <Menu>
          <>
            <Close onClose={() => setIsOpen(false)} />
            <List />
          </>
        </Menu>

        <Overlay />
      </StyledOffCanvas>
    </Container>
  )
}

export default hot(App)
