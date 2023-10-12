次のようなJavaScriptのオブジェクトがあったとします

```js
const test = {
  a: "hello",
  b: "world",
  c: 0
}
```

このオブジェクトの値、つまり`"hello"、 "world"、 0`を使って、次のようなリテラル型のユニオンを作りたいとします。

```ts
type TestValues = "hello" | "world" | 0
```

答えは次のとおりです。

```ts
const test = {
  a: "hello",
  b: "world",
  c: 0
} as const // <== !!!

type TestValues =  (typeof test)[keyof typeof test]
// type TestValues = 0 | "hello" | "world"
```

`as const`を忘れずに。

つけ忘れた場合、つぎのようにプリミティブ型のユニオンになります。

```ts
const test = {
  a: "hello",
  b: "world",
  c: 0
}

type TestValues =  (typeof test)[keyof typeof test]
// type TestValues = string | number
```

ちなみにオブジェクトの値ではなく、`キー`をもとに同様の型をつくりたい場合は次のとおりです。

```ts
const test = {
  a: "hello",
  b: "world",
  c: 0
}

type TestKeys =  keyof typeof test
// type TestKeys = "a" | "b" | "c"
```

```dockerfile
ARG VARIANT=3.12-bookworm
FROM mcr.microsoft.com/vscode/devcontainers/python:${VARIANT}
COPY requirements.txt /tmp/pip-tmp/
RUN python3 -m pip install --upgrade pip \
  && python3 -m pip install --no-cache-dir install -r /tmp/pip-tmp/requirements.txt \
  && pipx install pre-commit ruff \
  && pre-commit install

```

https://react.dev/reference/react/useEffect

https://x.com/sato_neet/status/1709752362485846523?s=20

https://twitter.com/_adamof_/status/1681922915841998848?s=20

[https://twitter.com/sato_neet/status/1709752362485846523?s=20](https://twitter.com/sato_neet/status/1709752362485846523?s=20)

[Confusing about how to update pnpm itself](https://github.com/orgs//discussions/4383)

[https://codesandbox.io/s/css-variables-vs-themeprovider-df90h](https://codesandbox.io/s/css-variables-vs-themeprovider-df90h)
