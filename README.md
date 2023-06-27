# k6-load-test
k6로 부하 테스트를 수행해보자

1. add `env.js`
``` JavaScript
export const url = "http://YOUR_API_URL"
export const jwt = "${YOUR_JWT_TOKEN}"

```
2. move to `k6-load-test` directory
3. exec command below
- you can edit params
    - --iterations=${반복횟수}
    - --vus=${고정유저수}

``` Shell
k6 run --iterations=150 --vus=10 --summary-trend-stats="med,p(95),p(99.9)" script.js
```

## 결과
### Terminal
![image](https://github.com/ohksj77/k6-load-test/assets/89020004/7a8d38f1-a4af-4dfe-ba00-e157ca034ab6)

### Grafana (Prometheus)
![image](https://github.com/ohksj77/k6-load-test/assets/89020004/a5af9d9f-689c-447e-97df-da50f237bda8)
