import Web from './web';
import Native from './native';

const exported = true ? Web : Native;

export default exported;