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
const { LOC_LOC_LOC_CLIENT } = require('../services/constants.js')
const { LOC_LOC_REM1_CLIENT } = require('../services/constants.js')
const { LOC_LOC_REM2_CLIENT } = require('../services/constants.js')
const { LOC_REM1_REM1_CLIENT } = require('../services/constants.js')
const { LOC_REM2_REM2_CLIENT } = require('../services/constants.js')
const { REM1_REM1_REM1_CLIENT } = require('../services/constants.js')
const { REM2_REM2_REM2_CLIENT } = require('../services/constants.js')
//
//  Server
//
const { LOC_LOC_LOC_SERVER } = require('../services/constants.js')
const { LOC_LOC_REM1_SERVER } = require('../services/constants.js')
const { LOC_LOC_REM2_SERVER } = require('../services/constants.js')
const { REM1_REM1_REM1_SERVER } = require('../services/constants.js')
const { REM2_REM2_REM2_SERVER } = require('../services/constants.js')
//
//  Database
//
const { LOC_LOC_LOC_DATABASE } = require('../services/constants.js')
const { REM1_REM1_REM1_DATABASE } = require('../services/constants.js')
const { REM2_REM2_REM2_DATABASE } = require('../services/constants.js')
//
//  URL
//
const { LOC_LOC_LOC_SERVERURL } = require('../services/constants.js')
const { LOC_LOC_REM1_SERVERURL } = require('../services/constants.js')
const { LOC_LOC_REM2_SERVERURL } = require('../services/constants.js')
const { REM1_REM1_REM1_SERVERURL } = require('../services/constants.js')
const { REM2_REM2_REM2_SERVERURL } = require('../services/constants.js')
//
// Debug Settings
//
const debugLog = debugSettings(true)
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
    let w_port = '21123'
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
      //  Local Client --> Local Server --> Local Database
      //------------------------------------------------------
      case '20003':
        w_Client = LOC_LOC_LOC_CLIENT
        w_Server = LOC_LOC_LOC_SERVER
        w_Database = LOC_LOC_LOC_DATABASE
        w_URL = LOC_LOC_LOC_SERVERURL
        break
      //------------------------------------------------------
      //  Local Client --> Local Server --> Remote Database 1/2
      //------------------------------------------------------
      case '20013':
        w_Client = LOC_LOC_REM1_CLIENT
        w_Server = LOC_LOC_REM1_SERVER
        w_Database = REM1_REM1_REM1_DATABASE
        w_URL = LOC_LOC_REM1_SERVERURL
        break
      case '20023':
        w_Client = LOC_LOC_REM2_CLIENT
        w_Server = LOC_LOC_REM2_SERVER
        w_Database = REM2_REM2_REM2_DATABASE
        w_URL = LOC_LOC_REM2_SERVERURL
        break
      //------------------------------------------------------
      //  Local Client --> Remote Server --> Remote Database 1/2
      //------------------------------------------------------
      case '20113':
        w_Client = LOC_REM1_REM1_CLIENT
        w_Server = REM1_REM1_REM1_SERVER
        w_Database = REM1_REM1_REM1_DATABASE
        w_URL = REM1_REM1_REM1_SERVERURL
        break
      case '20123':
        w_Client = LOC_REM2_REM2_CLIENT
        w_Server = REM2_REM2_REM2_SERVER
        w_Database = REM2_REM2_REM2_DATABASE
        w_URL = REM2_REM2_REM2_SERVERURL
        break
      //------------------------------------------------------
      //  Remote Client --> Remote Server --> Remote Database 1/2
      //------------------------------------------------------
      case '21113':
        w_Client = REM1_REM1_REM1_CLIENT
        w_Server = REM1_REM1_REM1_SERVER
        w_Database = REM1_REM1_REM1_DATABASE
        w_URL = REM1_REM1_REM1_SERVERURL
        break
      case '21123':
        w_Client = REM2_REM2_REM2_CLIENT
        w_Server = REM2_REM2_REM2_SERVER
        w_Database = REM2_REM2_REM2_DATABASE
        w_URL = REM2_REM2_REM2_SERVERURL
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
    w_Client === REM1_REM1_REM1_CLIENT || w_Client === REM2_REM2_REM2_CLIENT
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
