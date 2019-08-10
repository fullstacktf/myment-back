import { ActivitiesMongoRepository as ActivitiesRepository } from '../ActivitiesRepository';

describe('ActivitiesRepository', () => {
    const repo = new ActivitiesRepository();

    describe('getConnectionState', () => {
        test('Check connection to database', () => {
            return repo.getConnection().then(state => {
                expect(state.readyState).toBe(1);
            });
        });
    });
    describe('showActivities', () => {
        test('should return all activities', () => {
            return repo.getAll().then(data => {
                expect(data).toBe('');
            });
        });
        test('should return only food',() => {
            return repo.findBy('food').then(data =>{
                expect(data).toBe('');
            });
        })
    });
});
