/* import the element's definition from cdn */
import {
  defineUtmElement,
  insertUtmElement,
  defineLinkElement,
  hubspotOnFormReady
} from 'https://unpkg.com/@w3f/utm-element@0.0.11/index.js'

/* define the UTM element, to be use as DOM element */
defineUtmElement()

/* append the utm-element to the <body> in the dom */
insertUtmElement()

/* define the `<a is='utm-linkl>` extended anchor element,
 after utm-element is defined and inserted */
defineLinkElement()

export {
  hubspotOnFormReady as onFormReady
}
