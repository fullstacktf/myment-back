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
//TODO: Add the express types to handle req and req 
class ActivitiesController {
    constructor(repo) {
        this.repo = repo;
    }
    parseInput(data) {
        return {
            title: data.title,
            year: data.year,
            genre: data.genre,
            duration: data.duration,
        };
    }
    handleAddRequest(req) {
        const data = this.parseInput(req);
        return this.repo.addActivities(data);
    }
    handleRequest(req) {
        const data = this.parseInput(req);
        return this.repo.showAll();
    }
    handleUpdateRequest(req) {
        const data = this.parseInput(req);
        return this.repo.updateActivity(data);
    }
    handleDeleteRequest(req) {
        const data = this.parseInput(req);
        return this.repo.deleteActivities(data);
    }
    handleRequests(req, type) {
        const data = this.parseInput(req);
        return this.repo.findBy(type, data);
    }
    showActivities() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repo.showAll();
        });
    }
    handleLikeRequest(req) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Method not implemented.");
        });
    }
}
exports.ActivitiesController = ActivitiesController;
//# sourceMappingURL=ActivitiesController.js.map