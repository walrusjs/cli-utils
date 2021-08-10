import JoyCon from 'joycon';
import JoyconTsLoader from '@walrus/joycon-ts-loader';

const joycon = new JoyCon();
joycon.addLoader(JoyconTsLoader);

export default joycon;
