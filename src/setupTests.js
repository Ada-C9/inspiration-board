import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { configure } from 'enzyme';

configure({ adapter: new Adapter() });

Enzyme.configure({ adapter: new Adapter() });
