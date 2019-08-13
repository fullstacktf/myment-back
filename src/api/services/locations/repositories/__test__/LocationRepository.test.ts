import { LocationsMongoRepository as LocationsRepository } from '../LocationsRepository';
describe('LocationsRepository', () => {
    const repo = new LocationsRepository();

    describe('getConnectionState', () => {
        test('Check connection to database', () => {
            return repo.getConnection().then(state => {
                expect(state.readyState).toBe(1);
            });
        });
    });
    describe('showLocations', () => {
        // test('should return all activities', () => {
        //     return repo.getAll().then(data => {
        //         expect(data).toBe('')
        //     });
        // });
        test('should return only Place España',() => {
            return repo.findPlaces().then(data =>{
                expect(data).toBe('');
            });
        })
        // test('should return only food ideas',() => {
        //     return repo.findIdeas('food').then(data =>{
        //         expect(data[0].get("ideas")).toBe('');
        //     });
        // })
    });
});
