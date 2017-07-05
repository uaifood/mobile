/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

 // Got this script from facebook react repository:
 // https://github.com/facebook/react/blob/master/scripts/tasks/eslint.js

const path = require('path');
const spawn = require('child_process').spawn;

const extension = process.platform === 'win32' ? '.cmd' : '';

spawn(path.join('node_modules', '.bin', 'eslint' + extension), [ '.' ], {
  // Allow colors to pass through
	stdio: 'inherit'
}).on('close', function (code) {
	if (code !== 0) {
		console.error('Lint failed');
		process.exit(code);
	}

	console.log('Lint passed');
	process.exit(code);
});
