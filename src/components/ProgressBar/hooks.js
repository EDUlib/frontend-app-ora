import { useParams } from 'react-router-dom';
import { useActiveView, useIsEmbedded } from 'hooks';
import { useStepState, useEffectiveGrade } from 'data/services/lms/hooks/selectors';
import {
  routeSteps,
  stepRoutes,
  stepStates,
} from 'data/services/lms/constants';

export const useProgressStepData = ({ step, canRevisit = false }) => {
  const { xblockId } = useParams();
  const isEmbedded = useIsEmbedded();
  const activeView = useActiveView();
  const viewStep = routeSteps[activeView];
  const stepState = useStepState({ step });

  const href = `/${stepRoutes[step]}${isEmbedded ? '/embedded' : ''}/${xblockId}`;
  const isActive = viewStep === step;
  const isEnabled = (
    isActive
    || (stepState === stepStates.inProgress)
    || (canRevisit && stepState === stepStates.completed)
  );
  const myGrade = useEffectiveGrade()?.stepScore;

  return {
    href,
    isEnabled,
    isActive,
    isComplete: stepState === stepStates.completed,
    inProgress: stepState === stepStates.inProgress,
    isPastDue: stepState === stepStates.closed,
    myGrade,
    // myGrade: { earned: 8, possible: 10 },
    // isPastDue: step === 'self',
    
  };
};

export default { useProgressStepData };
