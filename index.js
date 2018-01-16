import Secrets from './secrets';

const secrets = new Secrets(32, true, true);
const secret = secrets.generate();

document.getElementById('secret').innerText = secret;
