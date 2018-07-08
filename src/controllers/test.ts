import {Request, Response} from 'express';

export let testFunc1 = (req: Request, res: Response) => {
    res.send('testFunc1');
};

export let testFunc2 = (req: Request, res: Response) => {
    res.send('testFunc2');
}