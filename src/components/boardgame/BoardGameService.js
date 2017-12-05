import axios from 'axios';
import {APIServer} from '../../config/config';
import BoardGame from './BoardGame';

class BoardGameService {
    static async getBoardGameByID(id) {
        const resp = await axios.post(`${APIServer}/bggapi/fetchsingle`, {'id': id});

        return new BoardGame(resp.data);
    };
}

export default BoardGameService;