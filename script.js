import http from 'k6/http'
import { sleep } from 'k6'
import { url, jwt } from './env.js'


export default function() {
    const params = {
        headers: {
            'Content-Type': 'application/json', 
            'Authorization': `Bearer ${jwt}` 
        }
    }

    const payload = JSON.stringify({
        first_repo: 'tukcom2023CD/DragonGuard-JinJin',
        second_repo: 'C-B-U/owl-forest',
      });

    http.post(`${url}/git-repos/compare/git-repos-members/update`, payload, params)
    sleep(1)
}
