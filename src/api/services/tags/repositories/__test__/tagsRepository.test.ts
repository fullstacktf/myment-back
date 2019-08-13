import { TagsMongoRepository as TagsRepository } from '../TagsRepository';
describe('TagsRepository', () => {
    const repo = new TagsRepository();

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
            return repo.showAll().then(data =>{
                expect(data).toMatchSnapshot();
            });
        })
        test('should return only Category Tags',() => {
            return repo.findByCategory('food').then(data =>{
                expect(data).toBe('');
            });
        })
    });
});
