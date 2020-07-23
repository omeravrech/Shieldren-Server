import User from '../entities';
import DataBaseHandler from '../service';


export namespace UserRepository {
    export function getUserByEmail(email: string) {
        return DataBaseHandler.getRepository(User).find({email});
    }
}