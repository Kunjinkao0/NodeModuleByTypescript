import * as express from 'express';
import {Request, Response, Router} from 'express';
import * as testController from './controllers/test'

class Application {
    public router: Router;

    constructor() {
        this.router = express.Router();
        this.configure();
    }

    private configure() {
        this.router.get('/', (req: Request, res, Response) => {
            res.send('Test message for calling success.');
        });
        this.router.get('/1', testController.testFunc1);
        this.router.get('/2', testController.testFunc2);
    }
}

export = new Application().router;