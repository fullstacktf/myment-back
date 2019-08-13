import { TagsController } from '../TagsController';
import { TagsMongoRepository as TagsRepository } from '../../repositories/TagsRepository'

describe('LocationController', () => {
    const controller = new TagsController(new TagsRepository );
    describe('initDatabase', () => {
        test('Check Connection to Database', () => {
            const mockRequest: any = {
                get: jest.fn((name) => {
                    return 'hola'
                })
            }
            return controller.handleRequest(mockRequest)
            .then(data => {
                expect(data).toBe(1);
            });
        });
    });
});
