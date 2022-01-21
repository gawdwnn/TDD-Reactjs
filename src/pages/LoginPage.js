import { useEffect, useState } from 'react';
import Input from '../components/Input';
import { login } from '../api/apiCalls';
import Alert from '../components/Alert';
import { useTranslation } from 'react-i18next';
import ButtonWithProgress from '../components/ButtonWithProgress';
import { useDispatch } from 'react-redux';

const LoginPage = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [apiProgress, setApiProgress] = useState(false);
  const [failMessage, setFailMessage] = useState();

  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    setFailMessage();
  }, [email, password]);

  const submit = async (event) => {
    event.preventDefault();
    setApiProgress(true);
    try {
      const response = await login({ email, password });
      props.history.push('/');
      dispatch({
        type: 'login-success',
        payload: {
          id: response.data.id,
        },
      });
    } catch (error) {
      setFailMessage(error.response.data.message);
    }
    setApiProgress(false);
  };

  let disabled = !(email && password);

  return (
    <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2" data-testid="login-page">
      <form className="card">
        <div className="card-header">
          <h1 className="text-center">{t('login')}</h1>
        </div>
        <div className="card-body">
          <Input
            id="email"
            label={t('email')}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Input
            id="password"
            label={t('password')}
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          {failMessage && <Alert type="danger">{failMessage}</Alert>}
          <div className="text-center">
            <ButtonWithProgress
              disabled={disabled}
              apiProgress={apiProgress}
              onClick={submit}
            >
              {t('login')}
            </ButtonWithProgress>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
