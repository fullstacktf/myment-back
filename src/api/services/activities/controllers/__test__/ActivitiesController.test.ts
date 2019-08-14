import { ActivitiesController } from '../ActivitiesController';
import { ActivitiesMongoRepository as ActivitiesRepository } from "../../repositories/ActivitiesRepository";

describe('ActivitiesController', () => {
    const controller = new ActivitiesController(new ActivitiesRepository());

    describe('Parse Data to Json', () => {
        // test('Check Connection to Database', () => {
        // const mockRequest: any = {
        //     get: jest.fn((name) => {
        //         return 'hola'
        //     })
        // }
        // return controller.handleRequest()
        // .then(data => {
        //     expect(data).toBe(1);
        // });
        //});
        test('Check Find Request',()=>{
            const mockRequest: any = {
                    post: jest.fn((name) => {
                        return {
                            country : 'España',
                            city: 'Santa Cruz de Tenerife',
                            zone: 'Plaza',
                            tags: ['Rico']
                        }
                    })
            }
            const data = controller.handleFindRequests(mockRequest)
            expect(data).toBe('')
        })
    });
});
