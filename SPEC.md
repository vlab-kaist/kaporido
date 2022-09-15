# 클라이언트 요구 사항

클라이언트는 도커 컨테이너 형태로 제공되어야 하며, 8080 포트로 Listen 하는 서버가 존재해야 한다.

통신은 표준 http 통신으로 이루어지며, json 형식으로 데이터를 전송한다.

## 구현해야 하는 엔드포인트

클라이언트는 다음과 같은 엔드포인트를 의무적으로 구현해야 한다.

해당 엔드포인트의 호출 실패 시, 경우에 따라 해당 턴(차례)의 무효화 혹은 상대 턴의 승리 처리가 이뤄진다.

### POST /register

클라이언트를 등록한다.

#### 요청

클라이언트를 식별하기 위한 무작위한 문자열(토큰)이 token 필드로 주어진다.

해당 토큰은 이후 서술될 서버 API를 호출할 때 필수적으로 사용되기 때문에, 이 토큰을 저장해 두어야 한다.

토큰은 아스키 코드로 표현될 수 있는 문자로만 구성되어 있으며, 100자 이내라는 것이 보증된다.

##### 예시

```{"token": "helloworld"}```

#### 응답

```{"team":"KAIST"}``` 또는 ```{"team":"POSTECH"}``` 를 반환해야 한다.

### POST /next

자신의 턴일때 호출되는 엔드포인트이다.

#### 요청

요청 데이터에는 현재 게임판의 상태, 제한 시간이 주어진다.

게임 규칙에 따라 일부 상태는 전송되지 않을 수도 (가려질 수도) 있음을 유의해라.

#### 응답

응답 데이터는 취할 액션의 종류와 액션에 대한 자세한 데이터가 포함되어야 한다.

액션은 type 필드에 담기며, ```block```와 ```move```중 하나여야 한다.

##### block

##### move

```TBD```

#### 주의사항

해당 엔드포인트의 응답이 정해진 시간 내에 반환되지 않는다면, 해당 턴에 취한 액션은 무효화 처리된다.

서버 측에서의 지연 시간에 의해 시간 초과 처리가 발생할 가능성이 있으므로, 정해진 응답 시간에서 100ms의 여유 시간을 두고 응답하는 것을 권장한다.

해당 움직임이 성공했는지 반환하지 않음에 유의해라. 움직임이 성공했는지는 다음번 엔드포인트 호출 또는 서버 측 API의 이용으로 알아낼 수 있다.

## 사용할 수 있는 엔드포인드(서버 API)

클라이언트는 localhost:80의 엔드포인트를 호출함으로써 게임에 대한 정보를 얻어낼 수 있다.

각 요청은 1ms내로 처리됨이 보장된다. 만일 1ms보다 긴 처리시간이 걸린다면, 해당 시간이 제한 시간에 추가되기 때문에 실질적인 처리시간은 1ms로 고정된다.

클라이언트는 서버 API를 각 API에 제한 사항을 지키는 하에서 무제한으로 호출할 수 있으나, 1초에 1000번 이상 호출할 수 없다.

요청이 캐시될 수 있음에 주의하라. 쿼리 스트링은 무시되기 때문에 쿼리 스트링에 무작위한 문자열을 붙혀 요청하는 것은 이 문제를 해결하기 위한 좋은 방법이다.

### POST /success

마지막으로 취한 액션이 성공했는지 반환한다.

#### 주의사항

마지막으로 취한 액션이 없으면, 실패한 액션이라고 가정된다.

/next 엔드포인트의 요청을 반환하기 전 또는 반환한 직후에 해당 엔드포인트를 호출하는 것은 예기치 않은 결과를 초래할 수 있다. 최소한 1ms의 여유 시간을 두고 호출하는 것을 권장한다.
