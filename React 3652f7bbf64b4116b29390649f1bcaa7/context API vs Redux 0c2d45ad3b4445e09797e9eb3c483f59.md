# context API vs Redux

3~4개 이상 컴포넌트를 거쳐서 전달해야할 때, 심지어 중간컴포넌트에서는 사용조차 하지않을 때 일일이 전달해주면 아주 번거로움.

## 유사점 :

1. 전역 상태를 관리한다.

## context API

<Provider /> 와 <Consumer />를 통해 Context를 사용할 수 있도록 설계.
<Provider /> 아래 있는 계층 어디서든 <Consumer />를 통해 접근.

넘겨줄 상태가 여러개라면 Provider를 중첩해서 사용해야되는 번거로움.

## Redux

Flux 아키텍처를 위한 가장 훌륭한 상태 관리 구현체

React 전용이 아니라 React에서 가져다 쓰는 거일 뿐.

단순 전역 상태 관리에는 복잡하고 어려운 면이 있음

## 정리

- **단순 전역 상태 관리만 있어도 된다면 간단한 Context API**
- **디버깅, 로깅, 스토리지 등 다양한 기능과 미들웨어가 필요하다면 Redux**

![context%20API%20vs%20Redux%200c2d45ad3b4445e09797e9eb3c483f59/Untitled.png](context%20API%20vs%20Redux%200c2d45ad3b4445e09797e9eb3c483f59/Untitled.png)