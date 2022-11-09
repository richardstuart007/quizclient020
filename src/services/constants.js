//
//  Browser Port (29003) ==> Server REMOTE server
//
exports.REMOTE_CLIENT = 'REMOTE:29003'
exports.REMOTE_SERVER = 'REMOTE:ElephantSQL'
exports.REMOTE_DATABASE = 'REMOTE:ElephantSQL'
exports.REMOTE_SERVERURL = 'rosie.db.elephantsql.com'
//
//  29003 - Local Client --> Remote Server --> Remote Database
//
exports.LOC_REMOTE_REMOTE_CLIENT = 'LOCAL:29003'
//
//  29013 - Local Client --> Local Server --> Remote Database
//
exports.LOC_LOC_REMOTE_CLIENT = 'LOCAL:29013'
exports.LOC_LOC_REMOTE_SERVER = 'LOCAL:29001'
exports.LOC_LOC_REMOTE_SERVERURL = 'http://localhost:29001'
//
//  28003 - Local Client --> Local Server --> Local Database
//
exports.LOC_LOC_LOC_CLIENT = 'LOCAL:28003'
exports.LOC_LOC_LOC_SERVER = 'LOCAL:28001'
exports.LOC_LOC_LOC_DATABASE = 'LOCAL'
exports.LOC_LOC_LOC_SERVERURL = 'http://localhost:28001'
//
//  Server details
//
exports.URL_REGISTER = '/QuizRegister'
exports.URL_SIGNIN = '/QuizSignin'
exports.URL_PROFILE = '/QuizProfile/:id'
exports.URL_TABLES = '/QuizTables'
//
//  Other Parameters
//
exports.MAX_QUESTIONS_SELECT = 50
exports.WAIT = 100
exports.WAIT_MAX_TRY = 20
