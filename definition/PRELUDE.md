# 暗黙的に定義されているもの一覧

## 関数

```kotlin
// エラー系
fun error(message: string) {
    // この言語に throw は無いので以下は疑似コード
    throw Exception(message)
}

// 数学系 (ランダム系は冪等性を壊すので use でインポートする)
// Math などという struct は存在しないので、以下は疑似コード
struct math {
    pi: float = 3.141592653589793  // 実行環境依存
    fun max(a: float, b: float): float {
        return if (a > b) a else b
    }
    fun min(a: float, b: float): float {
        return if (a < b) a else b
    }
    fun abs(value: float): float {
        return if (value < 0) -value else value
    }
    fun pow(base: float, exponent: float): float {
        return base ** exponent
    }
    fun sqrt(value: float): float {
        if (value < 0) error("Cannot compute square root of negative number")
        return value ** 0.5
    }
    fun round(value: float): int {
        return if (value >= 0) (value + 0.5).toInt() else (value - 0.5).toInt()
    }
    fun floor(value: float): int {
        return if (value >= 0) value.toInt() else value.toInt() - 1
    }
    fun ceil(value: float): int {
        return if (value >= 0) value.toInt() + 1 else value.toInt()
    }
    fun deg(radians: float): float {
        return radians * (180.0 / 3.141592653589793)
    }
    fun rad(degrees: float): float {
        return degrees * (3.141592653589793 / 180.0)
    }
    fun sin(angle: float): float {
        return Math.sin(angle)
    }
    fun cos(angle: float): float {
        return Math.cos(angle)
    }
    fun tan(angle: float): float {
        return Math.tan(angle)
    }
    fun asin(value: float): float {
        return Math.asin(value)
    }
    fun acos(value: float): float {
        return Math.acos(value)
    }
    fun atan(value: float): float {
        return Math.atan(value)
    }
    fun atan2(y: float, x: float): float {
        return Math.atan2(y, x)
    }
    fun sinh(value: float): float {
        return (Math.exp(value) - Math.exp(-value)) / 2
    }
    fun cosh(value: float): float {
        return (Math.exp(value) + Math.exp(-value)) / 2
    }
    fun tanh(value: float): float {
        return sinh(value) / cosh(value)
    }
    fun exp(value: float): float {
        return Math.exp(value)
    }
    fun log(value: float): float {
        if (value <= 0) error("Cannot compute logarithm of non-positive number")
        return Math.log(value)
    }
    fun log10(value: float): float {
        if (value <= 0) error("Cannot compute logarithm base 10 of non-positive number")
        return Math.log10(value)
    }
    fun ldexp(value: float, exponent: int): float {
        return value * (2 ** exponent)
    }
    fun frexp(value: float): Pair<float, int> {
        if (value == 0.0) return Pair(0.0, 0)
        val exponent = Math.floor(Math.log(Math.abs(value)) / Math.log(2.0)).toInt()
        val mantissa = value / (2 ** exponent)
        return Pair(mantissa, exponent)
    }
    fun modf(value: float): Pair<float, float> {
        val integerPart = if (value >= 0) Math.floor(value) else Math.ceil(value)
        val fractionalPart = value - integerPart
        return Pair(fractionalPart, integerPart)
    }
    fun fmod(x: float, y: float): float {
        if (y == 0) error("Division by zero")
        return x - y * Math.floor(x / y)
    }
}
// 型関連
fun int(value: any): int {
    // キャスト
}
fun float(value: any): float {
    // キャスト
}
fun string(value: any): string {
    // キャスト
}
fun bool(value: any): bool {
    // キャスト
}
```

## Range

- `1..10`, `1..=10` は `RangeExpression` として解釈され、実行時には IntRange や FloatRange として扱われる。
  - したがって以下の通り暗黙的に定義される infix 関数も利用できる。(e.g. `1..10 step 2`)

```kotlin
struct IntRange {
    from: int
    to: int
    step = 1
}

infix fun IntRange.step(step: int): IntRange {
    val {from, to} = this
    return IntRange {
        this.from = from
        this.to = to
        this.step = if (step == 0) error('step must not be zero') else if ((step < 0 && from < to) || (step > 0 && from > to)) -step else step
    }
}

infix fun int.until(to: int) IntRange {
    if (to == this) error('to must not be equal to from')
    if (to < this) error('to must be greater than from')
    return IntRange {
        from = this
        this.to = to - 1
        step = 1
    }
}

infix fun int.downTo(to: int) IntRange {
    if (to == this) error('to must not be equal to from')
    if (to > this) error('to must be less than from')
    return IntRange {
        from = this
        this.to = to
        step = -1
    }
}

struct FloatRange {
    from: float
    to: float
    step = 1.0
}

infix fun FloatRange.step(step: float): FloatRange {
    val {from, to} = this
    return FloatRange {
        this.from = from
        this.to = to
        this.step = if (step == 0) error('step must not be zero') else if ((step < 0 && from < to) || (step > 0 && from > to)) -step else step
    }
}

infix fun float.until(to: float) FloatRange {
    if (to == this) error('to must not be equal to from')
    if (to < this) error('to must be greater than from')
    return FloatRange {
        from = this
        this.to = to - 1
        step = 1
    }
}

infix fun float.downTo(to: float) FloatRange {
    if (to == this) error('to must not be equal to from')
    if (to > this) error('to must be less than from')
    return FloatRange {
        from = this
        this.to = to
        step = -1
    }
}
```

## 標準ライブラリ

`use` 文でインポートする必要のある標準ライブラリは以下の通り。

```kotlin
fun getEnv(key: string): string? {
    // 環境変数を取得する疑似コード
    return process.env[key] ?: null
}
fun random(): float {
    // 0.0 から 1.0 の間のランダムな浮動小数点数を返す疑似コード
    return Math.random()
}
fun print(message: struct) {
    // 標準出力にメッセージを出力する疑似コード
    console.log(message.toString())
}
```
