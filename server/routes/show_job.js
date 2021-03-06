// in folder client/public/js_files

import {useSelector} from 'react-redux';
import axios from 'axios';
import { USER_SERVER } from '../../src/components/Config';
const userdata=useSelector(state=>state.user);
const data=userdata.userData;



function show_job(job_id){
    const data_to_send={user:{_id:data._id,token:data.token},job_id:job_id};
    const result=axios.get("api/@me/show_job",data_to_send); // data_to_send={user_id:_id,token:token_string}
    // use result in show page parsing...
}