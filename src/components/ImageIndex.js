import foxImageUnselected from '../assets/avatar_fox_unselected.png';
import foxImageSelected from '../assets/avatar_fox_selected.png';
import pandaImageUnselected from '../assets/avatar_panda_unselected.png';
import pandaImageSelected from '../assets/avatar_panda_selected.png';
import tigerImageUnselected from '../assets/avatar_tiger_unselected.png';
import tigerImageSelected from '../assets/avatar_tiger_selected.png';
import walrusImageUnselected from '../assets/avatar_walrus_unselected.png';
import walrusImageSelected from '../assets/avatar_walrus_selected.png';
import elephantImageUnselected from '../assets/avatar_elephant_unselected.png';
import elephantImageSelected from '../assets/avatar_elephant_selected.png';
import penguinImageUnselected from '../assets/avatar_penguin_unselected.png';
import penguinImageSelected from '../assets/avatar_penguin_selected.png';
import giraffeImageUnselected from '../assets/avatar_giraffe_unselected.png';
import giraffeImageSelected from '../assets/avatar_giraffe_selected.png';
import sheepImageUnselected from '../assets/avatar_sheep_unselected.png';
import sheepImageSelected from '../assets/avatar_sheep_selected.png';
import bearImageUnselected from '../assets/avatar_bear_unselected.png';
import bearImageSelected from '../assets/avatar_bear_selected.png';



const avatarSelectedMap = {
    fox: foxImageSelected, panda: pandaImageSelected, giraffe: giraffeImageSelected, tiger: tigerImageSelected, walrus: walrusImageSelected,
    elephant: elephantImageSelected, penguin: penguinImageSelected, sheep: sheepImageSelected, bear: bearImageSelected
};
const avatarUnSelectedMap = {
    fox: foxImageUnselected, panda: pandaImageUnselected, giraffe: giraffeImageUnselected, tiger: tigerImageUnselected, walrus: walrusImageUnselected,
    elephant: elephantImageUnselected, penguin: penguinImageUnselected, sheep: sheepImageUnselected, bear: bearImageUnselected
};

var getAllAvatars = function () {
    return ["fox", 'panda', "tiger", "walrus", 'elephant', 'penguin', "giraffe", 'sheep', 'bear']
}


var getImage = function (avatar, bool) {
    if (bool) {
        return avatarSelectedMap[avatar];
    } else {
        return avatarUnSelectedMap[avatar];
    }
}

var imageIndex = {
    getImage: getImage,
    getAllAvatars: getAllAvatars
}

export var imageIndex;
