import WebApiBridge from '@precor/web-api-bridge';
import { setSend } from './apis/Send';

class WebAppLibrary {
  constructor() {
    this.webApiBridge = new WebApiBridge();
    this.webApiBridge.target = window.parent;
    const originSubstring = (process.env.NODE_ENV === 'development') ? ':3001' : 'https://precorPhaniPutrevu.github.io';
    const targetOrigin = (process.env.NODE_ENV === 'development') ? '*' : 'https://precorPhaniPutrevu.github.io';
    console.log(`default origin: ${originSubstring}, targetOrigin : ${targetOrigin}`);
    this.webApiBridge.origin = originSubstring;
    this.webApiBridge.targetOrigin = targetOrigin;
    setSend(this.webApiBridge.send.bind(this.webApiBridge));
    this.webApiBridge.apis = [this]; // ready function
    window.addEventListener('message', (event) => {
      console.log('got message event = ', event);
      if (event && event.source === this.webApiBridge.target) {
        this.webApiBridge.onMessage(event, event.data);
      }
    });
  }

  ready = (libInfo) => { // libInfo is type and apis
    console.log('### ready ###', libInfo);
    const { apis } = libInfo;
    apis.forEach((apiName) => {
      // eslint-disable-next-line global-require, import/no-dynamic-require
      const api = require(`./apis/${apiName}`);
      this.webApiBridge.apis.push(api.incomingCalls);
    });
    this.libInfo = libInfo;
    if (this.startApisResolve) this.startApisResolve(libInfo);
  }

  setStartApisResolve = (resolve, origin, logMessages) => {
    console.log('setStartApisResolve start');
    this.startApisResolve = resolve;
    if (origin) {
      this.webApiBridge.origin = origin;
      this.webApiBridge.targetOrigin = origin;
      console.log(`new origin : ${origin}, targetOrigin : ${origin}`);
    }
    this.webApiBridge.listener = logMessages;
    console.log('setStartApisResolve ', this.libInfo);
    if (this.libInfo) resolve(this.libInfo);
  }
}

const webAppLibrary = new WebAppLibrary();

// eslint-disable-next-line import/prefer-default-export
export const startApis = (origin, logMessages) => (
  new Promise((resolve) => {
    webAppLibrary.setStartApisResolve(resolve, origin, logMessages);
  })
);

export * as libType1 from './LibType1';
export * as libType2 from './LibType2';
