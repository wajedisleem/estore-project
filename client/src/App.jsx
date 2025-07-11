import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import { TranslationProvider } from './i18n/TranslationProvider';
import { AuthProvider } from './auth/AuthProvider';
import { AppRouting } from './routing/AppRouting';

const App = () => {
  return (
    <Provider store={store}>
      <TranslationProvider>
        <AuthProvider>
          <BrowserRouter>
            <AppRouting />
          </BrowserRouter>
        </AuthProvider>
      </TranslationProvider>
    </Provider>
  );
};

export default App;
