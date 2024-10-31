const React = require("react");
const { RootWrapper } = require("./src/wrappers/root");

exports.wrapRootElement = ({ element }, pluginOptions) => {
  return (
    <RootWrapper initialStore={pluginOptions.i18nData}>{element}</RootWrapper>
  );
};
