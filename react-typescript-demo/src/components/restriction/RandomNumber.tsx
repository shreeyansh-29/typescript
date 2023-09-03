type RandomNumberType = {
  value: number;
};

type PositiveNumberType = RandomNumberType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};

type NegativeNumberType = RandomNumberType & {
  isPositive?: never;
  isNegative: boolean;
  isZero?: never;
};

type ZeroNumberType = RandomNumberType & {
  isPositive?: never;
  isNegative?: never;
  isZero: boolean;
};

type RandomNumberProps =
  | PositiveNumberType
  | NegativeNumberType
  | ZeroNumberType;

const RandomNumber = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps) => {
  return (
    <div>
      {value}
      {isPositive && "positive"} {isNegative && "negative"} {isZero && "zero"}
    </div>
  );
};

export default RandomNumber;
