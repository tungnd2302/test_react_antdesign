import './App.css';
import 'antd/dist/antd.css';
import { TimePicker } from 'antd';
import moment from 'moment';

function App() {
    return (
        <>
            <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="large" />
            <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} />
            <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="small" />
        </>
    );
}

export default App;
