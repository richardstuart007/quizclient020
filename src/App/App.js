//
// Libraries
//
import { createTheme, ThemeProvider, StyledEngineProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { useState } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
//
//  Debug Settings
//
import debugSettings from '../debug/debugSettings'
//
//  Pages
//
import QuizControl from '../pages/QuizControl'
//
//  Utilities
//
import writeHistory from '../services/writeHistory'
//
//  Common Components
//
import Layout from '../components/Layout/Layout'
//
//  Layout Theme
//
const theme = createTheme({})
//
//  Client
//
const { LOC_L10_DESC_CLIENT } = require('../services/constants.js')
const { LOC_L20_DESC_CLIENT } = require('../services/constants.js')
const { LOC_LOC_R10_DESC_CLIENT } = require('../services/constants.js')
const { LOC_LOC_R20_DESC_CLIENT } = require('../services/constants.js')
const { LOC_R10_R10_DESC_CLIENT } = require('../services/constants.js')
const { LOC_R20_R20_DESC_CLIENT } = require('../services/constants.js')
const { R10_DESC_CLIENT } = require('../services/constants.js')
const { R20_DESC_CLIENT } = require('../services/constants.js')
//
//  Server
//
const { LOC_L10_DESC_SERVER } = require('../services/constants.js')
const { LOC_L20_DESC_SERVER } = require('../services/constants.js')
const { LOC_LOC_R10_DESC_SERVER } = require('../services/constants.js')
const { LOC_LOC_R20_DESC_SERVER } = require('../services/constants.js')
const { R10_DESC_SERVER } = require('../services/constants.js')
const { R20_DESC_SERVER } = require('../services/constants.js')
//
//  Database
//
const { L10_DESC_DATABASE } = require('../services/constants.js')
const { L20_DESC_DATABASE } = require('../services/constants.js')
const { R10_DESC_DATABASE } = require('../services/constants.js')
const { R20_DESC_DATABASE } = require('../services/constants.js')
//
//  URL
//
const { LOC_L10_URLSERVER } = require('../services/constants.js')
const { LOC_L20_URLSERVER } = require('../services/constants.js')
const { LOC_R10_URLSERVER } = require('../services/constants.js')
const { LOC_R20_URLSERVER } = require('../services/constants.js')
const { R10_URLSERVER } = require('../services/constants.js')
const { R20_URLSERVER } = require('../services/constants.js')
//
// Debug Settings
//
const debugLog = debugSettings()
//
// Global
//
let g_firstTimeFlag = true
//----------------------------------------------------------------------------
//- Main Line
//----------------------------------------------------------------------------
export default function App() {
  if (debugLog) console.log(`Start APP`)
  const [pageCurrent, setPageCurrent] = useState('QuizSplash')
  //
  //  Screen Width
  //
  const ScreenMedium = useMediaQuery(theme.breakpoints.up('sm'))
  const ScreenSmall = !ScreenMedium
  sessionStorage.setItem('App_Settings_ScreenSmall', ScreenSmall)
  //
  //  Set PageStart
  //
  let PageStart = 'RefLibrary'
  sessionStorage.setItem('Nav_Page_PageStart', JSON.stringify(PageStart))
  //
  //  First Time Setup
  //
  if (g_firstTimeFlag) {
    g_firstTimeFlag = false
    firstTime()
  }
  //.............................................................................
  //  First Time Setup
  //.............................................................................
  function firstTime() {
    if (debugLog) console.log(`First Time APP Reset`)
    //------------------------------------------------------
    //  Set Defaults for REMOTE setup - Remote Netlify
    //------------------------------------------------------
    let w_port = '53112'
    let w_Client
    let w_Database
    let w_Server
    let w_URL
    //------------------------------------------------------
    //  Override LOCAL if Windows port (from package.json)
    //------------------------------------------------------
    const windowport = window.location.port
    if (windowport) w_port = windowport
    //
    //  Determine client, server, database, url
    //
    switch (w_port) {
      //------------------------------------------------------
      //  Local Client --> Local Server --> Local Database 10/20
      //------------------------------------------------------
      case '53001':
        w_Client = LOC_L10_DESC_CLIENT
        w_Server = LOC_L10_DESC_SERVER
        w_Database = L10_DESC_DATABASE
        w_URL = LOC_L10_URLSERVER
        break
      case '53002':
        w_Client = LOC_L20_DESC_CLIENT
        w_Server = LOC_L20_DESC_SERVER
        w_Database = L20_DESC_DATABASE
        w_URL = LOC_L20_URLSERVER
        break
      //------------------------------------------------------
      //  Local Client --> Local Server --> Remote Database 10/20
      //------------------------------------------------------
      case '53211':
        w_Client = LOC_LOC_R10_DESC_CLIENT
        w_Server = LOC_LOC_R10_DESC_SERVER
        w_Database = R10_DESC_DATABASE
        w_URL = LOC_R10_URLSERVER
        break
      case '53212':
        w_Client = LOC_LOC_R20_DESC_CLIENT
        w_Server = LOC_LOC_R20_DESC_SERVER
        w_Database = R20_DESC_DATABASE
        w_URL = LOC_R20_URLSERVER
        break
      //------------------------------------------------------
      //  Local Client --> Remote Server --> Remote Database 10/20
      //------------------------------------------------------
      case '53011':
        w_Client = LOC_R10_R10_DESC_CLIENT
        w_Server = R10_DESC_SERVER
        w_Database = R10_DESC_DATABASE
        w_URL = R10_URLSERVER
        break
      case '53012':
        w_Client = LOC_R20_R20_DESC_CLIENT
        w_Server = R20_DESC_SERVER
        w_Database = R20_DESC_DATABASE
        w_URL = R20_URLSERVER
        break
      //------------------------------------------------------
      //  Remote Client --> Remote Server --> Remote Database 10/20
      //------------------------------------------------------
      case '53111':
        w_Client = R10_DESC_CLIENT
        w_Server = R10_DESC_SERVER
        w_Database = R10_DESC_DATABASE
        w_URL = R10_URLSERVER
        break
      case '53112':
        w_Client = R20_DESC_CLIENT
        w_Server = R20_DESC_SERVER
        w_Database = R20_DESC_DATABASE
        w_URL = R20_URLSERVER
        break
      //------------------------------------------------------
      //  Errors
      //------------------------------------------------------
      default:
        w_Client = 'Error'
        w_Server = 'Error'
        w_Database = 'Error'
        w_URL = 'Error'
        break
    }
    //------------------------------------------------------
    //
    //  Store Client, Server, Database, URL
    //
    sessionStorage.setItem('App_Settings_Client', JSON.stringify(w_Client))
    sessionStorage.setItem('App_Settings_Server', JSON.stringify(w_Server))
    sessionStorage.setItem('App_Settings_Database', JSON.stringify(w_Database))
    sessionStorage.setItem('App_Settings_URL', JSON.stringify(w_URL))
    if (debugLog)
      console.log(
        `PORT(${w_port}) CLIENT(${w_Client}) SERVER(${w_Server}) DATABASE(${w_Database}) URL(${w_URL})`
      )
    //
    //  DevMode ?
    //
    let App_Settings_DevMode
    w_Client === R10_DESC_CLIENT || w_Client === R20_DESC_CLIENT
      ? (App_Settings_DevMode = false)
      : (App_Settings_DevMode = true)
    sessionStorage.setItem('App_Settings_DevMode', App_Settings_DevMode)
    //
    //  Navigation
    //
    sessionStorage.setItem('Nav_Page_Current', JSON.stringify('QuizSplash'))
    sessionStorage.setItem('Nav_Page_Previous', JSON.stringify(''))
    //
    //  SignedIn Status
    //
    sessionStorage.setItem('User_Settings_SignedIn', false)
    //
    //  QuizSelect
    //
    sessionStorage.setItem('QuizSelect_ShowSelectionGroup2', false)
    sessionStorage.setItem('QuizSelect_ShowSelectionGroup3', false)
    //
    //  Quiz
    //
    sessionStorage.setItem('Quiz_Reset', true)
    sessionStorage.setItem('Quiz_Select_Owner', JSON.stringify(''))
    sessionStorage.setItem('Quiz_Select_Group1', JSON.stringify(''))
    sessionStorage.setItem('Quiz_Select_Group2', JSON.stringify('All'))
    sessionStorage.setItem('Quiz_Select_Group3', JSON.stringify('All'))
    //
    //  QuizHistory
    //
    sessionStorage.setItem('QuizHistory_Reset', true)
    sessionStorage.setItem('QuizHistory_SearchValue', JSON.stringify(''))
    sessionStorage.setItem('QuizHistory_SearchType', JSON.stringify('g1title'))

    //
    //  DevMode : Override Initial Values
    //
    if (App_Settings_DevMode) {
    }
  }
  //.............................................................................
  //.  Handle Page Change
  //.............................................................................
  const handlePage = nextPage => {
    //
    //  Retrieve the state
    //
    let PageCurrent = JSON.parse(sessionStorage.getItem('Nav_Page_Current'))
    const PagePrevious = JSON.parse(sessionStorage.getItem('Nav_Page_Previous'))
    //
    //  If no change of Page, return
    //
    if (nextPage === PageCurrent) return
    //
    //  Back/Start ?
    //
    const PageNext =
      nextPage === 'PAGEBACK' ? PagePrevious : nextPage === 'PAGESTART' ? PageStart : nextPage
    //
    //  Quiz End, write history
    //
    if (PageCurrent === 'Quiz') {
      writeHistory()
    }
    //
    //  Change of Page
    //
    if (debugLog) console.log(`Current Page ${PageCurrent} ==> New Page ${PageNext}`)
    //
    //  Update Previous Page
    //
    sessionStorage.setItem('Nav_Page_Previous', JSON.stringify(PageCurrent))
    if (debugLog)
      console.log(
        `UPDATED Nav_Page_Previous ${JSON.parse(sessionStorage.getItem('Nav_Page_Previous'))}`
      )
    //
    //  If SignIN, Update signed in info
    //
    if (PageNext === 'QuizSignin') {
      sessionStorage.setItem('User_Settings_SignedIn', false)
    }
    //
    //  Update NEW Page
    //
    sessionStorage.setItem('Nav_Page_Current', JSON.stringify(PageNext))
    if (debugLog)
      console.log(
        `UPDATED Nav_Page_Current ${JSON.parse(sessionStorage.getItem('Nav_Page_Current'))}`
      )
    //
    //  Update State
    //
    setPageCurrent(PageNext)
  }
  //.............................................................................
  return (
    <div>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Layout handlePage={handlePage} pageCurrent={pageCurrent}>
            <QuizControl handlePage={handlePage} />
          </Layout>
          <CssBaseline />
        </ThemeProvider>
      </StyledEngineProvider>
    </div>
  )
}
