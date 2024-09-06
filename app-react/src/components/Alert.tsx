import { memo } from 'react';
import './Alert.css';

type AlertProps = {
  text: string;
  isAlert: boolean;
};
const Alert = memo(({ text, isAlert }: AlertProps) => {
  return (
    <div className='alert-container'>
      {text && (
        <p className={`alert ${isAlert ? 'alert-error' : 'alert-success'}`}>
          {text}
        </p>
      )}
    </div>
  );
});
export default Alert;
