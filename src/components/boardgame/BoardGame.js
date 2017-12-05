import placeholderThumbnail from '../../assets/placeholderThumbnail.png';

class BoardGame {

    constructor(game) {
        this.id = game.id;
        this.name = game.name;
        this.yearpublished = game.yearpublished ? game.yearpublished : '';
        this.image = game.image ? game.image : 'http://via.placeholder.com/150x150';
        this.thumbnail = game.thumbnail ? game.thumbnail : placeholderThumbnail;
        this.description = game.description;
        this.minPlayers = game.minPlayers;
        this.maxPlayers = game.maxPlayers;
        this.minPlayTime = game.minPlaytime;
        this.maxPlayTime = game.maxPlaytime;
        this.minAge = game.minAge;
        this.rating = game.rating.toFixed(2);
        this.complexity = game.complexity.toFixed(2);
    }    
    
}

export default BoardGame;