import {Track} from './track';
import {ReInvent2018} from './re-invent2018';
import {ReInvent2019} from './re-invent2019';
import {JyllandsringenPro} from './JyllandsringenPro';

export class TrackFactory {

    public static findTrack(name: string): Track {
        switch (name.toLowerCase()) {
            case 'reinvent_base':
                return new ReInvent2018();
            case 'reinvent2019_track':
                return new ReInvent2019();
            case 'jyllandsringen_pro':
                return new JyllandsringenPro();
            default:
                return new ReInvent2018();
        }
    }

}
