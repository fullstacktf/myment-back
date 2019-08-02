"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ActivityModel_1 = require("../../../data/mongodb/ActivityModel");
const initMongo_1 = require("../../../data/mongodb/initMongo");
class ActivitiesMongoRepository {
    constructor() {
        this.model = ActivityModel_1.Activity;
        this.con = new initMongo_1.SingleMongo('127.0.0.1', 'movies');
        this.con.connection.on('error', console.error.bind(console, 'connection error:'));
        this.con.connection.once('open', function () {
            console.log('We are connected');
        });
    }
    getConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.con.connection;
        });
    }
    showAll() {
        return __awaiter(this, void 0, void 0, function* () {
            //TODO: put Limits
            return yield this.model.find();
        });
    }
    addActivities(data) {
        return __awaiter(this, void 0, void 0, function* () {
            //Check if exist
            if (yield this.model.exists(data))
                return { error: 'Data yet exist' };
            return yield this.model.create(data);
        });
    }
    updateActivity(data) {
        return __awaiter(this, void 0, void 0, function* () {
            //Check if exist
            if (yield this.model.exists(data))
                return { error: 'Data yet exist' };
            throw new Error("Method not implemented.");
        });
    }
    deleteActivities(data) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Method not implemented.");
        });
    }
    findBy(type, data) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Method not implemented.");
        });
    }
}
exports.ActivitiesMongoRepository = ActivitiesMongoRepository;
//# sourceMappingURL=ActivitiesRepository.js.map