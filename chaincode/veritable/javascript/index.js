/*
 * SPDX-License-Identifier: Apache-2.0
 */

// 'use strict';

// const FabCar = require('./lib/veritable');

// module.exports.FabCar = FabCar;
// module.exports.contracts = [ FabCar ];

'use strict';

const fabricDrive = require('./lib/veritable');

module.exports.fabricDrive = fabricDrive;
module.exports.contracts = [ fabricDrive ];
