import { shallow } from '@edx/react-unit-test-utils';
import { SubmissionView } from '.';

jest.mock('components/Rubric', () => 'Rubric');
jest.mock('components/ProgressBar', () => 'ProgressBar');
jest.mock('./SubmissionContent', () => 'SubmissionContent');
jest.mock('./SubmissionActions', () => 'SubmissionActions');

jest.mock('./hooks', () => jest.fn().mockReturnValue({
  submission: 'submission',
  oraConfigData: 'oraConfigData',
  onFileUploaded: jest.fn().mockName('onFileUploaded'),
  onTextResponseChange: jest.fn().mockName('onTextResponseChange'),
  submitResponseHandler: jest.fn().mockName('submitResponseHandler'),
  submitResponseStatus: 'submitResponseStatus',
  saveResponseHandler: jest.fn().mockName('saveResponseHandler'),
  saveResponseStatus: 'saveResponseStatus',
  draftSaved: true,
}));
jest.mock('data/services/lms/hooks/selectors', () => ({
  useIsPageDataLoaded: jest.fn(() => true),
}));

describe('<SubmissionView />', () => {
  it('renders', () => {
    const wrapper = shallow(<SubmissionView />);
    expect(wrapper.snapshot).toMatchSnapshot();
  });
});
