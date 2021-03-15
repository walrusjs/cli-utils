import JoyCon from 'joycon';
import JoyconTsLoader from 'joycon-ts-loader';

const joycon = new JoyCon();
joycon.addLoader(JoyconTsLoader);

export default joycon;