//---------------------------------------------------------------------
//-  CLIENTS description
//---------------------------------------------------------------------
//
//  Local Client --> Local Server --> Local Database 10/20
//
exports.LOC_L10_DESC_CLIENT = 'LOCAL:53001'
exports.LOC_L20_DESC_CLIENT = 'LOCAL:53002'
//
//  Local Client --> Local Server --> Remote Database 10/20
//
exports.LOC_LOC_R10_DESC_CLIENT = 'LOCAL:53211'
exports.LOC_LOC_R20_DESC_CLIENT = 'LOCAL:53212'
//
//  Local Client --> Remote Server --> Remote Database 10/20
//
exports.LOC_R10_R10_DESC_CLIENT = 'LOCAL:53011'
exports.LOC_R20_R20_DESC_CLIENT = 'LOCAL:53012'
//
//  Remote Client  10/20
//
exports.R10_DESC_CLIENT = 'REMOTE:53111'
exports.R20_DESC_CLIENT = 'REMOTE:53112'
//---------------------------------------------------------------------
//-  SERVER description
//---------------------------------------------------------------------
//
//  Local Client --> Local Server --> Local Database 10/20
//
exports.LOC_L10_DESC_SERVER = 'LOCAL:51001'
exports.LOC_L20_DESC_SERVER = 'LOCAL:51002'
//
//  Local Client --> Local Server --> Remote Database 10/20
//
exports.LOC_LOC_R10_DESC_SERVER = 'LOCAL:51211'
exports.LOC_LOC_R20_DESC_SERVER = 'LOCAL:51212'
//
//  Remote Server 10/20
//
exports.R10_DESC_SERVER = 'REMOTE:Railway'
exports.R20_DESC_SERVER = 'REMOTE:Netlify'
//---------------------------------------------------------------------
//-  DATABASE description
//---------------------------------------------------------------------
exports.L10_DESC_DATABASE = 'LOCAL:L10'
exports.L20_DESC_DATABASE = 'LOCAL:L20'
exports.R10_DESC_DATABASE = 'REMOTE:Railway'
exports.R20_DESC_DATABASE = 'REMOTE:ElephantSQL'
//---------------------------------------------------------------------
//-  URL (Server)
//---------------------------------------------------------------------
//
//  Local Client --> Local Server --> Local Database 10/20
//
exports.LOC_L10_URLSERVER = 'http://localhost:51001'
exports.LOC_L20_URLSERVER = 'http://localhost:51002'
//
//  Local Client --> Local Server --> Remote Database 10/20
//
exports.LOC_R10_URLSERVER = 'http://localhost:51211'
exports.LOC_R20_URLSERVER = 'http://localhost:51212'
//
//  Remote Server 10/20
//
exports.R10_URLSERVER = 'https://quizserver020-production.up.railway.app'
exports.R20_URLSERVER = 'https://quizserver020.netlify.app'

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
