import { cleanup, render, screen } from '@testing-library/react';
import { NotificationComponent } from '../../Components/notifications/NotificationComponent';
import { NotificationsList } from '../../Components/notifications/NotificationsList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGhost} from '@fortawesome/free-solid-svg-icons'
import { Notification } from '../../Components/notifications/Notification';
import shallow from 'enzyme/build/shallow';

function getIcon(){
    return(<FontAwesomeIcon color="#7D8491" icon={faGhost}/>);
}

describe("Notificaciones", () => {
    afterEach(cleanup);

    it('deberia renderizar el componente', () => {
        render(<NotificationComponent/>);
    });

    it('deberia renderizar notificationList', () => {
        let date = "May 15, 2021 ";
        var notif = {
            description: "Soy una Notificacion de mensaje",
            type: "message",
            date: date
        }
        var notif2 = {
            description: "Soy una Notificacion de devolución",
            type: "return",
            date: date 
        }
        var notif3 = {
            description: "Soy una Notificacion de cancelación",
            type: "cancel",
            date: date 
        }
        var notif4 = {
            description: "Soy una Notificacion de renta",
            type: "rent",
            date: date
        }
        var notif5 = {
            description: "Soy una Notificacion con tipo desconocido",
            type: "",
            date: date 
        }
        shallow(<NotificationsList notificationList={[notif,notif2,notif3,notif4,notif5]}/>);
    });

    it('deberia renderizar una notificacion', () => {
        shallow(<Notification key={0} description= {"description"} icon= {getIcon()} dueDate= {"May 15, 2021 11:13:00"} link= {"www.google.com"}/>
        );
    });

});