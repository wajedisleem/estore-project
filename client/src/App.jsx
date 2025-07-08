import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import { TranslationProvider } from './i18n/TranslationProvider';
import { AppRouting } from './routing/AppRouting';

const App = () => {
  return (
    <Provider store={store}>
      <TranslationProvider>
        <BrowserRouter>
          <AppRouting />
        </BrowserRouter>
      </TranslationProvider>
    </Provider>
  );
};

export default App;
