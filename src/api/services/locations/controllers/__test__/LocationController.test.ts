import { LocationsController } from '../LocationsController';
import { LocationsMongoRepository as LocationRepository } from '../../repositories/LocationsRepository'

describe('LocationController', () => {
    const controller = new LocationsController(new LocationRepository );
    describe('initDatabase', () => {
        test('Check Connection to Database', () => {
            const mockRequest: any = {
                get: jest.fn((name) => {
                    return 'hola'
                })
            }
            return controller.handlePlacesRequest(mockRequest)
            .then(data => {
                expect(data).toBe(1);
            });
        });
    });
});
