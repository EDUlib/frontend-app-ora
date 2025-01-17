import 'core-js/stable';
import 'regenerator-runtime/runtime';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useRef: jest.fn((val) => ({ current: val, useRef: true })),
  useCallback: jest.fn((cb, prereqs) => ({ useCallback: { cb, prereqs } })),
  useEffect: jest.fn((cb, prereqs) => ({ useEffect: { cb, prereqs } })),
  useContext: jest.fn(context => context),
}));

jest.mock('@edx/frontend-platform/i18n', () => {
  const i18n = jest.requireActual('@edx/frontend-platform/i18n');
  const { formatMessage } = jest.requireActual('@edx/react-unit-test-utils');
  const formatDate = jest.fn(date => new Date(date).toLocaleDateString()).mockName('useIntl.formatDate');
  return {
    ...i18n,
    useIntl: () => ({
      formatMessage,
      formatDate,
    }),
    defineMessages: m => m,
    FormattedMessage: () => 'FormattedMessage',
  };
});

jest.mock('@edx/paragon', () => jest.requireActual('@edx/react-unit-test-utils').mockComponents({
  Alert: {
    Heading: 'Alert.Heading',
  },
  AlertModal: 'AlertModal',
  ActionRow: 'ActionRow',
  Badge: 'Badge',
  Button: 'Button',
  Card: {
    Body: 'Card.Body',
    Section: 'Card.Section',
    Footer: 'Card.Footer',
  },
  Col: 'Col',
  Collapsible: {
    Advanced: 'Collapsible.Advanced',
    Body: 'Collapsible.Body',
    Trigger: 'Collapsible.Trigger',
    Visible: 'Collapsible.Visible',
  },
  Container: 'Container',
  DataTable: {
    EmptyTable: 'DataTable.EmptyTable',
    Table: 'DataTable.Table',
    TableControlBar: 'DataTable.TableControlBar',
    TableController: 'DataTable.TableController',
    TableFooter: 'DataTable.TableFooter',
  },
  Dropzone: 'Dropzone',
  Dropdown: {
    Item: 'Dropdown.Item',
    Menu: 'Dropdown.Menu',
    Toggle: 'Dropdown.Toggle',
  },
  Form: {
    Control: {
      Feedback: 'Form.Control.Feedback',
    },
    Group: 'Form.Group',
    Label: 'Form.Label',
    Radio: 'Form.Radio',
    RadioSet: 'Form.RadioSet',
  },
  FormControlFeedback: 'FormControlFeedback',
  FormLabel: 'FormLabel',
  FullscreenModal: 'FullscreenModal',
  Hyperlink: 'Hyperlink',
  Icon: 'Icon',
  IconButton: 'IconButton',
  ModalDialog: {
    Body: 'ModalDialog.Body',
    Footer: 'ModalDialog.Footer',
    Header: 'ModalDialog.Header',
    Title: 'ModalDialog.Title',
    CloseButton: 'ModalDialog.CloseButton',
  },
  MultiSelectDropdownFilter: 'MultiSelectDropdownFilter',
  OverlayTrigger: 'OverlayTrigger',
  PageBanner: 'PageBanner',
  Popover: {
    Content: 'Popover.Content',
  },
  Row: 'Row',
  StatefulButton: 'StatefulButton',
  TextFilter: 'TextFilter',
  TextArea: 'TextArea',
  Spinner: 'Spinner',
}));
