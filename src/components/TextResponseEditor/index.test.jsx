import { shallow } from '@edx/react-unit-test-utils';
import TextResponseEditor from '.';

jest.mock('./TextEditor', () => 'TextEditor');
jest.mock('./RichTextEditor', () => 'RichTextEditor');

describe('<TextResponseEditor />', () => {
  const props = {
    submissionConfig: {
      textResponseConfig: {
        optional: false,
        enabled: true,
        editorType: 'text',
      },
    },
    value: 'value',
    onChange: jest.fn().mockName('onChange'),
  };

  it('render Text Editor ', () => {
    const wrapper = shallow(<TextResponseEditor {...props} />);
    expect(wrapper.snapshot).toMatchSnapshot();

    expect(wrapper.instance.findByType('TextEditor').length).toEqual(1);
    expect(wrapper.instance.findByType('RichTextEditor').length).toEqual(0);
  });

  it('render Rich Text Editor ', () => {
    const wrapper = shallow(<TextResponseEditor {...props} submissionConfig={{ textResponseConfig: { editorType: 'rich-text' } }} />);
    expect(wrapper.snapshot).toMatchSnapshot();

    expect(wrapper.instance.findByType('TextEditor').length).toEqual(0);
    expect(wrapper.instance.findByType('RichTextEditor').length).toEqual(1);
  });
});
