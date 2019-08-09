import { MovieRepository } from '../../../../repo/activitiesRepository';

describe('MovieRepository', () => {
    const repo = new MovieRepository();

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
