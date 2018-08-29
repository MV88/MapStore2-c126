/**
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
const ReactDOM = require('react-dom');
const {connect} = require('react-redux');
const LocaleUtils = require('../MapStore2/web/client/utils/LocaleUtils');
const ConfigUtils = require('../MapStore2/web/client/utils/ConfigUtils');

const startApp = () => {
    const StandardApp = require('../MapStore2/web/client/components/app/StandardApp');
    const {loadVersion} = require('../MapStore2/web/client/actions/version');
    const {versionSelector} = require('../MapStore2/web/client/selectors/version');
    const {loadAfterThemeSelector} = require('../MapStore2/web/client/selectors/config');
    const {pages, pluginsDef, initialState, storeOpts} = require('./appConfigEmbedded');

    const StandardRouter = connect((state) => ({
        locale: state.locale || {},
        pages,
        version: versionSelector(state),
        loadAfterTheme: loadAfterThemeSelector(state)
    }))(require('../MapStore2/web/client/components/app/StandardRouter'));

    const {updateMapLayoutEpic} = require('../MapStore2/web/client/epics/maplayout');

    const appStore = require('../MapStore2/web/client/stores/StandardStore').bind(null, initialState, {
        mode: (state = 'embedded') => state,
        version: require('../MapStore2/web/client/reducers/version'),
        maplayout: require('../MapStore2/web/client/reducers/maplayout')
    }, {updateMapLayoutEpic});

    const appConfig = {
        mode: 'embedded',
        storeOpts,
        appStore,
        pluginsDef,
        initialActions: [loadVersion],
        appComponent: StandardRouter,
        printingEnabled: true
    };

    ConfigUtils.setConfigProp('translationsPath', './MapStore2/web/client/translations');
    ConfigUtils.setConfigProp('themePrefix', 'MapStore2-c126'); // TODO check if this is needed and if needs to get this in a configurable way

    ReactDOM.render(
        <StandardApp {...appConfig} mode="embedded"/>,
        document.getElementById('container')
    );
};

if (!global.Intl ) {
    // Ensure Intl is loaded, then call the given callback
    LocaleUtils.ensureIntl(startApp);
} else {
    startApp();
}
