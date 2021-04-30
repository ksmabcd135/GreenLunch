"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.composeWithPagination = void 0;
const pagination_1 = require("./pagination");
function composeWithPagination(typeComposer, opts) {
    if (!typeComposer || typeComposer.constructor.name !== 'ObjectTypeComposer') {
        throw new Error('You should provide ObjectTypeComposer instance to composeWithPagination method');
    }
    if (!opts) {
        throw new Error('You should provide non-empty options to composeWithPagination');
    }
    const resolverName = opts.name || pagination_1.DEFAULT_RESOLVER_NAME;
    if (typeComposer.hasResolver(resolverName)) {
        return typeComposer;
    }
    const resolver = pagination_1.preparePaginationResolver(typeComposer, opts);
    typeComposer.setResolver(resolverName, resolver);
    return typeComposer;
}
exports.composeWithPagination = composeWithPagination;
//# sourceMappingURL=composeWithPagination.js.map