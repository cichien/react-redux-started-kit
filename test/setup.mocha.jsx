import "babel-polyfill";
import { jsdom } from "jsdom";
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

global.document = jsdom("<!doctype html><html><body></body></html>");
global.window = document.defaultView;
global.navigator = global.window.navigator;
