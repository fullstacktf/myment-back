"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class SingleMongo {
    constructor(url, collection) {
        this.dbURI = `mongodb://${url}/${collection}`;
        mongoose_1.connect(this.dbURI, { useNewUrlParser: true, keepAlive: true, keepAliveInitialDelay: 300000 });
        this.connection = mongoose_1.connection;
    }
}
exports.SingleMongo = SingleMongo;
//# sourceMappingURL=initMongo.js.map