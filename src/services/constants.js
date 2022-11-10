//---------------------------------------------------------------------
//-  LOCAL Ports
//---------------------------------------------------------------------
//
//  Local Client --> Local Server --> Local Database
//
exports.LOC_LOC_LOC_CLIENT = 'LOCAL:20003'
exports.LOC_LOC_LOC_SERVER = 'LOCAL:20001'
exports.LOC_LOC_LOC_SERVERURL = 'http://localhost:20001'
//
//  Local Client --> Local Server --> Remote Database 1/2
//
exports.LOC_LOC_REM1_CLIENT = 'LOCAL:20013'
exports.LOC_LOC_REM1_SERVER = 'LOCAL:20011'
exports.LOC_LOC_REM1_SERVERURL = 'http://localhost:20011'

exports.LOC_LOC_REM2_CLIENT = 'LOCAL:20023'
exports.LOC_LOC_REM2_SERVER = 'LOCAL:20021'
exports.LOC_LOC_REM2_SERVERURL = 'http://localhost:20021'
//
//  Local Client --> Remote Server --> Remote Database 1/2
//
exports.LOC_REM1_REM1_CLIENT = 'LOCAL:20113'
exports.LOC_REM2_REM2_CLIENT = 'LOCAL:20123'
//---------------------------------------------------------------------
//-  SERVERS
//---------------------------------------------------------------------
exports.REM1_REM1_REM1_SERVER = 'REMOTE:Railway'
exports.REM2_REM2_REM2_SERVER = 'REMOTE:Netlify'
//---------------------------------------------------------------------
//-  DATABASE
//---------------------------------------------------------------------
exports.LOC_LOC_LOC_DATABASE = 'LOCAL'
exports.REM1_REM1_REM1_DATABASE = 'REMOTE:Railway'
exports.REM2_REM2_REM2_DATABASE = 'REMOTE:ElephantSQL'
//---------------------------------------------------------------------
//-  REMOTE Ports
//---------------------------------------------------------------------
//
//  Remote Client --> Remote Server --> Remote Database 1
//
exports.REM1_REM1_REM1_CLIENT = 'REMOTE:21113'
exports.REM1_REM1_REM1_SERVERURL = 'https://quizserver020-production.up.railway.app'
//
//  Remote Client --> Remote Server --> Remote Database 2
//
exports.REM2_REM2_REM2_CLIENT = 'REMOTE:21123'
exports.REM2_REM2_REM2_SERVERURL = 'https://quizserver020.netlify.app'
//---------------------------------------------------------------------
//-  Server details
//---------------------------------------------------------------------
exports.URL_REGISTER = '/QuizRegister'
exports.URL_SIGNIN = '/QuizSignin'
exports.URL_PROFILE = '/QuizProfile/:id'
exports.URL_TABLES = '/QuizTables'
//---------------------------------------------------------------------
//-  Other Parameters
//---------------------------------------------------------------------
exports.MAX_QUESTIONS_SELECT = 50
exports.WAIT = 100
exports.WAIT_MAX_TRY = 20
