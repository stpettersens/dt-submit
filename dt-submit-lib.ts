/*
dt-init
Utility to submit a TypeScript definition to DefinitelyTyped via your fork.
Copyright 2015 Sam Saint-Pettersen.

Released under the MIT License.
*/

/// <reference path="typings/node/node.d.ts" />
// <reference path="typings/github/github.d.ts" />
/// <reference path="typings/git-config/git-config.d.ts" />
/// <reference path="typings/chalk/chalk.d.ts" />

import fs = require('fs');
import gitConfig = require('git-config');
import chalk = require('chalk');
