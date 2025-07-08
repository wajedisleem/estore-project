import { FormattedMessage } from 'react-intl';

const PageTitle = ({ title }) => {
  document.title = title;
  return null;
};

const FormattedPageTitle = ({ id }) => {
  return <FormattedMessage id={id}>{(title) => <PageTitle title={title[0]} />}</FormattedMessage>;
};

export { PageTitle, FormattedPageTitle };
