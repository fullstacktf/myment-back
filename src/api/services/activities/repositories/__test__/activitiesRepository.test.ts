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
        // test('should return all activities', () => {
        //     return repo.getAll().then(data => {
        //         expect(data).toBe('')
        //     });
        //});
        // test('should return only food category',() => {
        //     return repo.findByCategory('food').then(data =>{
        //         expect(data).toBe('');
        //     });
        // })
        // test('should return only food ideas',() => {
        //     return repo.findByCategoryIdeas('leisure').then(data =>{
        //         expect(data).toBe('');
        //     });
        // })
        const post = {
            country: 'España',
            city: 'Santa Cruz de Tenerife',
            zone: 'Plaza',
            tags:['','','']

        }
        test('should return only food ideas',() => {
            return repo.findByLocation(post.country,post.city,post.zone).then(data =>{
                expect(data).toBe('');
            });
        })
    });
});
