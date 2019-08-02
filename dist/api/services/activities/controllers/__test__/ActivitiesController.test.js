"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ActivitiesController_1 = require("../ActivitiesController");
describe('ActivitiesController', () => {
    const controller = new ActivitiesController_1.ActivitiesController();
    const db = controller.initDatabase();
    describe('initDatabase', () => {
        test('Check Connection to Database', () => {
            return db.getConnection().then(state => {
                expect(state.readyState).toBe(1);
            });
        });
    });
    describe('Parse Data to Json', () => {
        test('Validate Data for Database', () => {
            return controller.showActivities().then(data => {
                expect(data).toMatchSnapshot();
            });
        });
    });
});
//# sourceMappingURL=ActivitiesController.test.js.map