import { ActivitiesController } from '../ActivitiesController';

describe('ActivitiesController', () => {
    const controller = new ActivitiesController();
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
