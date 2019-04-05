import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import CSSModules from 'browser/lib/CSSModules'
import NoteList from '../NoteList'
import Detail from '../Detail'
import dataApi from 'browser/main/lib/dataApi'
import _ from 'lodash'
import mobileAnalytics from 'browser/main/lib/AwsMobileAnalyticsConfig'
import eventEmitter from 'browser/main/lib/eventEmitter'
import store from 'browser/main/store'
import i18n from 'browser/lib/i18n'
import { getLocales } from 'browser/lib/Languages'
import applyShortcuts from 'browser/main/lib/shortcutManager'
import styles from './Note.styl'

const path = require('path')
const electron = require('electron')
const { remote } = electron

class Note extends React.Component {
  render () {
    return (
      <div>NOTE EDIT WINDOW</div>
    )
  }
}

export default connect(x => x)(CSSModules(Note, styles))

