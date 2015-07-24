/*
dt-init
Utility to submit a TypeScript definition to DefinitelyTyped via your fork.
Copyright 2015 Sam Saint-Pettersen.

Released under the MIT License.
*/
import DTSubmit = require('./dt-submit-lib');
new DTSubmit(process.argv[2]);
