//
//  Libraries
//
import axios from 'axios'
//
//  Debug Settings
//
import debugSettings from '../debug/debugSettings'
//.............................................................................
//.  Initialisation
//.............................................................................
//
// Debug Settings
//
const debugLog = debugSettings()
//===================================================================================
//
// methods - post(get), post(update), delete(delete), put(upsert)
//
export default async function apiAxios(method, url, data) {
  try {
    if (debugLog) console.log(`url(${url}) method(${method})`)
    if (debugLog) console.log('data ', data)
    const response = await axios({
      method: method,
      url: url,
      data: data
    })
    if (debugLog) console.log(response)
    //
    //  Errors
    //
    if (response.status !== 200) throw Error('Did not receive expected data')
    //
    //  Return rows
    //
    return response.data
    //
    //  Catch Error
    //
  } catch (err) {
    console.log(err)
    return null
  }
}
