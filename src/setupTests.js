import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// This configures so it knows which version of React to use.
configure( { adapter: new Adapter() } );
