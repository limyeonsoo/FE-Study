# mock 정리

# Background

한 함수에서 Spy를 사용하여 내부에 로직이 실행되는지를 확인해야 했다.

it() 가 2개 있었는데, 2번째 case에서는 함수가 실행이 되지 않아야 했는데 계속 실행이 되는 상황.

우연히, it() 2개의 순서를 바꿔보았더니 test가 성공.

# Mock

Mock은 Test Double 테스트 대역이라고 불리며, 구현 코드의 역할을 대신 해주는 가상의 객체라고 할 수 있다.

# Mock 정리가 필요한 경우

어떤 구현된 함수의 대역을 만들 때, 기존의 구현된 함수가 바뀔 수 있다.

```jsx
it('console log test', () => {
  const consoleLogBefore = console.log;

  jest.spyOn(console, 'log');
	// spy때문에 console.log는 바뀐다.
  const consoleLogAfter = console.log;

  expect(consoleLogAfter).not.toBe(consoleLogBefore);
})
```

## 정리 방법

1. Mock or Jest의 메소드로 정리하기
    
    [The Jest Object · Jest](https://jestjs.io/docs/jest-object)
    
    [Mock Functions · Jest](https://jestjs.io/docs/mock-function-api)
    
    ```jsx
    mockFn.mockClear
    mockFn.mockReset
    mockFn.mockRestore
    
    // mockRestore > mockReset > mockClear
    
    jest.clearMocks    // 모든 mock 함수에서 mockFn.clearAllMocks를 호출.
    jest.resetMocks    // 모든 mock 함수에서 mockFn.resetAllMocks를 호출.
    jest.restoreMocks  // 모든 mock 함수에서 mockFn.restoreAllMocks를 호출.
    
    // => beforeEach, afterEach와 함께 사용하면 좋다.
    ```
    
    mockFn.mockClear로 calls & instances 초기화 하기
    
    mockFn.mock.calls = mock 함수가 함수로 호출됐을 때 매개변수 목록.
    
    mockFn.mock.instances = mock 함수가 생성자로 호출됐을 때 생성했던 인스턴스 목록.
    
2. jest.config.js 설정값 변경하기
    
    각 테스트 케이스를 실행하기 전에 호출할 것을 설정.
    
    ```jsx
    module.exports = {
    	// clearMocks: true,
    	// resetMocks: true,
    	restoreMocks: true,
    }
    ```