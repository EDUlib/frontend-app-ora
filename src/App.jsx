import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ErrorPage } from '@edx/frontend-platform/react';
import { useIntl } from '@edx/frontend-platform/i18n';

import AssessmentView from 'views/AssessmentView';
import SubmissionView from 'views/SubmissionView';
import messages from './messages';

const RouterRoot = () => {
  const { formatMessage } = useIntl();

  return (
    <Router>
      <Switch>
        <Route path="/assessment/:id">
          <AssessmentView />
        </Route>
        <Route path="/submission/:id">
          <SubmissionView />
        </Route>
        <Route path="/*">
          <ErrorPage message={formatMessage(messages.error404Message)} />
        </Route>
      </Switch>
    </Router>
  );
};

export default RouterRoot;