import { ActivitiesMongoRepository as ActivitiesRepository } from '../ActivitiesRepository';
import { mockData } from "../../../../data/test/mockData";
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
                expect(data).toBe('')
            });
        });
        test('should return only food category',() => {
            return repo.findByCategory('food').then(data =>{
                expect(data).toBe('');
            });
        })
        test('should return only food ideas',() => {
            return repo.findIdeas('food').then(data =>{
                expect(data).toBe('');
            });
        })
    });
});
