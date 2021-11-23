import 'reset.css';
import '@/styles/index.scss';

import GlobalProvider from '@/contexts/GlobalContext';

function App() {
    return <GlobalProvider></GlobalProvider>;
}

export default App;
