import App from 'bunrest'
import { UserController } from '../controller/_index'

const router = App().router();

router.get('/user', UserController.index);
router.get('/user/:id', UserController.show);

export default router;