type Conditional<Type, Condition, TruthyResult, FalsyResult> =
  Type extends Condition ? TruthyResult : FalsyResult

type Result1 = Conditional<'typescript', string, 'passed!', 'rejected!'>
type Result2 = Conditional<'typescript', boolean, 'passed!', 'rejected!'>

type ProcessInput<
  Input,
  SecondInput extends Input = Input,
  ThirdInput extends Input = SecondInput
> = number

export {}
