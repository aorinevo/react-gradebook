import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import chaiJsx from 'chai-jsx';
import jsdom from 'jsdom';

chai.use(chaiEnzyme());
chai.use(chaiJsx);

const { JSDOM } = jsdom;
const { document } = (new JSDOM(`<!doctype html><html><body></body></html>`,{
  url: "https://example.org/",
  referrer: "https://example.com/",
  contentType: "text/html",
  userAgent: "node.js",
  includeNodeLocations: true
})).window;