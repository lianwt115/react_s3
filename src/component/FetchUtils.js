import fetch from 'node-fetch';
import FormData from 'form-data';
var baseUrl='http://localhost:9898/'

export default class FetchUtils{

    constructor(url){
        this.url = baseUrl+url
    }

    async  fetchGet(params) {
        const res = await fetch(this.url);
        const json = await res.json();
        console.log(json);
    };

    async  fetchPost(form) {
        const res = await fetch(this.url,{ method: 'POST', body: form });
        const json = await res.json();
        console.log(json);
        return json
    };

    async  fetchPostLogin(values) {

        const form = new FormData();
        form.append('username',values.userName)
        form.append('userpwd',values.password)

        return await this.fetchPost(form)

    };

}


