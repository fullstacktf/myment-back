"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const activitiesRepository_1 = require("../../../../repo/activitiesRepository");
describe('MovieRepository', () => {
    const repo = new activitiesRepository_1.MovieRepository();
    describe('getConnectionState', () => {
        test('Check connection to database', () => {
            return repo.getConnection().then(state => {
                expect(state.readyState).toBe(1);
            });
        });
    });
    describe('showMovies', () => {
        test('should return json', () => {
            return repo.showMovies().then(data => {
                expect(data).toMatchSnapshot();
            });
        });
    });
});
//# sourceMappingURL=activitiesRepository.test.js.map