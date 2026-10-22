/**
 * IndexNow key (Bing, Yandex, Naver, Seznam). The key file is served at
 * /<key>.txt from public/. To notify engines of a new or changed URL:
 *   GET https://api.indexnow.org/indexnow?url=<encoded url>&key=<key>
 * The daily blog routine can call this after each publish.
 */
export const indexNowKey = 'ebd927be12da846a9e94313a4382e9dc'
export const indexNowKeyLocation = 'https://www.paycheck.center/ebd927be12da846a9e94313a4382e9dc.txt'
