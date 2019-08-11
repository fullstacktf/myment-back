import { ActivitiesMongoRepository as ActivitiesRepository } from '../ActivitiesRepository';
import { mockData } from "../../../../../types/mockData";
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
            });
        });
        test('should return only food',() => {
            return repo.findIdeas('food').then(data =>{
                expect(data).toBe('');
            });
        })
    });
});
