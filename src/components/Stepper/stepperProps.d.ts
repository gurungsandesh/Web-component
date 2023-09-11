interface stepperProps {
  steps: stepper[];
  onNext?: (activeStep) => void;
  onBack?: (activeStep) => void;
}

interface stepper {
  label: string;
  component: React.ReactNode;
}
