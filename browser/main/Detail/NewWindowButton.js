import PropTypes from 'prop-types'
import React from 'react'
import CSSModules from 'browser/lib/CSSModules'
import styles from './NewWindowButton.styl'
import _ from 'lodash'
import i18n from 'browser/lib/i18n'

class NewWindowButton extends React.Component {
  constructor (props) {
    super(props)
    
    this.state = {
      isOpen: false
    }
  }
  
  handleMouseDown (e) {
    this.setState({
      isOpen: true
    })
  }

  render() {
    return (
      <button styleName='control-detachedNote'>
          <img styleName='iconInfo'
            src='../resources/icon/new-window.svg'
          />
        <span lang={i18n.locale} styleName='tooltip'>{i18n.__('OpenNewWindow')}</span>
      </button>
    )
  }
}

NewWindowButton.PropTypes = {
  isOpen: PropTypes.bool
}

export default CSSModules(NewWindowButton, styles)