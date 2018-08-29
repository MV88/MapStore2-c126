/**
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
    plugins: {
        IdentifyPlugin: require('../MapStore2/web/client/plugins/Identify'),
        TOCPlugin: require('../MapStore2/web/client/plugins/TOC'),
        BackgroundSwitcherPlugin: require('../MapStore2/web/client/plugins/BackgroundSwitcher'),
        MapPlugin: require('../MapStore2/web/client/plugins/Map'),
        ToolbarPlugin: require('../MapStore2/web/client/plugins/Toolbar'),
        DrawerMenuPlugin: require('../MapStore2/web/client/plugins/DrawerMenu'),
        SearchPlugin: require('../MapStore2/web/client/plugins/Search'),
        LocatePlugin: require('../MapStore2/web/client/plugins/Locate'),
        ZoomAllPlugin: require('../MapStore2/web/client/plugins/ZoomAll'),
        MapLoadingPlugin: require('../MapStore2/web/client/plugins/MapLoading'),
        GoFullPlugin: require('../MapStore2/web/client/plugins/GoFull'),
        OmniBarPlugin: require('../MapStore2/web/client/plugins/OmniBar'),
        MapFooterPlugin: require('../MapStore2/web/client/plugins/MapFooter')
    },
    requires: {
        ReactSwipe: require('react-swipeable-views').default,
        SwipeHeader: require('../MapStore2/web/client/components/data/identify/SwipeHeader')
    }
};
