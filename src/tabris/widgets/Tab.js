import Widget from '../Widget';
import TabFolder from './TabFolder';

const CONFIG = {
  _name: 'Tab',

  _type: 'tabris.Tab',

  _properties: {
    title: {type: 'string', default: ''},
    image: {type: 'image', default: null},
    selectedImage: {type: 'image', default: null},
    badge: {type: 'string', default: ''}
  },

  _supportsChildren: true
};

export default class Tab extends Widget.extend(CONFIG) {

  _setParent(parent) {
    if (!(parent instanceof TabFolder)) {
      throw new Error('Tab must be a child of TabFolder');
    }
    Widget.prototype._setParent.call(this, parent);
  }

}
