import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Context from './Context'

const Div = styled.div(({ blur, position, duration, isOpen, width }) => `
  filter: ${blur && isOpen ? 'blur(3px)' : 'inherit'};
  height: 100%;
  transform: translate3d(${isOpen ? position === 'left' ? `-${width}` : width : 0}, 0, 0);
  transition: all ${duration} ease 0s;
`)

/**
 * Content wrapper component
 *
 * @param   {string}    className styled-components className for custom styling
 * @returns {component}           React component
 */
const Content = ({ className, children }) => {
  const {
    blur,
    isOpen,
    menuDuration,
    position,
    push,
    width
  } = useContext(Context)

  if (!push) return children

  return (
    <Div
      className={className}
      blur={blur}
      duration={menuDuration}
      position={position === 'left' ? 'right' : 'left'}
      isOpen={isOpen}
      width={width}
    >
      {children}
    </Div>
  )
}

Content.propTypes = {
  className: PropTypes.object
}

export default Content
