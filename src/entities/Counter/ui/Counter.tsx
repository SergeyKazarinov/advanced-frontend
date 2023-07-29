import { useTranslation } from 'react-i18next';
import { Button } from '@shared/ui/Button';
import { useCounterActions } from '../model/slice/counterSlice';
import { useCounter } from '../model/selectors/getCounter/getCounter';

const Counter = () => {
  const { t } = useTranslation();
  const counter = useCounter();
  const { decremented, incremented } = useCounterActions();

  const increment = () => {
    incremented();
  };

  const decrement = () => {
    decremented();
  };

  return (
    <div>
      <h1 data-testid="value-title">{counter.value}</h1>
      <Button data-testid="increment-btn" onClick={increment}>{t('Increment')}</Button>
      <Button data-testid="decrement-btn" onClick={decrement}>{t('Decrement')}</Button>
    </div>
  );
};

export default Counter;
