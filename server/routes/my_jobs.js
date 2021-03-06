// in folder client/public/js_files

import {useSelector} from 'react-redux';
import axios from 'axios';
import { USER_SERVER } from '../../src/components/Config';
const userdata=useSelector(state=>state.user);
const data=userdata.userData;
const data_to_send={user:{_id:data._id,token:data.token}};
const result=axios.get("api/@me/my_jobs",data_to_send); // data_to_send={user_id:_id,token:token_string}

function parse(x){
    innerHTML=document.getElementById('raw').innerHTML;
    new_element=document.createElement('div');
    new_element.innerHTML=innerHTML;
    new_element.getElementById('description')=x.description;
    new_element.getElementById('physical_requirements')="physical requirements"+x.phy_req;
    new_element.getElementById('last_date')="Last date"+x.last_date;
    return new_element;
}

for(x in result){
    new_div=document.createElement('div.jobs.'+x._id);
    innerHTML=parse(x);
    new_div.innerHTML=innerHTML;
    document.getElementById('container').appendChild(new_div);
}


