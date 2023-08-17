import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

interface CaptchaComponentProps {
  siteKey: string;
  onCaptchaChange: (value: string | null) => void;
}

const CaptchaComponent: React.FC<CaptchaComponentProps> = ({
  siteKey,
  onCaptchaChange,
}) => {
  const handleCaptchaChange = (value: string | null) => {
    onCaptchaChange(value);
  };

  return (
    <div>
      <ReCAPTCHA sitekey={siteKey} onChange={handleCaptchaChange} />
    </div>
  );
};

export default CaptchaComponent;
